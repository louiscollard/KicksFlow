import { AdminToggle } from "@/components/admin/AdminToggle";
import { CartButton } from "@/components/cart/CartButton";
import { Profile } from "./Profile";

export function NavbarRightSide() {
    return (
        <div className="ml-auto flex items-center gap-4">
            <AdminToggle/>
            <CartButton />
            <Profile/>
        </div>
    );
}