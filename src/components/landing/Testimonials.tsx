'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  content: string;
}

interface TestimonialCardProps extends Testimonial {
  delay: number;
}

const TestimonialCard = ({ name, role, content, delay }: TestimonialCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
    >
      <div className="flex items-center gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      <p className="text-lg mb-6 italic">"{content}"</p>
      <div>
        <div className="font-bold text-white">{name}</div>
        <div className="text-sm text-blue-200">{role}</div>
      </div>
    </motion.div>
  );
};

export const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      name: "Dr. Aminata Diop",
      role: "Directrice, Institut Supérieur de Dakar",
      content: "devERP a révolutionné notre gestion administrative. Nous avons gagné plus de 10 heures par semaine sur les tâches répétitives."
    },
    {
      name: "Mamadou Sow",
      role: "Responsable Financier, École de Commerce",
      content: "Le suivi financier est désormais un jeu d'enfant. Rapports automatiques, paiements en ligne, tout est simplifié."
    },
    {
      name: "Fatou Ndiaye",
      role: "Étudiante en Master",
      content: "Le portail étudiant est très pratique ! J'ai accès à toutes mes notes et documents en un clic."
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Ils nous font confiance
          </h2>
          <p className="text-xl text-blue-200">
            Découvrez les retours de nos utilisateurs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};