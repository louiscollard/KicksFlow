import { cn } from "@/lib/cn";
import { FiZap } from "react-icons/fi";

type LogoProps = { className?: string };

export function Logo({ className }: LogoProps) {
    return (
        <span className={cn("flex items-center gap-2 whitespace-nowrap font-display text-[23px] font-extrabold tracking-[-0.03em] text-ink", className)}>
            <FiZap className="text-amber-400" aria-hidden />
            KicksFlow
        </span>
    );
}