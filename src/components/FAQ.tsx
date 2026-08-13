import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'A micropigmentação dói?',
    answer: 'Utilizamos anestésicos tópicos de alta qualidade antes e durante o procedimento para garantir o máximo de conforto. A maioria das clientes relata apenas um leve incômodo, perfeitamente suportável.'
  },
  {
    question: 'Quanto tempo dura a extensão de cílios?',
    answer: 'A durabilidade média é de 3 a 4 semanas, dependendo do ciclo natural de crescimento dos seus cílios e dos cuidados em casa. Recomendamos manutenções a cada 15 ou 20 dias para mantê-los sempre volumosos.'
  },
  {
    question: 'Quais os cuidados após a micropigmentação?',
    answer: 'É fundamental evitar exposição solar intensa, piscina e mar nos primeiros 15 dias. Você receberá uma pomada específica e todas as instruções por escrito para garantir a melhor cicatrização e fixação do pigmento.'
  },
  {
    question: 'Posso usar rímel com a extensão de cílios?',
    answer: 'Não recomendamos o uso de rímel, especialmente os à prova d\'água, pois os produtos para removê-lo podem danificar a cola da extensão e causar a queda prematura dos fios. A extensão já proporciona o efeito de cílios maquiados.'
  },
  {
    question: 'Como faço para agendar um horário?',
    answer: 'O agendamento é feito exclusivamente via WhatsApp. Basta clicar no botão flutuante ou no botão do topo da página e nossa equipe irá te ajudar a encontrar o melhor horário disponível.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-primary mb-6">Dúvidas Frequentes</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 text-sm">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-border pb-4">
              <p className="font-bold mb-2 text-secondary">{faq.question}</p>
              <p className="text-secondary/70 text-xs leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
