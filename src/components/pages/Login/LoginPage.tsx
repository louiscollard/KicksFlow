import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { Logo } from "@/components/ui/Logo";
import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router";

export function LoginPage() {
    const [firstName , setFirstName] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault()
        navigate(`/order/${firstName}`)
    }

    return (
        <div className="min-h-screen w-screen flex items-center justify-center bg-gray-50/50 px-4 antialiased">
            <div className="w-full max-w-md bg-white rounded-2xl p-8 shadow-xs border border-gray-100 flex flex-col gap-8">
                <div className="text-center">
                    <h1 className="text-2xl font-black tracking-tight text-gray-900 sm:text-3xl">
                        Bienvenue chez
                        <Logo className="flex justify-center" />
                    </h1>

                    <div className="mt-3 flex items-center justify-center gap-2">
                        <div className="h-px w-8 bg-gray-200"></div>
                        <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                            Connectez-vous
                        </h2>
                        <div className="h-px w-8 bg-gray-200"></div>
                    </div>
                </div>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1.5">
                        <Label htmlFor="firstName" className="text-xs font-bold text-gray-700 uppercase tracking-wide">
                            Entrez votre prénom :
                        </Label>
                        <Input
                            id="firstName"
                            name="firstName"
                            type="text"
                            placeholder="Ex: Louis"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            icon={<CgProfile/>}
                            required
                        />
                    </div>
                    <Button type="submit" className="w-full mt-2" icon={<IoIosArrowForward />}>
                        Accéder à votre espace
                    </Button>
                </form>
            </div>
        </div>
    );
}