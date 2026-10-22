import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Projects', href: '#projects' },
    { label: 'Tracks', href: '#filters' },
    { label: 'About', href: '#about' },
  ];

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-brand-teal/10'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2.5 group"
            aria-label="Internlytic Technologies home"
          >
            <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-brand-teal text-white font-display font-bold text-lg transition-transform group-hover:scale-105">
              I
            </span>
            <span
              className={`font-display font-bold text-lg lg:text-xl tracking-tight transition-colors ${
                scrolled ? 'text-brand-deep' : 'text-brand-deep'
              }`}
            >
              Internlytic<span className="text-brand-teal"> Technologies</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="px-4 py-2 text-sm font-medium text-brand-deep/80 hover:text-brand-teal hover:bg-surface-light rounded-lg transition-colors"
              >
                {link.label}
              </button>
            ))}
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#projects');
              }}
              className="ml-2 px-5 py-2 text-sm font-semibold text-white bg-brand-teal hover:bg-brand-teal-dark rounded-lg transition-colors shadow-sm"
            >
              View Showcase
            </a>
          </div>

          <button
            className="md:hidden p-2 text-brand-deep rounded-lg hover:bg-surface-light transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden pb-4 animate-slide-up">
            <div className="flex flex-col gap-1 bg-white rounded-2xl p-3 shadow-lg border border-brand-teal/10">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="px-4 py-3 text-left text-sm font-medium text-brand-deep/80 hover:text-brand-teal hover:bg-surface-light rounded-lg transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => handleNavClick('#projects')}
                className="px-4 py-3 text-center text-sm font-semibold text-white bg-brand-teal hover:bg-brand-teal-dark rounded-lg transition-colors mt-1"
              >
                View Showcase
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
