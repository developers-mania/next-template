"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { APP_NAV, ROUTES, SITE } from "@/constants";
import { cn } from "@/lib/utils";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { selectSidebarOpen } from "@/store/selectors";
import { closeSidebar } from "@/store/slices/uiSlice";

const Sidebar = () => {
  /**VARIABLES */
  const pathname = usePathname();
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector(selectSidebarOpen);

  /**FUNCTIONS */
  const close = () => dispatch(closeSidebar());

  /**COMPONENT */
  return (
    <>
      {/* Backdrop behind the sidebar on small screens */}
      {isOpen && (
        <button
          aria-label="Close menu"
          className="fixed inset-0 z-30 bg-black/40 md:hidden"
          onClick={close}
        />
      )}

      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-40 w-60 -translate-x-full border-r border-border bg-background p-4 transition-transform md:static md:translate-x-0",
          isOpen && "translate-x-0",
        )}
      >
        <Link href={ROUTES.home} className="mb-6 block px-3 py-2 font-semibold">
          {SITE.name}
        </Link>
        <nav className="flex flex-col gap-1">
          {APP_NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={close}
              className={cn(
                "rounded-md px-3 py-2 text-sm",
                pathname.startsWith(item.href)
                  ? "bg-muted font-medium"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
