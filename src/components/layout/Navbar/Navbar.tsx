import { Logo } from "@/components/ui/Logo";
import { NavbarRightSide } from "./NavbarRightSide";

export function Navbar() {
    return (
        <header className="sticky top-0 z-50 border-b border-line bg-paper/80 backdrop-blur-md backdrop-saturate-150">
            <div className="mx-auto flex h-18 max-w-7xl items-center px-10">
                <Logo />
                <NavbarRightSide />
            </div>
        </header>
    );
}