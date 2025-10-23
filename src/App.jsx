import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import SideNavigation from './components/SideNavigation.jsx';
import HomeSection from './sections/HomeSection.jsx';
import PhotographySection from './sections/PhotographySection.jsx';
import ArtSection from './sections/ArtSection.jsx';
import TravelSection from './sections/TravelSection.jsx';
import ContactSection from './sections/ContactSection.jsx';
import BookingSection from './sections/BookingSection.jsx';

const sections = [
  { id: 'home', label: 'Home', component: HomeSection },
  { id: 'photography', label: 'Photography', component: PhotographySection },
  { id: 'contact', label: 'Contact', component: ContactSection },
  { id: 'booking', label: 'Booking', component: BookingSection },
  { id: 'art', label: 'Art', component: ArtSection },
  { id: 'travel', label: 'Travel', component: TravelSection }
];

const glowVariants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: {
    opacity: [0.15, 0.35, 0.15],
    scale: [0.8, 1.1, 0.8],
    transition: { duration: 12, repeat: Infinity }
  }
};

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.45 }
    );

    const elements = sections
      .map((section) => document.getElementById(section.id))
      .filter((el) => el !== null);

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const sectionComponents = useMemo(
    () =>
      sections.map((section) => {
        const Component = section.component;
        return { ...section, element: <Component /> };
      }),
    []
  );

  const handleNavigate = (id) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-slate-950 text-slate-100">
      <motion.div
        variants={glowVariants}
        initial="initial"
        animate="animate"
        className="pointer-events-none absolute -left-32 top-40 h-96 w-96 rounded-full bg-aurora/25 blur-3xl"
      />
      <motion.div
        variants={glowVariants}
        initial="initial"
        animate="animate"
        className="pointer-events-none absolute right-[-120px] top-1/3 h-[28rem] w-[28rem] rounded-full bg-magenta/20 blur-3xl"
      />
      <div className="pointer-events-none fixed inset-0 opacity-30 mix-blend-screen" style={{ backgroundImage: 'radial-gradient(circle, rgba(148, 163, 184, 0.25) 0%, rgba(15, 23, 42, 0.8) 60%, rgba(15, 23, 42, 1) 100%)' }} />

      <SideNavigation
        activeSection={activeSection}
        onNavigate={handleNavigate}
        sections={sections.map(({ id, label }) => ({ id, label }))}
      />

      <main className="relative z-10 flex flex-col gap-28 pb-32 pl-0 transition-all duration-500 lg:pl-72">
        {sectionComponents.map(({ id, element, label }) => (
          <section
            id={id}
            key={id}
            className="relative mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 pt-24 lg:px-12"
          >
            <header className="flex items-center gap-4">
              <span className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-aurora/60 to-transparent" />
              <h2 className="font-grotesk text-3xl font-semibold uppercase tracking-[0.4rem] text-slate-200 lg:text-4xl">
                {label}
              </h2>
              <span className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-aurora/60 to-transparent" />
            </header>
            {element}
          </section>
        ))}
      </main>
    </div>
  );
}
