import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import CircularSkills from '@/components/CircularSkills'; // ফাইল ইম্পোর্ট করা হলো
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-500 selection:text-slate-950">
      <Navbar />
      <Hero />
      <CircularSkills /> 
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}