import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre Mim', href: '#about' },
    { name: 'Serviços', href: '#services' },
    { name: 'Resultados', href: '#gallery' },
    { name: 'Depoimentos', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header className="fixed w-full z-50 bg-background/95 backdrop-blur-md border-b border-primary/20 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 sm:h-24">
          <div className="flex-shrink-0 flex items-center">
            <a href="#home" className="flex items-center gap-3 group py-1">
              {!logoError ? (
                <img 
                  src={`${import.meta.env.BASE_URL}logoTaila.png`} 
                  alt="Taila Ege Beauty Logo" 
                  className="h-16 sm:h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  onError={() => setLogoError(true)}
                />
              ) : (
                <div id="logo-text-fallback" className="flex items-center justify-center p-2 border border-primary relative">
                  <div className="absolute inset-1 border border-primary/50"></div>
                  <div className="flex flex-col items-center z-10 px-4 py-2">
                    <span className="font-serif italic text-2xl tracking-tighter text-secondary">
                      Taila Ege
                    </span>
                    <span className="text-[8px] uppercase tracking-widest text-secondary mt-1">
                      Beauty
                    </span>
                  </div>
                </div>
              )}
            </a>
          </div>
          
          <nav className="hidden md:flex items-center space-x-7 lg:space-x-9">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative py-1 text-xs tracking-[0.2em] uppercase font-medium text-secondary/80 hover:text-primary transition-colors duration-300 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center">
            <a
              href="https://wa.me/5511978293973"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-full border border-primary text-primary hover:bg-primary hover:text-background transition-all duration-300 text-xs tracking-[0.18em] uppercase font-medium shadow-xs hover:shadow-sm"
            >
              Agendar
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-secondary hover:text-primary p-2 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-primary/20"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 text-base font-medium text-secondary hover:text-primary hover:bg-primary/5 rounded-md transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
