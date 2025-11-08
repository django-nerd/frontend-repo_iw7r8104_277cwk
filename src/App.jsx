import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import CTABanner from './components/CTABanner';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Header />
      <main>
        <Hero />
        <Features />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
}

export default App;
