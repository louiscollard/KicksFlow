import { AdminTabs } from "@/components/admin/AdminTabs";
import { SneakerGrid } from "@/components/catalog/SneakerGrid";
import { Footer } from "@/components/layout/Footer";
import { Marquee } from "@/components/layout/Marquee";
import { Navbar } from "@/components/layout/Navbar/Navbar";
import { useAdmin } from "@/context/AdminContext";
import { useSneakers } from "@/context/SneakerContext";
import { NotFoundPage } from "@/pages/NotFound/NotFoundPage";
export function OrderPage() {
    const { isAdmin } = useAdmin();
    const { isLoading, notFound, error } = useSneakers();

    if (isLoading) return <p className="py-20 text-center text-ink-soft">Chargement du menu…</p>;

    if (notFound) {
        return (
            <NotFoundPage
                eyebrow="Espace introuvable"
                title="Cet utilisateur n'existe pas."
                description="Aucun espace ne correspond à ce nom. Connecte-toi avec ton prénom pour créer le tien."
            />
        );
    }

    return (
        <>
            <Navbar />
            <Marquee />
            <SneakerGrid />
            <Footer />
            {isAdmin && <AdminTabs />}
            {error && <p className="py-8 text-center text-accent">{error}</p>}
        </>
    );
}