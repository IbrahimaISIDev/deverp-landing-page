'use client';

import { motion } from 'framer-motion';

export const ProblemSolution = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Problem Card */}
          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-12 mb-12 border border-red-100">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Le défi actuel</h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              Gestion administrative complexe, processus manuels chronophages, données dispersées, 
              manque de transparence pour les étudiants et tuteurs, difficultés de suivi financier...
            </p>
          </div>
          
          {/* Solution Card */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-12 border border-blue-100">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Notre solution</h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              Une plateforme centralisée et intuitive pour digitaliser vos processus, automatiser 
              les tâches répétitives et offrir une expérience moderne à tous vos utilisateurs.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};