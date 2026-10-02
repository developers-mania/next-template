import Link from "next/link";
import { buttonStyles } from "@/components/ui/Button";
import { MAIN_NAV, ROUTES, SITE } from "@/constants";

const Header = () => {
  /**COMPONENT */
  return (
    <header className="border-b border-border">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-4 px-4">
        <Link href={ROUTES.home} className="font-semibold">
          {SITE.name}
        </Link>

        <nav className="flex items-center gap-1 sm:gap-4">
          {MAIN_NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hidden text-sm text-muted-foreground hover:text-foreground sm:inline"
            >
              {item.label}
            </Link>
          ))}
          <Link href={ROUTES.login} className={buttonStyles({ variant: "ghost", size: "sm" })}>
            Log in
          </Link>
          <Link href={ROUTES.dashboard} className={buttonStyles({ size: "sm" })}>
            Dashboard
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
