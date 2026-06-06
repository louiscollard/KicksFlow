import type { ComponentProps } from "react";

const base =
    "w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3 text-sm " +
    "text-gray-900 placeholder-gray-400 outline-hidden transition-all duration-200 " +
    "hover:border-gray-300 focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/10";

type InputProps = ComponentProps<"input">;

export function Input({ className = "", ...props }: InputProps) {
    return <input className={`${base} ${className}`} {...props} />;
}