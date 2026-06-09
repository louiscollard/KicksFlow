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
            "transition-[transform,border-color] duration-200 ease-out hover:-translate-y-1.5 hover:border-ink",
            "before:absolute before:inset-0 before:-z-10 before:rounded-card before:opacity-0 before:shadow-[0_26px_44px_-26px_rgba(28,26,23,0.4)] before:transition-opacity before:duration-200 hover:before:opacity-100",
            !sneaker.isAvailable && "opacity-60",
        )}>
            <div 
                className={cn("relative aspect-square overflow-hidden rounded-t-card border-b border-line bg-[#f5f4f0]")}
                style={{
                    backgroundImage: `linear-gradient(135deg, transparent 46%, rgba(0,0,0,0.06) 46%, rgba(0,0,0,0.06) 54%, transparent 54%)`,
                    backgroundSize: '12px 12px',
                }}
            >
                <img 
                    src={sneaker.imageSource} 
                    alt={sneaker.title} 
                    loading="lazy"
                    className={cn("absolute inset-0 z-[1] h-full w-full object-contain p-6", !sneaker.isAvailable && "grayscale")} 
                />
                {sneaker.isAdvertised && sneaker.isAvailable && (
                    <span className="absolute left-3 top-3 z-[2] rounded-[7px] bg-ink px-[9px] py-[5px] text-[10.5px] font-bold uppercase tracking-[0.08em] text-paper">
                        New
                    </span>
                )}
                {!sneaker.isAvailable && (
                    <span className="absolute left-3 top-3 z-[2] rounded-[7px] bg-ink/80 px-[9px] py-[5px] text-[10.5px] font-bold uppercase tracking-[0.08em] text-paper">
                        Épuisé
                    </span>
                )}
            </div>
            <div className="flex flex-1 flex-col px-4 pb-[17px] pt-[15px]">
                <h3 className="font-display text-[16.5px] font-bold leading-[1.18] tracking-[-0.01em] text-ink">
                    {sneaker.title}
                </h3>

                <div className="mt-[9px] flex items-center gap-2 text-xs text-ink-soft">
                    {sneaker.isAvailable ? (
                        <span className="inline-flex items-center gap-1 font-semibold text-accent-d">
                            <FiCheck className="h-3 w-3" /> Disponible
                        </span>
                    ) : (
                        <span>Indisponible</span>
                    )}
                </div>

                <div className="mt-3.5 flex items-end justify-between">
                    <div className="font-display text-xl font-bold tabular-nums tracking-[-0.01em] text-ink">
                        {formatPrice(sneaker.price)}
                    </div>

                    <button aria-label="Ajouter au panier" disabled={!sneaker.isAvailable}
                        className="grid h-10 w-10 place-items-center rounded-full bg-paper-2 text-ink transition-[background,transform,color] duration-200 hover:rotate-90 hover:bg-ink hover:text-paper disabled:cursor-not-allowed disabled:opacity-40">
                        <FiPlus className="h-5 w-5" />
                    </button>
                </div>
            </div>
        </article>
    );
}