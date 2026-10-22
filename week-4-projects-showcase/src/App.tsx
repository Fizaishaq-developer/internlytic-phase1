import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { ProjectsPage } from '@/components/ProjectsPage';
import { Footer } from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-surface-light">
      <Navbar />
      <main>
        <Hero />
        <ProjectsPage />
      </main>
      <Footer />
    </div>
  );
}

export default App;
