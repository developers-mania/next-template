import { cn } from "@/lib/utils";

const Spinner = ({ className }: { className?: string }) => {
  return (
    <span
      role="status"
      aria-label="Loading"
      className={cn(
        "inline-block size-6 animate-spin rounded-full border-2 border-border border-t-foreground",
        className,
      )}
    />
  );
};

export default Spinner;
