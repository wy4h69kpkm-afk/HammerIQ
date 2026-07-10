import * as React from "react";
import { cn } from "../../lib/utils";

const Badge = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    variant?: "default" | "secondary" | "destructive" | "outline" | "success" | "warning";
  }
>(({ className, variant = "default", ...props }, ref) => {
  const variants = {
    default:
      "border-transparent bg-accent-primary text-graphite-900 hover:bg-accent-primary/80",
    secondary:
      "border-transparent bg-graphite-700 text-graphite-50 hover:bg-graphite-600",
    destructive:
      "border-transparent bg-accent-danger text-graphite-50 hover:bg-accent-danger/80",
    outline: "text-graphite-50 border-graphite-600",
    success:
      "border-transparent bg-accent-success text-graphite-900 hover:bg-accent-success/80",
    warning:
      "border-transparent bg-accent-warning text-graphite-900 hover:bg-accent-warning/80",
  };

  return (
    <div
      ref={ref}
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2",
        variants[variant],
        className
      )}
      {...props}
    />
  );
});
Badge.displayName = "Badge";

export { Badge };
