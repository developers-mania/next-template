"use client";

import { useRouter } from "next/navigation";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { ROUTES } from "@/constants";
import { getErrorMessage } from "@/lib/utils";
import { useSignupMutation } from "@/store/api/authApi";

const SignupForm = () => {
  /**VARIABLES */
  const router = useRouter();
  const [signup, { isLoading, error }] = useSignupMutation();

  /**FUNCTIONS */
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);

    const result = await signup({
      name: String(form.get("name")),
      email: String(form.get("email")),
      password: String(form.get("password")),
    });

    if (!result.error) router.push(ROUTES.dashboard);
  };

  /**COMPONENT */
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input label="Name" name="name" autoComplete="name" required />
      <Input label="Email" name="email" type="email" autoComplete="email" required />
      <Input
        label="Password"
        name="password"
        type="password"
        autoComplete="new-password"
        minLength={8}
        required
      />
      {error && (
        <p role="alert" className="text-sm text-red-500">
          {getErrorMessage(error)}
        </p>
      )}
      <Button type="submit" className="w-full" isLoading={isLoading}>
        Create account
      </Button>
    </form>
  );
};

export default SignupForm;
