import Link from "next/link";
import { buttonStyles } from "@/components/ui/Button";
import { ROUTES } from "@/constants";

const NotFound = () => {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-4 px-4 text-center">
      <p className="text-sm font-medium text-muted-foreground">404</p>
      <h1 className="text-2xl font-semibold">Page not found</h1>
      <Link href={ROUTES.home} className={buttonStyles({ variant: "outline" })}>
        Go home
      </Link>
    </main>
  );
};

export default NotFound;
