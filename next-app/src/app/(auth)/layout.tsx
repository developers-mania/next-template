import Link from "next/link";
import Card from "@/components/ui/Card";
import { ROUTES, SITE } from "@/constants";

/** Shared layout for ONLY login and signup: a simple centered card. */
const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-6 px-4 py-12">
      <Link href={ROUTES.home} className="text-lg font-semibold">
        {SITE.name}
      </Link>
      <Card className="w-full max-w-sm">{children}</Card>
    </main>
  );
};

export default AuthLayout;
