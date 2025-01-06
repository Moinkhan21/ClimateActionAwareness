import React from "react";
import image3 from "../../Assets/Individual.png";
import image4 from "../../Assets/Company.png";
import image5 from "../../Assets/Government.png";
import SubHeaderSolution from "./SubHeaderSolution";
import "../Components.css"; // Import the custom CSS file for component styles

const Solutions = () => {
  return (
    <div className="container mx-auto p-6 bg-gray-100 min-h-screen">
      {/* Component for sub-header information */}
      <SubHeaderSolution />
      
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-center text-blue-800 mb-8">
        SOLUTION for Greenhouse Gas Effect
      </h1>
      
      {/* Section 1: Solutions for Individuals */}
      <div className="flex mb-8">
        {/* Left: Information about individual contributions */}
        <div className="w-2/3 bg-white p-6 rounded-l-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-4">What Individuals Can Do</h2>
          <ul className="list-disc pl-5 space-y-2 text-lg custom-list">
            <li>Reduce Energy Consumption: Use energy-efficient appliances, turn off lights, and insulate homes to conserve energy.</li>
            <li>Use Renewable Energy: Support and invest in renewable energy sources, like solar or wind power.</li>
            <li>Drive Less: Opt for public transportation, carpooling, or switch to electric vehicles to reduce emissions.</li>
            <li>Support Carbon Offset Programs: Contribute to reforestation and other carbon-offsetting initiatives.</li>
            <li>Adopt Sustainable Practices: Reduce waste, recycle, and make eco-friendly choices daily.</li>
          </ul>
        </div>

        {/* Right: Image for individuals */}
        <div className="w-1/3 bg-white p-6 rounded-r-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img src={image3} alt="Individual" className="w-full h-auto rounded-lg" />
        </div>
      </div>

      {/* Section 2: Solutions for Industries and Corporations */}
      <div className="flex mb-8">
        {/* Left: Information about industry contributions */}
        <div className="w-2/3 bg-white p-6 rounded-l-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-4">What Industries and Corporations Can Do</h2>
          <ul className="list-disc pl-5 space-y-2 text-lg custom-list">
            <li>Adopt Low-Carbon Technologies: Invest in technologies that minimize greenhouse gas emissions.</li>
            <li>Improve Energy Efficiency: Optimize operations to reduce carbon footprints and energy use.</li>
            <li>Commit to Sustainability Goals: Set measurable sustainability targets for emission reduction.</li>
            <li>Engage in Carbon Offsetting: Participate in programs to offset unavoidable emissions.</li>
            <li>Promote Sustainable Practices: Foster sustainable practices across the supply chain.</li>
          </ul>
        </div>

        {/* Right: Image for industries */}
        <div className="w-1/3 bg-white p-6 rounded-r-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img src={image4} alt="Company" className="w-full h-auto rounded-lg" />
        </div>
      </div>

      {/* Section 3: Solutions for Governments */}
      <div className="flex">
        {/* Left: Information about government contributions */}
        <div className="w-2/3 bg-white p-6 rounded-l-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-4">What Governments Can Do</h2>
          <ul className="list-disc pl-5 space-y-2 text-lg custom-list">
            <li>Set Emission Reduction Targets: Implement and enforce national and local emission reduction goals.</li>
            <li>Promote Renewable Energy: Provide incentives for renewable energy adoption and invest in clean energy infrastructure.</li>
            <li>Implement Carbon Pricing: Use carbon taxes or cap-and-trade systems to encourage emission reductions.</li>
            <li>Support Climate Research: Fund research on climate change mitigation and adaptation strategies.</li>
            <li>Create Public Policies: Develop and enforce policies that reduce carbon footprints and encourage energy efficiency.</li>
          </ul>
        </div>

        {/* Right: Image for governments */}
        <div className="w-1/3 bg-white p-6 rounded-r-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img src={image5} alt="Government" className="w-full h-auto rounded-lg" />
        </div>
      </div>

      {/* Footer with additional resources link */}
      <footer className="text-center mt-8">
        <p className="text-gray-600">
          Learn more about the impacts of climate change and ongoing efforts to address them on our{" "}
          <a href="/impact" className="text-blue-600 underline">Impact</a> page.
        </p>
      </footer>
    </div>
  );
};

export default Solutions;
