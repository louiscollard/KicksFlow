import { CartLine } from "@/components/cart/CartLine";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/format";
import { FiX } from "react-icons/fi";

export function CartDrawer() {
    const { items, isOpen, closeCart, clearCart } = useCart();
    const total = items.reduce((sum, item) => sum + item.sneaker.price * item.quantity, 0);

    return (
        <>
            <div onClick={closeCart}
                className={`fixed inset-0 z-60 bg-ink/40 transition-opacity duration-300 ${
                    isOpen ? "opacity-100" : "pointer-events-none opacity-0"
                }`} />

            <aside aria-label="Panier"
                className={`fixed right-0 top-0 z-60 flex h-full w-full max-w-md flex-col bg-paper shadow-2xl transition-transform duration-300 ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                }`}>

                <header className="flex items-center justify-between border-b border-line px-6 py-5">
                    <h2 className="font-display text-xl font-bold text-ink">Panier</h2>
                    <button type="button" onClick={closeCart} aria-label="Fermer le panier"
                        className="grid h-9 w-9 place-items-center rounded-full text-ink-soft transition-colors hover:bg-paper-2">
                        <FiX className="h-5 w-5" />
                    </button>
                </header>

                <div className="flex-1 overflow-y-auto px-6 py-4">
                    {items.length === 0 ? (
                        <p className="mt-10 text-center text-sm text-ink-soft">Ton panier est vide.</p>
                    ) : (
                        <ul className="flex flex-col gap-3">
                            {items.map((item) => (
                                <CartLine key={item.sneaker.id} item={item} />
                            ))}
                        </ul>
                    )}
                </div>

                {items.length > 0 && (
                    <footer className="border-t border-line px-6 py-5">
                        <div className="mb-4 flex items-center justify-between">
                            <span className="text-sm text-ink-soft">Total</span>
                            <span className="font-display text-xl font-bold tabular-nums text-ink">{formatPrice(total)}</span>
                        </div>
                        <button type="button"
                            className="w-full rounded-lg bg-accent py-3 text-sm font-medium text-paper transition-colors hover:bg-accent-d">
                            Commander
                        </button>
                        <button type="button" onClick={clearCart}
                            className="mt-2 w-full py-2 text-xs text-ink-soft hover:text-ink">
                            Vider le panier
                        </button>
                    </footer>
                )}
            </aside>
        </>
    );
}