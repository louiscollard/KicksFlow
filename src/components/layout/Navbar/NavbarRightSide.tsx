import { AdminToggle } from "@/components/layout/Navbar/AdminToggle";
import { useState } from "react";
import { toast } from "react-toastify";
import { Profile } from "./Profile";

export function NavbarRightSide() {
    const [isAdmin, setIsAdmin] = useState(false);

    function toggleAdmin() {
        const next = !isAdmin;
        setIsAdmin(next);
        toast.info(next ? "Mode admin activé" : "Mode admin désactivé");

    }
    return (
        <div className="ml-auto flex items-center gap-4">
            <AdminToggle isAdmin={isAdmin} toggleAdmin={toggleAdmin}/>
            <Profile/>
        </div>
    );
}