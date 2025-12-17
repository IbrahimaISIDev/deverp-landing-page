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
        whileHover={{ y: -8, transition: { duration: 0.3 } }}
        className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all cursor-pointer border border-slate-100 h-full"
      >
        <div className={`w-16 h-16 bg-gradient-to-br ${gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
          <Icon className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-3">{title}</h3>
        <p className="text-slate-600 leading-relaxed">{description}</p>
        <div className="mt-6 flex items-center text-blue-600 font-semibold group-hover:gap-2 transition-all">
          En savoir plus 
          <ArrowRight className="w-4 h-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
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