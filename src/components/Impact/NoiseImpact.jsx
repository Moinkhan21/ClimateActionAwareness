// src/components/Impact.js
import React from "react";
import SubHeaderImpact from "./SubHeaderImpact"; // Sub-header component for consistency across pages
import image3 from "../../Assets/Noise-Pollution.jpeg"; // Noise pollution-related images
import image4 from "../../Assets/Noise-Affect.jpg";
import image5 from "../../Assets/Noise-Stat.png";

const Impact = () => {
  return (
    <div className="container mx-auto p-6 bg-gray-100 min-h-screen">
      {/* Subheader component */}
      <SubHeaderImpact />

      {/* Main title */}
      <h1 className="text-4xl font-bold text-center text-blue-800 my-8">
        Noise Pollution: A Global Crisis
      </h1>

      {/* Grid layout for content: 1 column on small screens, 2 columns on larger screens */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Section: Why Noise Pollution Matters */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-4">Why Noise Pollution Matters</h2>
          <p className="text-gray-700 text-lg">
            Noise pollution refers to harmful or excessive noise levels that negatively 
            impact human health and wildlife. Prolonged exposure to high noise levels 
            can cause hearing loss, stress, sleep disturbances, and other serious health 
            problems. It also disrupts communication and behavior in animals, affecting 
            their ability to survive in their natural habitat.
          </p>
        </div>

        {/* Image with hover effect */}
        <div className="image-hover-effect bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img
            src={image3}
            alt="Noise Pollution"
            className="w-full h-auto rounded-lg"
          />
          <div className="hover-text text-lg mt-4">
            The World Health Organization (WHO) defines noise pollution as sound above 
            65 decibels (dB). Harmful effects start at 75 dB, while levels above 120 dB 
            can cause pain and long-term damage.
          </div>
        </div>

        {/* Section: Image related to noise pollution effects */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img
            src={image4}
            alt="Noise Pollution Effects"
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* Section: How Noise Pollution Affects Us */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-4">How Noise Pollution Affects Us</h2>
          <p className="text-gray-700 text-lg">
            Long-term exposure to noise pollution can lead to health issues such as 
            hypertension, cardiovascular disease, and decreased cognitive performance. 
            Noise pollution also disrupts sleep, communication, and relaxation, lowering 
            quality of life. For wildlife, it interferes with essential behaviors like 
            mating, navigation, and hunting.
          </p>
        </div>

        {/* Section: Key Statistics */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-4">Key Statistics</h2>
          <p className="text-gray-700 text-lg">
            According to the World Health Organization (WHO), about 40% of the European 
            population is exposed to noise levels that can lead to health problems, including 
            sleep disturbances and heart conditions.
            <br /><br />
            Noise above 65 dB is considered pollution, with harmful effects starting at 75 dB 
            and painful levels exceeding 120 dB.
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
          For more information on solutions to noise pollution, visit our{" "}
          <a href="/noisesolution" className="text-blue-600 underline">
            Solutions
          </a>{" "}
          page.
        </p>
      </footer>
    </div>
  );
};

export default Impact;
