import GallerySection from "../components/GallerySection";
import Reviews from "../components/Reviews";
export default function Gallery() {
  return (
    <>
      <GallerySection />
      <section style={{ paddingTop: 0 }}><div className="wrap"><Reviews /></div></section>
    </>
  );
}
