import { AdminTabs } from "@/components/admin/AdminTabs";
import { SneakerGrid } from "@/components/catalog/SneakerGrid";
import { Footer } from "@/components/layout/Footer";
import { Marquee } from "@/components/layout/Marquee";
import { Navbar } from "@/components/layout/Navbar/Navbar";
import { useAdmin } from "@/context/AdminContext";

export function OrderPage() {
    const { isAdmin } = useAdmin();
    return (
        <>
            <Navbar />
            <Marquee />
            <SneakerGrid />
            <Footer />
            { isAdmin && <AdminTabs /> }
        </>
    )
}
