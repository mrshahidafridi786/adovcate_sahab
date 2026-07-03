import Hero from '@/components/hero';
import About from '@/components/about';
import Services from '@/components/services';
import Experience from '@/components/experience';
import Education from '@/components/education';
import Skills from '@/components/skills';
import Achievements from '@/components/achievements';
import WhyChooseMe from '@/components/why-choose-me';
import Testimonials from '@/components/testimonials';
import FAQ from '@/components/faq';
import Contact from '@/components/contact';

export default function Home() {
  return (
    <main className="relative w-full overflow-hidden">
      <Hero />
      <About />
      <Services />
      <Experience />
      <Education />
      <Skills />
      <Achievements />
      <WhyChooseMe />
      <Testimonials />
      <FAQ />
      <Contact />
    </main>
  );
}
