// src/components/Impact.js
import React from "react";
import SubHeaderImpact from "./SubHeaderImpact"; // Importing the subheader component for consistency
import image3 from "../../Assets/Land-Pollution.png"; // Importing land pollution-related images
import image4 from "../../Assets/Land-Affect.png";
import image5 from "../../Assets/Land-Stat.jpg";

const Impact = () => {
  return (
    <div className="container mx-auto p-6 bg-gray-100 min-h-screen">
      {/* Including the SubHeaderImpact component */}
      <SubHeaderImpact />

      {/* Main Title */}
      <h1 className="text-4xl font-bold text-center text-blue-800 my-8">
        Land Pollution: A Global Crisis
      </h1>

      {/* Grid layout for content, 1 column on small screens, 2 on larger screens */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Section: Why Land Pollution Matters */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-4">Why Land Pollution Matters</h2>
          <p className="text-gray-700 text-lg">
            Land pollution occurs when harmful substances are dumped or spread on the ground, 
            degrading the soil and harming ecosystems. This can lead to food contamination, 
            habitat destruction, and negative impacts on human health. Proper waste management 
            and prevention of hazardous material release are essential to protecting land resources 
            and ensuring a healthy environment.
          </p>
        </div>

        {/* Image Section with hover effect */}
        <div className="image-hover-effect bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img
            src={image3}
            alt="Land Pollution"
            className="w-full h-auto rounded-lg"
          />
          <div className="hover-text text-lg mt-4">
            The degradation of the earth's land surfaces, both above and below ground, is referred 
            to as land pollution. Accumulation of waste contaminates groundwater and soil, with 
            greater soil permeability increasing the risk.
          </div>
        </div>

        {/* Image Section for land pollution statistics */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img
            src={image4}
            alt="Pollution Statistics"
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* Section: How Land Pollution Affects Us */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-4">How Land Pollution Affects Us</h2>
          <p className="text-gray-700 text-lg">
            Land pollution can cause respiratory problems and cancer due to the ingestion or inhalation 
            of contaminated soil and water. It also degrades soil quality, reducing agricultural 
            productivity, which leads to food insecurity. Additionally, it harms wildlife and disrupts 
            natural ecosystems.
          </p>
        </div>

        {/* Section: Key Statistics */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-4">Key Statistics</h2>
          <p className="text-gray-700 text-lg">
            According to the United Nations Environment Programme, over 2 billion tons of waste are 
            generated annually, with much of it ending up in landfills and causing pollution. Land 
            pollution impacts 70% of the world’s agricultural land, threatening food production and 
            biodiversity.
          </p>
        </div>

        {/* Section: Statistics Chart */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-4">Statistics Chart</h2>
          <img
            src={image5}
            alt="Statistics Chart"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>

      {/* Footer Section */}
      <footer className="text-center mt-8">
        <p className="text-gray-600">
          For more information on solutions to land pollution, visit our{" "}
          <a href="/landsolution" className="text-blue-600 underline">
            Solutions
          </a>{" "}
          page.
        </p>
      </footer>
    </div>
  );
};

export default Impact;
