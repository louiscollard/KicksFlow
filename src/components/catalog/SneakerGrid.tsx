import { SneakerCard } from "@/components/catalog/SneakerCard";
import { sneakersData } from "@/data/sneakers";

export function SneakerGrid() {
    return (
        <div className="my-8 mx-auto grid max-w-7xl grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-4">
            {sneakersData.LARGE.map((sneaker) => (
                <SneakerCard key={sneaker.id} sneaker={sneaker} />
            ))}
        </div>
    );
}