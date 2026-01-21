import React from 'react';
import { motion } from 'framer-motion';
import  { Link } from 'react-router-dom';
import { 
  Code2, Globe, Smartphone, Cpu, 
  ArrowRight, CheckCircle2, Layers, Database 
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const DevNumeriquePage = () => {
  const subServices = [
    {
      title: "Sites Web Performants",
      icon: <Globe size={32} />,
      description: "Des vitrines digitales ultra-rapides, optimisées pour le SEO et conçues pour convertir vos visiteurs en clients.",
      features: ["Sites Vitrines & Corporate", "E-commerce (Shopify, Woo)", "Landing Pages optimisées", "Design Responsive"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      tech: ["React", "Next.js", "Tailwind"]
    },
    {
      title: "Applications Web & Mobile",
      icon: <Smartphone size={32} />,
      description: "Des expériences utilisateurs fluides sur iOS et Android, et des applications web (SaaS) puissantes pour vos clients.",
      features: ["Apps natives (iOS/Android)", "PWA (Progressive Web Apps)", "Plateformes SaaS", "UX/UI Design Mobile"],
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=800", 
      tech: ["React Native", "Flutter", "Firebase"]
    },
    {
      title: "Développement Sur Mesure",
      icon: <Cpu size={32} />,
      description: "L'ingénierie logicielle pour répondre à vos défis uniques. Automatisations, CRM internes et architectures complexes.",
      features: ["Logiciels métiers (ERP/CRM)", "APIs & Microservices", "Automatisation", "Migration Cloud"],
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
      tech: ["Python", "Node.js", "Docker"]
    }
  ];

  return (
    <>
      <Navbar />
      <div className="bg-[#FFFFFF] text-[#333333] min-h-screen overflow-hidden font-sans">
        
        {/* --- HERO SECTION --- */}
        <section className="relative pt-40 pb-32 px-4 bg-[#2E5F8C] overflow-hidden">
          {/* Background décoratif avec les nouvelles teintes */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#a94c79]/15 rounded-full blur-[150px] -mr-48 -mt-48" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#8b6f7c]/20 rounded-full blur-[120px] -ml-20 -mb-20" />
          
          <div className="w-full max-w-[90%] mx-auto relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden" animate="visible" variants={containerVariants}
              className="space-y-8"
            >
              <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#a94c79] text-white text-xs font-black uppercase tracking-[0.25em] shadow-lg shadow-[#a94c79]/20">
                <Code2 size={16} /> Pôle Ingénierie
              </motion.div>
              
              <motion.h1 variants={itemVariants} className="text-6xl lg:text-8xl font-black text-white leading-none tracking-tighter">
                NOUS CODON<span className="text-[#a94c79]">S</span> <br />
                VOTRE <span className="text-[#7BB8E8] italic">FUTUR</span>.
              </motion.h1>
              
              <motion.p variants={itemVariants} className="text-xl text-gray-200 max-w-lg font-medium leading-relaxed">
                Le développement chez ITTERNS CORP n'est pas qu'une suite de codes. C'est l'architecture de votre réussite de demain.
              </motion.p>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}
               className="relative h-[500px] rounded-[4rem] overflow-hidden border-8 border-white/10 shadow-2xl"
            >
               <img 
                 src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000" 
                 alt="Engineering ITTERNS" 
                 className="w-full h-full object-cover brightness-110 contrast-110"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-[#2E5F8C]/60 to-transparent" />
            </motion.div>
          </div>
        </section>

        {/* --- SECTION 2 : SERVICES DÉTAILLÉS --- */}
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
                {/* Image Service avec bordure pour la faire ressortir */}
                <div className="w-full lg:w-1/2 h-[400px] lg:h-[550px] rounded-[3.5rem] overflow-hidden shadow-2xl relative group border-4 border-white">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2E5F8C]/40 to-transparent" />
                  <div className="absolute top-6 left-6 bg-white p-4 rounded-2xl text-[#a94c79] shadow-xl">
                    {service.icon}
                  </div>
                </div>

                {/* Contenu Texte */}
                <div className="w-full lg:w-1/2 space-y-8">
                  <div>
                    <h3 className="text-xs font-black uppercase tracking-[0.3em] text-[#a94c79] mb-4">Expertise ITTERNS</h3>
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
                  
                  {/* Badges Technologies avec le code couleur Taupe */}
                  <div className="pt-6 border-t border-gray-100">
                    <p className="text-xs font-black uppercase text-[#8b6f7c] mb-3 tracking-widest">Stack Technologique</p>
                    <div className="flex flex-wrap gap-2">
                      {service.tech.map((tech, idx) => (
                        <span key={idx} className="px-4 py-2 bg-[#8b6f7c]/10 text-[#8b6f7c] rounded-xl text-xs font-black uppercase border border-[#8b6f7c]/20">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

          </div>
        </section>

        {/* --- SECTION 3 : PROCESSUS --- */}
        <section className="bg-gray-50 py-32 px-4">
           <div className="w-full max-w-[90%] mx-auto text-center mb-20">
              <h3 className="text-xs font-black uppercase tracking-[0.4em] text-[#a94c79] mb-4">Méthodologie Agile</h3>
              <h2 className="text-5xl font-black text-[#2E5F8C]">VOTRE PROJET EN 4 ÉTAPES</h2>
           </div>
           <div className="w-full max-w-[90%] mx-auto grid md:grid-cols-4 gap-8">
              {[
                { title: "Audit & Stratégie", icon: <Layers />, desc: "Analyse technique et définition des objectifs." },
                { title: "UX/UI Design", icon: <Smartphone />, desc: "Prototypes haute fidélité pour validation." },
                { title: "Développement", icon: <Code2 />, desc: "Codage agile par sprints itératifs." },
                { title: "Déploiement", icon: <Database />, desc: "Mise en ligne et monitoring continu." },
              ].map((step, i) => (
                 <div key={i} className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-gray-100 relative group hover:-translate-y-2 transition-transform">
                    <div className="bg-[#a94c79] text-white w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-[#a94c79]/20">
                       {step.icon}
                    </div>
                    <h4 className="text-xl font-black text-[#2E5F8C] mb-3">{i+1}. {step.title}</h4>
                    <p className="text-gray-500 font-medium">{step.desc}</p>
                    {i < 3 && <div className="hidden md:block absolute top-1/2 -right-6 transform -translate-y-1/2 text-[#a94c79]/20"><ArrowRight size={32} /></div>}
                 </div>
              ))}
           </div>
        </section>

        {/* --- SECTION CTA AVEC DÉGRADÉ MIXTE --- */}
        <section className="py-32 px-4">
          <div className="w-full max-w-[85%] mx-auto rounded-[4rem] p-16 lg:p-24 text-center relative overflow-hidden shadow-2xl" 
               style={{ background: 'linear-gradient(135deg, #2E5F8C 0%, #a94c79 100%)' }}>
            <div className="relative z-10 space-y-8">
              <h2 className="text-5xl lg:text-7xl font-black text-white leading-tight">
                PRÊT À CODER <br/> VOTRE RÉUSSITE ?
              </h2>
              <p className="text-xl text-white/80 font-medium max-w-2xl mx-auto">
                Discutez de votre cahier des charges avec nos ingénieurs. Nous transformons vos idées complexes en outils digitaux puissants.
              </p>
              <Link to='/contact' >
               <button className="bg-white text-[#a94c79] px-12 py-7 rounded-full font-black text-2xl hover:scale-105 transition-all shadow-2xl flex items-center gap-4 mx-auto">
                Parler à un expert <Code2 size={28} />
               </button>
              </Link>
            </div>
             <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')] opacity-10 mix-blend-overlay"></div>
          </div>
        </section>

      </div>
      <Footer />
    </>
  );
};

export default DevNumeriquePage;