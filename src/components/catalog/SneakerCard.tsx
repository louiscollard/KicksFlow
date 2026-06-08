import { Button } from "@/components/ui/Button";
import type { Sneaker } from "@/data/sneakers";
import { cn } from "@/lib/cn";
import { formatPrice } from "@/lib/format";

const SNEAKER_CARD_BG = [
    "bg-rose-100",
    "bg-amber-100",
    "bg-sky-100",
    "bg-violet-100",
    "bg-emerald-100",
    "bg-orange-100",
];

type SneakerCardProps = {
    sneaker: Sneaker;
};

export function SneakerCard({ sneaker }: SneakerCardProps) {
    const bg = SNEAKER_CARD_BG[sneaker.id % SNEAKER_CARD_BG.length];
    return (
        <div className={cn(
            "flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-md",
            !sneaker.isAvailable && "opacity-60",
        )}>
            <div className={cn("relative flex items-center justify-center", bg)}>
                <img src={sneaker.imageSource} alt={sneaker.title} loading="lazy"
                    className={cn("aspect-[4/3] w-full object-contain", !sneaker.isAvailable && "grayscale")} />
                {!sneaker.isAvailable && (
                    <span className="absolute left-3 top-3 rounded-full bg-gray-900/80 px-2.5 py-1 text-xs font-bold text-white">Épuisé</span>
                )}
            </div>

            <div className="flex flex-1 flex-col gap-3 p-4">
                <div className="flex items-center gap-2">
                    <h3 className="text-base font-semibold tracking-tight text-gray-900">{sneaker.title}</h3>
                    {sneaker.isAdvertised && (
                        <span className="rounded-md bg-amber-500 px-2 py-0.5 text-xs font-bold text-white">NEW</span>
                    )}
                </div>

                <div className="mt-auto flex items-center justify-between">
                    <span className="text-lg font-black text-gray-900">
                        {formatPrice(sneaker.price)}
                    </span>
                    <Button disabled={!sneaker.isAvailable}
                        className="rounded-lg px-3 py-1.5 disabled:cursor-not-allowed disabled:opacity-50">
                        Ajouter
                    </Button>
                </div>
            </div>
        </div>
    );
}