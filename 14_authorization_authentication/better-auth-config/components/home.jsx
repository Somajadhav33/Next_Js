"use client";

import React from "react";
import { authClient } from "@/lib/auth-client";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "./ui/card";
import { LogOut, User, Mail, ShieldCheck } from "lucide-react";
import Image from "next/image";

const HomeComponent = () => {
  const { data: session, isPending } = authClient.useSession();
  const router = useRouter();

  if (isPending) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="flex flex-col items-center gap-2">
          <div className="w-8 h-8 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin" />
          <p className="text-sm font-medium text-muted-foreground">
            Loading session...
          </p>
        </div>
      </div>
    );
  }

  if (!session) {
    return null;
  }

  const handleSignOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => router.push("/login"),
      },
    });
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950 p-4 md:p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
            <p className="text-muted-foreground">
              Manage your account and authentication state.
            </p>
          </div>
          <Button
            variant="destructive"
            onClick={handleSignOut}
            className="cursor-pointer w-fit shadow-lg shadow-red-500/20"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Sign Out
          </Button>
        </div>

        {/* Profile Card */}
        <Card className="border-none bg-white/50 dark:bg-slate-900/50 backdrop-blur-md shadow-xl overflow-hidden">
          <div className="h-32 bg-linear-to-r from-indigo-500 to-purple-600" />
          <CardContent className="relative pt-16 pb-8">
            <div className="absolute -top-12 left-8 p-1 bg-white dark:bg-slate-900 rounded-2xl shadow-xl">
              <div className="w-24 h-24 bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center overflow-hidden">
                {session.user.image ? (
                  <img
                    src={session.user.image}
                    alt={session.user.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <User className="w-12 h-12 text-slate-400" />
                )}
              </div>
            </div>

            <div className="px-4 space-y-6">
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-2xl font-bold">{session.user.name}</h2>
                  <span className="flex items-center gap-1 px-2 py-0.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-bold rounded-full border border-green-200 dark:border-green-800">
                    <ShieldCheck className="w-3 h-3" />
                    Verified
                  </span>
                </div>
                <div className="flex items-center text-muted-foreground mt-1">
                  <Mail className="w-4 h-4 mr-2" />
                  {session.user.email}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-xl bg-slate-100/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
                  <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">
                    Session Provider
                  </p>
                  <p className="font-medium">Social OAuth</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-100/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
                  <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">
                    Account Status
                  </p>
                  <p className="font-medium text-green-600 dark:text-green-400">
                    Active
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer Info */}
        <div className="text-center pt-8">
          <p className="text-sm text-muted-foreground">
            This is a secure demonstration of <strong>Better Auth</strong>.
            <br />
            No real data is stored beyond your OAuth session.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
