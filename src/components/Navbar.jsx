import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, 
  Menu, 
  X,
  ArrowRight, ChevronRight
} from 'lucide-react';
import log from '../assets/log.png';

// --- CONFIGURATION COULEURS MISE À JOUR ---
const COLORS = {
  primary: "#2E5F8C",      // Bleu principal
  accent: "#a94c79",       // NOUVEAU : Prune dynamique (Boutons/Highlights)
  accentLight: "#8b6f7c",  // NOUVEAU : Taupe (Hover/Détails)
  secondary: "#5BA3D0",    
  white: "#FFFFFF",
  text: "#333333"
};

const Navbar = ({ onDevisClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const servicesMenu = {
    logiciel: {
      title: "Ingénierie",
      path: "/devnumerique",
      color: COLORS.primary,
      items: [
        { label: "Sites Web", desc: "Vitrines & E-commerce" },
        { label: "Applications Web", desc: "Solutions SaaS" },
        { label: "Logiciels sur mesure", desc: "Outils métiers" }
      ]
    },
    marketing: {
      title: "Croissance",
      path: "/marketing",
      color: COLORS.accent,
      items: [
        { label: "Publicité en ligne", desc: "Google & Social Ads" },
        { label: "Stratégie digitale", desc: "Boostez votre ROI" },
        { label: "Solutions Digitales", desc: "Transformation" }
      ]
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 px-4 md:px-6 ${
      isScrolled || isMobileMenuOpen ? "bg-white/95 backdrop-blur-md shadow-lg py-3" : "bg-transparent py-6"
    }`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3 cursor-pointer group">
          <img src={log} alt="Logo" className="w-20 h-20 object-contain group-hover:scale-110 transition-transform" />
          <span className={`text-xl md:text-2xl font-black tracking-tighter ${isScrolled ? 'text-[#2E5F8C]' : 'text-white'}`}>
            ITTENS <span style={{ color: isScrolled ? COLORS.accent : COLORS.light }}>CORP</span>
          </span>
        </Link>

        {/* MENU DESKTOP */}
        <div className={`hidden md:flex items-center gap-8 font-bold ${isScrolled ? 'text-[#333333]' : 'text-white'}`}>
          <Link to="/" className="hover:text-[#a94c79] transition-colors">Accueil</Link>
          
          {/* DROP DOWN SERVICES */}
          <div className="relative group" 
               onMouseEnter={() => setActiveDropdown('services')} 
               onMouseLeave={() => setActiveDropdown(null)}>
            <button className="flex items-center gap-1 hover:text-[#a94c79] transition-colors">
              Services <ChevronDown size={16} className={`transition-transform ${activeDropdown ? 'rotate-180' : ''}`} />
            </button>
            
            <AnimatePresence>
              {activeDropdown && (
                <motion.div 
                  initial={{ opacity: 0, y: 15 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 mt-2 w-[450px] bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 grid grid-cols-2 gap-6 text-[#333333]"
                >
                  {Object.values(servicesMenu).map((section, idx) => (
                    <div key={idx}>
                      <Link to={section.path} className="block group/item">
                        <p className="text-[10px] uppercase tracking-widest font-black mb-3" style={{ color: section.color }}>
                          {section.title}
                        </p>
                        {section.items.map((item, i) => (
                          <div key={i} className="mb-3 p-2 hover:bg-gray-50 rounded-xl transition-colors">
                            <div className="text-sm font-bold group-hover/item:text-[#a94c79]">{item.label}</div>
                            <div className="text-[10px] text-gray-400">{item.desc}</div>
                          </div>
                        ))}
                        <div className="flex items-center text-[10px] font-bold mt-2" style={{ color: section.color }}>
                          Voir tout <ChevronRight size={12} />
                        </div>
                      </Link>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link to="/about" className="hover:text-[#a94c79] transition-colors">À propos</Link>
          <Link to="/contact" className="hover:text-[#a94c79] transition-colors">Contact</Link>
        </div>

        {/* CTA & HAMBURGER */}
        <div className="flex items-center gap-4">
          <button 
            onClick={onDevisClick}
            className="hidden sm:block px-6 py-3 rounded-full font-black text-sm transition-all transform hover:scale-105 shadow-xl text-white"
            style={{ backgroundColor: COLORS.accent, boxShadow: `0 10px 20px -5px ${COLORS.accent}40` }}
          >
            Demander un devis
          </button>

          <button 
            className="md:hidden p-2 rounded-lg"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{ color: isScrolled || isMobileMenuOpen ? COLORS.primary : 'white' }}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white overflow-hidden mt-4 rounded-2xl shadow-xl"
          >
            <div className="p-6 flex flex-col gap-4">
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold border-b pb-2">Accueil</Link>
              
              <div className="space-y-4">
                <p className="text-xs font-black uppercase text-gray-400">Nos Services</p>
                <Link to="/devnumerique" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                  <span className="font-bold text-[#2E5F8C]">Ingénierie Digitale</span>
                  <ChevronRight size={18} />
                </Link>
                <Link to="/marketing" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                  <span className="font-bold text-[#a94c79]">Marketing Digital</span>
                  <ChevronRight size={18} />
                </Link>
              </div>

              <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold border-b pb-2">À propos</Link>
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold border-b pb-2">Contact</Link>
              
              <button 
                onClick={onDevisClick}
                className="w-full py-4 rounded-xl font-black text-white mt-2"
                style={{ backgroundColor: COLORS.accent }}
              >
                Demander un devis
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;