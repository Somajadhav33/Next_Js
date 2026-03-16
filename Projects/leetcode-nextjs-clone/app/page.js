import { onBoardUser } from "@/modules/auth/action";
import { SignOutButton, SignInButton, UserButton, Show } from "@clerk/nextjs";

export default async function Home() {
  await onBoardUser();
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <UserButton />
    </div>
  );
}
