import { motion } from 'motion/react';
import { MessageCircle, Sparkles, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative pt-24 sm:pt-28 pb-8 sm:pb-10 overflow-hidden">
      {/* Background Image with Ambient Warmth */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1512496015851-a1c848529457?auto=format&fit=crop&q=80&w=2000"
          alt="Lash extension background"
          className="w-full h-full object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background"></div>
        {/* Soft luxury gold glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] bg-primary/15 rounded-full blur-3xl pointer-events-none"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl mx-auto"
        >
          {/* Luxury Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface border border-primary/30 text-primary mb-3 sm:mb-4 shadow-xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span className="text-[11px] sm:text-xs tracking-[0.2em] uppercase font-semibold">
              Studio Exclusivo de Beleza
            </span>
          </motion.div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif text-secondary mb-3 sm:mb-4 leading-[1.15] italic">
            Olhar que <span className="text-primary not-italic font-normal">Transforma.</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-secondary/80 mb-6 font-normal max-w-xl mx-auto leading-relaxed">
            Especialista em Lash Design e Micropigmentação de Sobrancelhas. 
            Realçando a sua beleza natural com delicadeza, sofisticação e precisão.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-6 sm:mb-8">
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="https://wa.me/5511978293973"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-secondary text-background px-7 py-3 rounded-full hover:bg-primary transition-all duration-300 shadow-md hover:shadow-lg w-full sm:w-auto justify-center"
            >
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.16em]">Agendar via WhatsApp</span>
              <MessageCircle className="w-4 h-4" />
            </motion.a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-primary/40 text-secondary hover:border-primary hover:text-primary transition-all duration-300 text-xs sm:text-sm font-medium tracking-[0.14em] uppercase w-full sm:w-auto justify-center bg-background/60 backdrop-blur-xs"
            >
              Ver Procedimentos
            </a>
          </div>

          {/* Social Proof & Quality Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="pt-4 border-t border-primary/20 grid grid-cols-3 gap-3 sm:gap-6 max-w-md mx-auto text-center"
          >
            <div className="flex flex-col items-center">
              <div className="flex items-center text-primary mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-[10px] sm:text-[11px] tracking-wider uppercase text-secondary/70 font-medium">Nota 5.0</span>
            </div>
            <div className="flex flex-col items-center border-x border-primary/20 px-2">
              <span className="text-sm sm:text-base font-serif font-bold text-secondary">+500</span>
              <span className="text-[10px] sm:text-[11px] tracking-wider uppercase text-secondary/70 font-medium">Atendimentos</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-sm sm:text-base font-serif font-bold text-secondary">100%</span>
              <span className="text-[10px] sm:text-[11px] tracking-wider uppercase text-secondary/70 font-medium">Personalizado</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
