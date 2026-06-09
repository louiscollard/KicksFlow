import { cn } from "@/lib/cn";
import type { ComponentProps, ReactNode } from "react";

const base =
    "group inline-flex items-center justify-center gap-2.5 " +
    "rounded-full px-6 py-3.5 text-[15px] font-semibold text-paper bg-ink " +
    "transition-all duration-200 hover:bg-black hover:shadow-[0_12px_30px_-12px_rgba(0,0,0,0.5)] " +
    "active:translate-y-px cursor-pointer disabled:cursor-not-allowed disabled:opacity-40";

type ButtonProps = ComponentProps<"button"> & {
    icon?: ReactNode;
};

export function Button({ type = "button", className, icon, children, ...props }: ButtonProps) {
    return (
        <button type={type} className={cn(base, className)} {...props}>
            {children}
            {icon && (
                <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                    {icon}
                </span>
            )}
        </button>
    );
}