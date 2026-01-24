import React from 'react';
import { motion } from 'framer-motion';
import  { Link } from 'react-router-dom';
import { 
  Users, Target, Rocket, CheckCircle2, 
  MapPin, Award, ArrowRight, Zap, 
  Code2, BarChart
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import logo from '../assets/log.png';

const AboutPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <>
      <Navbar />
      <div className="bg-white text-[#333333] min-h-screen overflow-hidden font-sans">
        
        {/* --- HERO SECTION : L'ESSENCE ITTERNS --- */}
        <section className="relative pt-40 pb-24 px-4 bg-[#2E5F8C] overflow-hidden">
          {/* Cercles décoratifs avec les nouvelles couleurs */}
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#a94c79]/10 rounded-full blur-[120px] -ml-24 -mt-24" />
          <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#8b6f7c]/20 rounded-full blur-[100px] -mr-12 -mb-12" />
          
          <div className="w-full max-w-[90%] mx-auto relative z-10">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="text-center space-y-8"
            >
              <motion.div variants={itemVariants} className="inline-block px-6 py-2 rounded-full bg-[#a94c79] text-white text-xs font-black uppercase tracking-[0.3em] shadow-lg shadow-[#a94c79]/20">
                Depuis 2018 à vos côtés
              </motion.div>
              
              <motion.h1 variants={itemVariants} className="text-6xl lg:text-[10rem] font-black text-white leading-none tracking-tighter">
                BIEN PLUS QU'UNE <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7BB8E8] via-white to-[#a94c79] italic">AGENCE DIGITALE</span>.
              </motion.h1>
              
              <motion.p variants={itemVariants} className="text-xl lg:text-2xl text-[#7BB8E8] max-w-3xl mx-auto font-medium leading-relaxed">
                ITTENS <span className="text-white">CORP</span> est une ESN visionnaire dédiée à la transformation technologique des entreprises.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* --- SECTION 2 : NOTRE IDENTITÉ ET NOTRE LOCALISATION --- */}
        <section className="py-32 px-4 relative">
          <div className="w-full max-w-[90%] mx-auto grid lg:grid-cols-2 gap-20 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <h2 className="text-5xl lg:text-7xl font-black text-[#2E5F8C] leading-tight">
                ANCRÉS À <br />
                <span style={{ color: '#a94c79' }}>DOUALA</span>.
              </h2>
              
              <p className="text-xl text-gray-600 leading-relaxed font-medium">
                Notre siège social reflète notre volonté de proximité. Situés au cœur du dynamisme économique du Cameroun, nous accompagnons nos clients avec une réactivité totale.
              </p>

              {/* Bloc Adresse Spécifique Mis à jour */}
              <div className="p-10 bg-gray-50 rounded-[3rem] border-l-8 border-[#a94c79] shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-6">
                  <div className="p-4 bg-[#a94c79] text-white rounded-2xl shadow-lg">
                    <MapPin size={32} />
                  </div>
                  <div>
                    <h4 className="text-sm font-black uppercase tracking-widest text-[#8b6f7c] mb-2">Siège Social</h4>
                    <p className="text-2xl font-black text-[#2E5F8C]">Bonamoussadi</p>
                    <p className="text-lg font-bold text-[#a94c79]">Lieu dit carrefour laboratoire Meka</p>
                    <p className="text-gray-500 font-medium mt-2 italic">Douala, Cameroun</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-[4rem] overflow-hidden shadow-2xl h-[600px] border-[12px] border-gray-50"
            >
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000" 
                alt="Bureaux ITTERNS CORP" 
                className="w-full h-full object-cover brightness-110 contrast-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2E5F8C]/60 via-transparent to-transparent" />
            </motion.div>
          </div>
        </section>

        {/* --- SECTION 3 : NOS PILIERS --- */}
        <section className="bg-gray-50 py-32 px-4">
          <div className="w-full max-w-[90%] mx-auto">
            <div className="text-center mb-20 space-y-4">
              <h3 className="text-xs font-black uppercase tracking-[0.4em] text-[#a94c79]">Ce qui nous définit</h3>
              <h2 className="text-5xl font-black text-[#2E5F8C]">L'EXCELLENCE EN 3 PILIERS</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: <Code2 size={40} />, label: "Expertise Technique", desc: "Développement de logiciels sur mesure et applications web complexes.", color: "bg-[#2E5F8C]" },
                { icon: <BarChart size={40} />, label: "Performance Digitale", desc: "Stratégies de marketing digital pour booster votre business immédiatement.", color: "bg-[#a94c79]" },
                { icon: <Zap size={40} />, label: "Agilité Totale", desc: "Une structure ESN flexible qui s'adapte aux besoins des PME et grands groupes.", color: "bg-[#8b6f7c]" }
              ].map((pillier, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -15 }}
                  className="bg-white p-12 rounded-[3.5rem] shadow-xl shadow-gray-200/50 border border-gray-100 group transition-all"
                >
                  <div className={`${pillier.color} text-white p-5 rounded-2xl inline-block mb-8 shadow-lg group-hover:scale-110 transition-transform`}>
                    {pillier.icon}
                  </div>
                  <h4 className="text-2xl font-black text-[#2E5F8C] mb-4 group-hover:text-[#a94c79] transition-colors">{pillier.label}</h4>
                  <p className="text-gray-500 font-medium leading-relaxed">{pillier.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* --- SECTION 4 : LE MOT DU DG --- */}
        <section className="py-32 px-4">
          <div className="w-full max-w-[80%] mx-auto bg-[#2E5F8C] rounded-[4rem] p-12 lg:p-24 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#a94c79]/20 rounded-full -mr-32 -mt-32 blur-3xl" />
            
            <div className="relative z-10 flex flex-col lg:flex-row gap-16 items-center">
              <div className="w-48 h-48 lg:w-64 lg:h-64 rounded-full border-8 border-[#a94c79]/30 overflow-hidden flex-shrink-0 bg-white p-4">
                <img src={logo} alt="Aurelien Nsangoun" className="w-full h-full object-contain" />
              </div>
              
              <div className="space-y-8 text-center lg:text-left">
                <blockquote className="text-2xl lg:text-4xl font-bold text-white italic leading-tight">
                  "Notre mission chez ITTENS CORP est de transformer chaque défi technologique en une opportunité de croissance durable pour nos partenaires."
                </blockquote>
                <div>
            
                  <p className="text-white/60 font-bold uppercase tracking-widest text-sm">ITTENS CORP</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- SECTION 5 : APPEL À L'ACTION --- */}
        <section className="pb-32 px-4">
          <div className="w-full max-w-[90%] mx-auto text-center space-y-12">
            <h2 className="text-5xl lg:text-7xl font-black text-[#2E5F8C] tracking-tighter">
              PRÊT À <span style={{ color: '#a94c79' }}>INNOVER</span> ?
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
             <Link to="/contact">
                  
              <button className="bg-[#a94c79] text-white px-12 py-6 rounded-full font-black text-xl hover:scale-105 transition-all shadow-xl shadow-[#a94c79]/30 flex items-center gap-4 group">
                Démarrer un projet <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </button>
             </Link>
             
              {/* <button className="border-2 border-[#2E5F8C] text-[#2E5F8C] px-12 py-6 rounded-full font-black text-xl hover:bg-[#2E5F8C] hover:text-white transition-all">
                Voir nos expertises
              </button> */}
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </>
  );
};

export default AboutPage;