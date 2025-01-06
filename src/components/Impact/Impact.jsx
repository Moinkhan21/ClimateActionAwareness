// src/components/Impact.js
import React from "react";
import SubHeaderImpact from "./SubHeaderImpact"; // Importing the subheader component
import image3 from "../../Assets/Air-Pollution.png"; // Importing images related to air pollution
import image4 from "../../Assets/Air-Affect.png";
import image5 from "../../Assets/Air-Stat.png";

const Impact = () => {
  return (
    <div className="container mx-auto p-6 bg-gray-100 min-h-screen">
      {/* Including the subheader component */}
      <SubHeaderImpact />

      {/* Main heading */}
      <h1 className="text-4xl font-bold text-center text-blue-800 my-8">
        Air Pollution: A Global Crisis
      </h1>

      {/* Grid layout for content sections. Responsive design with 1 column on small screens and 2 on larger screens */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Section: Why Air Pollution Matters */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-4">Why Air Pollution Matters</h2>
          <p className="text-gray-700 text-lg">
            Air pollution has severe consequences for both the environment and human health. 
            Pollutants like particulate matter (PM2.5 and PM10), nitrogen oxides, and sulfur 
            dioxide can cause respiratory problems, cardiovascular diseases, and premature death. 
            Additionally, air pollution exacerbates global warming and affects ecosystems and 
            weather patterns. Tackling air pollution is crucial for improving public health and 
            preserving natural systems.
          </p>
        </div>

        {/* Image with hover effect */}
        <div className="image-hover-effect bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img
            src={image3}
            alt="Air Pollution"
            className="w-full h-auto rounded-lg"
          />
          <div className="hover-text text-lg mt-4">
            Air pollution affects millions of people worldwide, leading to serious health 
            conditions and environmental degradation.
          </div>
        </div>

        {/* Pollution statistics image */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img
            src={image4}
            alt="Pollution Statistics"
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* Section: How Air Pollution Affects Us */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-4">How Air Pollution Affects Us</h2>
          <p className="text-gray-700 text-lg">
            Air pollution has immediate and long-term effects on human health. Short-term exposure 
            can cause eye irritation, coughing, and shortness of breath, while long-term exposure 
            is linked to chronic respiratory diseases, heart conditions, and lung cancer. Vulnerable 
            groups, including children and the elderly, are at higher risk. Air pollution also affects 
            cognitive function and reduces overall quality of life.
          </p>
        </div>

        {/* Section: Key Statistics */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-4">Key Statistics</h2>
          <p className="text-gray-700 text-lg">
            Air pollution is responsible for around 7 million premature deaths each year, according 
            to the World Health Organization. About 91% of the urban population breathes air that 
            exceeds WHO guidelines for pollutants. These alarming statistics highlight the need for 
            stronger air quality policies to mitigate health risks.
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

      {/* Footer section */}
      <footer className="text-center mt-8">
        <p className="text-gray-600">
          For more information on solutions to air pollution, visit our{" "}
          <a href="/solutions" className="text-blue-600 underline">
            Solutions
          </a>{" "}
          page.
        </p>
      </footer>
    </div>
  );
};

export default Impact;
