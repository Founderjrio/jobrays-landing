import Hero from '../components/Hero';
import HowRayWorks from '../components/HowRayWorks';
import RayTeaser from '../components/RayTeaser';
import RayReveal from '../components/RayReveal';
import TrustSection from '../components/TrustSection';
import WaitlistForm from '../components/WaitlistForm';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <HowRayWorks />
      <RayTeaser />
      <RayReveal />
      <TrustSection />
      <WaitlistForm />
      <Footer />
    </main>
  );
}
