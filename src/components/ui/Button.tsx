import { cn } from "@/lib/cn";
import type { ComponentProps, ReactNode } from "react";

const base =
    "group inline-flex items-center justify-center gap-2.5 rounded-full " +
    "px-6 py-3.5 text-[15px] font-semibold transition-all duration-200 " +
    "active:translate-y-px cursor-pointer disabled:cursor-not-allowed disabled:opacity-40";

const variants = {
    primary: "bg-ink text-paper hover:bg-black hover:shadow-[0_12px_30px_-12px_rgba(0,0,0,0.5)]",
    secondary: "border border-line bg-transparent text-ink-soft hover:bg-paper-2",
} as const;

type ButtonProps = ComponentProps<"button"> & {
    icon?: ReactNode;
    variant?: keyof typeof variants;
};

export function Button({ type = "button", variant = "primary", className, icon, children, ...props }: ButtonProps) {
    return (
        <button type={type} className={cn(base, variants[variant], className)} {...props}>
            {children}
            {icon && (
                <span className="transition-transform duration-200 group-hover:translate-x-0.5">{icon}</span>
            )}
        </button>
    );
}