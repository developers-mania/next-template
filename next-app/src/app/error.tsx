"use client"; // Error boundaries must be Client Components

import { useEffect } from "react";
import Button from "@/components/ui/Button";

type ErrorProps = {
  error: Error & { digest?: string };
  retry: () => void;
};

/** Shown when a page throws while rendering. Add an error.tsx to any route folder to handle errors closer to the source. */
const ErrorPage = ({ error, retry }: ErrorProps) => {
  /**VARIABLES */
  useEffect(() => {
    // Send this to your error reporting service (Sentry, etc.)
    console.error(error);
  }, [error]);

  /**COMPONENT */
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-4 px-4 text-center">
      <h1 className="text-2xl font-semibold">Something went wrong</h1>
      <Button variant="outline" onClick={() => retry()}>
        Try again
      </Button>
    </main>
  );
};

export default ErrorPage;
