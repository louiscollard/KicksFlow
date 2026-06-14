import { SneakerCard } from "@/components/catalog/SneakerCard";
import { SneakerCardSkeleton } from "@/components/catalog/SneakerCardSkeleton";
import { Button } from "@/components/ui/Button";
import { EmptyState } from "@/components/ui/EmptyState";
import { useAdmin } from "@/context/AdminContext";
import { useSneakers } from "@/context/SneakerContext";
import { FiAlertTriangle, FiRefreshCw } from "react-icons/fi";
import { SneakerGridEmpty } from "./SneakerGridEmpty";

export function SneakerGrid() {
    const { sneakers, isLoading, error, removeSneaker, startEditing } = useSneakers();
    const { isAdmin } = useAdmin();

    return (
        <div className="my-8 mx-auto grid max-w-7xl grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
            {isLoading ? (
                Array.from({ length: 8 }).map((_, i) => <SneakerCardSkeleton key={i} />)
            ) : error ? (
                <EmptyState
                    icon={FiAlertTriangle}
                    eyebrow="Erreur"
                    title="Impossible de charger le menu."
                    description="Une erreur est survenue en contactant le serveur. Vérifie ta connexion et réessaie."
                    action={
                        <Button onClick={() => window.location.reload()} icon={<FiRefreshCw />}>
                            Réessayer
                        </Button>
                    }
                />
            ) : sneakers.length === 0 ? (
                <SneakerGridEmpty isAdmin={isAdmin} />
            ) : (
                sneakers.map((sneaker) => (
                    <SneakerCard
                        key={sneaker.id}
                        sneaker={sneaker}
                        isAdmin={isAdmin}
                        removeSneaker={removeSneaker}
                        startEditing={startEditing}
                    />
                ))
            )}
        </div>
    );
}