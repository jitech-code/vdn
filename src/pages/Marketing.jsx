import React from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart2, Megaphone, Lightbulb, TrendingUp, 
  ArrowRight, CheckCircle2, Layers, LineChart, 
  Search, Users, Code2, ShieldCheck
} from 'lucide-react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const MarketingDigitalPage = () => {
  const subServices = [
    {
      title: "Publicité en Ligne (Paid Media)",
      icon: <Megaphone size={32} />,
      description: "Maximisez votre ROI avec des campagnes publicitaires ciblées sur Google, les réseaux sociaux et plateformes clés.",
      features: ["Google Ads (SEA)", "Campagnes Social Ads", "Retargeting & Display", "Analyse de performance"],
      image: "https://i.pinimg.com/736x/2a/a6/fb/2aa6fb4796e6d9f22a8b8e071c0e5f40.jpg",
      benefits: ["Acquisition rapide", "Ciblage précis", "Visibilité accrue"]
    },
    {
      title: "Stratégie Digitale Complète",
      icon: <Lightbulb size={32} />,
      description: "De l'audit à l'exécution, nous élaborons une feuille de route digitale sur mesure pour atteindre vos objectifs business.",
      features: ["Audit digital complet", "Positionnement de marque", "Plan marketing intégré", "Optimisation du funnel"],
      image: "https://i.pinimg.com/1200x/1a/05/5e/1a055ee6a34b6c06b2a17cc6753c9e5e.jpg",
      benefits: ["Vision à 360°", "Cohérence des actions", "Croissance durable"]
    },
    {
      title: "Solutions Digitales & CRM",
      icon: <Layers size={32} />,
      description: "Des outils pour optimiser vos processus : CRM, Emailing et Automatisation pour fidéliser votre audience.",
      features: ["Mise en place CRM/ERP", "Email Marketing", "Marketing Automation", "Gestion de Contenu"],
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
      benefits: ["Efficacité opérationnelle", "Expérience client", "Gain de temps"]
    }
  ];

  return (
    <>
    
      <Navbar />
      <div className="bg-white text-[#333333] min-h-screen overflow-hidden font-sans">
        
        {/* --- HERO SECTION : MARKETING --- */}
        <section className="relative pt-40 pb-32 px-4 bg-[#2E5F8C] overflow-hidden">
          {/* Nouveau code couleur dans le background */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#a94c79]/15 rounded-full blur-[150px] -mr-48 -mt-48" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#8b6f7c]/20 rounded-full blur-[120px] -ml-20 -mb-20" />
          
          <div className="w-full max-w-[90%] mx-auto relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden" animate="visible" variants={containerVariants}
              className="space-y-8"
            >
              <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#a94c79] text-white text-xs font-black uppercase tracking-[0.25em] shadow-lg shadow-[#a94c79]/20">
                <BarChart2 size={16} /> Pôle Croissance
              </motion.div>
              
              <motion.h1 variants={itemVariants} className="text-6xl lg:text-8xl font-black text-white leading-none tracking-tighter">
                ACCÉLÉREZ <br />
                VOTRE <span className="text-[#a94c79] italic font-serif">BUSINESS</span>.
              </motion.h1>
              
              <motion.p variants={itemVariants} className="text-xl text-gray-200 max-w-lg font-medium leading-relaxed">
                ITTENS CORP déploie des stratégies marketing percutantes pour booster votre visibilité et optimiser votre retour sur investissement.
              </motion.p>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}
               className="relative h-[500px] rounded-[4rem] overflow-hidden border-8 border-white/10 shadow-2xl"
            >
               <img 
                 src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1000" 
                 alt="Marketing Performance" 
                 className="w-full h-full object-cover brightness-110"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-[#2E5F8C]/60 to-transparent" />
            </motion.div>
          </div>
        </section>

        {/* --- SECTION 2 : SERVICES --- */}
        <section className="py-32 px-4 relative z-10 -mt-24">
          <div className="w-full max-w-[90%] mx-auto space-y-24">
            
            {subServices.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`flex flex-col lg:flex-row gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Image avec bordure premium */}
                <div className="w-full lg:w-1/2 h-[400px] lg:h-[550px] rounded-[3.5rem] overflow-hidden shadow-2xl relative group border-4 border-white">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2E5F8C]/40 to-transparent" />
                  <div className="absolute bottom-8 left-8 bg-white p-5 rounded-2xl text-[#a94c79] shadow-xl">
                    {service.icon}
                  </div>
                </div>

                {/* Texte */}
                <div className="w-full lg:w-1/2 space-y-8">
                  <div>
                    <h3 className="text-xs font-black uppercase tracking-[0.3em] text-[#a94c79] mb-4">Stratégie ITTENS</h3>
                    <h2 className="text-4xl lg:text-5xl font-black text-[#2E5F8C] mb-6 leading-tight">{service.title}</h2>
                    <p className="text-xl text-gray-600 font-medium leading-relaxed">{service.description}</p>
                  </div>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 font-bold text-[#333333]">
                        <CheckCircle2 className="text-[#a94c79]" size={20} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  {/* Bénéfices avec le code couleur Taupe */}
                  <div className="pt-6 border-t border-gray-100">
                    <p className="text-xs font-black uppercase text-[#8b6f7c] mb-3 tracking-widest">Impact Business</p>
                    <div className="flex flex-wrap gap-2">
                      {service.benefits.map((benefit, idx) => (
                        <span key={idx} className="px-4 py-2 bg-[#8b6f7c]/10 text-[#8b6f7c] rounded-xl text-xs font-black uppercase border border-[#8b6f7c]/20">
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

          </div>
        </section>

        {/* --- SECTION 3 : PHILOSOPHIE --- */}
        <section className="bg-gray-50 py-32 px-4">
           <div className="w-full max-w-[90%] mx-auto text-center mb-20">
              <h3 className="text-xs font-black uppercase tracking-[0.4em] text-[#a94c79] mb-4">Notre ADN</h3>
              <h2 className="text-5xl font-black text-[#2E5F8C]">LA PERFORMANCE PAR LA DONNÉE</h2>
           </div>
           <div className="w-full max-w-[90%] mx-auto grid md:grid-cols-4 gap-8">
              {[
                { title: "Écoute Active", icon: <Users />, desc: "Analyse de vos besoins et de votre marché." },
                { title: "Stratégie Agile", icon: <Lightbulb />, desc: "Des plans flexibles pour un monde qui bouge." },
                { title: "Exécution", icon: <Megaphone />, desc: "Campagnes rigoureuses et créatives." },
                { title: "Analyse", icon: <LineChart />, desc: "Reporting et optimisation continue du ROI." },
              ].map((step, i) => (
                 <div key={i} className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-gray-100 relative group hover:-translate-y-2 transition-transform">
                    <div className="bg-[#a94c79] text-white w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-[#a94c79]/20">
                       {step.icon}
                    </div>
                    <h4 className="text-xl font-black text-[#2E5F8C] mb-3">{step.title}</h4>
                    <p className="text-gray-500 font-medium">{step.desc}</p>
                    {i < 3 && <div className="hidden md:block absolute top-1/2 -right-6 transform -translate-y-1/2 text-[#a94c79]/20"><ArrowRight size={32} /></div>}
                 </div>
              ))}
           </div>
        </section>

{/* --- SECTION CTA RESPONSIVE --- */}
<section className="py-20 lg:py-32 px-4">
  <div 
    className="w-full max-w-[95%] lg:max-w-[85%] mx-auto rounded-[2.5rem] lg:rounded-[4rem] p-8 md:p-16 lg:p-24 text-center relative overflow-hidden shadow-2xl" 
    style={{ background: 'linear-gradient(135deg, #2E5F8C 0%, #a94c79 100%)' }}
  >
    <div className="relative z-10 space-y-6 lg:space-y-8">
      {/* Taille de texte adaptée : text-3xl sur mobile, text-7xl sur desktop */}
      <h2 className="text-3xl md:text-5xl lg:text-7xl font-black text-white leading-tight">
        VOTRE PROCHAINE <br className="hidden md:block" /> 
        ÉTAPE DE <span className="text-[#8b6f7c] italic">CROISSANCE</span> ?
      </h2>
      
      <p className="text-lg lg:text-xl text-white/80 font-medium max-w-2xl mx-auto leading-relaxed">
        Confiez-nous votre stratégie digitale et observez votre entreprise atteindre de nouveaux sommets.
      </p>

      {/* Bouton : padding réduit sur mobile, texte plus petit, centré */}
      <Link to='/contact'>
        <button className="bg-white text-[#a94c79] px-8 py-4 lg:px-12 lg:py-7 rounded-full font-black text-lg lg:text-2xl hover:scale-105 active:scale-95 transition-all shadow-2xl flex items-center justify-center gap-3 mx-auto w-full sm:w-auto">
          Obtenir mon devis <TrendingUp className="w-5 h-5 lg:w-7 lg:h-7" />
        </button>
      </Link>
    </div>

    {/* Effet de texture discret */}
    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay pointer-events-none"></div>
  </div>
</section>
      </div>
      <Footer />
    </>
  );
};

export default MarketingDigitalPage;