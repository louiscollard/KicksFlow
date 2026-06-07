import { Button } from "@/components/ui/Button";
import type { Sneaker } from "@/data/sneakers";
import { cn } from "@/lib/utils/cn";
import { formatPrice } from "@/lib/utils/format";

export function Card({ title, imageSource, price, isAvailable, isAdvertised }: Sneaker) {
    return (
        <div className={cn(
            "flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-md",
            !isAvailable && "opacity-60",
        )}>
            <div className="relative">
                <img src={imageSource} alt={title} loading="lazy"
                    className={cn("aspect-[4/3] w-full object-cover", !isAvailable && "grayscale")} />
                {!isAvailable && (
                    <span className="absolute left-3 top-3 rounded-full bg-gray-900/80 px-2.5 py-1 text-xs font-bold text-white">Épuisé</span>
                )}
            </div>

            <div className="flex flex-1 flex-col gap-3 p-4">
                <div className="flex items-center gap-2">
                    <h3 className="text-base font-black tracking-tight text-gray-900">{title}</h3>
                    {isAdvertised && (
                        <span className="rounded-md bg-pink-500 px-2 py-0.5 text-xs font-bold text-white">NEW</span>
                    )}
                </div>

                <div className="mt-auto flex items-center justify-between">
                    <span className="text-lg font-black text-gray-900">
                        {formatPrice(price)}
                    </span>
                    <Button disabled={!isAvailable}
                        className="rounded-lg px-3 py-1.5 disabled:cursor-not-allowed disabled:opacity-50">
                        Ajouter
                    </Button>
                </div>
            </div>
        </div>
    );
}