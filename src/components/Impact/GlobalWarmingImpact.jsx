// src/components/Impact.js
import React from "react";
import SubHeaderImpact from "./SubHeaderImpact"; // Importing subheader component for modular structure
import image3 from "../../Assets/GlobalWarming.jpg"; // Importing image assets
import image4 from "../../Assets/GlobalWarming-Affect.png";
import image5 from "../../Assets/GlobalWarming-Stat.jpg";

const Impact = () => {
  return (
    <div className="container mx-auto p-6 bg-gray-100 min-h-screen">
      {/* Including the subheader component */}
      <SubHeaderImpact />

      {/* Main heading */}
      <h1 className="text-4xl font-bold text-center text-blue-800 my-8">
        Global Warming: A Global Crisis
      </h1>

      {/* Content grid: Each section has information about global warming */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Section: Why Global Warming Matters */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="font-semibold mb-4 text-4xl">Why Global Warming Matters</h2>
          <p className="text-gray-700 text-lg">
            Global warming refers to the long-term increase in Earth's average surface temperature 
            due to rising levels of greenhouse gases. This leads to melting ice caps, rising sea levels, 
            and extreme weather events, with devastating effects on ecosystems, agriculture, and human societies.
          </p>
        </div>

        {/* Section: Image with hover effect and description */}
        <div className="image-hover-effect bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img
            src={image3}
            alt="Global Warming"
            className="w-full h-auto rounded-lg"
          />
          <div className="hover-text text-lg mt-4">
            Global warming has accelerated due to fossil fuel combustion. As the human population grows, 
            the volume of fossil fuels burned rises, contributing to rapid temperature increases.
          </div>
        </div>

        {/* Section: Pollution Statistics Image */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img
            src={image4}
            alt="Pollution Statistics"
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* Section: How Global Warming Affects Us */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-4xl font-semibold mb-4">How Global Warming Affects Us</h2>
          <p className="text-gray-700 text-lg">
            Global warming results in more severe heatwaves, rising sea levels, and disrupted weather patterns. 
            This can lead to food and water shortages, health risks, and population displacement due to extreme events.
          </p>
        </div>

        {/* Section: Key Statistics */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-4xl font-semibold mb-4">Key Statistics</h2>
          <p className="text-gray-700 text-lg">
            Since the late 19th century, global temperatures have risen by about 1.2°C. 
            The last decade has been the warmest on record, leading to accelerated ice melt and rising sea levels.
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

      {/* Footer with link to solutions page */}
      <footer className="text-center mt-8">
        <p className="text-gray-600">
          For more information on solutions to global warming, visit our{" "}
          <a href="/globalwarmingsolution" className="text-blue-600 underline">
            Solutions
          </a>{" "}
          page.
        </p>
      </footer>
    </div>
  );
};

export default Impact;
