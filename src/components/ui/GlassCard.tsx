import { cn } from "@/utils/cn";
import { type HTMLAttributes } from "react";

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  tilt?: boolean;
}

export function GlassCard({ className, tilt, children, ...props }: GlassCardProps) {
  return (
    <div
      className={cn(
        "glass overflow-hidden rounded-2xl",
        tilt && "lift",
        className
      )}
      {...props}
    >
      <div className="gradient-border relative h-full w-full bg-card/50">
        {children}
      </div>
    </div>
  );
}
