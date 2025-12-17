'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { FormEvent } from 'react';

export const Contact = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted');
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Prêt à transformer votre établissement ?
            </h2>
            <p className="text-xl text-blue-100">
              Contactez-nous pour une démonstration personnalisée et découvrez comment devERP peut vous aider.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <input 
                type="text" 
                placeholder="Votre nom" 
                required
                className="px-6 py-4 rounded-xl bg-white/20 backdrop-blur text-white placeholder-blue-200 border border-white/30 focus:border-white focus:outline-none transition-all"
              />
              <input 
                type="email" 
                placeholder="Votre email" 
                required
                className="px-6 py-4 rounded-xl bg-white/20 backdrop-blur text-white placeholder-blue-200 border border-white/30 focus:border-white focus:outline-none transition-all"
              />
            </div>
            <input 
              type="text" 
              placeholder="Nom de votre établissement" 
              required
              className="w-full px-6 py-4 rounded-xl bg-white/20 backdrop-blur text-white placeholder-blue-200 border border-white/30 focus:border-white focus:outline-none transition-all mb-6"
            />
            <textarea 
              placeholder="Votre message (optionnel)" 
              rows={4}
              className="w-full px-6 py-4 rounded-xl bg-white/20 backdrop-blur text-white placeholder-blue-200 border border-white/30 focus:border-white focus:outline-none transition-all mb-6"
            />
            <motion.button 
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-white text-blue-600 rounded-xl px-8 py-4 font-bold text-lg hover:bg-blue-50 transition-all flex items-center justify-center gap-2 group"
            >
              Demander une démo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </form>

          <div className="mt-12 flex flex-wrap justify-center gap-8 text-center">
            <div>
              <CheckCircle2 className="w-6 h-6 mx-auto mb-2 text-green-300" />
              <div className="text-sm text-blue-100">Démo gratuite</div>
            </div>
            <div>
              <CheckCircle2 className="w-6 h-6 mx-auto mb-2 text-green-300" />
              <div className="text-sm text-blue-100">Sans engagement</div>
            </div>
            <div>
              <CheckCircle2 className="w-6 h-6 mx-auto mb-2 text-green-300" />
              <div className="text-sm text-blue-100">Support dédié</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};