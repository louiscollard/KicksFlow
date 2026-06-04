export function LoginPage() {
    return (
        <div className="min-h-screen w-screen flex items-center justify-center bg-gray-50/50 px-4 antialiased">
            <div className="w-full max-w-md bg-white rounded-2xl p-8 shadow-xs border border-gray-100 flex flex-col gap-8">
                <div className="text-center">
                    <h1 className="text-2xl font-black tracking-tight text-gray-900 sm:text-3xl">
                        Bienvenue chez <br></br>
                        ⚡ KicksFlow
                    </h1>
                    <div className="mt-3 flex items-center justify-center gap-2">
                        <div className="h-px w-8 bg-gray-200"></div>
                            <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                            Connectez-vous
                            </h2>
                        <div className="h-px w-8 bg-gray-200"></div>
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-gray-700 uppercase tracking-wide">
                        Entrez votre prénom :
                        </label>
                        <input 
                        type="text" 
                        placeholder="Ex: Louis"
                        className="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 outline-hidden transition-all duration-200 hover:border-gray-300 focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/10"
                        />
                    </div>
                    <button className="w-full mt-2 rounded-xl bg-primary px-4 py-3.5 text-sm font-bold text-white shadow-sm transition-all duration-200 hover:bg-primary/90 hover:shadow-md active:scale-[0.99] cursor-pointer">
                        Accéder à votre espace
                    </button>
                </div>
            </div>
        </div>
    );
}