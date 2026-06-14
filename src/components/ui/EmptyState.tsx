import type { ComponentType, ReactNode } from "react";

type EmptyStateProps = {
    icon: ComponentType<{ className?: string; strokeWidth?: number }>;
    eyebrow?: string;
    title: string;
    description?: string;
    action?: ReactNode;          // ← nouveau
};

export function EmptyState({ icon: Icon, eyebrow, title, description, action }: EmptyStateProps) {
    return (
        <div className="col-span-full flex flex-col items-center justify-center gap-5 py-20 text-center">
            <span className="grid h-20 w-20 place-items-center rounded-full border border-line bg-paper-2 text-ink-soft">
                <Icon className="h-8 w-8" strokeWidth={1.5} />
            </span>
            <div className="flex flex-col gap-2">
                {eyebrow && (
                    <span className="text-xs font-medium uppercase tracking-[0.2em] text-ink-soft">{eyebrow}</span>
                )}
                <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">{title}</h2>
                {description && (
                    <p className="mx-auto max-w-sm text-sm leading-relaxed text-ink-soft">{description}</p>
                )}
            </div>
            {action}
        </div>
    );
}