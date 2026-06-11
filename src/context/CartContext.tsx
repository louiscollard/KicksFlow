import type { Sneaker } from "@/data/sneakers";
import { createContext, useContext } from "react";

export type CartItem = { sneaker: Sneaker; quantity: number };

export type CartContextType = {
    items: CartItem[];
    isOpen: boolean;
    addToCart: (sneaker: Sneaker) => void;
    removeFromCart: (id: number) => void;
    updateQuantity: (id: number, quantity: number) => void;
    clearCart: () => void;
    openCart: () => void;
    closeCart: () => void;
};

export const CartContext = createContext<CartContextType | null>(null);

export function useCart() {
    const ctx = useContext(CartContext);
    if (!ctx) throw new Error("useCart doit être utilisé dans un CartProvider");
    return ctx;
}