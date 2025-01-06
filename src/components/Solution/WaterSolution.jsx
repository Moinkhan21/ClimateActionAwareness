import React from "react";
import image3 from "../../Assets/Individual.png";
import image4 from "../../Assets/Company.png";
import image5 from "../../Assets/Government.png";
import SubHeaderSolution from "./SubHeaderSolution";
import "../Components.css"; // Import custom CSS file

const Solutions = () => {
  return (
    <div className="container mx-auto p-6 bg-gray-100 min-h-screen">
      {/* Sub-header component for navigation */}
      <SubHeaderSolution />

      <br />

      {/* Main heading for the section */}
      <h1 className="text-4xl font-bold text-center text-blue-800 mb-8">
        SOLUTION for Water Pollution
      </h1>

      {/* Section for Individuals' actions */}
      <div className="flex mb-8">
        <div className="w-2/3 bg-white p-6 rounded-l-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-4">
            What Individuals Can Do
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-lg custom-list">
            <li>
              Conserve Water: Use water-saving devices and fix leaks to reduce
              overall water consumption.
            </li>
            <li>
              Proper Disposal of Chemicals: Avoid flushing chemicals,
              pharmaceuticals, and toxic substances down the drain.
            </li>
            <li>
              Reduce Plastic Use: Minimize the use of single-use plastics that
              can end up in water bodies.
            </li>
            <li>
              Use Eco-friendly Products: Choose non-toxic and biodegradable
              cleaning products.
            </li>
            <li>
              Support Clean Water Initiatives: Participate in or donate to
              organizations focused on water conservation and pollution
              prevention.
            </li>
          </ul>
        </div>
        <div className="w-1/3 bg-white p-6 rounded-r-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          {/* Image for Individual actions */}
          <img
            src={image3}
            alt="Individual"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>

      <br />

      {/* Section for Corporations' actions */}
      <div className="flex">
        <div className="w-2/3 bg-white p-6 rounded-l-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-4">
            What Industries and Corporations Can Do
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-lg custom-list">
            <li>
              Adopt Best Practices for Waste Management: Implement waste
              treatment and recycling practices to prevent pollution.
            </li>
            <li>
              Reduce Chemical Usage: Use fewer harmful chemicals in
              manufacturing processes and switch to safer alternatives.
            </li>
            <li>
              Implement Water Recycling Systems: Invest in technologies that
              recycle water within industrial processes.
            </li>
            <li>
              Participate in Clean Water Projects: Support and fund initiatives
              aimed at reducing water pollution and improving water quality.
            </li>
            <li>
              Ensure Compliance: Adhere to environmental regulations and
              standards to prevent water pollution.
            </li>
          </ul>
        </div>
        <div className="w-1/3 bg-white p-6 rounded-r-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          {/* Image for Company actions */}
          <img
            src={image4}
            alt="Company"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>

      <br />

      {/* Section for Governments' actions */}
      <div className="flex">
        <div className="w-2/3 bg-white p-6 rounded-l-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-4">
            What Governments Can Do
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-lg custom-list">
            <li>
              Regulate Industrial Discharges: Enforce regulations on the
              discharge of pollutants into water bodies and ensure compliance.
            </li>
            <li>
              Invest in Water Treatment Facilities: Upgrade and expand water
              treatment infrastructure to improve water quality.
            </li>
            <li>
              Promote Sustainable Agriculture: Implement practices to reduce
              runoff of pesticides and fertilizers into water sources.
            </li>
            <li>
              Monitor Water Quality: Establish and maintain comprehensive water
              quality monitoring systems.
            </li>
            <li>
              Educate the Public: Raise awareness about the impact of water
              pollution and ways to reduce it.
            </li>
          </ul>
        </div>
        <div className="w-1/3 bg-white p-6 rounded-r-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          {/* Image for Government actions */}
          <img
            src={image5}
            alt="Government"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>

      {/* Footer with a call-to-action link */}
      <footer className="text-center mt-8">
        <p className="text-gray-600">
          Learn more about the impacts of climate change and ongoing efforts to
          address them on our{" "}
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
