import { cn } from "@/lib/utils/cn";
type AdminToggleProps = {
    isAdmin: boolean;
    toggleAdmin: () => void;
};
export function AdminToggle({isAdmin, toggleAdmin} :AdminToggleProps) {
    return (
        <div className="inline-flex items-center gap-3">
            <span id="admin-label" className="text-sm font-semibold text-gray-700">
                Mode admin
            </span>

            <button
                type="button"
                role="switch"
                aria-checked={isAdmin}
                aria-labelledby="admin-label"
                onClick={toggleAdmin}
                className={cn(
                    "relative h-6 w-11 shrink-0 rounded-full transition-colors duration-200",
                    "focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/40",
                    isAdmin ? "bg-blue-500" : "bg-gray-300",
                )}
            >
                <span
                    className={cn(
                        "absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform duration-200",
                        isAdmin && "translate-x-5",
                    )}
                />
            </button>
        </div>
    );
}