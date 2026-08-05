import { cn } from "@/utils/cn";
import { type HTMLAttributes } from "react";

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  tilt?: boolean;
}

export function GlassCard({ className, tilt, children, ...props }: GlassCardProps) {
  return (
    <div
      className={cn(
        "glass overflow-hidden rounded-3xl transition-all duration-300",
        tilt && "lift"
      )}
      {...props}
    >
      <div className="gradient-border relative h-full w-full bg-card/60 p-0.5">
        <div className={cn("h-full w-full rounded-[calc(1.5rem-2px)] bg-card/40 backdrop-blur-sm", className)}>
          {children}
        </div>
      </div>
    </div>
  );
}

