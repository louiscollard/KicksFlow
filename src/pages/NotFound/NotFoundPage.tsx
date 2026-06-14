import { Logo } from "@/components/ui/Logo";
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router";

type NotFoundPageProps = {
    eyebrow?: string;
    title?: string;
    description?: string;
};

export function NotFoundPage({
    eyebrow = "Erreur 404",
    title = "Cette paire s'est envolée.",
    description = "La page que tu cherches n'existe pas — ou le drop est déjà terminé. Reviens à l'accueil pour retrouver ton espace.",
}: NotFoundPageProps)
    {
    return (
        <div className="relative flex min-h-screen flex-col bg-paper px-8 py-10 sm:px-14">
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                    backgroundImage:
                        "linear-gradient(135deg, transparent 46%, rgba(0,0,0,0.04) 46%, rgba(0,0,0,0.04) 54%, transparent 54%)",
                    backgroundSize: "16px 16px",
                }}
            />

            <header className="relative flex items-center justify-between">
                <Logo />
            </header>

            <main className="relative mx-auto flex w-full max-w-xl flex-1 flex-col items-center justify-center text-center">
                <span className="inline-flex items-center gap-2 rounded-full border border-line bg-paper-2 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest text-ink-soft">
                    <span className="h-2 w-2 rounded-full bg-accent" /> {eyebrow}
                </span>

                <div
                    aria-hidden
                    className="mt-8 font-display text-[7rem] font-extrabold leading-none tracking-tighter text-ink sm:text-[10rem]"
                >
                    4<span className="text-accent">0</span>4
                </div>

                <h1 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
                    {title}
                </h1>
                <p className="mt-4 max-w-md text-ink-soft">
                    {description}
                </p>

                <Link
                    to="/"
                    className="group mt-10 inline-flex items-center justify-center gap-2.5 rounded-full bg-ink px-6 py-3.5 text-[15px] font-semibold text-paper transition-all duration-200 hover:bg-black hover:shadow-[0_12px_30px_-12px_rgba(0,0,0,0.5)] active:translate-y-px"
                >
                    <span className="transition-transform duration-200 group-hover:-translate-x-0.5">
                        <FiArrowLeft />
                    </span>
                    Retour à l'accueil
                </Link>
            </main>
        </div>
    );
}