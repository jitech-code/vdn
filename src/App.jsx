import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';

import ContactPage from './pages/ContactPage';
import { MessageSquare } from 'lucide-react';
import DevNumeriquePage from './pages/DevnumeriquePage';
import MarketingDigitalPage from './pages/Marketing';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <Router>
      {/* Placer le FloatingChat ici permet de l'afficher sur TOUTES les pages 
          car il est en dehors du composant <Routes> 
      */}
    

      <Routes>
        <Route path="/" element={<HomePage />} />
      
        <Route path="/contact" element={<ContactPage />} />
         <Route path="/about" element={<AboutPage />} />
           <Route path="/devnumerique" element={<DevNumeriquePage />} />
           <Route path="/marketing" element={<MarketingDigitalPage />} />
      
      
      
      </Routes>
    </Router>
  );
}

export default App;