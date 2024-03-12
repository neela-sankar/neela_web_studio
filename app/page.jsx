import About from "@/components/About";
import Hero from "@/components/Hero";
import Review from "@/components/Review";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Cta from "@/components/Cta";



export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Work />
      <Review />
      <Cta />
    </main>
  );
}
