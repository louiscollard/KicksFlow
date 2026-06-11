import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { useSneakers } from "@/context/SneakerContext";
import type { Sneaker } from "@/data/sneakers";
import { useState } from "react";
import { FiImage, FiTag } from "react-icons/fi";
import { toast } from "react-toastify";

type EditSneakerFormProps = {
    sneaker: Sneaker;
};

export function EditSneakerForm({ sneaker }: EditSneakerFormProps) {
    const { updateSneaker, cancelEditing } = useSneakers();

    const [title, setTitle] = useState(sneaker.title);
    const [price, setPrice] = useState(String(sneaker.price));
    const [imageSource, setImageSource] = useState(sneaker.imageSource);
    const [imageError, setImageError] = useState(false);
    const [isAvailable, setIsAvailable] = useState(sneaker.isAvailable);
    const [isAdvertised, setIsAdvertised] = useState(sneaker.isAdvertised);

    const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        updateSneaker(sneaker.id, {
            title,
            price: Math.round(Number(price) * 100) / 100,
            imageSource,
            isAvailable,
            isAdvertised
        });
        toast("Produit modifié", { icon: false });
        cancelEditing();
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex aspect-video items-center justify-center overflow-hidden rounded-xl border border-line bg-paper-2">
                {imageSource && !imageError ? (
                    <img src={imageSource} alt="" onError={() => setImageError(true)}
                        className="h-full w-full object-cover" />
                ) : (
                    <span className="flex flex-col items-center gap-1 text-ink-soft">
                        <FiImage className="h-6 w-6" />
                        <span className="text-xs">{imageError ? "Image introuvable" : "Aperçu"}</span>
                    </span>
                )}
            </div>


            <Input aria-label="Nom du produit" icon={<FiTag />} name="title" value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Nom du produit (ex : Aero Strike)" required />

            <Input aria-label="Lien de l'image" icon={<FiImage />} type="text" name="image" value={imageSource}
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

            <div className="flex gap-2">
                <Button type="submit" className="w-full">
                    Enregistrer
                </Button>
                <Button type="button" onClick={cancelEditing}
                    className="rounded-lg border border-line px-4 py-2 text-sm font-medium text-ink-soft transition-colors hover:bg-paper-2">
                    Annuler
                </Button>
            </div>
        </form>
    );
}