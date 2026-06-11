// components/cart/AddToCartButton.tsx
import { useCart } from "@/context/CartContext";
import type { Sneaker } from "@/data/sneakers";
import { FiPlus } from "react-icons/fi";
import { toast } from "react-toastify";

export function AddToCartButton({ sneaker }: { sneaker: Sneaker }) {
    const { addToCart } = useCart();
    return (
        <button type="button"
            onClick={() => { addToCart(sneaker); toast("Ajouté au panier", { icon: false }); }} aria-label="Ajouter au panier" disabled={!sneaker.isAvailable}
            className="grid h-10 w-10 place-items-center rounded-full bg-paper-2 text-ink transition-all duration-200 hover:rotate-90 hover:bg-ink hover:text-paper disabled:cursor-not-allowed disabled:opacity-40">
            <FiPlus className="h-5 w-5" />
        </button>
    );
}
