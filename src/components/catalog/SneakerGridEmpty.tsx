import { Button } from "@/components/ui/Button";
import { EmptyState } from "@/components/ui/EmptyState";
import { useSneakers } from "@/context/SneakerContext";
import { FiPackage, FiRefreshCw } from "react-icons/fi";

export function SneakerGridEmpty({ isAdmin }: { isAdmin: boolean }) {
    const { regenerateMenu } = useSneakers();

    if (isAdmin) {
        return (
            <EmptyState
                icon={FiPackage}
                eyebrow="Inventaire vide"
                title="Aucun produit."
                description="Ajoute une paire depuis le panneau admin, ou régénère le catalogue de démo."
                action={
                    <Button onClick={regenerateMenu} icon={<FiRefreshCw />}>
                        Générer de nouveaux produits
                    </Button>
                }
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