import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, Mail, MapPin, Send, Calendar, 
  Linkedin, Twitter, Facebook, Globe, 
  ArrowRight, ShieldCheck, CheckCircle2 
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import log from '../assets/log.png';
const openCalendly = () => {
  window.open("https://calendly.com/votre-nom", "_blank");
};
const ContactPage = () => {
  const [formData, setFormData] = useState({});

  const offices = [
    { city: "Douala", country: "Cameroun (Siège)", addr: "Bonamoussadi carrefour lieu dit Meka", tel: "+237 690 79 41 39" }

  ];

  return (
    <>
      <Navbar />
      <div className="bg-[#FFFFFF] text-[#333333] min-h-screen overflow-hidden relative font-sans">
        
        {/* --- SECTION 1 : HERO & BACKGROUND --- */}
        <section className="relative pt-32 pb-24 px-4 bg-[#2E5F8C] overflow-hidden">
          {/* Cercles décoratifs avec les NOUVELLES COULEURS */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#a94c79]/10 rounded-full blur-[120px] -mr-48 -mt-48" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#8b6f7c]/20 rounded-full blur-[100px] -ml-20 -mb-20" />
          
          <div className="w-full max-w-[90%] mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-8"
              >
                <div className="inline-block px-5 py-2 rounded-full bg-[#a94c79] text-white text-xs font-black uppercase tracking-[0.25em] shadow-lg shadow-[#a94c79]/20">
                  ESN & Agence Digitale
                </div>
                <h1 className="text-6xl lg:text-8xl font-black tracking-tighter leading-[0.9] text-white">
                  VOTRE PROJET <br />
                  <span className="text-[#7BB8E8] italic">NOTRE EXPERTISE</span>.
                </h1>
                <p className="text-xl text-[#7BB8E8] max-w-lg font-medium leading-relaxed">
                  "L'innovation digitale est le moteur de votre croissance. Nous sommes là pour la piloter."
                  <span className="block mt-4 text-sm font-black uppercase tracking-widest text-[#a94c79]">
               DG ITTERNS CORP
                  </span>
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative h-[450px] lg:h-[550px] rounded-[3rem] overflow-hidden border-[12px] border-white/10 shadow-2xl"
              >
                <img 
                  src="https://i.pinimg.com/736x/c2/bd/78/c2bd78ee39e885e7be5a4c1b3ff5d59f.jpg" 
                  alt="Team ITTERNS" 
                  className="w-full h-full object-cover brightness-110 contrast-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2E5F8C]/80 to-transparent" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* --- SECTION 2 : CARTES D'INFOS & FORMULAIRE --- */}
        <div className="w-full max-w-[90%] mx-auto relative z-10 -mt-20 pb-20">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* COLONNE GAUCHE : DIRECTION */}
            <div className="lg:col-span-4 space-y-10">
              <motion.div 
                whileHover={{ y: -10 }}
                className="p-10 bg-white rounded-[3rem] shadow-2xl border border-gray-100 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:rotate-12 transition-transform">
                  <ShieldCheck size={100} className="text-[#a94c79]" />
                </div>
                
                <img src={log} alt="Logo" className="h-16 mb-8 object-contain" />
                
                <h3 className="text-xs font-black uppercase mb-6 tracking-[0.3em] text-[#a94c79] border-b border-gray-100 pb-4">Direction Générale</h3>
                
                <div className="space-y-3">
               
                  
                  <div className="flex flex-wrap gap-2 pt-2">
                    {['Développement', 'Stratégie', 'Marketing'].map(tag => (
                      <span key={tag} className="px-4 py-1.5 bg-[#a94c79]/10 text-[#a94c79] rounded-full text-[10px] font-black uppercase tracking-tighter border border-[#a94c79]/20">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="pt-6 space-y-4">
                    <a href="tel:+237693250319" className="flex items-center gap-4 text-[#333333] hover:text-[#a94c79] font-bold transition-colors">
                      <div className="p-2 bg-[#a94c79]/5 rounded-lg"><Phone size={20} className="text-[#a94c79]" /></div>
                      +237 690 79 41 39
                    </a>
                  
                  </div>
                </div>
              </motion.div>

              {/* HUBS */}
              <div className="space-y-6 px-6">
                <h3 className="text-2xl font-black italic flex items-center gap-3 text-[#2E5F8C]">
                  <Globe className="text-[#a94c79]" /> Hubs Internationaux
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  {offices.map((office, idx) => (
                    <div key={idx} className="p-6 bg-white border border-gray-100 rounded-[2rem] hover:border-[#a94c79] transition-all shadow-sm group flex justify-between items-center">
                      <div>
                        <p className="font-black text-xl text-[#2E5F8C] group-hover:text-[#a94c79] transition-colors">{office.city}</p>
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{office.country}</p>
                      </div>
                      <ArrowRight className="text-gray-200 group-hover:text-[#a94c79] transition-colors" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* COLONNE DROITE : FORMULAIRE */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              className="lg:col-span-8 bg-white rounded-[4rem] p-10 lg:p-20 shadow-[0_50px_100px_-20px_rgba(169,76,121,0.1)] border border-gray-50"
            >
              <div className="mb-16">
                <h2 className="text-5xl font-black text-[#2E5F8C] mb-4">LANCEZ VOTRE <span className="text-[#a94c79]">PROJET</span>.</h2>
                <p className="text-[#8b6f7c] font-medium text-lg italic">Réponse garantie sous 24 heures ouvrées par nos experts.</p>
              </div>

              <form className="grid md:grid-cols-2 gap-10">
                <div className="space-y-3">
                  <label className="text-xs font-black uppercase tracking-[0.2em] text-[#2E5F8C] ml-2">Nom & Prénom</label>
                  <input type="text" className="w-full px-8 py-6 bg-gray-50 border-2 border-transparent focus:border-[#a94c79] focus:bg-white rounded-3xl transition-all font-bold text-[#333333] outline-none" placeholder="Ex: ...." />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-black uppercase tracking-[0.2em] text-[#2E5F8C] ml-2">Service souhaité</label>
                  <select className="w-full px-8 py-6 bg-gray-50 border-2 border-transparent focus:border-[#a94c79] focus:bg-white rounded-3xl transition-all font-bold text-[#333333] outline-none appearance-none">
                    <option>Développement Web / Mobile</option>
                    <option>Marketing Digital</option>
                    <option>Logiciel sur mesure</option>
                    <option>Conseil & Stratégie</option>
                  </select>
                </div>
                <div className="md:col-span-2 space-y-3">
                  <label className="text-xs font-black uppercase tracking-[0.2em] text-[#2E5F8C] ml-2">Détails de votre besoin</label>
                  <textarea rows="5" className="w-full px-8 py-6 bg-gray-50 border-2 border-transparent focus:border-[#a94c79] focus:bg-white rounded-3xl transition-all font-bold text-[#333333] outline-none placeholder:font-medium" placeholder="Parlez-nous de vos objectifs..."></textarea>
                </div>
                
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="md:col-span-2 text-white py-8 rounded-[2.5rem] font-black text-2xl flex items-center justify-center gap-6 shadow-2xl transition-all group"
                  style={{ backgroundColor: '#a94c79', boxShadow: '0 25px 50px -12px rgba(169, 76, 121, 0.4)' }}
                >
                  Envoyer à ITTENS CORP SARL <Send size={24} className="group-hover:translate-x-2 transition-transform" />
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>

        {/* --- SECTION 3 : RÉASSURANCE --- */}
        <div className="w-full max-w-[90%] mx-auto pb-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
              <h3 className="text-4xl font-black text-[#2E5F8C] italic underline decoration-[#a94c79] decoration-4 underline-offset-8">Pourquoi nous choisir ?</h3>
              <div className="grid gap-6">
                {[
                  "Expertise multi-secteurs (Afrique & Europe)",
                  "Accompagnement personnalisé par le DG",
                  "Solutions scalables et sécurisées"
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-4 bg-white p-6 rounded-3xl border border-gray-100 shadow-sm group hover:border-[#8b6f7c] transition-colors">
                    <CheckCircle2 className="text-[#a94c79]" size={28} />
                    <span className="font-bold text-gray-700">{text}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <motion.div 
              whileHover={{ rotate: -1 }}
              className="p-16 rounded-[4rem] text-white relative overflow-hidden shadow-2xl"
              style={{ background: 'linear-gradient(135deg, #2E5F8C 0%, #a94c79 100%)' }}
            >
              <div className="relative z-10">
                <h3 className="text-5xl font-black italic mb-8 leading-tight">BESOIN D'UN <br />DEVIS RAPIDE ?</h3>
                <p className="text-white/80 font-bold mb-10 text-xl">Planifiez un appel stratégique avec nos consultants.</p>
                <button onClick={openCalendly} className="bg-white text-[#a94c79] px-12 py-6 rounded-2xl font-black text-xl flex items-center gap-4 hover:scale-105 transition-all">
                  Réserver mon créneau <Calendar size={24} />
                </button>
              </div>
              <div className="absolute -bottom-10 -right-10 opacity-10">
                <img src={log} alt="" className="w-80 grayscale invert" />
              </div>
            </motion.div>
          </div>
        </div>

      </div>
      <Footer />
    </>
  );
};

export default ContactPage;