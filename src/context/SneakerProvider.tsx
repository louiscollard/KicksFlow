import { SneakerContext } from "@/context/SneakerContext";
import { sneakersData, type Sneaker } from "@/data/sneakers";
import type { ReactNode } from "react";
import { useState } from "react";

export function SneakerProvider({ children }: { children: ReactNode }) {
    const [sneakers, setSneakers] = useState<Sneaker[]>(sneakersData.LARGE);

    const addSneaker = (sneaker: Omit<Sneaker, "id">) => {
        const newSneaker: Sneaker = { ...sneaker, id: Date.now() };
        setSneakers((prev) => [newSneaker, ...prev]);
    };

    const removeSneaker = (id: number) => {
        setSneakers((prev) => prev.filter((s) => s.id !== id));
    };

    return (
        <SneakerContext.Provider value={{ sneakers, addSneaker, removeSneaker }}>
            {children}
        </SneakerContext.Provider>
    );
}