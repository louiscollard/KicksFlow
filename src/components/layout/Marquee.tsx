import { fakeMenu } from "@/data/sneakers";

const ITEMS = fakeMenu.map((s) => s.title);

function MarqueeRow() {
    return (
        <ul className="flex shrink-0 items-center gap-8 pr-8">
            {ITEMS.map((name) => (
                <li key={name} className="flex items-center gap-8">
                    <span className="whitespace-nowrap font-display text-lg font-bold uppercase tracking-wider text-paper">
                        {name}
                    </span>
                    <span className="text-accent">✦</span>
                </li>
            ))}
        </ul>
    );
}

export function Marquee() {
    return (
        <div aria-hidden className="overflow-hidden border-y border-ink bg-ink py-3">
            <div className="flex w-max animate-marquee hover:[animation-play-state:paused] motion-reduce:animate-none">
                <MarqueeRow />
                <MarqueeRow />
            </div>
        </div>
    );
}