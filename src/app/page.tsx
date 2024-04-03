import Menu from "@/app/components/Menu/menu";
import Deals from "@/app/components/Deals/deals";
import Footer from "@/app/components/Footer/footer";
import Hero from "@/app/components/Hero/hero";
import Reviews from "@/app/components/Reviews/reviews";

export default function Home() {
  return (
    <main>
      <Hero />
      <Deals />
      <Menu />
      <Reviews />
      <Footer />
    </main>
  );
}
