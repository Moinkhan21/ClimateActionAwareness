// src/components/Impact.js
import React from "react";
import SubHeaderImpact from "./SubHeaderImpact"; // Importing the subheader component
import image3 from "../../Assets/GreenGasEffect-Pollution.png"; // Importing images related to greenhouse gas effects
import image4 from "../../Assets/GreenGasEffect-Affect.png";
import image5 from "../../Assets/GreenGasEffect-Stat.png";

const Impact = () => {
  return (
    <div className="container mx-auto p-6 bg-gray-100 min-h-screen">
      {/* Including SubHeaderImpact component */}
      <SubHeaderImpact />

      {/* Main heading */}
      <h1 className="text-4xl font-bold text-center text-blue-800 my-8">
        Green Gas Effect Pollution: A Global Crisis
      </h1>

      {/* Content grid for responsive layout: Each section describes the impact of greenhouse gas pollution */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Section: Why Green Gas Effect Pollution Matters */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-4">
            Why Green Gas Effect Pollution Matters
          </h2>
          <p className="text-gray-700 text-lg">
            The greenhouse gas effect is a natural process where certain gases in 
            Earth’s atmosphere trap heat, keeping the planet warm. Human activities 
            have increased the concentration of these gases, causing global warming 
            and climate change. This leads to extreme weather events, rising sea levels, 
            and severe impacts on ecosystems.
          </p>
        </div>

        {/* Section: Image with hover effect and description */}
        <div className="image-hover-effect bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img
            src={image3}
            alt="Green Gas Effect Pollution"
            className="w-full h-auto rounded-lg"
          />
          <div className="hover-text text-lg mt-4">
            The greenhouse effect traps heat near Earth's surface through gases known 
            as 'greenhouse gases.' These gases act like a blanket, keeping the Earth warm, 
            but their increased concentration leads to dangerous warming trends.
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

        {/* Section: How Green Gas Effect Pollution Affects Us */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-4">
            How Green Gas Effect Pollution Affects Us
          </h2>
          <p className="text-gray-700 text-lg">
            Increased greenhouse gases cause more severe weather events like heatwaves, 
            droughts, and floods. These effects harm agriculture, water supplies, and 
            human health, while also contributing to biodiversity loss and displacement 
            of communities.
          </p>
        </div>

        {/* Section: Key Statistics */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-4">Key Statistics</h2>
          <p className="text-gray-700 text-lg">
            CO2 levels in the atmosphere have risen by over 40% since the pre-industrial era, 
            leading to a global temperature rise of approximately 1.2°C. This warming has 
            triggered more frequent and severe extreme weather events.
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
          For more information on solutions to green-gas-effect pollution, visit our{" "}
          <a href="/greengaseffectsolution" className="text-blue-600 underline">
            Solutions
          </a>{" "}
          page.
        </p>
      </footer>
    </div>
  );
};

export default Impact;
