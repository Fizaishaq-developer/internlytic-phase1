import { ArrowDown, Sparkles } from 'lucide-react';

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-28 pb-16 lg:pt-40 lg:pb-24 bg-gradient-to-b from-surface-light to-white"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-teal/10 rounded-full blur-3xl" />
        <div className="absolute top-40 -left-32 w-80 h-80 bg-brand-deep/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-brand-teal/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 bg-white border border-brand-teal/20 rounded-full text-sm font-medium text-brand-teal shadow-sm animate-fade-in">
            <Sparkles size={14} />
            <span>Phase 1 Intern Projects</span>
          </div>

          <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-brand-deep leading-[1.1] tracking-tight animate-fade-in-up">
            Intern Projects Showcase
          </h1>

          <p className="mt-6 text-lg lg:text-xl text-brand-deep/70 leading-relaxed max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Explore the work of our Phase 1 interns across front-end development, prompt
            engineering, data analytics, and UI/UX design. Each project represents
            creativity, technical growth, and hands-on learning.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <button
              onClick={() => {
                const el = document.querySelector('#projects');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-7 py-3.5 bg-brand-teal text-white font-semibold rounded-xl hover:bg-brand-teal-dark transition-colors shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-transform"
            >
              Browse Projects
            </button>
            <button
              onClick={() => {
                const el = document.querySelector('#filters');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-7 py-3.5 bg-white text-brand-deep font-semibold rounded-xl border border-brand-deep/15 hover:border-brand-teal/40 hover:text-brand-teal transition-colors shadow-sm"
            >
              Filter by Track
            </button>
          </div>

          <div className="mt-14 flex items-center justify-center gap-8 text-brand-deep/50">
            <div className="text-center">
              <p className="font-display font-bold text-2xl text-brand-deep">8</p>
              <p className="text-sm mt-0.5">Sample Projects</p>
            </div>
            <div className="w-px h-10 bg-brand-deep/15" />
            <div className="text-center">
              <p className="font-display font-bold text-2xl text-brand-deep">4</p>
              <p className="text-sm mt-0.5">Internship Tracks</p>
            </div>
            <div className="w-px h-10 bg-brand-deep/15" />
            <div className="text-center">
              <p className="font-display font-bold text-2xl text-brand-deep">7</p>
              <p className="text-sm mt-0.5">Intern Contributors</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden lg:block">
        <ArrowDown size={20} className="text-brand-teal/40 animate-bounce" />
      </div>
    </section>
  );
}
