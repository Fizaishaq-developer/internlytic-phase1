import { Github, Linkedin, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer id="about" className="bg-brand-deep text-white mt-20">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-brand-teal text-white font-display font-bold text-lg">
                I
              </span>
              <span className="font-display font-bold text-lg">
                Internlytic Technologies
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Empowering the next generation of technologists through structured,
              hands-on internship programs.
            </p>
          </div>

          <div>
            <h3 className="font-display font-semibold text-sm uppercase tracking-wider text-brand-teal mb-4">
              Internship Tracks
            </h3>
            <ul className="space-y-2 text-sm text-white/60">
              <li>Front-End Development</li>
              <li>Prompt Engineering</li>
              <li>Data Analytics</li>
              <li>UI/UX Design</li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-sm uppercase tracking-wider text-brand-teal mb-4">
              Connect
            </h3>
            <div className="flex gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/10 hover:bg-brand-teal transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/10 hover:bg-brand-teal transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/10 hover:bg-brand-teal transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Internlytic Technologies. All rights reserved.
          </p>
          <p className="text-xs text-white/40">
            Project data shown is fictional sample data for demonstration purposes.
          </p>
        </div>
      </div>
    </footer>
  );
}
