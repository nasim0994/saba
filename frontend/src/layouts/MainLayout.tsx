import Footer from "@/components/shared/Footer/Footer";
import Header from "@/components/shared/Header/Header";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <>
      <Header />
      <main className="min-h-[85vh]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
