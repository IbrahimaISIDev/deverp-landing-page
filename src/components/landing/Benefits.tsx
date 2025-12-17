'use client';

import { motion } from 'framer-motion';
import { Clock, Star, ShieldCheck, MapPin, LucideIcon } from 'lucide-react';

interface BenefitItemProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  delay: number;
}

const BenefitItem = ({ icon: Icon, title, description, color, delay }: BenefitItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="text-center group"
    >
      <div className={`w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-${color}-100 to-${color}-200 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
        <Icon className={`w-10 h-10 text-${color}-600`} />
      </div>
      <h3 className="font-bold text-lg text-slate-900 mb-2">{title}</h3>
      <p className="text-slate-600 text-sm">{description}</p>
    </motion.div>
  );
};

export const Benefits = () => {
  const benefits = [
    { 
      icon: Clock, 
      title: "Gain de temps", 
      description: "Automatisez les tâches répétitives", 
      color: "blue" 
    },
    { 
      icon: Star, 
      title: "Expérience améliorée", 
      description: "Interface moderne et intuitive", 
      color: "indigo" 
    },
    { 
      icon: ShieldCheck, 
      title: "Données sécurisées", 
      description: "Conformité et protection", 
      color: "purple" 
    },
    { 
      icon: MapPin, 
      title: "Adapté au Sénégal", 
      description: "Conçu pour le contexte local", 
      color: "pink" 
    }
  ];

  return (
    <section id="benefits" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Pourquoi choisir devERP ?
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Des avantages concrets pour votre établissement
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitItem key={index} {...benefit} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};