import { cn } from "@/lib/utils";

type InputProps = React.ComponentProps<"input"> & {
  label?: string;
  error?: string;
};

/** Text input with an optional label and error message. `id` defaults to `name`. */
const Input = ({ label, error, id, className, ...props }: InputProps) => {
  /**VARIABLES */
  const inputId = id ?? props.name;

  /**COMPONENT */
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label htmlFor={inputId} className="text-sm font-medium">
          {label}
        </label>
      )}
      <input
        id={inputId}
        aria-invalid={error ? true : undefined}
        className={cn(
          "h-10 rounded-md border border-border bg-background px-3 outline-none focus:ring-2 focus:ring-primary/40 disabled:opacity-60",
          error && "border-red-500",
          className,
        )}
        {...props}
      />
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default Input;
