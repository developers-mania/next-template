"use client";

import { useRouter } from "next/navigation";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { ROUTES } from "@/constants";
import { getErrorMessage } from "@/lib/utils";
import { useLoginMutation } from "@/store/api/authApi";

const LoginForm = () => {
  /**VARIABLES */
  const router = useRouter();
  const [login, { isLoading, error }] = useLoginMutation();

  /**FUNCTIONS */
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);

    const result = await login({
      email: String(form.get("email")),
      password: String(form.get("password")),
    });

    if (!result.error) router.push(ROUTES.dashboard);
  };

  /**COMPONENT */
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input label="Email" name="email" type="email" autoComplete="email" required />
      <Input label="Password" name="password" type="password" autoComplete="current-password" required />
      {error && (
        <p role="alert" className="text-sm text-red-500">
          {getErrorMessage(error)}
        </p>
      )}
      <Button type="submit" className="w-full" isLoading={isLoading}>
        Log in
      </Button>
    </form>
  );
};

export default LoginForm;
