import { useCart } from "@/context/CartContext";
import { FiShoppingCart } from "react-icons/fi";

export function CartButton() {
    const { items, openCart } = useCart();
    const count = items.reduce((sum, item) => sum + item.quantity, 0);
    return (
        <button type="button" onClick={openCart} aria-label={`Panier (${count})`}
            className="relative grid h-8 w-8 place-items-center rounded-full text-ink transition-colors hover:bg-paper-2">
            <FiShoppingCart className="h-4 w-4" />
            {count > 0 && (
                <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-accent px-1 text-xs font-bold text-paper">
                    {count}
                </span>
            )}
        </button>
    );
}