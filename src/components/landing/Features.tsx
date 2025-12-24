'use client';

import { motion } from 'framer-motion';
import { BookOpen, Users, TrendingUp, ArrowRight, LucideIcon } from 'lucide-react';
import Link from 'next/link';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;
  delay: number;
  link: string;
}

const FeatureCard = ({ icon: Icon, title, description, gradient, delay, link }: FeatureCardProps) => {
  return (
    <Link href={link}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay }}
        whileHover={{ y: -12, scale: 1.02, transition: { duration: 0.3 } }}
        className="group relative bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all cursor-pointer border border-slate-200/50 h-full overflow-hidden"
        style={{
          transformStyle: 'preserve-3d',
          perspective: '1000px',
        }}
      >
        {/* Glassmorphism Background Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

        {/* Animated Border Gradient */}
        <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${gradient} p-[2px]`}>
          <div className="w-full h-full bg-white rounded-3xl" />
        </div>

        {/* Content */}
        <div className="relative z-10">
          <motion.div
            whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
            transition={{ duration: 0.5 }}
            className={`w-20 h-20 bg-gradient-to-br ${gradient} rounded-2xl flex items-center justify-center mb-6 shadow-xl group-hover:shadow-2xl transition-shadow`}
          >
            <Icon className="w-10 h-10 text-white" />
          </motion.div>

          <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:bg-clip-text transition-all">
            {title}
          </h3>

          <p className="text-slate-600 leading-relaxed mb-6">
            {description}
          </p>

          <div className="flex items-center text-blue-600 font-semibold group-hover:gap-2 transition-all">
            <span>En savoir plus</span>
            <ArrowRight className="w-4 h-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 group-hover:translate-x-1 transition-all" />
          </div>
        </div>

        {/* Shine Effect on Hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        </div>
      </motion.div>
    </Link>
  );
};

export const Features = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Inscriptions en Ligne",
      description: "Simplifiez et automatisez le processus d'admission pour vos futurs étudiants avec un système intuitif et sécurisé.",
      gradient: "from-blue-500 to-cyan-500",
      delay: 0.1,
      link: "/features/inscriptions"
    },
    {
      icon: Users,
      title: "Portail Étudiant & Tuteur",
      description: "Offrez un accès centralisé aux notes, emplois du temps, documents et communications en temps réel.",
      gradient: "from-indigo-500 to-purple-500",
      delay: 0.2,
      link: "/features/portail"
    },
    {
      icon: TrendingUp,
      title: "Suivi Financier Automatisé",
      description: "Gérez les frais de scolarité, suivez les paiements et générez des rapports financiers détaillés instantanément.",
      gradient: "from-purple-500 to-pink-500",
      delay: 0.3,
      link: "/features/financier"
    }
  ];

  return (
    <section id="features" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Fonctionnalités complètes
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Tout ce dont vous avez besoin pour gérer efficacement votre établissement
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};