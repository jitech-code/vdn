import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronRight, 
  Users, 
  TrendingUp, 
  ShieldCheck, 
  Code, 
  Megaphone, 
  Target, 
  ArrowRight,
  X,
  Send
} from 'lucide-react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import log from '../assets/log.png'

// --- CONFIGURATION COULEURS MISE À JOUR ---
const COLORS = {
  primary: "#2E5F8C",      // Bleu
  accent: "#a94c79",       // NOUVEAU : Prune dynamique
  accentLight: "#8b6f7c",  // NOUVEAU : Taupe
  secondary: "#5BA3D0",
  white: "#FFFFFF",
};

const HomePage = () => {
  const [showDevisModal, setShowDevisModal] = useState(false);

  const stats = [
    { label: "Projets livrés", value: "150+", icon: <Target style={{ color: COLORS.primary }} /> },
    { label: "Clients satisfaits", value: "98%", icon: <Users style={{ color: COLORS.accent }} /> },
    { label: "ROI Marketing", value: "x3.5", icon: <TrendingUp style={{ color: COLORS.accentLight }} /> },
    { label: "Uptime Solutions", value: "99.9%", icon: <ShieldCheck style={{ color: COLORS.primary }} /> },
  ];

  const servicesList = [
    {
      title: "Développement Logiciel",
      items: ["Sites Web Haute Performance", "Applications Web Scalables", "Logiciels Métiers Sur-mesure"],
      icon: <Code size={40} />,
      color: "bg-[#2E5F8C]",
      btnColor: "text-[#2E5F8C]",
      path: "/devnumerique"
    },
    {
      title: "Marketing & Publicité",
      items: ["Stratégie Digitale Booster", "Campagnes Publicitaires Ads", "Solutions Digitales Entreprises"],
      icon: <Megaphone size={40} />,
      color: "bg-[#a94c79]", // Utilisation du nouveau code couleur
      btnColor: "text-[#a94c79]",
      path: "/marketing"
    }
  ];

  return (
    <div className="bg-white min-h-screen font-sans selection:bg-[#a94c79]/20 overflow-x-hidden">
      <Navbar onDevisClick={() => setShowDevisModal(true)} />

      {/* HERO SECTION - IMAGE PLUS VISIBLE */}
      <section className="relative h-screen flex items-center justify-center px-6 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[#1a3a5a]">
          <img 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000" 
            alt="Business Digital"
            className="w-full h-full object-cover opacity-50 contrast-125" // Opacité augmentée pour la visibilité
          />
          {/* Overlay dégradé plus subtil pour laisser passer l'image */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#2E5F8C]/60 via-transparent to-[#a94c79]/40" />
        </div>

        <div className="relative z-10 max-w-6xl text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-[0.2em] mb-8"
          >
            <span className="w-2 h-2 bg-[#a94c79] rounded-full animate-pulse" />
            L'élite du service numérique
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-8"
          >
            DOMINEZ LE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#7BB8E8] to-[#a94c79]">MONDE DIGITAL.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-2xl text-white/90 max-w-3xl mx-auto mb-12 font-medium drop-shadow-lg"
          >
            ITTENS CORP fusionne ingénierie de pointe et stratégies de croissance pour propulser votre entreprise au sommet.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <button 
              onClick={() => setShowDevisModal(true)}
              className="group bg-[#a94c79] text-white px-10 py-5 rounded-2xl font-black text-xl hover:scale-105 transition-all shadow-[0_15px_30px_-10px_rgba(169,76,121,0.5)] flex items-center gap-3"
            >
              Lancer mon projet <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </button>
            {/* <button className="bg-white/10 backdrop-blur-md border-2 border-white/50 text-white px-10 py-5 rounded-2xl font-black text-xl hover:bg-white/20 transition-all">
              Nos Réalisations
            </button> */}
          </motion.div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-24 bg-white relative z-20 -mt-10 rounded-t-[3rem] md:rounded-t-[5rem]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {stats.map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group text-center"
              >
                <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#a94c79]/10 transition-colors">
                  {stat.icon}
                </div>
                <h3 className="text-5xl font-black text-[#2E5F8C] mb-2">{stat.value}</h3>
                <p className="text-[10px] font-black uppercase tracking-widest text-[#8b6f7c]">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-32 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24">
            <h2 className="text-4xl md:text-7xl font-black tracking-tighter text-[#2E5F8C]">
              NOS EXPERTISES <br />
              <span style={{ color: COLORS.accent }} className="italic font-light">STRATÉGIQUES.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {servicesList.map((service, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -15 }}
                className="group relative p-12 rounded-[4rem] bg-white border border-gray-100 shadow-xl shadow-gray-200/50 overflow-hidden"
              >
                <div className={`absolute top-0 right-0 w-40 h-40 ${service.color} opacity-[0.03] rounded-bl-full group-hover:scale-150 transition-transform duration-700`} />
                
                <div className={`${service.color} text-white p-6 rounded-3xl inline-block mb-10 shadow-lg`}>
                  {service.icon}
                </div>
                
                <h3 className="text-4xl font-black text-[#2E5F8C] mb-8 leading-tight">{service.title}</h3>
                
                <ul className="space-y-4 mb-12">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-lg font-bold text-gray-500">
                      <div className={`w-2 h-2 rounded-full ${service.color}`} /> {item}
                    </li>
                  ))}
                </ul>

                <button className={`flex items-center gap-3 font-black text-lg ${service.btnColor} hover:gap-5 transition-all`}>
                  Explorer ce pôle <ArrowRight />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL DEVIS AMÉLIORÉ */}
      <AnimatePresence>
        {showDevisModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setShowDevisModal(false)}
              className="absolute inset-0 bg-[#2E5F8C]/40 backdrop-blur-xl"
            />
            <motion.div 
              initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 100, opacity: 0 }}
              className="relative bg-white w-full max-w-xl rounded-[3rem] p-8 md:p-12 shadow-2xl overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-6">
                <button onClick={() => setShowDevisModal(false)} className="text-gray-400 hover:text-gray-600"><X size={32}/></button>
              </div>

              <h2 className="text-4xl font-black text-[#2E5F8C] mb-2">Parlons projet.</h2>
              <p className="text-[#8b6f7c] font-bold mb-8">Recevez une proposition personnalisée sous 24h.</p>
              
              <form className="space-y-4">
                <input type="text" placeholder="Votre nom" className="w-full bg-gray-50 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-[#a94c79] transition-all" />
                <input type="email" placeholder="Email professionnel" className="w-full bg-gray-50 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-[#a94c79] transition-all" />
                <select className="w-full bg-gray-50 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-[#a94c79] transition-all font-bold text-gray-500">
                  <option>Type de besoin</option>
                  <option>Engineering Logiciel</option>
                  <option>Marketing & Ads</option>
                </select>
                <textarea placeholder="Détails de votre vision..." className="w-full bg-gray-50 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-[#a94c79] transition-all h-32" />
                
                <button 
                  className="w-full py-5 rounded-2xl text-white font-black text-xl flex items-center justify-center gap-3 transition-all hover:brightness-110 shadow-lg shadow-[#a94c79]/30"
                  style={{ backgroundColor: COLORS.accent }}
                >
                  Envoyer <Send size={20} />
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default HomePage;