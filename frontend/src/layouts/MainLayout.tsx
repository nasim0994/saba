import Footer from "@/components/shared/Footer/Footer";
import Header from "@/components/shared/Header/Header";
import TopHeader from "@/components/shared/Header/TopHeader";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <>
      <TopHeader />
      <Header />
      <main className="min-h-[85vh]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
