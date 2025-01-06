import React from "react";
import SubHeaderImpact from "./SubHeaderImpact";
import image3 from "../../Assets/Water-Pollution.png";
import image4 from "../../Assets/Water-Affect.jpg";
import image5 from "../../Assets/Water-Stat.png";

const Impact = () => {
  return (
    <div className="container mx-auto p-6 bg-gray-100 min-h-screen">
      {/* Main container with padding and minimum height */}
      
      <SubHeaderImpact />
      <br />
      <h1 className="text-4xl font-bold text-center text-blue-800 mb-8">
        Water Pollution: A Global Crisis
      </h1>
      {/* Title with bold text and margin at the bottom */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Grid layout with one column on small screens and two on medium+ screens */}
        
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-4">
            Why Water Pollution Matters
          </h2>
          <p className="text-gray-700 text-lg">
            Water pollution is the contamination of water bodies like rivers,
            lakes, and oceans, which affects drinking water quality, aquatic
            life, and ecosystems. Contaminants such as chemicals, waste, and
            pathogens can lead to serious health issues for humans and wildlife,
            disrupt food chains, and degrade water resources essential for life.
          </p>
        </div>
        {/* First section with text content */}
        
        <div className="image-hover-effect bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img
            src={image3}
            alt="Water Pollution"
            className="w-full h-auto rounded-lg"
          />
          <div className="hover-text text-lg mt-4">
            Water pollution is the release of substances into bodies of water
            that makes water unsafe for human use and disrupts aquatic
            ecosystems. It can be caused by a variety of contaminants, including
            toxic waste, petroleum, and disease-causing microorganisms.
          </div>
        </div>
        {/* Second section with image and hover text */}
        
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img
            src={image4}
            alt="Pollution Statistics"
            className="w-full h-auto rounded-lg"
          />
        </div>
        {/* Image-only section */}
        
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-4">
            How Water Pollution Affects Us
          </h2>
          <p className="text-gray-700 text-lg">
            Water pollution can cause a range of health problems, including
            gastrointestinal infections, skin diseases, and reproductive issues.
            It also affects biodiversity by harming aquatic life and disrupting
            ecosystems. Polluted water sources can lead to the spread of
            waterborne diseases and diminish access to clean drinking water.
          </p>
        </div>
        {/* Fourth section with text content */}
        
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-4">Key Statistics</h2>
          <p className="text-gray-700 text-lg">
            The World Health Organization estimates that approximately 2 billion
            people globally lack access to safe drinking water. Polluted water
            sources are responsible for over 1.5 million deaths annually from
            waterborne diseases.
          </p>
        </div>
        {/* Key statistics section */}
        
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-4">Statistics Chart</h2>
          <img
            src={image5}
            alt="Statistics Chart"
            className="w-full h-auto rounded-lg"
          />
        </div>
        {/* Final section with statistics chart image */}
      </div>
      
      <footer className="text-center mt-8">
        <p className="text-gray-600">
          For more information on solutions to water pollution, visit our{" "}
          <a href="/watersolution" className="text-blue-600 underline">
            Solutions
          </a>{" "}
          page.
        </p>
      </footer>
      {/* Footer with link to solutions page */}
    </div>
  );
};

export default Impact;
