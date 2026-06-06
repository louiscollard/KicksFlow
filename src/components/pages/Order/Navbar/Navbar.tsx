import { Logo } from "@/components/ui/Logo";
import { NavbarRightSide } from "./NavbarRightSide";

export function Navbar() {
    return (
        <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-md">
            <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
                <Logo className="text-lg" />
                <NavbarRightSide />
            </nav>
        </header>
    );
}
