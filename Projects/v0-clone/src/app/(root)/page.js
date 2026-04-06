import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <Button>Test</Button>
      <UserButton />
    </div>
  );
}
