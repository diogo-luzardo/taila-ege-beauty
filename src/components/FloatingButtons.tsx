import { MessageCircle, Instagram } from 'lucide-react';
import { motion } from 'motion/react';

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      <motion.a
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="https://instagram.com" // Replace with real Instagram
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-pink-600 border border-border"
      >
        <Instagram className="w-6 h-6" />
      </motion.a>

      <motion.a
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="https://wa.me/5511999999999" // Replace with real WhatsApp
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-lg relative"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping"></span>
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></span>
      </motion.a>
    </div>
  );
}
