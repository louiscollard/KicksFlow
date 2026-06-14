// components/cart/CheckoutModal.tsx
import { Modal } from "@/components/ui/Modal";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/format";
import { createOrderNo } from "@/lib/id";
import { useState } from "react";
import { FiCheck } from "react-icons/fi";

type CheckoutModalProps = { isOpen: boolean; onClose: () => void };
type PlacedOrder = { orderNo: string; count: number; total: number };

export function CheckoutModal({ isOpen, onClose }: CheckoutModalProps) {
    const { items, clearCart, closeCart } = useCart();
    const [order, setOrder] = useState<PlacedOrder | null>(null);

    const total = items.reduce((sum, i) => sum + i.sneaker.price * i.quantity, 0);
    const count = items.reduce((sum, i) => sum + i.quantity, 0);

    const confirm = () => {
        setOrder({ orderNo: createOrderNo(), count, total });
        clearCart();
    };

    const handleClose = () => {
        const placed = order !== null;
        onClose();
        if (placed) closeCart();
        setTimeout(() => setOrder(null), 300);
    };

    return (
        <Modal isOpen={isOpen} onClose={handleClose} labelledBy="checkout-title">
            {order ? (
                <div className="flex flex-col items-center text-center">
                    <div className="grid h-14 w-14 place-items-center rounded-full bg-accent/10 text-accent">
                        <FiCheck className="h-7 w-7" />
                    </div>
                    <h2 id="checkout-title" className="mt-4 font-display text-2xl font-bold text-ink">
                        Commande confirmée
                    </h2>
                    <p className="mt-2 text-sm text-ink-soft">
                        Commande <span className="font-semibold text-ink">#{order.orderNo}</span> ·{" "}
                        {order.count} article{order.count > 1 ? "s" : ""} · {formatPrice(order.total)}
                    </p>
                    <button type="button" onClick={handleClose}
                        className="mt-6 w-full rounded-lg bg-ink py-3 text-sm font-medium text-paper transition-colors hover:bg-black">
                        Parfait
                    </button>
                </div>
            ) : (
                <div className="flex flex-col">
                    <h2 id="checkout-title" className="font-display text-xl font-bold text-ink">
                        Confirmer la commande
                    </h2>
                    <p className="mt-1 text-sm text-ink-soft">
                        {count} article{count > 1 ? "s" : ""} dans ton panier
                    </p>

                    <ul className="mt-4 flex max-h-56 flex-col gap-2 overflow-y-auto">
                        {items.map((item) => (
                            <li key={item.sneaker.id} className="flex items-center justify-between gap-3 text-sm">
                                <span className="text-ink">
                                    {item.sneaker.title}
                                    <span className="text-ink-soft"> × {item.quantity}</span>
                                </span>
                                <span className="font-display tabular-nums text-ink">
                                    {formatPrice(item.sneaker.price * item.quantity)}
                                </span>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-4 flex items-center justify-between border-t border-line pt-4">
                        <span className="text-sm text-ink-soft">Total</span>
                        <span className="font-display text-xl font-bold tabular-nums text-ink">{formatPrice(total)}</span>
                    </div>

                    <div className="mt-5 flex gap-2">
                        <button type="button" onClick={handleClose}
                            className="flex-1 rounded-lg border border-line py-3 text-sm font-medium text-ink-soft transition-colors hover:bg-paper-2">
                            Annuler
                        </button>
                        <button type="button" onClick={confirm}
                            className="flex-1 rounded-lg bg-accent py-3 text-sm font-medium text-paper transition-colors hover:bg-accent-d">
                            Confirmer
                        </button>
                    </div>
                </div>
            )}
        </Modal>
    );
}