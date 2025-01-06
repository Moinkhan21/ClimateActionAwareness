import React from "react";
import image3 from "../../Assets/Individual.png";
import image4 from "../../Assets/Company.png";
import image5 from "../../Assets/Government.png";
import SubHeaderSolution from "./SubHeaderSolution";
import "../Components.css"; // Importing custom CSS for styling

const Solutions = () => {
  return (
    <div className="container mx-auto p-6 bg-gray-100 min-h-screen">
      {/* Sub-header for the Solutions page */}
      <SubHeaderSolution />

      {/* Title of the page */}
      <h1 className="text-4xl font-bold text-center text-blue-800 mb-8">
        SOLUTION for Land Pollution
      </h1>

      {/* Section 1: What Individuals Can Do */}
      <div className="flex mb-8">
        {/* Left: Individual's role */}
        <div className="w-2/3 bg-white p-6 rounded-l-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-4">What Individuals Can Do</h2>
          <ul className="list-disc pl-5 space-y-2 text-lg custom-list">
            <li>Reduce, Reuse, Recycle: Minimize waste generation by recycling and reusing products.</li>
            <li>Compost Organic Waste: Compost food scraps and yard waste to reduce landfill contributions.</li>
            <li>Proper Waste Disposal: Dispose of hazardous materials, such as batteries and chemicals, at designated recycling centers.</li>
            <li>Support Green Products: Purchase products with minimal packaging and those made from recycled materials.</li>
            <li>Participate in Clean-Up Events: Join community clean-up events to help remove litter from parks, streets, and natural areas.</li>
          </ul>
        </div>

        {/* Right: Image representing individual actions */}
        <div className="w-1/3 bg-white p-6 rounded-r-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img src={image3} alt="Individual" className="w-full h-auto rounded-lg" />
        </div>
      </div>

      {/* Section 2: What Industries Can Do */}
      <div className="flex mb-8">
        {/* Left: Industry's role */}
        <div className="w-2/3 bg-white p-6 rounded-l-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-4">What Industries and Corporations Can Do</h2>
          <ul className="list-disc pl-5 space-y-2 text-lg custom-list">
            <li>Adopt Waste Reduction Practices: Implement processes that reduce waste production and improve material efficiency.</li>
            <li>Develop Sustainable Packaging: Use eco-friendly packaging materials and design products to reduce packaging waste.</li>
            <li>Implement Waste Management Systems: Establish comprehensive waste management and recycling systems within facilities.</li>
            <li>Support Land Remediation Projects: Invest in efforts to clean and restore contaminated land.</li>
            <li>Engage in Corporate Social Responsibility (CSR): Support environmental initiatives and community clean-up efforts.</li>
          </ul>
        </div>

        {/* Right: Image representing industry actions */}
        <div className="w-1/3 bg-white p-6 rounded-r-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img src={image4} alt="Company" className="w-full h-auto rounded-lg" />
        </div>
      </div>

      {/* Section 3: What Governments Can Do */}
      <div className="flex mb-8">
        {/* Left: Government's role */}
        <div className="w-2/3 bg-white p-6 rounded-l-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-4">What Governments Can Do</h2>
          <ul className="list-disc pl-5 space-y-2 text-lg custom-list">
            <li>Enforce Waste Management Regulations: Implement strict regulations on waste disposal and promote proper waste management practices.</li>
            <li>Promote Recycling Programs: Support and expand recycling initiatives to reduce the amount of waste sent to landfills.</li>
            <li>Invest in Land Remediation: Fund projects to clean up contaminated sites and rehabilitate polluted lands.</li>
            <li>Implement Green Building Standards: Promote sustainable construction practices that reduce land pollution and waste.</li>
            <li>Educate the Public: Launch campaigns to raise awareness about reducing land pollution and proper waste management.</li>
          </ul>
        </div>

        {/* Right: Image representing government's role */}
        <div className="w-1/3 bg-white p-6 rounded-r-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img src={image5} alt="Government" className="w-full h-auto rounded-lg" />
        </div>
      </div>

      {/* Footer with link to learn more */}
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
