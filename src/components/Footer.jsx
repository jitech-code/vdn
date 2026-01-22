import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronRight, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Facebook,
  Send
} from 'lucide-react';
import log from '../assets/log.png';
// Dans votre composant

// --- CONFIGURATION COULEURS MISE À JOUR ---
const COLORS = {
  primary: "#2E5F8C",      // Bleu principal
  accent: "#a94c79",       // NOUVEAU : Prune dynamique
  accentLight: "#8b6f7c",  // NOUVEAU : Taupe rosé
  secondary: "#5BA3D0",    
  light: "#7BB8E8",
  white: "#FFFFFF"
};

const Footer = () => {
  return (
    <footer className="bg-[#2E5F8C] text-white pt-24 pb-12 px-6 relative overflow-hidden">
      {/* Effets de lueurs d'arrière-plan avec les nouvelles couleurs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#a94c79]/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] bg-[#8b6f7c]/20 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          
          {/* COLONNE 1 : LOGO & RESEAUX */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              {/* Utilisation du logo image */}
              <img src={log} alt="Logo ITTERNS" className="w-12 h-12 object-contain" />
              <span className="text-2xl font-black italic tracking-tighter">
                ITTENS <span style={{ color: COLORS.accent }}>CORP SARL</span>
              </span>
            </div>
            <p className="text-[#7BB8E8] font-bold mb-6">L'expertise numérique d'élite au service de votre croissance.</p>
            <div className="flex gap-4">
              {[Linkedin, Twitter, Facebook].map((Icon, i) => (
                <div key={i} className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#a94c79] cursor-pointer transition-all transform hover:-translate-y-1">
                  <Icon size={18}/>
                </div>
              ))}
            </div>
          </div>

          {/* COLONNE 2 : SERVICES (CORRESPONDANCE ROUTES) */}
          <div>
            <h4 className="font-black text-lg mb-6 border-b-2 pb-2 inline-block" style={{ borderColor: COLORS.accent }}>
              Services
            </h4>
            <ul className="space-y-4">
              <li>
                <Link to="/devnumerique" className="flex items-center gap-2 text-gray-200 hover:text-[#a94c79] transition-colors group">
                  <ChevronRight size={14} style={{ color: COLORS.accent }} className="group-hover:translate-x-1 transition-transform" /> 
                  Développement Web & Apps
                </Link>
              </li>
              <li>
                <Link to="/devnumerique" className="flex items-center gap-2 text-gray-200 hover:text-[#a94c79] transition-colors group">
                  <ChevronRight size={14} style={{ color: COLORS.accent }} className="group-hover:translate-x-1 transition-transform" /> 
                  Logiciels Sur-mesure
                </Link>
              </li>
              <li>
                <Link to="/marketing" className="flex items-center gap-2 text-gray-200 hover:text-[#a94c79] transition-colors group">
                  <ChevronRight size={14} style={{ color: COLORS.accent }} className="group-hover:translate-x-1 transition-transform" /> 
                  Marketing Digital
                </Link>
              </li>
              <li>
                <Link to="/marketing" className="flex items-center gap-2 text-gray-200 hover:text-[#a94c79] transition-colors group">
                  <ChevronRight size={14} style={{ color: COLORS.accent }} className="group-hover:translate-x-1 transition-transform" /> 
                  Stratégie Ads (Google/Meta)
                </Link>
              </li>
            </ul>
          </div>

          {/* COLONNE 3 : CONTACT & NAVIGATION RAPIDE */}
          <div>
            <h4 className="font-black text-lg mb-6 border-b-2 pb-2 inline-block" style={{ borderColor: COLORS.accentLight }}>
              Contact
            </h4>
            <ul className="space-y-4 text-gray-200">
              <li className="flex items-start gap-3">
                <MapPin size={18} style={{ color: COLORS.accentLight }} className="mt-1" />
                <span className="text-sm">Boanamoussadi <br/>Douala, Cameroun</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} style={{ color: COLORS.accentLight }} />
                <span className="text-sm">contact@ittens-corp.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} style={{ color: COLORS.accentLight }} />
                <span className="font-bold text-sm">+237 690 79 41 39</span>
              </li>
              <li className="pt-2">
                <Link to="/about" className="text-[#7BB8E8] hover:text-white font-bold text-sm underline decoration-[#a94c79]">
                  En savoir plus sur nous
                </Link>
              </li>
            </ul>
          </div>

          {/* COLONNE 4 : NEWSLETTER AVEC NOUVELLES COULEURS */}
          <div>
            <h4 className="font-black text-lg mb-6 border-b-2 pb-2 inline-block" style={{ borderColor: COLORS.accent }}>
              Newsletter
            </h4>
            <p className="text-sm mb-4 text-gray-300">Recevez nos conseils stratégiques pour votre business.</p>
            <div className="flex flex-col gap-3">
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Votre email" 
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 transition-all text-sm"
                  style={{ focusRingColor: COLORS.accent }}
                />
              </div>
              <button 
                className="group flex items-center justify-center gap-2 py-3 rounded-xl font-black text-white transition-all transform hover:scale-105 active:scale-95 shadow-lg"
                style={{ backgroundColor: COLORS.accent }}
              >
                S'abonner <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* BARRE DE COPYRIGHT */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <p>© 2015 ITTENS CORP. Tous droits réservés.</p>
          <div className="flex gap-6">
            <Link to="/contact" className="hover:text-white transition-colors">Aide & Support</Link>
            <a href="#" className="hover:text-white transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-white transition-colors">Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;