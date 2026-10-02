import { cn } from "@/lib/utils";
import type { ProjectStatus } from "@/types";

const STATUS_STYLES: Record<ProjectStatus, string> = {
  active: "bg-green-500/15 text-green-700 dark:text-green-400",
  paused: "bg-amber-500/15 text-amber-700 dark:text-amber-400",
  done: "bg-muted text-muted-foreground",
};

/** Used by both the dashboard and project pages, so it lives in components/shared. */
const StatusBadge = ({ status }: { status: ProjectStatus }) => {
  return (
    <span
      className={cn(
        "shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium capitalize",
        STATUS_STYLES[status],
      )}
    >
      {status}
    </span>
  );
};

export default StatusBadge;
