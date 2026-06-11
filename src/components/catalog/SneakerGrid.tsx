import { SneakerCard } from "@/components/catalog/SneakerCard";
import { useAdmin } from "@/context/AdminContext";
import { useSneakers } from "@/context/SneakerContext";
import { SneakerGridEmpty } from "./SneakerGridEmpty";

export function SneakerGrid() {
    const { sneakers , removeSneaker , startEditing } = useSneakers();
    const { isAdmin } = useAdmin();

    return (
        <div className="my-8 mx-auto grid max-w-7xl grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
            {sneakers.length === 0 ? (
                <SneakerGridEmpty
                    isAdmin={isAdmin}
                />
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