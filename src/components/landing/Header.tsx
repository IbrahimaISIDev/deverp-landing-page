'use client';

import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';
import Link from 'next/link';

export const Header = () => {
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full bg-white/80 backdrop-blur-xl shadow-sm z-50 border-b border-slate-200/50"
    >
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-2"
        >
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
            <BookOpen className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            devERP
          </span>
        </motion.div>
        
        <div className="hidden md:flex items-center gap-8">
          <Link href="#features" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">
            Fonctionnalités
          </Link>
          <Link href="#benefits" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">
            Avantages
          </Link>
          <Link href="#testimonials" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">
            Témoignages
          </Link>
          <Link href="#contact" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">
            Contact
          </Link>
          <motion.a 
            href="#" 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full px-6 py-2.5 hover:shadow-lg hover:shadow-blue-500/30 transition-all font-semibold"
          >
            Espace Client
          </motion.a>
        </div>
      </nav>
    </motion.header>
  );
};