import { SignOutButton, SignInButton, UserButton, Show } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";

export default async function Home() {
  const user = await currentUser();

  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
          <div className="flex items-center gap-2">
            <div className="size-7 rounded bg-blue-600 flex items-center justify-center">
              <span className="text-sm font-bold text-white">C</span>
            </div>
            <span className="text-base font-medium tracking-tight">Clerk Auth</span>
          </div>
          
          <nav className="flex items-center gap-6">
            <Show when="signed-in">
              <div className="flex items-center gap-4">
                <span className="hidden text-sm text-gray-500 sm:block">
                  {user?.firstName || user?.username}
                </span>
                <UserButton />
              </div>
            </Show>
            <Show when="signed-out">
              <div className="flex items-center gap-4">
                <SignInButton mode="modal">
                  <button className="text-sm font-medium text-gray-600 hover:text-black transition-colors">
                    Sign in
                  </button>
                </SignInButton>
                <Link
                  href="/sign-up"
                  className="rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 transition-all"
                >
                  Join Now
                </Link>
              </div>
            </Show>
          </nav>
        </div>
      </header>

      {/* Hero Content */}
      <div className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
        <Show when="signed-in">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Hello, {user?.firstName || "there"}.
            </h1>
            <p className="mt-6 text-lg text-gray-500 leading-relaxed">
              Your authentication is active and secured by Clerk. You can manage your profile, security settings, and connected accounts directly through the interface below.
            </p>
            
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-lg border border-gray-100 p-6 hover:border-gray-200 transition-colors">
                <h3 className="font-medium text-gray-900">Security</h3>
                <p className="mt-1 text-sm text-gray-500">Manage your password and MFA settings.</p>
              </div>
              <div className="rounded-lg border border-gray-100 p-6 hover:border-gray-200 transition-colors">
                <h3 className="font-medium text-gray-900">Profile</h3>
                <p className="mt-1 text-sm text-gray-500">Update your name, email and avatar.</p>
              </div>
            </div>

            <div className="mt-10">
              <SignOutButton>
                <button className="rounded-md border border-gray-200 px-6 py-2 text-sm font-medium hover:bg-gray-50 transition-colors">
                  Sign out
                </button>
              </SignOutButton>
            </div>
          </div>
        </Show>

        <Show when="signed-out">
          <div className="text-center">
            <p className="text-sm font-medium text-blue-600 mb-4">Secure Authentication</p>
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-7xl">
              Simple. Secure. Built with <span className="text-blue-600">Clerk</span>.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-500 leading-relaxed">
              A minimalist demonstration of modern authentication patterns using Clerk and Next.js 15. Clean, fast, and enterprise-ready.
            </p>
            
            <div className="mt-10 flex items-center justify-center gap-4">
              <Link
                href="/sign-up"
                className="rounded-md bg-black px-8 py-3 text-base font-medium text-white hover:bg-gray-800 transition-all"
              >
                Get Started
              </Link>
              <SignInButton mode="modal">
                <button className="rounded-md border border-gray-200 px-8 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 transition-all">
                  Sign In
                </button>
              </SignInButton>
            </div>
          </div>
        </Show>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-12">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div>
              <h4 className="text-sm font-semibold text-gray-900">Architecture</h4>
              <p className="mt-2 text-sm text-gray-500">Built on Next.js 15 App Router with Server Components.</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-900">Authentication</h4>
              <p className="mt-2 text-sm text-gray-500">Leveraging Clerk for secure, frictionless user sessions.</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-900">Interface</h4>
              <p className="mt-2 text-sm text-gray-500">Minimalist UI designed for clarity and performance.</p>
            </div>
          </div>
          <div className="mt-12 text-xs text-gray-400 font-medium uppercase tracking-widest">
            Clerk Auth Demonstration · 2024
          </div>
        </div>
      </footer>
    </main>
  );
}
