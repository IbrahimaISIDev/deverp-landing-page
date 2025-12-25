'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const testimonials: Testimonial[] = [
    {
      name: "Dr. Aminata Diop",
      role: "Directrice",
      company: "Institut Supérieur de Dakar",
      content: "devERP a révolutionné notre gestion administrative. Nous avons gagné plus de 10 heures par semaine sur les tâches répétitives. L'interface intuitive et le support réactif font toute la différence.",
      avatar: "AD",
      rating: 5
    },
    {
      name: "Mamadou Sow",
      role: "Responsable Financier",
      company: "École de Commerce de Dakar",
      content: "Le suivi financier est désormais un jeu d'enfant. Rapports automatiques, paiements en ligne, tout est simplifié. Nous avons réduit nos délais de traitement de 60%.",
      avatar: "MS",
      rating: 5
    },
    {
      name: "Fatou Ndiaye",
      role: "Étudiante en Master",
      company: "Université Cheikh Anta Diop",
      content: "Le portail étudiant est très pratique ! J'ai accès à toutes mes notes et documents en un clic. Mes parents peuvent aussi suivre ma scolarité facilement.",
      avatar: "FN",
      rating: 5
    },
    {
      name: "Ibrahima Fall",
      role: "Directeur Académique",
      company: "École Polytechnique de Thiès",
      content: "La gestion des inscriptions n'a jamais été aussi simple. Le processus digitalisé nous a permis de traiter 3 fois plus de candidatures tout en améliorant la qualité du suivi.",
      avatar: "IF",
      rating: 5
    },
    {
      name: "Aïssatou Touré",
      role: "Parent d'élève",
      company: "Lycée Moderne",
      content: "Je peux suivre la scolarité de mes enfants en temps réel. Les notifications de paiement et les bulletins électroniques sont très pratiques. Un vrai gain de temps!",
      avatar: "AT",
      rating: 5
    }
  ];

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoPlay, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setAutoPlay(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setAutoPlay(false);
  };

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push({ ...testimonials[index], originalIndex: index });
    }
    return visible;
  };

  const visibleTestimonials = getVisibleTestimonials();

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden relative">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 opacity-10 hidden md:block">
        <Quote className="w-32 h-32" />
      </div>
      <div className="absolute bottom-20 right-10 opacity-10 rotate-180 hidden md:block">
        <Quote className="w-32 h-32" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block bg-white/10 backdrop-blur-sm text-white px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-semibold mb-3 md:mb-4"
          >
            Témoignages
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 px-4">
            Ils nous font confiance
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-blue-200 max-w-2xl mx-auto px-4">
            Découvrez pourquoi des centaines d'établissements choisissent devERP
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 left-0 right-0 justify-between pointer-events-none z-20">
            <motion.button
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
              className="pointer-events-auto w-12 h-12 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full flex items-center justify-center transition-all border border-white/20 -ml-6"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial}
              className="pointer-events-auto w-12 h-12 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full flex items-center justify-center transition-all border border-white/20 -mr-6"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
            <AnimatePresence mode="popLayout">
              {visibleTestimonials.map((testimonial, idx) => (
                <motion.div
                  key={testimonial.originalIndex}
                  initial={{ opacity: 0, scale: 0.8, y: 50 }}
                  animate={{
                    opacity: idx === 1 ? 1 : 0.6,
                    scale: idx === 1 ? 1 : 0.95,
                    y: 0
                  }}
                  exit={{ opacity: 0, scale: 0.8, y: -50 }}
                  transition={{ duration: 0.5 }}
                  className={`bg-white/10 backdrop-blur-lg rounded-xl md:rounded-2xl p-6 md:p-8 border border-white/20 transition-all ${
                    idx === 1 ? 'md:scale-105 shadow-2xl' : 'hidden md:block'
                  }`}
                >
                  {/* Quote Icon */}
                  <div className="mb-3 md:mb-4">
                    <Quote className="w-8 h-8 md:w-10 md:h-10 text-blue-300 opacity-50" />
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-3 md:mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <Star className="w-4 h-4 md:w-5 md:h-5 fill-yellow-400 text-yellow-400" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-sm md:text-base lg:text-lg mb-4 md:mb-6 leading-relaxed italic text-blue-50">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 md:gap-4 pt-3 md:pt-4 border-t border-white/10">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-base md:text-lg shadow-lg flex-shrink-0">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-bold text-white text-base md:text-lg">{testimonial.name}</div>
                      <div className="text-xs md:text-sm text-blue-200">{testimonial.role}</div>
                      <div className="text-xs text-blue-300">{testimonial.company}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-6 md:mt-8">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  setCurrentIndex(index);
                  setAutoPlay(false);
                }}
                className={`h-2 md:h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-white w-6 md:w-8'
                    : 'bg-white/30 hover:bg-white/50 w-2 md:w-3'
                }`}
              />
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="flex md:hidden justify-center gap-4 mt-6">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
              className="w-10 h-10 md:w-12 md:h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial}
              className="w-10 h-10 md:w-12 md:h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};