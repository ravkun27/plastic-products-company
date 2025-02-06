import Header from "./components/Header";
import Hero from "./components/Hero";
import FeaturedProducts from "./components/FeaturedProducts";
import Materials from "./components/Materials";
import Industries from "./components/Industries";
import ProductCategories from "./components/ProductCategories";
import Testimonials from "./components/Testimonials";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
import ContactPopup from "./components/ContactPopup";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-6">
      <Header />
      <Hero />
      <FeaturedProducts />
      <Materials />
      <Industries />
      <ProductCategories />
      <Testimonials />
      <CallToAction />
      <Footer />
      <ContactPopup />
    </main>
  );
}
