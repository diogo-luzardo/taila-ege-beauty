import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1512496015851-a1c848529457?auto=format&fit=crop&q=80&w=2000"
          alt="Lash extension background"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-background/80 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif text-secondary mb-6 leading-tight italic">
            Olhar que <br className="hidden sm:block" /><span className="text-primary">Transforma.</span>
          </h1>
          <p className="text-sm sm:text-base text-secondary/80 mb-10 font-normal max-w-2xl mx-auto leading-relaxed">
            Especialista em Lash Design e Micropigmentação de Sobrancelhas. 
            Focada em realçar sua beleza natural com sofisticação.
          </p>
          
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.me/5511999999999" // Replace with real number
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-secondary text-background px-8 py-4 rounded-full hover:bg-primary transition-colors shadow-lg hover:shadow-xl w-fit mx-auto"
          >
            <span className="text-sm font-bold uppercase tracking-widest">Agendar via WhatsApp</span>
            <MessageCircle className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
