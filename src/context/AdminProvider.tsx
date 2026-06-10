import { AdminContext } from "@/context/AdminContext";
import { type ReactNode, useState } from "react";
import { toast } from "react-toastify";
export function AdminProvider({ children }: { children: ReactNode }) {
    const [isAdmin, setIsAdmin] = useState(false);
    
    const toggleAdmin = () => {
        const next = !isAdmin;
        setIsAdmin(next);
        toast(next ? "Mode admin activé" : "Mode admin désactivé");
    };

    return (
        <AdminContext.Provider value={{ isAdmin, toggleAdmin }}>
            {children}
        </AdminContext.Provider>
    );
}