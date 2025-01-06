import React from "react";
import { Link } from "react-router-dom";

const SubHeaderSolution = () => {
  return (
    <div className="text-white bold text-lg py-4 bg-lime-500">
      {/* Background color with light text for contrast */}
      <h1 className="text-4xl font-bold text-center mb-4">
        Pollutions and Its Solutions
      </h1>

      {/* Navigation for different pollution solutions */}
      <nav className="max-w-4xl mx-auto">
        <ul className="flex justify-center space-x-6">
          {/* Navigation links with hover effects */}
          <li>
            <Link to="/solutions" className="text-black hover:text-blue-500">
              Air
            </Link>
          </li>
          <li>
            <Link to="/landsolution" className="text-black hover:text-blue-500">
              Land
            </Link>
          </li>
          <li>
            <Link to="/watersolution" className="text-black hover:text-blue-500">
              Water
            </Link>
          </li>
          <li>
            <Link to="/noisesolution" className="text-black hover:text-blue-500">
              Noise
            </Link>
          </li>
          <li>
            <Link to="/greengaseffectsolution" className="text-black hover:text-blue-500">
              Green Gas Effect
            </Link>
          </li>
          <li>
            <Link to="/globalwarmingsolution" className="text-black hover:text-blue-500">
              Global Warming
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SubHeaderSolution;
