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
      { threshold: 0.18 }
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
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header" role="banner">
        <nav className="site-nav" aria-label="Primary navigation">
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
            <li>
              <a href="/assets/Resume-Zaid-Umar.pdf" target="_blank" rel="noopener noreferrer">
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main id="main" className="site-main">
        <section className="hero">
          <div className="hero__inner">
            <p className="eyebrow">Photographer • Developer • Creative Technologist</p>
            <h1 className="hero__heading">I build dependable developer tools and tell stories through imagery.</h1>
            <p className="hero__description">
              I&apos;m Zaid Umar — I combine engineering rigor with creative practice to ship polished web experiences,
              APIs, and cinematic photography. Based in the PNW; available for remote and on-site work.
            </p>

            <div className="hero__actions">
              <a className="cta" href="#work">
                View Portfolio
              </a>
              <a className="cta secondary" href="mailto:hello@zaidofficial.us">
                Contact
              </a>
            </div>
          </div>
        </section>

        <section id="work" className="section reveal">
          <div className="section__inner">
            <h2>Selected Works</h2>
            <div className="gallery" aria-live="polite">
              {galleryImages.map((src, index) => (
                <figure className="gallery__item" key={src}>
                  <img src={src} alt={`Portfolio image ${index + 1}`} loading="lazy" width="600" height="400" />
                  <figcaption className="sr-only">Portfolio image {index + 1}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="section reveal">
          <div className="section__inner section__inner--narrow">
            <h2>About</h2>
            <p>
              I combine product thinking, infrastructure, and visual storytelling. My background spans release orchestration,
              API development, and photo/video production. I enjoy building tools that save teams time and craft that connects with
              people.
            </p>
            <p>
              Tech: JavaScript/TypeScript, React, Node, Docker, Postgres. Photography: cinematic portraits, travel, aerial.
            </p>
          </div>
        </section>

        <section id="contact" className="section reveal">
          <div className="section__inner section__inner--narrow">
            <h2>Contact</h2>
            <p>
              For commissions, collaborations, or engineering work, email <a href="mailto:hello@zaidofficial.us">hello@zaidofficial.us</a>.
            </p>
            <p className="small">I aim to respond within two business days.</p>
          </div>
        </section>
      </main>

      <footer className="site-footer" role="contentinfo">
        <p>© {new Date().getFullYear()} Zaid Umar. All rights reserved.</p>
        <div className="footer-links">
          <a href="https://github.com/zaidumarr" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        </div>
      </footer>
    </div>
  );
}