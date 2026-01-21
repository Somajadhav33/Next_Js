import { Button } from "@/components/ui/button";
import connectDb from "@/lib/db";

export default async function Home() {
  await connectDb();
  return (
    <div>
      <Button>Add</Button>
    </div>
  );
}
