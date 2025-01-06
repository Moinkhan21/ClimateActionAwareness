import React from "react";
import image3 from "../../Assets/Individual.png";
import image4 from "../../Assets/Company.png";
import image5 from "../../Assets/Government.png";
import SubHeaderSolution from "./SubHeaderSolution";
import "../Components.css"; // Import the custom CSS file

const Solutions = () => {
  return (
    <div className="container mx-auto p-6 bg-gray-100 min-h-screen">
      {/* SubHeader component for additional context */}
      <SubHeaderSolution />
      <h1 className="text-4xl font-bold text-center text-blue-800 mb-8">
        SOLUTION for Global Warming
      </h1>

      {/* Section 1: Individuals */}
      <div className="flex mb-8">
        {/* Left side: Details for individuals */}
        <div className="w-2/3 bg-white p-6 rounded-l-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-4">What Individuals Can Do</h2>
          <ul className="list-disc pl-5 space-y-2 text-lg custom-list">
            <li>Reduce Carbon Footprint: Make eco-friendly choices, such as reducing meat consumption, using public transportation, and conserving energy.</li>
            <li>Support Climate Action: Advocate for policies and initiatives aimed at combating global warming and reducing greenhouse gas emissions.</li>
            <li>Educate Others: Raise awareness about global warming and encourage others to take action.</li>
            <li>Participate in Local Efforts: Engage in community projects focused on sustainability and climate resilience.</li>
            <li>Adopt Sustainable Living: Make lifestyle changes that reduce environmental impact, such as minimizing waste and supporting renewable energy.</li>
          </ul>
        </div>
        {/* Right side: Image for individuals */}
        <div className="w-1/3 bg-white p-6 rounded-r-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img src={image3} alt="Individual" className="w-full h-auto rounded-lg" />
        </div>
      </div>

      {/* Section 2: Industries and Corporations */}
      <div className="flex mb-8">
        {/* Left side: Details for industries and corporations */}
        <div className="w-2/3 bg-white p-6 rounded-l-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-4">What Industries and Corporations Can Do</h2>
          <ul className="list-disc pl-5 space-y-2 text-lg custom-list">
            <li>Transition to Green Technologies: Invest in and adopt technologies that reduce emissions and environmental impact.</li>
            <li>Enhance Operational Efficiency: Implement measures to increase efficiency and reduce energy consumption in operations.</li>
            <li>Set Climate Goals: Establish and commit to ambitious targets for reducing greenhouse gas emissions and improving sustainability.</li>
            <li>Support Climate Research and Innovation: Invest in research and development of new solutions for addressing global warming.</li>
            <li>Engage in Policy Advocacy: Support and advocate for policies and regulations that address global warming and promote environmental protection.</li>
          </ul>
        </div>
        {/* Right side: Image for industries */}
        <div className="w-1/3 bg-white p-6 rounded-r-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img src={image4} alt="Company" className="w-full h-auto rounded-lg" />
        </div>
      </div>

      {/* Section 3: Governments */}
      <div className="flex">
        {/* Left side: Details for governments */}
        <div className="w-2/3 bg-white p-6 rounded-l-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-4">What Governments Can Do</h2>
          <ul className="list-disc pl-5 space-y-2 text-lg custom-list">
            <li>Implement Climate Policies: Enforce policies aimed at reducing greenhouse gas emissions and mitigating global warming effects.</li>
            <li>Promote International Agreements: Support and participate in global agreements such as the Paris Agreement to address climate change.</li>
            <li>Invest in Climate Resilience: Fund projects that enhance resilience to the impacts of global warming, such as infrastructure improvements and disaster preparedness.</li>
            <li>Encourage Sustainable Development: Promote practices and technologies that reduce environmental impact and support sustainable growth.</li>
            <li>Monitor and Report: Track progress on climate goals and report on the effectiveness of climate policies and initiatives.</li>
          </ul>
        </div>
        {/* Right side: Image for governments */}
        <div className="w-1/3 bg-white p-6 rounded-r-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img src={image5} alt="Government" className="w-full h-auto rounded-lg" />
        </div>
      </div>

      {/* Footer section */}
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
