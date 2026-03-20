import { db } from "@/lib/db";
import { UserRole } from "@/lib/generated/prisma/enums";
import {
  getJudge0LanguageId,
  pollBatchResults,
  submitBatch,
} from "@/lib/judge0";
import { curruntUserRole, getCurrentUser } from "@/modules/auth/actions";
import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const userRole = await curruntUserRole();
    const user = await getCurrentUser();

    if (userRole !== UserRole.ADMIN) {
      return NextResponse.json(
        {
          error: "Unauthorized",
        },
        { status: 401 },
      );
    }
    const body = await request.json();
    const {
      title,
      description,
      difficulty,
      tags,
      examples,
      constraints,
      testCases,
      codeSnippets,
      referenceSolutions,
    } = body;

    // Basic validation
    if (
      !title ||
      !description ||
      !difficulty ||
      !testCases ||
      !codeSnippets ||
      !referenceSolutions
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    // Validate test cases
    if (!Array.isArray(testCases) || testCases.length === 0) {
      return NextResponse.json(
        { error: "At least one test case is required" },
        { status: 400 },
      );
    }

    // Validate reference solutions
    if (!referenceSolutions || typeof referenceSolutions !== "object") {
      return NextResponse.json(
        {
          error:
            "Reference solutions must be provided for all supported languages",
        },
        { status: 400 },
      );
    }

    for (const [language, solutionCode] of Object.entries(referenceSolutions)) {
      //Judge000
      const languageId = getJudge0LanguageId();
      if (!languageId) {
        return ({ error: "Unsupported language" }, { status: 404 });
      }

      const submissions = testCases.map(({ input, output }) => ({
        source_code: solutionCode,
        language_id: languageId,
        stdin: input,
        expected_output: output,
      }));

      const submissionResults = await submitBatch(submissions);
      const tokens = submissionResults.map((res) => res.token);
      const results = await pollBatchResults(tokens);

      for (let i = 0; i < results.length; i++) {
        const result = results[i];
        console.log(`Test case ${i + 1} details:`, {
          input: submissions[i].stdin,
          expectedOutput: submissions[i].expected_output,
          actualOutput: result.stdout,
          status: result.status,
          language: language,
          error: result.stderr || result.compile_output,
        });
        if (result.status.id !== 3) {
          return NextResponse.json(
            {
              error: `Validation failed for ${language}`,
              testCase: {
                input: submissions[i].stdin,
                expectedOutput: submissions[i].expected_output,
                actualOutput: result.stdout,
                error: result.stderr || result.compile_output,
              },
              details: result,
            },
            { status: 400 },
          );
        }
      }
    }

    const newProblem = await db.problem.create({
      data: {
        title,
        description,
        difficulty,
        tags,
        examples,
        constraints,
        testCases,
        codeSnippets,
        referenceSolutions,
        userId: user.id,
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Problem Created Successfully!!",
        data: newProblem,
      },
      { status: 201 },
    );
  } catch (dbError) {
    console.error("Database error:", dbError);
    return NextResponse.json(
      { error: "Failed to save problem to database" },
      { status: 500 },
    );
  }
}
