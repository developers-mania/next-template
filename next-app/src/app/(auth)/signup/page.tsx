import type { Metadata } from "next";
import Link from "next/link";
import { ROUTES } from "@/constants";
import SignupForm from "../_components/SignupForm";

export const metadata: Metadata = {
  title: "Sign up",
};

const SignupPage = () => {
  /**COMPONENT */
  return (
    <div className="space-y-6">
      <h1 className="text-xl font-semibold">Create an account</h1>
      <SignupForm />
      <p className="text-sm text-muted-foreground">
        Already have an account?{" "}
        <Link href={ROUTES.login} className="font-medium text-foreground underline">
          Log in
        </Link>
      </p>
    </div>
  );
};

export default SignupPage;
