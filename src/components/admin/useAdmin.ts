import { createContext, useContext } from "react";

export type AdminContextType = {
    isAdmin: boolean; 
    toggleAdmin: () => void;
};

export const AdminContext = createContext<AdminContextType | null>(null);

export function useAdmin() {
    const ctx = useContext(AdminContext);
    if (!ctx) throw new Error("useAdmin doit être utilisé dans un AdminProvider");
    return ctx;
}