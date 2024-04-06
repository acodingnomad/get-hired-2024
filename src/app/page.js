import Hero from "../pages/Hero";
import Feature from "../pages/Feature";
import Questions from "../pages/Questions";
import Content from "../pages/Content";
import Pricing from "../pages/Pricing";
import Newsletter from "../pages/Newsletter";
import Footer from "../pages/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Feature />
      <Content />
      <Pricing />
      <Questions />
      <Newsletter />
      <Footer />
    </main>
  );
}
