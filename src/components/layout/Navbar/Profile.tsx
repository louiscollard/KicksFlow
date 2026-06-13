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
    }
    
    return (
        <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-100 text-sm font-bold text-amber-700">
                    {username?.charAt(0).toUpperCase()}
                </span>
                <span className="text-sm font-semibold text-gray-800">{username}</span>
            </div>
            <span className="h-5 w-px bg-gray-200" />
            <button
                onClick={handleLogout}
                className="flex items-center gap-1.5 rounded-lg px-2 py-1.5 text-sm font-medium text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
            >
                <FiLogOut className="h-4 w-4" />
                Se déconnecter
            </button>
        </div>
    )
}
