/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';

export default function App() {
  return (
    <div className="min-h-screen bg-background font-sans text-secondary">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
