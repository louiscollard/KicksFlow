import { AdminTabs } from "@/components/admin/AdminTabs";
import { SneakerGrid } from "@/components/catalog/SneakerGrid";
import { Navbar } from "@/components/layout/Navbar/Navbar";
import { useAdmin } from "@/context/AdminContext";

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
