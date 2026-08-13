import { Instagram, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-secondary text-background pt-16 pb-8 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          <div className="text-center md:text-left">
            <h4 className="text-2xl font-serif mb-4 text-primary italic">Taila Ege</h4>
            <p className="text-background/70 text-sm max-w-sm mx-auto md:mx-0 leading-relaxed">
              Realçando sua beleza natural com técnicas avançadas e seguras. Seu olhar é a nossa tela.
            </p>
          </div>

          <div className="text-center md:text-left">
            <h4 className="text-xs font-bold uppercase tracking-widest mb-4 text-primary">Contato</h4>
            <ul className="space-y-3 text-background/80 text-sm flex flex-col items-center md:items-start">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                (11) 99999-9999
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                Av. Paulista, 1000 - São Paulo, SP
              </li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h4 className="text-xs font-bold uppercase tracking-widest mb-4 text-primary">Redes Sociais</h4>
            <div className="flex justify-center md:justify-start gap-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-background/80 hover:text-primary transition-colors text-xs font-bold uppercase tracking-widest"
              >
                Instagram
              </a>
            </div>
          </div>

        </div>
        
        <div className="pt-8 border-t border-background/20 text-center text-[10px] uppercase tracking-widest text-background/50">
          <p>&copy; {new Date().getFullYear()} Taila Ege Beauty • Todos os direitos reservados</p>
        </div>
      </div>
    </footer>
  );
}
