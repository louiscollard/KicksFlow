import { useCart } from "@/context/CartContext";
import { FiLogOut } from "react-icons/fi";
import { useNavigate, useParams } from "react-router";

export function Profile() {
    const { username } = useParams();
    const { clearCart } = useCart();
    const navigate = useNavigate();

    const handleLogout = () => {
        clearCart();
        navigate("/");
    };

    return (
        <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ink text-sm font-bold text-paper">
                    {username?.charAt(0).toUpperCase()}
                </span>
                <span className="text-sm font-semibold text-ink">{username}</span>
            </div>
            <span className="h-5 w-px bg-line" />
            <button
                onClick={handleLogout}
                className="flex items-center gap-1.5 rounded-lg px-2 py-1.5 text-sm font-medium text-ink-soft transition-colors hover:bg-paper-2 hover:text-ink cursor-pointer"
            >
                <FiLogOut className="h-4 w-4" />
                Se déconnecter
            </button>
        </div>
    );
}