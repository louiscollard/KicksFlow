import sneakerLogin from "@/assets/images/sneaker_login.jpg";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { Logo } from "@/components/ui/Logo";
import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { FiArrowRight } from "react-icons/fi";
import { useNavigate } from "react-router";

export function LoginPage() {
    const [username, setusername] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        navigate(`/order/${username}`);
    };

    return (
        <div className="grid min-h-screen lg:grid-cols-2">
            <div className="flex flex-col bg-paper px-8 py-10 sm:px-14">
                <header className="flex items-center justify-between">
                    <Logo />
                </header>

                <div className="mx-auto flex w-full max-w-md flex-1 flex-col justify-center py-12">
                    <h1 className="font-display text-5xl font-extrabold tracking-tighter text-ink">
                        Bienvenue.
                    </h1>
                    <p className="mt-4 text-ink-soft">
                        Connecte-toi pour suivre les drops et accéder à ton espace.
                    </p>

                    <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-5">
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="username" className="text-sm font-semibold text-ink">
                                Prénom* :
                            </Label>
                            <Input
                                id="username"
                                name="username"
                                type="text"
                                placeholder="Ex : Louis"
                                value={username}
                                onChange={(e) => setusername(e.target.value)}
                                icon={<CgProfile />}
                                required
                            />
                        </div>

                        <Button type="submit" icon={<FiArrowRight />}
                            className="mt-2 w-full justify-center rounded-full bg-ink py-4 text-base font-semibold text-paper hover:bg-black">
                            Accéder à mon espace
                        </Button>
                    </form>
                </div>
            </div>

            <aside className="relative hidden overflow-hidden bg-ink text-paper lg:block">
                <img src={sneakerLogin} alt="" className="absolute inset-0 h-full w-full object-cover" />
                
                <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/80 to-ink/40" />

                <div className="relative z-10 flex h-full flex-col justify-between p-12">
                    <div className="flex items-center justify-between">
                        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest backdrop-blur-sm">
                            <span className="h-2 w-2 rounded-full bg-volt" /> 12 480 paires en ligne
                        </span>
                    </div>

                    <div>
                        <h2 className="font-display text-5xl font-extrabold leading-none tracking-tight">
                            Ton vestiaire pour les <em className="italic text-accent">grails</em> — acheté, vendu, vérifié.
                        </h2>
                        <div className="mt-10 flex gap-12 border-t border-white/15 pt-6">
                            <div><div className="font-display text-3xl font-bold tabular-nums">99,4 %</div><div className="mt-1 text-sm text-white/60">Taux d'authentification</div></div>
                            <div><div className="font-display text-3xl font-bold tabular-nums">48 h</div><div className="mt-1 text-sm text-white/60">Paiement moyen</div></div>
                            <div><div className="font-display text-3xl font-bold tabular-nums">120k+</div><div className="mt-1 text-sm text-white/60">Membres</div></div>
                        </div>
                    </div>
                </div>
            </aside>
        </div>
    );
}