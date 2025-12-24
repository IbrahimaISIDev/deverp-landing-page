'use client';

import { motion } from 'framer-motion';
import { Building2, GraduationCap, School, University } from 'lucide-react';

export const TrustedBy = () => {
  const partners = [
    { name: 'Université Cheikh Anta Diop', icon: University },
    { name: 'École Supérieure Polytechnique', icon: School },
    { name: 'Institut Supérieur de Management', icon: Building2 },
    { name: 'École Nationale d\'Administration', icon: GraduationCap },
    { name: 'Université Gaston Berger', icon: University },
    { name: 'Institut Africain de Management', icon: Building2 },
  ];

  return (
    <section className="py-12 md:py-16 bg-white border-y border-slate-200">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <p className="text-xs md:text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">
            Ils nous font confiance
          </p>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-slate-900 px-4">
            Rejoignez les établissements leaders au Sénégal
          </h2>
        </motion.div>

        {/* Scrolling Logos */}
        <div className="relative overflow-hidden">
          <div className="flex gap-4 md:gap-8 animate-scroll">
            {[...partners, ...partners].map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -3 }}
                className="flex-shrink-0 group"
              >
                <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl md:rounded-2xl p-4 md:p-8 shadow-md hover:shadow-xl transition-all border border-slate-200 hover:border-blue-300 min-w-[160px] md:min-w-[200px]">
                  <div className="flex flex-col items-center gap-2 md:gap-3">
                    <partner.icon className="w-8 h-8 md:w-10 md:h-10 text-slate-400 group-hover:text-blue-600 transition-colors" />
                    <p className="text-[10px] md:text-xs font-medium text-slate-600 text-center leading-tight">
                      {partner.name}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-12 md:mt-16 pt-8 md:pt-12 border-t border-slate-200"
        >
          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", duration: 0.8, delay: 0.4 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-1 md:mb-2"
            >
              50+
            </motion.div>
            <p className="text-slate-600 text-xs md:text-sm">Établissements</p>
          </div>
          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", duration: 0.8, delay: 0.5 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-1 md:mb-2"
            >
              15k+
            </motion.div>
            <p className="text-slate-600 text-xs md:text-sm">Étudiants</p>
          </div>
          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", duration: 0.8, delay: 0.6 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-1 md:mb-2"
            >
              99%
            </motion.div>
            <p className="text-slate-600 text-xs md:text-sm">Satisfaction</p>
          </div>
          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", duration: 0.8, delay: 0.7 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-1 md:mb-2"
            >
              24/7
            </motion.div>
            <p className="text-slate-600 text-xs md:text-sm">Support</p>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};
