'use client';

import { motion } from 'framer-motion';
import { BookOpen, Mail, MapPin, Phone, Facebook, Twitter, Linkedin, Instagram, Youtube, ArrowUp, Heart } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

export const Footer = () => {
  const [email, setEmail] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(true);

  const footerSections: FooterSection[] = [
    {
      title: "Produit",
      links: [
        { label: "Fonctionnalités", href: "#features" },
        { label: "Tarifs", href: "#pricing" },
        { label: "Démo", href: "#demo" },
        { label: "Documentation", href: "#" },
        { label: "API", href: "#" }
      ]
    },
    {
      title: "Solutions",
      links: [
        { label: "Universités", href: "#" },
        { label: "Écoles de commerce", href: "#" },
        { label: "Instituts techniques", href: "#" },
        { label: "Centres de formation", href: "#" }
      ]
    },
    {
      title: "Entreprise",
      links: [
        { label: "À propos", href: "#" },
        { label: "Blog", href: "#" },
        { label: "Carrières", href: "#" },
        { label: "Partenaires", href: "#" },
        { label: "Contact", href: "#contact" }
      ]
    },
    {
      title: "Support",
      links: [
        { label: "Centre d'aide", href: "#" },
        { label: "FAQ", href: "#" },
        { label: "Tutoriels", href: "#" },
        { label: "Statut système", href: "#" }
      ]
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" }
  ];

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600" />
      <div className="absolute top-20 right-20 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 pt-12 md:pt-16 pb-6 md:pb-8 relative z-10">
        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 text-white"
        >
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">Restez informé</h3>
              <p className="text-sm md:text-base text-blue-100">
                Recevez nos dernières actualités, conseils et mises à jour produit
              </p>
            </div>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Votre adresse email"
                required
                className="flex-1 px-4 md:px-6 py-3 md:py-4 rounded-xl bg-white/20 backdrop-blur border border-white/30 focus:border-white focus:outline-none text-white placeholder-blue-200 text-sm md:text-base"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 md:px-8 py-3 md:py-4 bg-white text-blue-600 rounded-xl text-sm md:text-base font-semibold hover:bg-blue-50 transition-all whitespace-nowrap"
              >
                S'abonner
              </motion.button>
            </form>
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 md:gap-8 mb-10 md:mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 mb-4 md:mb-6">
                <div className="w-9 h-9 md:w-10 md:h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg md:rounded-xl flex items-center justify-center shadow-lg">
                  <BookOpen className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <span className="text-xl md:text-2xl font-bold text-white">devERP</span>
              </div>
              <p className="text-sm md:text-base text-slate-400 mb-4 md:mb-6 leading-relaxed">
                La solution ERP complète pour transformer la gestion des établissements d'enseignement supérieur au Sénégal et en Afrique.
              </p>

              {/* Contact Info */}
              <div className="space-y-2 md:space-y-3 text-xs md:text-sm">
                <a href="mailto:contact@deverp.sn" className="flex items-center gap-2 md:gap-3 text-slate-400 hover:text-blue-400 transition-colors group">
                  <div className="w-7 h-7 md:w-8 md:h-8 bg-slate-800 rounded-lg flex items-center justify-center group-hover:bg-blue-600/20 transition-colors flex-shrink-0">
                    <Mail className="w-3.5 h-3.5 md:w-4 md:h-4" />
                  </div>
                  <span className="truncate">contact@deverp.sn</span>
                </a>
                <a href="tel:+221XXXXXXX" className="flex items-center gap-2 md:gap-3 text-slate-400 hover:text-blue-400 transition-colors group">
                  <div className="w-7 h-7 md:w-8 md:h-8 bg-slate-800 rounded-lg flex items-center justify-center group-hover:bg-blue-600/20 transition-colors flex-shrink-0">
                    <Phone className="w-3.5 h-3.5 md:w-4 md:h-4" />
                  </div>
                  +221 33 XXX XX XX
                </a>
                <div className="flex items-center gap-2 md:gap-3 text-slate-400">
                  <div className="w-7 h-7 md:w-8 md:h-8 bg-slate-800 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-3.5 h-3.5 md:w-4 md:h-4" />
                  </div>
                  Dakar, Sénégal
                </div>
              </div>
            </motion.div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h4 className="font-bold text-white mb-3 md:mb-4 text-base md:text-lg">{section.title}</h4>
              <ul className="space-y-2 md:space-y-3 text-xs md:text-sm">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-slate-400 hover:text-blue-400 transition-colors hover:translate-x-1 inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-800 pt-6 md:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
            {/* Copyright */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xs md:text-sm text-slate-400 flex items-center gap-2 text-center md:text-left"
            >
              &copy; {new Date().getFullYear()} devERP. Tous droits réservés. Fait avec
              <Heart className="w-3.5 h-3.5 md:w-4 md:h-4 text-red-500 fill-red-500" />
              au Sénégal
            </motion.p>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 md:gap-3"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-9 h-9 md:w-10 md:h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-br hover:from-blue-600 hover:to-indigo-600 transition-all group"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 md:w-5 md:h-5 text-slate-400 group-hover:text-white transition-colors" />
                </motion.a>
              ))}
            </motion.div>

            {/* Legal Links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 md:gap-6 text-xs md:text-sm"
            >
              <Link href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                Confidentialité
              </Link>
              <Link href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                CGU
              </Link>
              <Link href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                Mentions légales
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 md:bottom-8 md:right-8 w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-all z-50 group"
          aria-label="Retour en haut"
        >
          <ArrowUp className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:-translate-y-1 transition-transform" />
        </motion.button>
      )}
    </footer>
  );
};