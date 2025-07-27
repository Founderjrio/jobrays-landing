'use client';

import { useRef } from 'react';
import Hero from '../components/Hero';
import HowRayWorks from '../components/HowRayWorks';
import RayTeaser from '../components/RayTeaser';
import RayReveal from '../components/RayReveal';
import TrustSection from '../components/TrustSection';
import WaitlistForm from '../components/WaitlistForm';
import Footer from '../components/Footer';

export default function Home() {
  const howRayWorksRef = useRef<HTMLDivElement>(null);
  const waitlistRef = useRef<HTMLDivElement>(null);

  const scrollToHowRayWorks = () => {
    howRayWorksRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToWaitlist = () => {
    waitlistRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main>
      <Hero
        onWaitlistClick={scrollToWaitlist}
        onHowRayWorksClick={scrollToHowRayWorks}
      />

      <div ref={howRayWorksRef}>
        <HowRayWorks />
      </div>

      <RayTeaser />
      <RayReveal />
      <TrustSection />

      <div ref={waitlistRef}>
        <WaitlistForm />
      </div>

      <Footer />
    </main>
  );
}
