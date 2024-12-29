import Timeline from '@/components/Timeline';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-background to-secondary">
        <Hero />
        <Timeline />
      </main>
    </>
  );
}