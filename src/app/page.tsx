import Menu from "@/app/components/Menu/menu";
import Deals from "@/app/components/Deals/deals";
import Footer from "@/app/components/Footer/footer";

export default function Home() {
  return (
    <main>
      <Deals />
      <Menu />
      <Footer />
    </main>
  );
}
