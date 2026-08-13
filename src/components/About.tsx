import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Image Container with decorative border */}
            <div className="relative aspect-[4/5] rounded-tr-[100px] rounded-bl-[100px] overflow-hidden border-4 border-primary p-2 z-10 bg-background">
              <div className="w-full h-full rounded-tr-[90px] rounded-bl-[90px] overflow-hidden bg-border">
                <img
                  src="/taila.jpeg"
                  alt="Taila Ege - Especialista em Beleza"
                  className="w-full h-full object-cover object-center"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800";
                  }}
                />
              </div>
            </div>
            {/* Removed background shape as the border is on the image container now */}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-xs font-bold uppercase tracking-widest text-primary mb-6">Sobre Mim</h2>
            <h3 className="text-3xl sm:text-4xl font-serif text-secondary mb-6 italic">
              Olá, eu sou a Taila.
            </h3>
            <div className="space-y-4 text-secondary/80 font-normal leading-relaxed text-sm">
              <p>
                Sou apaixonada por elevar a autoestima das mulheres através de um olhar expressivo e sobrancelhas perfeitamente desenhadas. Com anos de experiência no mercado da beleza, me especializei em técnicas avançadas de Lash Design e Micropigmentação.
              </p>
              <p>
                Meu objetivo é entregar um resultado extremamente natural, respeitando o formato do seu rosto e o seu estilo pessoal. Acredito que a verdadeira beleza está nos detalhes e no cuidado minucioso com cada cliente.
              </p>
            </div>
            
            <div className="mt-10 grid grid-cols-2 gap-6">
              <div className="border-l-2 border-primary pl-4">
                <p className="text-3xl font-serif text-secondary italic">+5</p>
                <p className="text-xs text-secondary/60 uppercase tracking-widest font-bold">Anos de<br/>Experiência</p>
              </div>
              <div className="border-l-2 border-primary pl-4">
                <p className="text-3xl font-serif text-secondary italic">+1k</p>
                <p className="text-xs text-secondary/60 uppercase tracking-widest font-bold">Clientes<br/>Satisfeitas</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
