'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Monitor, Smartphone, Check, Play } from 'lucide-react';
import { useState } from 'react';

export const ProductDemo = () => {
  const [activeTab, setActiveTab] = useState<'desktop' | 'mobile'>('desktop');
  const [isPlaying, setIsPlaying] = useState(false);

  const features = [
    'Dashboard intuitif et personnalisable',
    'Gestion des inscriptions en temps réel',
    'Suivi financier automatisé',
    'Communication multi-canaux',
    'Rapports et analytics avancés',
  ];

  return (
    <section id="demo" className="py-16 md:py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-semibold mb-3 md:mb-4"
          >
            Démo interactive
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-3 md:mb-4 px-4">
            Découvrez devERP en action
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto px-4">
            Une interface intuitive conçue pour simplifier la gestion de votre établissement
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left: Product Preview */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Device Switcher */}
            <div className="flex justify-center gap-3 md:gap-4 mb-6 md:mb-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab('desktop')}
                className={`flex items-center gap-1.5 md:gap-2 px-4 md:px-6 py-2 md:py-3 rounded-full text-sm md:text-base font-semibold transition-all ${
                  activeTab === 'desktop'
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/30'
                    : 'bg-white text-slate-700 hover:bg-slate-50'
                }`}
              >
                <Monitor className="w-4 h-4 md:w-5 md:h-5" />
                <span className="hidden sm:inline">Desktop</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab('mobile')}
                className={`flex items-center gap-1.5 md:gap-2 px-4 md:px-6 py-2 md:py-3 rounded-full text-sm md:text-base font-semibold transition-all ${
                  activeTab === 'mobile'
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/30'
                    : 'bg-white text-slate-700 hover:bg-slate-50'
                }`}
              >
                <Smartphone className="w-4 h-4 md:w-5 md:h-5" />
                <span className="hidden sm:inline">Mobile</span>
              </motion.button>
            </div>

            {/* Device Mockup */}
            <AnimatePresence mode="wait">
              {activeTab === 'desktop' ? (
                <motion.div
                  key="desktop"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="relative"
                >
                  {/* Desktop Frame */}
                  <div className="bg-slate-800 rounded-t-2xl p-2">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
                      {/* Mock Dashboard */}
                      <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-8 text-white">
                        <h3 className="text-2xl font-bold mb-2">Dashboard Admin</h3>
                        <p className="text-blue-100">Vue d'ensemble de votre établissement</p>
                      </div>
                      <div className="p-6 space-y-4">
                        {[1, 2, 3].map((i) => (
                          <motion.div
                            key={i}
                            initial={{ width: 0 }}
                            animate={{ width: '100%' }}
                            transition={{ duration: 0.8, delay: i * 0.2 }}
                            className="bg-gradient-to-r from-slate-100 to-slate-50 h-16 rounded-lg"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  {/* Desktop Base */}
                  <div className="h-6 bg-slate-300 rounded-b-2xl flex items-center justify-center">
                    <div className="w-16 h-1 bg-slate-400 rounded-full" />
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="mobile"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="relative flex justify-center"
                >
                  {/* Mobile Frame */}
                  <div className="bg-slate-800 rounded-[2.5rem] md:rounded-[3rem] p-2 md:p-3 w-64 md:w-80 shadow-2xl mx-auto">
                    <div className="bg-white rounded-[2rem] md:rounded-[2.5rem] overflow-hidden">
                      {/* Notch */}
                      <div className="bg-slate-800 h-5 md:h-6 rounded-b-2xl w-28 md:w-32 mx-auto" />
                      {/* Mock App */}
                      <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-4 md:p-6 text-white">
                        <h3 className="text-base md:text-lg font-bold mb-1">Portail Étudiant</h3>
                        <p className="text-blue-100 text-xs md:text-sm">Bienvenue!</p>
                      </div>
                      <div className="p-3 md:p-4 space-y-2 md:space-y-3">
                        {[1, 2, 3, 4].map((i) => (
                          <motion.div
                            key={i}
                            initial={{ width: 0 }}
                            animate={{ width: '100%' }}
                            transition={{ duration: 0.6, delay: i * 0.15 }}
                            className="bg-gradient-to-r from-slate-100 to-slate-50 h-10 md:h-12 rounded-lg"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Play Button Overlay */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.8, type: 'spring' }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full shadow-2xl flex items-center justify-center group hover:shadow-3xl transition-all"
              >
                <Play className="w-6 h-6 md:w-8 md:h-8 text-blue-600 group-hover:text-indigo-600 transition-colors ml-1" />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right: Features List */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 md:space-y-8"
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3 md:mb-4 px-4 lg:px-0">
                Tout ce dont vous avez besoin, en un seul endroit
              </h3>
              <p className="text-base md:text-lg text-slate-600 leading-relaxed px-4 lg:px-0">
                Notre plateforme offre une expérience complète et fluide pour tous les utilisateurs de votre établissement.
              </p>
            </div>

            <div className="space-y-3 md:space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-3 md:gap-4 p-3 md:p-4 rounded-xl hover:bg-white/80 hover:shadow-lg transition-all group cursor-pointer"
                >
                  <div className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-xl group-hover:scale-110 transition-all">
                    <Check className="w-4 h-4 md:w-5 md:h-5 text-white" />
                  </div>
                  <p className="text-sm md:text-base text-slate-700 font-medium group-hover:text-blue-600 transition-colors">
                    {feature}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="pt-4 md:pt-6 px-4 lg:px-0"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full px-6 md:px-8 py-3 md:py-4 hover:shadow-xl hover:shadow-blue-500/30 transition-all font-semibold text-base md:text-lg"
              >
                Essayer gratuitement
                <Play className="w-4 h-4 md:w-5 md:h-5" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
