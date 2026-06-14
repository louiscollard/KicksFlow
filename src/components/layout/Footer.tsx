import { Logo } from "@/components/ui/Logo";
import { FiGithub } from "react-icons/fi";

export function Footer() {
    return (
        <footer className="mt-16 border-t border-line bg-paper">
            <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-10 sm:flex-row sm:items-start sm:justify-between">
                <div className="max-w-sm">
                    <Logo />
                    <p className="mt-3 text-sm text-ink-soft">
                        Marketplace de sneakers premium — authentifiées et photographiées en studio.
                        Projet de démonstration React + Firebase.
                    </p>
                </div>

                <div className="flex flex-col gap-2">
                    <span className="text-xs font-semibold uppercase tracking-widest text-ink-soft">Projet</span>
                    <a  href="https://github.com/louiscollard/KicksFlow"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-ink transition-colors hover:text-accent"
                    >
                        <FiGithub className="h-4 w-4" /> Code source
                    </a>
                </div>
            </div>

            <div className="border-t border-line">
                <div className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-5 text-xs text-ink-soft sm:flex-row sm:items-center sm:justify-between">
                    <span>© 2026 KicksFlow · Projet de démonstration</span>
                    <span>Réalisé par Louis Collard</span>
                </div>
            </div>
        </footer>
    );
}