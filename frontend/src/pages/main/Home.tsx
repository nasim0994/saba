import Categories from "@/components/modules/home/Categories";
import Hero from "@/components/modules/home/Hero";
import Products from "@/components/modules/home/Products";
import Services from "@/components/modules/home/Services";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Categories />
      <Products />
    </>
  );
}
