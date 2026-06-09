import { cn } from "@/lib/cn";
import { useState } from "react";
import { FiChevronDown, FiEdit2, FiPlus } from "react-icons/fi";

const TABS = [
    { id: "add", label: "Ajouter", title: "Ajouter un produit", icon: FiPlus },
    { id: "edit", label: "Modifier", title: "Modifier un produit", icon: FiEdit2 },
] as const;

type TabId = (typeof TABS)[number]["id"];

export function AdminTabs() {
    const [activeTab, setActiveTab] = useState<TabId>("add");
    const [isOpen, setIsOpen] = useState(true);

    return (
        <section
            aria-label="Outils admin"
            className="fixed bottom-6 left-6 right-6 z-40 overflow-hidden rounded-card border border-line bg-paper shadow-[0_18px_50px_-18px_rgba(28,26,23,0.35)] sm:right-auto sm:w-100"
        >
            <div className="flex items-center justify-between gap-2 border-b border-line p-2">
                <div role="tablist" aria-label="Gestion des produits" className="flex gap-1">
                    {TABS.map(({ id, label, icon: Icon }) => {
                        const isActive = id === activeTab;
                        return (
                            <button
                                key={id}
                                type="button"
                                role="tab"
                                id={`tab-${id}`}
                                aria-selected={isActive}
                                aria-controls={`panel-${id}`}
                                onClick={() => setActiveTab(id)}
                                className={cn(
                                    "inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                                    isActive ? "bg-ink text-paper" : "text-ink-soft hover:bg-paper-2 hover:text-ink",
                                )}
                            >
                                <Icon className="h-4 w-4" />
                                {label}
                            </button>
                        );
                    })}
                </div>

                <button
                    type="button"
                    aria-label={isOpen ? "Replier le panneau" : "Déplier le panneau"}
                    aria-expanded={isOpen}
                    onClick={() => setIsOpen((o) => !o)}
                    className="grid h-8 w-8 shrink-0 place-items-center rounded-full text-ink-soft transition-colors hover:bg-paper-2 hover:text-ink"
                >
                    <FiChevronDown className={cn("h-4 w-4 transition-transform duration-200", !isOpen && "rotate-180")} />
                </button>
            </div>

            {isOpen && (
                <div role="tabpanel" id={`panel-${activeTab}`} aria-labelledby={`tab-${activeTab}`} className="p-4">
                    <h2 className="font-display text-base font-bold text-ink">
                        {TABS.find((t) => t.id === activeTab)!.title}
                    </h2>
                    <p className="mt-1 text-sm text-ink-soft">
                        {activeTab === "add"
                            ? "Le formulaire d'ajout viendra ici."
                            : "Clique un produit dans la grille pour le charger ici."}
                    </p>
                </div>
            )}
        </section>
    );
}