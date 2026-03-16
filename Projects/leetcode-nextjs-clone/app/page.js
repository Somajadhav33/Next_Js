import { SignOutButton, SignInButton, UserButton, Show } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <UserButton />
    </div>
  );
}
