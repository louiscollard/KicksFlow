import { AdminTabs } from "@/components/admin/AdminTabs";
import { useAdmin } from "@/components/admin/useAdmin";
import { SneakerGrid } from "@/components/catalog/SneakerGrid";
import { Navbar } from "@/components/layout/Navbar/Navbar";

export function OrderPage() {
    const { isAdmin } = useAdmin();
    return (
        <>
            <Navbar />
            <SneakerGrid />
            { isAdmin && <AdminTabs /> }
        </>
    )
}
