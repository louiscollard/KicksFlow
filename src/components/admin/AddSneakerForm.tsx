import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { useSneakers } from "@/context/SneakerContext";
import { useState } from "react";
import { FiImage, FiTag } from "react-icons/fi";

export function AddSneakerForm() {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [imageSource, setImageSource] = useState("");
    const [imageError, setImageError] = useState(false);
    const [isAvailable, setIsAvailable] = useState(true);
    const [isAdvertised, setIsAdvertised] = useState(false);

    const { addSneaker } = useSneakers();

    const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        addSneaker({ title, price: Number(price), imageSource, isAvailable, isAdvertised, quantity : 0});
        setTitle("");
        setPrice("");
        setImageSource("");
        setImageError(false);
        setIsAvailable(true);
        setIsAdvertised(false);
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex aspect-video items-center justify-center overflow-hidden rounded-xl border border-line bg-paper-2">
                {imageSource && !imageError ? (
                    <img src={imageSource} alt="Aperçu du produit"
                        onError={() => setImageError(true)}
                        className="h-full w-full object-contain p-3" />
                ) : (
                    <span className="text-sm text-ink-soft">
                        {imageError ? "Image introuvable" : "Aucune image"}
                    </span>
                )}
            </div>

            <Input aria-label="Nom du produit" icon={<FiTag />} name="title" value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Nom du produit (ex : Aero Strike)" required />

            <Input aria-label="Lien de l'image" icon={<FiImage />} type="url" name="image" value={imageSource}
                onChange={(e) => { setImageSource(e.target.value); setImageError(false); }}
                placeholder="Lien URL d'une image (https://…)" required />

            <Input aria-label="Prix en euros" icon={<span className="text-sm font-semibold">€</span>}
                type="number" min="0" step="0.01" name="price" value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Prix" required />

            <div className="flex items-center gap-6 rounded-xl border border-line px-3 py-2.5">
                <label className="flex items-center gap-2 text-sm text-ink">
                    <input type="checkbox" checked={isAvailable}
                        onChange={(e) => setIsAvailable(e.target.checked)} className="h-4 w-4 accent-ink" />
                    Disponible
                </label>
                <label className="flex items-center gap-2 text-sm text-ink">
                    <input type="checkbox" checked={isAdvertised}
                        onChange={(e) => setIsAdvertised(e.target.checked)} className="h-4 w-4 accent-ink" />
                    Mis en avant
                </label>
            </div>

            <Button type="submit" className="w-full">Ajouter le produit</Button>
        </form>
    );
}