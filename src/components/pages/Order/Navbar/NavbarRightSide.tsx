import { AdminToggle } from "@/components/pages/Order/Navbar/AdminToggle";
import { Profile } from "@/components/pages/Order/Navbar/Profile";
import { useState } from "react";
import { toast } from "react-toastify";

export function NavbarRightSide() {
    const [isAdmin, setIsAdmin] = useState(false);

    function toggleAdmin() {
        const next = !isAdmin;
        setIsAdmin(next);
        toast.info(next ? "Mode admin activé" : "Mode admin désactivé");

    }

    return (
        <>
            <AdminToggle isAdmin={isAdmin} toggleAdmin={toggleAdmin}/>
            <Profile/>
        </>
    )
}
