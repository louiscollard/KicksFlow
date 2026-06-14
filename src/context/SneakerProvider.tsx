import { createUser, getUser, updateUserMenu } from "@/api/users";
import { SneakerContext } from "@/context/SneakerContext";
import { fakeMenu, type Sneaker } from "@/data/sneakers";
import { createId } from "@/lib/id";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import { toast } from "react-toastify";

export function SneakerProvider({ children }: { children: ReactNode }) {
    const { username } = useParams();
    const [sneakers, setSneakers] = useState<Sneaker[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [editingId, setEditingId] = useState<number | null>(null);
    const [notFound, setNotFound] = useState(false);

    const location = useLocation();
    const fromLogin = location.state?.fromLogin === true;

    useEffect(() => {
        if (!username) return;
        const name = username;

        async function load() {
            setIsLoading(true);
            setError(null);
            setNotFound(false);
            try {
                let menu = await getUser(name);
                if (menu === null) {
                    if (!fromLogin) {
                        setNotFound(true);
                        return;
                    }
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
    }, [username, fromLogin]);

    const persist = (menu: Sneaker[]) => {
        setSneakers(menu);
        if (username) {
            updateUserMenu(username, menu).catch(() => toast.error("Sauvegarde impossible"));
        }
    };

    const addSneaker = (sneaker: Omit<Sneaker, "id">) => {
        persist([{ ...sneaker, id: createId()}, ...sneakers]);
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
        <SneakerContext.Provider value={{ sneakers, isLoading , error, notFound, editingId, addSneaker, removeSneaker, updateSneaker, startEditing, cancelEditing }}>
            {children}
        </SneakerContext.Provider>
    );
}