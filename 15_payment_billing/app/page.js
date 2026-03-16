import { requireAuth } from "@/lib/auth-utils";
import LogoutButton from "@/modules/auth/components/logout-button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import StripeComponent from "@/modules/stripe/components/stripe-component";
import { getCurrentDbUser } from "@/modules/auth/actions";
import { SuccessToast } from "@/modules/stripe/components/success-toast";
import { authClient } from "@/lib/auth-client";
import PolarComponent from "@/modules/polar/components/polar-component";
import { polarClient } from "@/modules/polar/config/polar";
import RazorpayComponent from "@/modules/razorpay/component/razorpay-component";
import { getCurrentRazorpayStatus } from "@/modules/razorpay/action";

export default async function Home({ searchParams }) {
  const { success, canceled } = await searchParams;
  await requireAuth();
  const user = await getCurrentDbUser();

  const customer = await polarClient.customers.getStateExternal({
    externalId: user.id,
  });

  const hasActivePolarSubscription =
    customer?.activeSubscriptions && customer.activeSubscriptions.length > 0;

  console.log({ hasActivePolarSubscription, customer });

  const razorpayPlan = await getCurrentRazorpayStatus();

  console.log({ razorpayPlan });

  return (
    <main className="flex flex-col items-center justify-center px-4 py-12">
      <SuccessToast
        success={success === "true"}
        canceled={canceled === "true"}
      />

      <Tabs defaultValue="stripe" className="w-full max-w-2xl mx-auto">
        <TabsList className="grid w-full grid-cols-3 bg-gray-100 p-1 rounded-lg">
          <TabsTrigger value="stripe" className="data-[state=active]:bg-white data-[state=active]:text-black rounded-md transition-all">Stripe</TabsTrigger>
          <TabsTrigger value="polar" className="data-[state=active]:bg-white data-[state=active]:text-black rounded-md transition-all">Polar</TabsTrigger>
          <TabsTrigger value="razorpay" className="data-[state=active]:bg-white data-[state=active]:text-black rounded-md transition-all">Razorpay</TabsTrigger>
        </TabsList>
        <TabsContent value="stripe">
          <StripeComponent plan={user?.plan} />
        </TabsContent>
        <TabsContent value="polar">
          <PolarComponent isPro={hasActivePolarSubscription} />
        </TabsContent>
        <TabsContent value="razorpay">
          <RazorpayComponent currentPlan={razorpayPlan} />
        </TabsContent>
      </Tabs>
      <div className="mt-8">
        <LogoutButton />
      </div>
    </main>
  );
}
