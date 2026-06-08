import { cn } from "@/lib/cn";
import type { ComponentProps, ReactNode } from "react";

const base =
    "w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3 text-sm " +
    "text-gray-900 placeholder-gray-400 outline-hidden transition-all duration-200 " +
    "hover:border-gray-300 focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/10";

type InputProps = ComponentProps<"input"> & {
    icon?: ReactNode;
};

export function Input({ className = "",icon,...props }: InputProps) {
    return (
        <div className="relative">
            {icon && (
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                    {icon}
                </span>
            )}
            <input className={cn(base, icon && "pl-10",className )} {...props} />
        </div>
    );
}