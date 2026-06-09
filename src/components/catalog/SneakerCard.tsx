import type { Sneaker } from "@/data/sneakers";
import { cn } from "@/lib/cn";
import { formatPrice } from "@/lib/format";
import { FiCheck, FiPlus } from "react-icons/fi";

type SneakerCardProps = {
    sneaker: Sneaker;
};

export function SneakerCard({ sneaker }: SneakerCardProps) {
    return (
        <article className={cn(
            "group relative flex flex-col rounded-card border border-line bg-white",
            "transition-all duration-200 ease-out hover:-translate-y-1.5 hover:border-ink",
            "before:absolute before:inset-0 before:-z-10 before:rounded-card before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-200 shadow-sm hover:shadow-xl",
            !sneaker.isAvailable && "opacity-60",
        )}>
            <div 
                className="relative aspect-square overflow-hidden rounded-t-card border-b border-line"
                style={{
                    backgroundColor: '#f5f4f0', 
                    backgroundImage: `linear-gradient(135deg, transparent 46%, rgba(0,0,0,0.06) 46%, rgba(0,0,0,0.06) 54%, transparent 54%)`,
                    backgroundSize: '12px 12px',
                }}
            >
                <img 
                    src={sneaker.imageSource} 
                    alt={sneaker.title} 
                    loading="lazy"
                    className={cn("absolute inset-0 z-10 h-full w-full object-contain p-6", !sneaker.isAvailable && "grayscale")} 
                />
                
                {sneaker.isAdvertised && sneaker.isAvailable && (
                    <span className="absolute left-3 top-3 z-20 rounded-md bg-ink px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-paper">
                        New
                    </span>
                )}
                {!sneaker.isAvailable && (
                    <span className="absolute left-3 top-3 z-20 rounded-md bg-ink/80 px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-paper">
                        Épuisé
                    </span>
                )}
            </div>
            
            <div className="flex flex-1 flex-col px-4 pb-4 pt-4">
                <h3 className="font-display text-base font-bold leading-tight tracking-tight text-ink">
                    {sneaker.title}
                </h3>

                <div className="mt-2 flex items-center gap-2 text-xs text-ink-soft">
                    {sneaker.isAvailable ? (
                        <span className="inline-flex items-center gap-1 font-semibold text-accent-d">
                            <FiCheck className="h-3 w-3" /> Disponible
                        </span>
                    ) : (
                        <span>Indisponible</span>
                    )}
                </div>

                <div className="mt-3.5 flex items-end justify-between">
                    <div className="font-display text-xl font-bold tabular-nums tracking-tight text-ink">
                        {formatPrice(sneaker.price)}
                    </div>

                    <button aria-label="Ajouter au panier" disabled={!sneaker.isAvailable}
                        className="grid h-10 w-10 place-items-center rounded-full bg-paper-2 text-ink transition-all duration-200 hover:rotate-90 hover:bg-ink hover:text-paper disabled:cursor-not-allowed disabled:opacity-40">
                        <FiPlus className="h-5 w-5" />
                    </button>
                </div>
            </div>
        </article>
    );
}