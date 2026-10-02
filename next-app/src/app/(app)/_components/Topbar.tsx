"use client";

import Button from "@/components/ui/Button";
import { useAuth } from "@/hooks/useAuth";
import { useAppDispatch } from "@/store/hooks";
import { toggleSidebar } from "@/store/slices/uiSlice";

const Topbar = () => {
  /**VARIABLES */
  const dispatch = useAppDispatch();
  const { user, logout, isLoggingOut } = useAuth();

  /**COMPONENT */
  return (
    <header className="flex h-16 items-center gap-4 border-b border-border px-4 sm:px-8">
      <Button variant="ghost" size="sm" className="md:hidden" onClick={() => dispatch(toggleSidebar())}>
        Menu
      </Button>
      <div className="ml-auto flex items-center gap-3">
        <span className="hidden text-sm text-muted-foreground sm:inline">{user?.email}</span>
        <Button variant="outline" size="sm" onClick={logout} isLoading={isLoggingOut}>
          Log out
        </Button>
      </div>
    </header>
  );
};

export default Topbar;
