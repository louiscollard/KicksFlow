import { EmptyState } from "@/components/ui/EmptyState";
import { FiPackage } from "react-icons/fi";

export function SneakerGridEmpty({ isAdmin }: { isAdmin: boolean }) {
    if (isAdmin) {
        return (
            <EmptyState
                icon={FiPackage}
                eyebrow="Inventaire vide"
                title="Aucun produit."
                description="Ajoutez une première paire depuis le panneau admin, en bas de l'écran."
            />
        );
    }

    return (
        <EmptyState
            icon={FiPackage}
            eyebrow="Rupture de stock"
            title="Tout est parti."
            description="Nos dernières paires se sont envolées. Le prochain drop arrive bientôt."
        />
    );
}