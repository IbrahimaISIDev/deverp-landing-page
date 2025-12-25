'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Mail, Phone, MapPin, Send, Sparkles } from 'lucide-react';
import { FormEvent, useState } from 'react';

export const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    establishment: '',
    message: ''
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', establishment: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-400 rounded-full blur-3xl" />
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
            className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-semibold mb-3 md:mb-4"
          >
            Contactez-nous
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-3 md:mb-4 px-4">
            Prêt à transformer votre établissement ?
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto px-4">
            Discutons de vos besoins et découvrons ensemble comment devERP peut révolutionner votre gestion
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 md:space-y-8"
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 md:mb-6">
                Parlons de votre projet
              </h3>
              <p className="text-base md:text-lg text-slate-600 leading-relaxed mb-6 md:mb-8">
                Notre équipe d'experts est là pour répondre à toutes vos questions et vous accompagner dans votre transformation digitale.
              </p>
            </div>

            <div className="space-y-4 md:space-y-6">
              {[
                { icon: Mail, title: 'Email', content: 'contact@deverp.sn', href: 'mailto:contact@deverp.sn' },
                { icon: Phone, title: 'Téléphone', content: '+221 33 XXX XX XX', href: 'tel:+221XXXXXXX' },
                { icon: MapPin, title: 'Adresse', content: 'Dakar, Sénégal', href: '#' },
              ].map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="flex items-start gap-3 md:gap-4 p-4 md:p-6 bg-white rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition-all group cursor-pointer"
                >
                  <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg md:rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                    <item.icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                  </div>
                  <div>
                    <p className="text-xs md:text-sm text-slate-500 mb-1">{item.title}</p>
                    <p className="text-base md:text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {item.content}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Trust Badges */}
            <div className="mt-8 md:mt-12 p-4 md:p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl md:rounded-2xl border border-blue-100">
              <div className="flex items-center gap-2 mb-3 md:mb-4">
                <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
                <h4 className="text-sm md:text-base font-bold text-slate-900">Pourquoi nous choisir ?</h4>
              </div>
              <div className="space-y-2 md:space-y-3">
                {['Réponse sous 24h', 'Démo personnalisée gratuite', 'Support technique dédié'].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-2 md:gap-3"
                  >
                    <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-green-600 flex-shrink-0" />
                    <span className="text-xs md:text-sm text-slate-700">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-200 relative overflow-hidden">
              {/* Decorative gradient */}
              <div className="absolute top-0 left-0 right-0 h-1.5 md:h-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600" />

              {isSubmitted ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center py-10 md:py-12"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1, rotate: 360 }}
                    transition={{ type: 'spring', duration: 0.8 }}
                    className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-lg"
                  >
                    <CheckCircle2 className="w-8 h-8 md:w-10 md:h-10 text-white" />
                  </motion.div>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">Message envoyé !</h3>
                  <p className="text-sm md:text-base text-slate-600">Nous vous recontacterons très bientôt.</p>
                </motion.div>
              ) : (
                <div className="space-y-4 md:space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 text-slate-900 border-2 border-slate-200 focus:border-blue-500 focus:bg-white focus:outline-none transition-all"
                        placeholder="Jean Dupont"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 text-slate-900 border-2 border-slate-200 focus:border-blue-500 focus:bg-white focus:outline-none transition-all"
                        placeholder="jean@exemple.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 text-slate-900 border-2 border-slate-200 focus:border-blue-500 focus:bg-white focus:outline-none transition-all"
                      placeholder="+221 XX XXX XX XX"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Établissement *
                    </label>
                    <input
                      type="text"
                      name="establishment"
                      value={formData.establishment}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 text-slate-900 border-2 border-slate-200 focus:border-blue-500 focus:bg-white focus:outline-none transition-all"
                      placeholder="Nom de votre établissement"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 text-slate-900 border-2 border-slate-200 focus:border-blue-500 focus:bg-white focus:outline-none transition-all resize-none"
                      placeholder="Parlez-nous de votre projet..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl px-6 md:px-8 py-3 md:py-4 font-bold text-base md:text-lg hover:shadow-xl hover:shadow-blue-500/30 transition-all flex items-center justify-center gap-2 group"
                  >
                    <Send className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                    Envoyer ma demande
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>

                  <p className="text-xs text-slate-500 text-center mt-3 md:mt-4">
                    En soumettant ce formulaire, vous acceptez d'être contacté par notre équipe.
                  </p>
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};