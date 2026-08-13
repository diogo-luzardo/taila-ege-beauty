import { motion } from 'motion/react';
import { Eye, Sparkles } from 'lucide-react';

const services = [
  {
    id: 'lash-design',
    title: 'Lash Design',
    description: 'Extensão de cílios personalizada para valorizar o seu olhar, desde um efeito mais natural até o mais volumoso e dramático.',
    icon: Eye,
    image: 'https://images.unsplash.com/photo-1599723223190-2e92c222fbaf?auto=format&fit=crop&q=80&w=800',
    techniques: ['Fio a Fio', 'Volume Brasileiro', 'Volume Russo', 'Lash Lifting']
  },
  {
    id: 'micropigmentation',
    title: 'Micropigmentação',
    description: 'Design estratégico e implantação de pigmento para corrigir falhas e definir o formato ideal das suas sobrancelhas de forma natural.',
    icon: Sparkles,
    image: 'https://images.unsplash.com/photo-1620288627223-53302f4e8c74?auto=format&fit=crop&q=80&w=800',
    techniques: ['Shadow (Esfumada)', 'Fio a Fio', 'Shadow Line', 'Design com Henna']
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-primary mb-6">Procedimentos</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group border-t border-border pt-8"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-background p-3 rounded-none border border-border">
                  <service.icon className="w-5 h-5 text-primary" />
                </div>
                <h4 className="text-2xl font-serif text-secondary italic">{service.title}</h4>
              </div>
              <p className="text-secondary/70 text-sm mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="grid grid-cols-2 gap-y-2 gap-x-4">
                {service.techniques.map((tech, i) => (
                  <li key={i} className="flex items-center text-xs text-secondary/80 font-bold uppercase tracking-wider">
                    <span className="w-1 h-1 rounded-none bg-primary mr-2"></span>
                    {tech}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
