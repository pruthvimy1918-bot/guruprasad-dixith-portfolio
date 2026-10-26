import Hero from "../components/Hero";
import ServicesSection from "../components/ServicesSection";
import AboutSection from "../components/AboutSection";
import GallerySection from "../components/GallerySection";
import Reviews from "../components/Reviews";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <AboutSection />
      <GallerySection preview />
      <section style={{ paddingTop: 0 }}><div className="wrap"><Reviews /></div></section>
    </>
  );
}
