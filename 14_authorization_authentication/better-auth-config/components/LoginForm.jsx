"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Github, ShieldCheck } from "lucide-react";
import { authClient } from "@/lib/auth-client";

const LoginForm = () => {
  const handleGithubSignIn = async () => {
    await authClient.signIn.social({
      provider: "github",
      callbackURL: "/dashboard",
    });
  };

  const handleGoogleSignIn = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/dashboard",
    });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center p-4 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,var(--tw-gradient-stops))] from-blue-100 via-slate-50 to-indigo-100 dark:from-slate-900 dark:via-slate-950 dark:to-indigo-950 opacity-100" />
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl animate-pulse [animation-delay:1000ms]" />
      </div>

      <Card className="w-full max-w-md border-white/20 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl shadow-2xl transition-all hover:shadow-indigo-500/10 dark:hover:shadow-indigo-400/5">
        <CardHeader className="text-center space-y-2">
          <div className="mx-auto bg-indigo-600 w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-600/30 mb-2">
            <ShieldCheck className="w-7 h-7 text-white" />
          </div>
          <CardTitle className="text-3xl font-extrabold tracking-tight">
            Welcome Back
          </CardTitle>
          <CardDescription className="text-muted-foreground text-balanced">
            Securely access your account using your preferred provider
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 pt-2">
          <Button
            onClick={handleGoogleSignIn}
            variant="outline"
            className="cursor-pointer group w-full h-12 text-base font-medium transition-all hover:bg-white dark:hover:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-600 hover:-translate-y-px active:translate-y-0 shadow-sm"
          >
            <svg
              className="w-5 h-5 mr-3 transition-transform group-hover:scale-110"
              viewBox="0 0 24 24"
            >
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Continue with Google
          </Button>

          <Button
            onClick={handleGithubSignIn}
            variant="outline"
            className="cursor-pointer group w-full h-12 text-base font-medium transition-all hover:bg-slate-900 dark:hover:bg-slate-800 hover:text-white dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-600 hover:-translate-y-px active:translate-y-0 shadow-sm"
          >
            <Github className="w-5 h-5 mr-3 transition-transform group-hover:scale-110" />
            Continue with GitHub
          </Button>

          <div className="pt-4 flex items-center justify-center space-x-2 text-xs text-muted-foreground/60">
            <div className="h-px w-8 bg-border" />
            <span>Secure. Encrypted. Modern.</span>
            <div className="h-px w-8 bg-border" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginForm;
