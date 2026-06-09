import { AdminToggle } from "@/components/admin/AdminToggle";
import { Profile } from "./Profile";

export function NavbarRightSide() {
    return (
        <div className="ml-auto flex items-center gap-4">
            <AdminToggle/>
            <Profile/>
        </div>
    );
}