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
        SOLUTION for Noise Pollution
      </h1>

      {/* Section 1: What Individuals Can Do */}
      <div className="flex mb-8">
        {/* Left: Individual's actions */}
        <div className="w-2/3 bg-white p-6 rounded-l-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-4">What Individuals Can Do</h2>
          <ul className="list-disc pl-5 space-y-2 text-lg custom-list">
            <li>Use Noise-Cancelling Devices: Employ earplugs or noise-cancelling headphones in noisy environments.</li>
            <li>Maintain Quiet at Home: Keep noise levels down, especially during nighttime hours.</li>
            <li>Support Noise Abatement Efforts: Advocate for community noise reduction initiatives.</li>
            <li>Choose Quiet Appliances: Opt for quieter home appliances and vehicles.</li>
            <li>Be Aware of Noise Levels: Keep personal noise, like music, at moderate levels.</li>
          </ul>
        </div>

        {/* Right: Image for individuals */}
        <div className="w-1/3 bg-white p-6 rounded-r-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img src={image3} alt="Individual" className="w-full h-auto rounded-lg" />
        </div>
      </div>

      {/* Section 2: What Industries Can Do */}
      <div className="flex mb-8">
        {/* Left: Industry's actions */}
        <div className="w-2/3 bg-white p-6 rounded-l-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-4">What Industries and Corporations Can Do</h2>
          <ul className="list-disc pl-5 space-y-2 text-lg custom-list">
            <li>Implement Noise Control Technologies: Use technologies that reduce noise emissions.</li>
            <li>Design Quieter Products: Develop products with noise-reduction features.</li>
            <li>Maintain Equipment: Regular maintenance reduces noise from wear and tear.</li>
            <li>Engage in CSR Activities: Support noise pollution reduction initiatives.</li>
            <li>Adhere to Noise Standards: Follow industry noise control regulations.</li>
          </ul>
        </div>

        {/* Right: Image for industries */}
        <div className="w-1/3 bg-white p-6 rounded-r-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img src={image4} alt="Company" className="w-full h-auto rounded-lg" />
        </div>
      </div>

      {/* Section 3: What Governments Can Do */}
      <div className="flex mb-8">
        {/* Left: Government's actions */}
        <div className="w-2/3 bg-white p-6 rounded-l-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-4">What Governments Can Do</h2>
          <ul className="list-disc pl-5 space-y-2 text-lg custom-list">
            <li>Enforce Noise Regulations: Implement laws to control noise pollution.</li>
            <li>Promote Urban Planning: Design cities with noise-reduction elements like green spaces.</li>
            <li>Monitor Noise Pollution: Establish systems to track noise levels.</li>
            <li>Educate the Public: Launch awareness campaigns on noise pollution and its effects.</li>
            <li>Support Quiet Zones: Designate quiet zones in public areas such as parks and neighborhoods.</li>
          </ul>
        </div>

        {/* Right: Image for governments */}
        <div className="w-1/3 bg-white p-6 rounded-r-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img src={image5} alt="Government" className="w-full h-auto rounded-lg" />
        </div>
      </div>

      {/* Footer with a link to more information */}
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
