import { cn } from "@/lib/utils";

const Card = ({ className, ...props }: React.ComponentProps<"div">) => {
  return <div className={cn("rounded-lg border border-border bg-card p-6", className)} {...props} />;
};

export default Card;
