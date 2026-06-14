import { Logo } from "@/components/ui/Logo";
import { FiGithub, FiLinkedin } from "react-icons/fi";

export function Footer() {
    return (
        <footer className="mt-16 border-t border-line bg-paper">
            <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-10 sm:flex-row sm:items-start sm:justify-between">
                <div className="max-w-sm">
                    <Logo />
                    <p className="mt-3 text-sm text-ink-soft">
                        Marketplace de sneakers — projet de démonstration.
                    </p>
                </div>

                <div className="flex flex-col gap-2">
                    <span className="text-xs font-semibold uppercase tracking-widest text-ink-soft">Projet</span>
                    <a
                        href="https://github.com/louiscollard/KicksFlow"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-ink transition-colors hover:text-accent"
                    >
                        <FiGithub className="h-4 w-4" /> Code source
                    </a>
                    <a
                        href="https://www.linkedin.com/in/collard-louis/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-ink transition-colors hover:text-accent"
                    >
                        <FiLinkedin className="h-4 w-4" /> Louis Collard
                    </a>
                </div>
            </div>

            <div className="border-t border-line">
                <div className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-5 text-xs text-ink-soft sm:flex-row sm:items-center sm:justify-between">
                    <span>© 2026 KicksFlow</span>
                    <span>React · TypeScript · Tailwind · Firebase · Images générées par IA</span>
                </div>
            </div>
        </footer>
    );
}