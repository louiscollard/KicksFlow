import type { Sneaker } from "@/data/sneakers";
import { createContext, useContext } from "react";

export type SneakerContextType = {
    sneakers: Sneaker[];
    addSneaker: (sneaker: Omit<Sneaker, "id">) => void;
    removeSneaker: (id: number) => void;
};

export const SneakerContext = createContext<SneakerContextType | null>(null);

export function useSneakers() {
    const ctx = useContext(SneakerContext);
    if (!ctx) throw new Error("useSneakers doit être utilisé dans un SneakerProvider");
    return ctx;
}