import type { ComponentProps } from "react";

const base =
    "rounded-xl px-4 py-3.5 text-sm font-bold text-white bg-primary shadow-sm " +
    "transition-all duration-200 hover:bg-primary/90 hover:shadow-md " +
    "active:scale-[0.99] cursor-pointer";

type ButtonProps = ComponentProps<"button">;

export function Button({ type = "button", className = "", children, ...props }: ButtonProps) {
    return (
        <button type={type} className={`${base} ${className}`} {...props}>
            {children}
        </button>
    );
}