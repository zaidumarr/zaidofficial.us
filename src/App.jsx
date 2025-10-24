import { useEffect, useState } from 'react';

const galleryImages = [
  'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1526226128118-9918f71ef07e?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1500530855697-7e87fbbab986?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80'
];

const navLinks = [
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' }
];

export default function App() {
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          } else {
            entry.target.classList.remove('is-visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setNavOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="page">
      <header className="site-header">
        <nav className="site-nav">
          <a className="site-logo" href="#home" aria-label="Zaid Umar home">
            ZAID UMAR
          </a>
          <button
            className={`nav-toggle${navOpen ? ' is-active' : ''}`}
            type="button"
            aria-expanded={navOpen}
            aria-label="Toggle navigation"
            onClick={() => setNavOpen((prev) => !prev)}
          >
            <span />
            <span />
            <span />
          </button>
          <ul className={`site-links${navOpen ? ' is-open' : ''}`}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setNavOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main id="home" className="site-main">
        <section className="hero">
          <div className="hero__inner">
            <p className="eyebrow">Photographer • Designer • Creative Technologist</p>
            <h1 className="hero__heading">
              Capturing stories across cities, lights, and emotion — one frame at a time.
            </h1>
            <p className="hero__description">
              I&apos;m Zaid Umar, a Seattle-based creative focused on cinematic photography, design systems, and immersive
              digital experiences. Explore a curated selection of projects and imagery below.
            </p>
            <div className="hero__actions">
              <a className="cta" href="#work">
                View Portfolio
              </a>
              <a className="cta secondary" href="mailto:zaiduboston@gmail.com">
                Contact
              </a>
            </div>
          </div>
        </section>

        <section id="work" className="section reveal">
          <div className="section__inner">
            <h2>Selected Works</h2>
            <div className="gallery">
              {galleryImages.map((src, index) => (
                <figure className="gallery__item" key={src}>
                  <img src={src} alt={`Gallery item ${index + 1}`} loading="lazy" />
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="section reveal">
          <div className="section__inner section__inner--narrow">
            <h2>About</h2>
            <p>
              My work bridges photography, product thinking, and technology. From intimate portrait sessions to cinematic travel
              narratives and interactive experiences, I focus on pairing precise technical execution with emotive storytelling.
              Currently based in Seattle, available for commissions worldwide.
            </p>
          </div>
        </section>

        <section id="contact" className="section reveal">
          <div className="section__inner section__inner--narrow">
            <h2>Contact</h2>
            <p>
              Let&apos;s collaborate on your next visual story. For bookings, partnerships, or creative inquiries, send an email and
              I&apos;ll respond within two business days.
            </p>
            <a className="cta" href="mailto:zaiduboston@gmail.com">
              Get in Touch
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>© {new Date().getFullYear()} Zaid Umar. All rights reserved.</p>
        <div className="footer-links">
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
            YouTube
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </footer>
    </div>
  );
}
