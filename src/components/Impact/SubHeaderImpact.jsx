import React from "react";
import { Link } from "react-router-dom";

const SubHeaderImpact = () => {
  return (
    <div className="bg-lime-500 py-4 text-white">
      {/* Subheader container with background color and padding */}
      
      <h1 className="text-4xl font-bold text-center mb-4">
        Pollutions and Its Impact
      </h1>
      {/* Main title, large and centered */}

      <nav className="max-w-4xl mx-auto">
        {/* Navigation menu container, max width for alignment */}
        
        <ul className="flex justify-center space-x-6">
          {/* Centered list items with equal spacing */}
          
          <li>
            <Link
              to="/impact"
              className="text-black hover:text-blue-500 transition-colors duration-300"
            >
              Air
            </Link>
          </li>
          <li>
            <Link
              to="/landimpact"
              className="text-black hover:text-blue-500 transition-colors duration-300"
            >
              Land
            </Link>
          </li>
          <li>
            <Link
              to="/waterimpact"
              className="text-black hover:text-blue-500 transition-colors duration-300"
            >
              Water
            </Link>
          </li>
          <li>
            <Link
              to="/noiseimpact"
              className="text-black hover:text-blue-500 transition-colors duration-300"
            >
              Noise
            </Link>
          </li>
          <li>
            <Link
              to="/greengaseffectimpact"
              className="text-black hover:text-blue-500 transition-colors duration-300"
            >
              Green Gas Effect
            </Link>
          </li>
          <li>
            <Link
              to="/globalwarmingimpact"
              className="text-black hover:text-blue-500 transition-colors duration-300"
            >
              Global Warming
            </Link>
          </li>
        </ul>
        {/* List of navigation links with hover effects */}
      </nav>
    </div>
  );
};

export default SubHeaderImpact;
