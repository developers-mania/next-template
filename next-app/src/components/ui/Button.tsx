import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "outline" | "ghost";
type ButtonSize = "sm" | "md";

const VARIANTS: Record<ButtonVariant, string> = {
  primary: "bg-primary text-primary-foreground hover:opacity-90",
  outline: "border border-border hover:bg-muted",
  ghost: "hover:bg-muted",
};

const SIZES: Record<ButtonSize, string> = {
  sm: "h-8 px-3 text-sm",
  md: "h-10 px-4",
};

type ButtonStyleOptions = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
};

/** Button classes on their own, so links can look like buttons: `<Link className={buttonStyles()} />` */
export const buttonStyles = ({ variant = "primary", size = "md", className }: ButtonStyleOptions = {}) =>
  cn(
    "inline-flex items-center justify-center gap-2 rounded-md font-medium transition disabled:pointer-events-none disabled:opacity-50",
    VARIANTS[variant],
    SIZES[size],
    className,
  );

type ButtonProps = React.ComponentProps<"button"> &
  Omit<ButtonStyleOptions, "className"> & {
    isLoading?: boolean;
  };

const Button = ({ variant, size, isLoading, className, disabled, children, ...props }: ButtonProps) => {
  return (
    <button
      className={buttonStyles({ variant, size, className })}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? "Please wait..." : children}
    </button>
  );
};

export default Button;
