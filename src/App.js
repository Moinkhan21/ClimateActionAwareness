import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Impact from './components/Impact/Impact';
import Solutions from './components/Solution/Solutions';
import News from './components/News';
import Footer from './components/Footer';
import LandImpact from './components/Impact/LandImpact';
import WaterImpact from './components/Impact/WaterImpact';
import GreenGasEffectImpact from './components/Impact/GreenGasEffectImpact';
import GlobalWarmingImpact from './components/Impact/GlobalWarmingImpact';
import NoiseImpact from './components/Impact/NoiseImpact';
import LandSolution from './components/Solution/LandSolution';
import WaterSolution from './components/Solution/WaterSolution';
import GreenGasEffectSolution from './components/Solution/GreenGasEffectSolution';
import GlobalWarmingSolution from './components/Solution/GlobalWarmingSolution';
import NoiseSolution from './components/Solution/NoiseSolution';

function App() {
  return (
    <Router>
      {/* Main container for app layout */}
      <div className="container mx-auto p-4">
        {/* Navigation bar with centered content */}
        <nav className="flex justify-between items-center bg-gray-800 text-white p-4 rounded-lg mb-4">
          {/* App title */}
          <div className="text-2xl font-bold">Climate Action Awareness</div>
          {/* Navigation links */}
          <div className="space-x-4">
            <Link to="/" className="hover:text-gray-400">Home</Link>
            <Link to="/impact" className="hover:text-gray-400">Impact</Link>
            <Link to="/solutions" className="hover:text-gray-400">Solutions</Link>
            <Link to="/news" className="hover:text-gray-400">News</Link>
          </div>
        </nav>
        
        {/* Defining routes for different pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/news" element={<News />} />

          {/* Sub-routes for different impact pages */}
          <Route path="landimpact" element={<LandImpact />} />
          <Route path="waterimpact" element={<WaterImpact />} />
          <Route path="greengaseffectimpact" element={<GreenGasEffectImpact />} />
          <Route path="globalwarmingimpact" element={<GlobalWarmingImpact />} />
          <Route path="/noiseimpact" element={<NoiseImpact />} />

          {/* Sub-routes for different solution pages */}
          <Route path="/landsolution" element={<LandSolution />} />
          <Route path="/watersolution" element={<WaterSolution />} />
          <Route path="/greengaseffectsolution" element={<GreenGasEffectSolution />} />
          <Route path="/globalwarmingsolution" element={<GlobalWarmingSolution />} />
          <Route path="/noisesolution" element={<NoiseSolution />} />
        </Routes>
        
        {/* Footer component for app-wide use */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
