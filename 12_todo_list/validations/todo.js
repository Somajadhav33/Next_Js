import { z } from "zod";

export const createTodoSchema = z.object({
  tital: z
    .string()
    .min(1, "Title is required")
    .max(100, "title must be less than hundred characters")
    .trim(),
  description: z.string().max(500, "Description must be < 500").optional(),
  priority: z.enum(["low", "medium", "high"]).default("medium"),
});
