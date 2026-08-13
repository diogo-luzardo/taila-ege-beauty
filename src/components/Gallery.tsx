import { motion } from 'motion/react';

const galleryImages = [
  'https://images.unsplash.com/photo-1587779313262-63b71946a482?auto=format&fit=crop&q=80&w=800', // Lashes
  'https://images.unsplash.com/photo-1616885232757-0b1a0391b48f?auto=format&fit=crop&q=80&w=800', // Brows
  'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800', // Salon/Tools
  'https://images.unsplash.com/photo-1599723223190-2e92c222fbaf?auto=format&fit=crop&q=80&w=800', // Close up eye
  'https://images.unsplash.com/photo-1512496015851-a1c848529457?auto=format&fit=crop&q=80&w=800', // Aesthetics
  'https://images.unsplash.com/photo-1596443686812-2f45229eebc3?auto=format&fit=crop&q=80&w=800', // Beautiful face
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-primary mb-6">Nossos Resultados</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative overflow-hidden aspect-square rounded-lg border-2 border-surface group cursor-pointer"
            >
              <img 
                src={src} 
                alt={`Trabalho ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/20 transition-colors duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
