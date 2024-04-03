import Menu from "@/app/components/Menu/menu";
import Deals from "@/app/components/Deals/deals";
import Footer from "@/app/components/Footer/footer";
import Hero from "@/app/components/Hero/hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <Deals />
      <Menu />
      <Footer />
    </main>
  );
}
