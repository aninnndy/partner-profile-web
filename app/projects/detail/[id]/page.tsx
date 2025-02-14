import Footer from "@/app/Components/Footer";
import Navbar from "@/app/Components/Navbar";
import { Hero } from "@/app/pages/ProjectDetail/Hero";
import ClientSlider from "@/app/Components/Slider/ClientSlider";

const ProductDetail = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ClientSlider />
      <Footer />
    </>
  );
};

export default ProductDetail;
