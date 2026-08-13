import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Amanda Silva',
    text: 'A Taila é maravilhosa! Minhas sobrancelhas nunca ficaram tão bonitas. O ambiente é super aconchegante e o atendimento é impecável.',
    service: 'Micropigmentação Shadow'
  },
  {
    name: 'Carolina Mendes',
    text: 'Fiz extensão de cílios pela primeira vez e estou apaixonada. Super natural, não pesa e durou super bem. Recomendo de olhos fechados!',
    service: 'Volume Brasileiro'
  },
  {
    name: 'Juliana Costa',
    text: 'Profissionalismo define. Ela explicou todo o processo, tirou minhas dúvidas e o resultado ficou exatamente como eu queria. Amei demais.',
    service: 'Lash Lifting & Design de Sobrancelha'
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-primary mb-6">O que dizem as clientes</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="italic text-sm border-l-2 border-primary pl-4 py-1 flex flex-col justify-between"
            >
              <div className="flex text-primary mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-current" />
                ))}
              </div>
              <p className="text-secondary/90 leading-relaxed mb-4">"{testimonial.text}"</p>
              <div>
                <span className="block text-xs font-bold not-italic mt-2">— {testimonial.name}</span>
                <span className="block text-[10px] text-secondary/60 uppercase tracking-widest mt-1 not-italic">{testimonial.service}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
