import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, Sparkles, ZoomIn, MessageCircle } from 'lucide-react';

interface ResultItem {
  id: number;
  src: string;
  title: string;
  category: string;
  description: string;
}

const results: ResultItem[] = [
  {
    id: 1,
    src: `${import.meta.env.BASE_URL}procedimento1.jpeg`,
    title: 'Extensão de Cílios Volume',
    category: 'Lash Design',
    description: 'Volume personalizado com preenchimento harmonioso e fios ultraleves, proporcionando densidade e expressividade marcante ao olhar.',
  },
  {
    id: 2,
    src: `${import.meta.env.BASE_URL}procedimento2.jpeg`,
    title: 'Lash Lifting & Alinhamento',
    category: 'Lash Design',
    description: 'Curvatura e elevação dos fios naturais da raiz às pontas, promovendo um efeito de olhar aberto, radiante e elegante.',
  },
  {
    id: 3,
    src: `${import.meta.env.BASE_URL}procedimento3.jpeg`,
    title: 'Design Estruturado & Cílios',
    category: 'Sobrancelhas & Cílios',
    description: 'Harmonização facial completa com desenho simétrico de sobrancelhas e extensão delicada que destaca a cor natural dos olhos.',
  },
  {
    id: 4,
    src: `${import.meta.env.BASE_URL}procedimento4.jpeg`,
    title: 'Extensão Clássica Elegance',
    category: 'Lash Design',
    description: 'Aplicação precisa de fios selecionados que garantem sofisticação, conforto e acabamento impecável para o dia a dia.',
  },
  {
    id: 5,
    src: `${import.meta.env.BASE_URL}procedimento5.jpeg`,
    title: 'Micropigmentação Shadow Line',
    category: 'Micropigmentação',
    description: 'Correção de falhas com técnica esfumada suave e transição de tons sob medida para um preenchimento natural e duradouro.',
  },
  {
    id: 6,
    src: `${import.meta.env.BASE_URL}procedimento6.jpeg`,
    title: 'Design & Micropigmentação Fio a Fio',
    category: 'Sobrancelhas',
    description: 'Construção hiper-realista respeitando a anatomia dos arcos faciais, devolvendo densidade, moldura e jovialidade ao olhar.',
  },
];

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const selectedItem = selectedIndex !== null ? results[selectedIndex] : null;

  const handlePrev = useCallback(() => {
    setSelectedIndex((prev) => (prev === null ? null : (prev - 1 + results.length) % results.length));
  }, []);

  const handleNext = useCallback(() => {
    setSelectedIndex((prev) => (prev === null ? null : (prev + 1) % results.length));
  }, []);

  const handleClose = useCallback(() => {
    setSelectedIndex(null);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'Escape') handleClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, handleClose, handlePrev, handleNext]);

  return (
    <section id="gallery" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em]">Portfólio Exclusivo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-secondary mb-4 tracking-tight">
            Nossos <span className="italic text-primary font-normal">Resultados</span>
          </h2>
          <p className="text-secondary/70 text-sm sm:text-base leading-relaxed">
            Cada olhar é único. Conheça as transformações reais realizadas no estúdio, unindo técnicas avançadas, iluminação harmoniosa e precisão artística.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {results.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedIndex(index)}
              className="group relative overflow-hidden aspect-square rounded-xl bg-surface border border-border/80 shadow-xs hover:shadow-xl transition-all duration-500 cursor-pointer"
            >
              {/* Image */}
              <img
                src={item.src}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Tag Badge */}
              <div className="absolute top-3 left-3 z-10">
                <span className="px-2.5 py-1 text-[10px] font-semibold tracking-wider uppercase bg-background/90 text-secondary backdrop-blur-md rounded-md border border-border shadow-xs">
                  {item.category}
                </span>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/95 via-secondary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-serif text-lg tracking-wide text-white font-medium">
                      {item.title}
                    </h3>
                    <div className="p-1.5 rounded-full bg-primary text-background">
                      <ZoomIn className="w-4 h-4" />
                    </div>
                  </div>
                  <p className="text-xs text-white/80 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                  <span className="inline-block mt-3 text-[11px] text-primary-light font-medium tracking-wider uppercase underline underline-offset-4">
                    Clique para ampliar
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-sm text-secondary/70 mb-4">
            Gostou de algum dos nossos procedimentos? Agende sua avaliação personalizada.
          </p>
          <a
            href="https://wa.me/5511978293973?text=Olá!%20Vi%20os%20resultados%20no%20site%20e%20gostaria%20de%20agendar%20um%20horário."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary hover:bg-primary-dark text-background font-medium text-xs tracking-[0.18em] uppercase transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            <MessageCircle className="w-4 h-4" />
            Agendar pelo WhatsApp
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-secondary/85 backdrop-blur-md"
            onClick={handleClose}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-background rounded-2xl overflow-hidden shadow-2xl border border-primary/30 flex flex-col md:flex-row max-h-[90vh]"
            >
              {/* Close Button */}
              <button
                onClick={handleClose}
                aria-label="Fechar"
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-background/80 hover:bg-background text-secondary hover:text-primary transition-colors backdrop-blur-sm border border-border shadow-xs"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Prev Button */}
              <button
                onClick={handlePrev}
                aria-label="Foto anterior"
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 rounded-full bg-background/80 hover:bg-background text-secondary hover:text-primary transition-all backdrop-blur-sm border border-border shadow-md"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Next Button */}
              <button
                onClick={handleNext}
                aria-label="Próxima foto"
                className="absolute right-4 md:right-[calc(35%+1rem)] top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 rounded-full bg-background/80 hover:bg-background text-secondary hover:text-primary transition-all backdrop-blur-sm border border-border shadow-md"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Image Container */}
              <div className="w-full md:w-[65%] bg-black/5 flex items-center justify-center relative overflow-hidden min-h-[300px] md:min-h-[480px]">
                <img
                  src={selectedItem.src}
                  alt={selectedItem.title}
                  className="w-full h-full object-contain max-h-[60vh] md:max-h-[80vh]"
                />
                <div className="absolute bottom-3 left-3 bg-secondary/70 backdrop-blur-sm text-white px-2.5 py-1 rounded text-[11px] font-medium">
                  {selectedIndex! + 1} de {results.length}
                </div>
              </div>

              {/* Info Container */}
              <div className="w-full md:w-[35%] p-6 sm:p-8 flex flex-col justify-between border-t md:border-t-0 md:border-l border-border bg-surface/50">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-[10px] font-bold uppercase tracking-wider mb-3">
                    {selectedItem.category}
                  </span>
                  <h3 className="text-2xl font-serif text-secondary mb-3">
                    {selectedItem.title}
                  </h3>
                  <p className="text-sm text-secondary/75 leading-relaxed mb-6">
                    {selectedItem.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-border">
                  <a
                    href={`https://wa.me/5511978293973?text=Olá!%20Gostei%20muito%20do%20resultado%20"${encodeURIComponent(selectedItem.title)}"%20e%20gostaria%20de%20saber%20mais!`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-primary hover:bg-primary-dark text-background font-medium text-xs tracking-wider uppercase transition-all duration-300 shadow-sm hover:shadow-md"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Quero Esse Resultado
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
