import React from "react";
import image3 from "../../Assets/Individual.png";
import image4 from "../../Assets/Company.png";
import image5 from "../../Assets/Government.png";
import SubHeaderSolution from "./SubHeaderSolution";
import "../Components.css"; // Import custom CSS

const Solutions = () => {
  return (
    <div className="container mx-auto p-6 bg-gray-100 min-h-screen">
      {/* Sub-header component */}
      <SubHeaderSolution />

      {/* Title of the page */}
      <h1 className="text-4xl font-bold text-center text-blue-800 mb-8">
        SOLUTION for Air Pollution
      </h1>

      {/* Section 1: What Individuals Can Do */}
      <div className="flex mb-8">
        {/* Left: Actions for individuals */}
        <div className="w-2/3 bg-white p-6 rounded-l-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-4">What Individuals Can Do</h2>
          <ul className="list-disc pl-5 space-y-2 text-lg custom-list">
            <li>Reduce Car Usage: Opt for public transportation, carpool, bike, or walk when possible to lower emissions.</li>
            <li>Conserve Energy: Use energy-efficient appliances and reduce energy consumption.</li>
            <li>Avoid Burning Trash: Properly recycle and dispose of waste instead of burning it.</li>
            <li>Plant Trees: Trees absorb CO2 and improve air quality.</li>
            <li>Support Clean Energy: Advocate for renewable energy sources like solar or wind.</li>
          </ul>
        </div>

        {/* Right: Image for individuals */}
        <div className="w-1/3 bg-white p-6 rounded-r-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img src={image3} alt="Individual" className="w-full h-auto rounded-lg" />
        </div>
      </div>

      {/* Section 2: What Industries Can Do */}
      <div className="flex mb-8">
        {/* Left: Actions for industries */}
        <div className="w-2/3 bg-white p-6 rounded-l-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-4">What Industries and Corporations Can Do</h2>
          <ul className="list-disc pl-5 space-y-2 text-lg custom-list">
            <li>Adopt Cleaner Technologies: Implement technologies that reduce emissions.</li>
            <li>Reduce Waste: Implement recycling programs to decrease impact on air quality.</li>
            <li>Corporate Responsibility: Develop sustainability policies focused on environmental protection.</li>
            <li>Support Environmental Initiatives: Fund research aimed at reducing air pollution.</li>
            <li>Transparent Reporting: Regularly report emissions and environmental impact for accountability.</li>
          </ul>
        </div>

        {/* Right: Image for industries */}
        <div className="w-1/3 bg-white p-6 rounded-r-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img src={image4} alt="Company" className="w-full h-auto rounded-lg" />
        </div>
      </div>

      {/* Section 3: What Governments Can Do */}
      <div className="flex mb-8">
        {/* Left: Actions for governments */}
        <div className="w-2/3 bg-white p-6 rounded-l-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-4">What Governments Can Do</h2>
          <ul className="list-disc pl-5 space-y-2 text-lg custom-list">
            <li>Implement Regulations: Enforce stricter emissions standards for industries and vehicles.</li>
            <li>Promote Public Transit: Invest in and encourage public transportation use to reduce vehicles on the road.</li>
            <li>Support Clean Energy: Invest in renewable energy projects and provide incentives for adoption.</li>
            <li>Monitor Air Quality: Establish air quality monitoring systems to track pollution levels.</li>
            <li>Raise Awareness: Launch campaigns to educate the public about the impacts of air pollution.</li>
          </ul>
        </div>

        {/* Right: Image for governments */}
        <div className="w-1/3 bg-white p-6 rounded-r-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img src={image5} alt="Government" className="w-full h-auto rounded-lg" />
        </div>
      </div>

      {/* Footer with link to Impact page */}
      <footer className="text-center mt-8">
        <p className="text-gray-600">
          Learn more about the impacts of climate change and ongoing efforts to address them on our{" "}
          <a href="/impact" className="text-blue-600 underline">
            Impact
          </a>{" "}
          page.
        </p>
      </footer>
    </div>
  );
};

export default Solutions;
