import type { Metadata } from "next";
import Link from "next/link";
import { ROUTES } from "@/constants";
import LoginForm from "../_components/LoginForm";

export const metadata: Metadata = {
  title: "Log in",
};

const LoginPage = () => {
  /**COMPONENT */
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-semibold">Log in</h1>
        <p className="mt-1 text-sm text-muted-foreground">Demo account: demo@example.com / password</p>
      </div>
      <LoginForm />
      <p className="text-sm text-muted-foreground">
        No account?{" "}
        <Link href={ROUTES.signup} className="font-medium text-foreground underline">
          Sign up
        </Link>
      </p>
    </div>
  );
};

export default LoginPage;
