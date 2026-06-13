import { createUser, getUser, updateUserMenu } from "@/api/users";
import { SneakerContext } from "@/context/SneakerContext";
import { fakeMenu, type Sneaker } from "@/data/sneakers";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

export function SneakerProvider({ children }: { children: ReactNode }) {
    const { username } = useParams();
    const [sneakers, setSneakers] = useState<Sneaker[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [editingId, setEditingId] = useState<number | null>(null);

    useEffect(() => {
        if (!username) return;
        const name = username;

        async function load() {
            setIsLoading(true);
            setError(null);
            try {
                let menu = await getUser(name);
                console.log(menu)
                if (menu === null) {
                    menu = fakeMenu;
                    await createUser(name, fakeMenu);
                }
                setSneakers(menu);
            } catch {
                setError("Impossible de charger le menu.");
            } finally {
                setIsLoading(false);
            }
        }
        load();
    }, [username]);


    const persist = (menu: Sneaker[]) => {
        setSneakers(menu);
        if (username) updateUserMenu(username, menu);   // garde ici → username: string
    };

    const addSneaker = (sneaker: Omit<Sneaker, "id">) => {
        persist([{ ...sneaker, id: Date.now() }, ...sneakers]);
    };

    const removeSneaker = (id: number) => {
        persist(sneakers.filter((s) => s.id !== id));
    };

    const updateSneaker = (id: number, changes: Omit<Sneaker, "id">) => {
        persist(sneakers.map((s) => (s.id === id ? { ...s, ...changes } : s)));
    };

    const startEditing = (id: number) => setEditingId(id);
    const cancelEditing = () => setEditingId(null);

    return (
        <SneakerContext.Provider value={{ sneakers, isLoading , error, editingId, addSneaker, removeSneaker, updateSneaker, startEditing, cancelEditing }}>
            {children}
        </SneakerContext.Provider>
    );
}