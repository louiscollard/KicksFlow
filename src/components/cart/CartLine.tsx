import { useCart, type CartItem } from "@/context/CartContext";
import { formatPrice } from "@/lib/format";
import { FiMinus, FiPlus, FiX } from "react-icons/fi";

const thumbBackdrop = {
    backgroundColor: "#f5f4f0",
    backgroundImage:
        "linear-gradient(135deg, transparent 46%, rgba(0,0,0,0.06) 46%, rgba(0,0,0,0.06) 54%, transparent 54%)",
    backgroundSize: "12px 12px",
};

export function CartLine({ item }: { item: CartItem }) {
    const { updateQuantity, removeFromCart } = useCart();
    const { sneaker, quantity } = item;
    const lineTotal = sneaker.price * quantity;

    return (
        <li className="flex gap-3 rounded-card border border-line bg-white p-3">
            <div
                className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg border border-line"
                style={thumbBackdrop}
            >
                <img
                    src={sneaker.imageSource}
                    alt=""
                    className={`absolute inset-0 h-full w-full object-contain p-2 ${
                        !sneaker.isAvailable ? "grayscale" : ""
                    }`}
                />
            </div>

            <div className="flex flex-1 flex-col">
                <div className="flex items-start justify-between gap-2">
                    <h3 className="font-display text-sm font-bold leading-tight tracking-tight text-ink">
                        {sneaker.title}
                    </h3>
                    <button
                        type="button"
                        aria-label={`Supprimer ${sneaker.title}`}
                        onClick={() => removeFromCart(sneaker.id)}
                        className="-mr-1 -mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-full text-ink-soft transition-colors hover:bg-paper-2 hover:text-red-500"
                    >
                        <FiX className="h-4 w-4" />
                    </button>
                </div>

                <span className="text-xs text-ink-soft">{formatPrice(sneaker.price)} l'unité</span>

                <div className="mt-auto flex items-end justify-between pt-2">
                    <div className="inline-flex items-center gap-1 rounded-full border border-line p-0.5">
                        <button
                            type="button"
                            aria-label="Retirer un"
                            onClick={() => updateQuantity(sneaker.id, quantity - 1)}
                            className="grid h-6 w-6 place-items-center rounded-full text-ink-soft transition-colors hover:bg-paper-2 hover:text-ink"
                        >
                            <FiMinus className="h-3 w-3" />
                        </button>
                        <span className="w-5 text-center text-sm font-semibold tabular-nums text-ink">
                            {quantity}
                        </span>
                        <button
                            type="button"
                            aria-label="Ajouter un"
                            onClick={() => updateQuantity(sneaker.id, quantity + 1)}
                            className="grid h-6 w-6 place-items-center rounded-full text-ink-soft transition-colors hover:bg-paper-2 hover:text-ink"
                        >
                            <FiPlus className="h-3 w-3" />
                        </button>
                    </div>

                    <span className="font-display text-base font-bold tabular-nums tracking-tight text-ink">
                        {formatPrice(lineTotal)}
                    </span>
                </div>
            </div>
        </li>
    );
}