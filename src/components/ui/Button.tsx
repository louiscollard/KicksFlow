import type { ComponentProps, ReactNode } from "react";

const base =
    "inline-flex items-center justify-center gap-2 " +
    "rounded-xl px-4 py-3.5 text-sm font-bold text-white bg-primary shadow-sm " +
    "transition-all duration-200 hover:bg-primary/90 hover:shadow-md " +
    "active:scale-[0.99] cursor-pointer";

type ButtonProps = ComponentProps<"button"> & {
    icon : ReactNode;
};

export function Button({ type = "button", className = "", icon, children, ...props }: ButtonProps) {
    return (
        <button type={type} className={`${base} ${className}`} {...props}>
            {children}
            {icon}
        </button>
    );
}