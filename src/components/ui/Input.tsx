import { cn } from "@/lib/cn";
import type { ComponentProps, ReactNode } from "react";

const base =
    "w-full rounded-xl border border-line bg-white px-4 py-3 text-sm " +
    "text-ink placeholder-ink-soft outline-hidden transition-colors duration-200 " +
    "hover:border-ink/30 focus:border-ink focus:ring-2 focus:ring-ink/10";

type InputProps = ComponentProps<"input"> & {
    icon?: ReactNode;
};

export function Input({ className, icon, ...props }: InputProps) {
    return (
        <div className="relative">
            {icon && (
                <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-ink-soft">
                    {icon}
                </span>
            )}
            <input className={cn(base, icon && "pl-10", className)} {...props} />
        </div>
    );
}