import type { Sneaker } from "@/data/sneakers";
import { createContext, useContext } from "react";

export type SneakerContextType = {
    sneakers: Sneaker[];
    editingId: number | null;
    addSneaker: (sneaker: Omit<Sneaker, "id">) => void;
    removeSneaker: (id: number) => void;
    updateSneaker: (id: number, changes: Omit<Sneaker, "id">) => void;
    startEditing: (id: number) => void;
    cancelEditing: () => void;
};

export const SneakerContext = createContext<SneakerContextType | null>(null);

export function useSneakers() {
    const ctx = useContext(SneakerContext);
    if (!ctx) throw new Error("useSneakers doit être utilisé dans un SneakerProvider");
    return ctx;
}