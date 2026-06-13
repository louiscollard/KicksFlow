import { CartContext, type CartItem } from "@/context/CartContext";
import type { Sneaker } from "@/data/sneakers";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import type { ReactNode } from "react";
import { useState } from "react";

export function CartProvider({ children }: { children: ReactNode }) {
    const [items, setItems] = useLocalStorage<CartItem[]>("cart", []);
    const [isOpen, setIsOpen] = useState(false);

    const addToCart = (sneaker: Sneaker) => {
        setItems((prev) => {
            const existing = prev.find((item) => item.sneaker.id === sneaker.id);
            if (existing) {
                return prev.map((item) =>
                    item.sneaker.id === sneaker.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item,
                );
            }
            return [...prev, { sneaker, quantity: 1 }];
        });
    };

    const removeFromCart = (id: number) => {
        setItems((prev) => prev.filter((item) => item.sneaker.id !== id));
    };

    const updateQuantity = (id: number, quantity: number) => {
        if (quantity <= 0) return removeFromCart(id); // le "−" à 1 retire l'article
        setItems((prev) =>
            prev.map((item) => (item.sneaker.id === id ? { ...item, quantity } : item)),
        );
    };

    const clearCart = () => setItems([]);
    const openCart = () => setIsOpen(true);
    const closeCart = () => setIsOpen(false);

    return (
        <CartContext.Provider
            value={{ items, isOpen, addToCart, removeFromCart, updateQuantity, clearCart, openCart, closeCart }}>
            {children}
        </CartContext.Provider>
    );
}