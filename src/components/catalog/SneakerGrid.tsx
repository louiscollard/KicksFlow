import { SneakerCard } from "@/components/catalog/SneakerCard";
import { useSneakers } from "@/context/SneakerContext";

export function SneakerGrid() {
    const {sneakers} = useSneakers();
    return (
        <div className="my-8 mx-auto grid max-w-7xl grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
            {sneakers.map((sneaker) => (
                <SneakerCard 
                    key={sneaker.id} 
                    sneaker={sneaker}
                />
            ))}
        </div>
    );
}