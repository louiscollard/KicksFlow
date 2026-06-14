const BRANDS = ["Ascent", "Form&Co", "Pacer", "Northbound", "Kasa", "Drift'82", "Volta", "Méridien"];

const sequence = BRANDS.flatMap((name) => [name, "✦"]);
const row = [...sequence, ...sequence];

export function Marquee() {
    return (
        <div aria-hidden className="overflow-hidden border-y border-ink bg-ink py-3">
            <div className="flex w-max animate-marquee items-center gap-8 hover:[animation-play-state:paused] motion-reduce:animate-none">
                {row.map((token, i) =>
                    token === "✦" ? (
                        <span key={i} className="text-accent">✦</span>
                    ) : (
                        <span key={i} className="font-display text-lg font-bold uppercase tracking-wider text-paper">
                            {token}
                        </span>
                    ),
                )}
            </div>
        </div>
    );
}