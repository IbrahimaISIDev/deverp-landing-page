'use client';

import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { Sparkles, ArrowRight, Zap, Shield, TrendingUp } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';

export const Hero = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX - innerWidth / 2) / innerWidth;
      const y = (clientY - innerHeight / 2) / innerHeight;
      setMousePosition({ x, y });
      mouseX.set(x * 20);
      mouseY.set(y * 20);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const floatingAnimation = {
    y: [0, -20, 0],
  };

  const floatingTransition = {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut" as const
  };

  return (
    <section ref={targetRef} className="relative pt-32 pb-20 overflow-hidden min-h-screen flex items-center">
      {/* Animated Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100 via-transparent to-transparent opacity-60"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iIzM3NDBmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9nPjwvc3ZnPg==')] opacity-40"></div>

      {/* Floating Elements with Mouse Parallax */}
      <motion.div
        style={{
          x: mouseXSpring,
          y: mouseYSpring,
        }}
        className="absolute top-20 left-10 opacity-30"
      >
        <motion.div
          animate={floatingAnimation}
          transition={floatingTransition}
          className="w-32 h-32 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full blur-3xl"
        />
      </motion.div>

      <motion.div
        style={{
          x: useTransform(mouseXSpring, (x) => -x * 0.5),
          y: useTransform(mouseYSpring, (y) => -y * 0.5),
        }}
        className="absolute top-40 right-20 opacity-20"
      >
        <motion.div
          animate={floatingAnimation}
          transition={{ ...floatingTransition, delay: 0.5 }}
          className="w-48 h-48 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full blur-3xl"
        />
      </motion.div>

      <motion.div
        style={{
          x: useTransform(mouseXSpring, (x) => x * 0.3),
          y: useTransform(mouseYSpring, (y) => y * 0.3),
        }}
        className="absolute bottom-40 left-1/4 opacity-25"
      >
        <motion.div
          animate={floatingAnimation}
          transition={{ ...floatingTransition, delay: 1 }}
          className="w-40 h-40 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full blur-3xl"
        />
      </motion.div>

      {/* Floating Icon Cards */}
      <motion.div
        style={{
          x: useTransform(mouseXSpring, (x) => x * 1.5),
          y: useTransform(mouseYSpring, (y) => y * 1.5),
        }}
        className="absolute top-32 right-32 hidden lg:block"
      >
        <motion.div
          animate={{
            y: [0, -15, 0],
            rotate: [0, 5, 0],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="bg-white/80 backdrop-blur-xl p-4 rounded-2xl shadow-xl border border-blue-100"
        >
          <Zap className="w-8 h-8 text-blue-600" />
        </motion.div>
      </motion.div>

      <motion.div
        style={{
          x: useTransform(mouseXSpring, (x) => -x * 1.2),
          y: useTransform(mouseYSpring, (y) => -y * 1.2),
        }}
        className="absolute bottom-48 right-48 hidden lg:block"
      >
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, -5, 0],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="bg-white/80 backdrop-blur-xl p-4 rounded-2xl shadow-xl border border-indigo-100"
        >
          <Shield className="w-8 h-8 text-indigo-600" />
        </motion.div>
      </motion.div>

      <motion.div
        style={{
          x: useTransform(mouseXSpring, (x) => x * 0.8),
          y: useTransform(mouseYSpring, (y) => y * 0.8),
        }}
        className="absolute top-64 left-32 hidden lg:block"
      >
        <motion.div
          animate={{
            y: [0, -18, 0],
            rotate: [0, 3, 0],
          }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="bg-white/80 backdrop-blur-xl p-4 rounded-2xl shadow-xl border border-purple-100"
        >
          <TrendingUp className="w-8 h-8 text-purple-600" />
        </motion.div>
      </motion.div>
      
      <motion.div 
        style={{ opacity, scale }}
        className="container mx-auto px-6 text-center relative z-10"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 bg-blue-100/80 backdrop-blur-sm text-blue-700 px-6 py-2 rounded-full mb-8 border border-blue-200/50"
        >
          <Sparkles className="w-4 h-4" />
          <span className="text-sm font-semibold">La solution ERP nouvelle génération</span>
        </motion.div>
        
        {/* Title */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-tight mb-6 tracking-tight"
        >
          Transformez la gestion de votre{' '}
          <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
            établissement
          </span>
        </motion.h1>
        
        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-slate-600 mt-6 max-w-3xl mx-auto leading-relaxed"
        >
          De l'inscription à la diplomation, devERP simplifie chaque aspect de la vie de votre établissement d'enseignement supérieur.
        </motion.p>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="flex flex-wrap items-center justify-center gap-6 mt-8 text-sm text-slate-600"
        >
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-green-600" />
            <span>100% Sécurisé</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-yellow-600" />
            <span>Déploiement rapide</span>
          </div>
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-blue-600" />
            <span>ROI garanti</span>
          </div>
        </motion.div>
        
        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-12"
        >
          <motion.a 
            href="#contact"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full px-10 py-4 hover:shadow-2xl hover:shadow-blue-500/40 transition-all font-bold text-lg flex items-center justify-center gap-2"
          >
            Demander une démo
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>
          <motion.a 
            href="#features"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-slate-800 rounded-full px-10 py-4 hover:shadow-xl transition-all font-semibold text-lg border-2 border-slate-200"
          >
            Découvrir les fonctionnalités
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-3 gap-8 max-w-3xl mx-auto mt-20 pt-12 border-t border-slate-200"
        >
          <div>
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">50+</div>
            <div className="text-slate-600 mt-2">Établissements</div>
          </div>
          <div>
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">10k+</div>
            <div className="text-slate-600 mt-2">Étudiants</div>
          </div>
          <div>
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">99%</div>
            <div className="text-slate-600 mt-2">Satisfaction</div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};