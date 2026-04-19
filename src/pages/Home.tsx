import { Hero } from '../components/Hero';
import { BentoGrid } from '../components/BentoGrid';
import { CaseStudies } from '../components/CaseStudies';
import { Marquee } from '../components/Marquee';
import { Process } from '../components/Process';
import { Contact } from '../components/Contact';

export function Home() {
  return (
    <main>
      <Hero />
      <Marquee />
      <BentoGrid />
      <CaseStudies />
      <Process />
      <Contact />
    </main>
  );
}
