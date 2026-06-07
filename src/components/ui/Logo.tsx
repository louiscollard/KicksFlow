import { cn } from "@/lib/utils/cn";
import { FiZap } from "react-icons/fi";

export function Logo({ className }: { className?: string }) {
    return (
        <span className={cn("inline-flex items-center gap-1.5 font-black tracking-tight text-gray-900", className)}>
            <FiZap className="h-[1em] w-[1em] fill-amber-400 text-amber-400" aria-hidden="true" />
            KicksFlow
        </span>
    );
}