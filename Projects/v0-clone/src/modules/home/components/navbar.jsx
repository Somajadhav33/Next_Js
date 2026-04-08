"use client";

import Link from "next/link";
import Image from "next/image";
import { useUser, useClerk } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const { isSignedIn, user } = useUser();
  const { signOut } = useClerk();
  const router = useRouter();

  return (
    <nav
      className={cn(
        "p-4 bg-transparent fixed top-0 left-0 right-0 z-50 transition-all duration-200 border-b border-transparent",
      )}
    >
      <div className="max-w-5xl mx-auto w-full flex justify-between items-center">
        <Link href={"/"} className="flex items-center gap-2">
          <Image
            src={"/logo.svg"}
            alt="Vibe"
            width={32}
            height={54}
            className="shrink-0 invert dark:invert-0"
          />
        </Link>

        {!isSignedIn ? (
          <div className="flex gap-2">
            <Button
              variant={"outline"}
              size={"sm"}
              onClick={() => router.push("/sign-up")}
            >
              Sign Up
            </Button>
            <Button size={"sm"} onClick={() => router.push("/sign-in")}>
              Sign In
            </Button>
          </div>
        ) : (
          <div className="flex items-center gap-3">
            {user?.imageUrl && (
              <Image
                src={user.imageUrl}
                alt={user.firstName || "User"}
                width={32}
                height={32}
                className="rounded-full"
                loading="eager"
              />
            )}
            <Button
              variant={"outline"}
              size={"sm"}
              onClick={() => signOut(() => router.push("/"))}
            >
              Sign Out
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};
