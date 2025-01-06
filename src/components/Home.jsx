// src/components/Home.js
import React from "react"; // Importing React for component creation
import "./Components.css"; // Importing custom CSS for additional styling
import image1 from "../Assets/img 1.png"; // Importing image 1
import image2 from "../Assets/img 2.jpeg"; // Importing image 2

const Home = () => {
  return (
    <div className="container mx-auto p-4">
      {/* Page title */}
      <h1 className="text-3xl font-bold text-center">
        Climate Action Awareness
      </h1>

      {/* Main content grid layout */}
      <div className="grid grid-cols-2 gap-4 mt-6">
        {/* Section with an image and hover effect */}
        <div className="image-hover-effect bg-gray-200 p-4 rounded-lg">
          <img
            src={image1}
            alt="Climate Action"
            className="w-full h-auto rounded-lg"
          />
          {/* Hover text with additional information */}
          <div className="hover-text">
            Climate is important because it affects many aspects of life,
            including food, transportation, clothing, and travel. It also has a
            major impact on health, livelihoods, and the future. Climate is the
            long-term pattern of weather conditions in a specific area.
          </div>
        </div>

        {/* Importance of Climate Action Awareness */}
        <div className="bg-gray-200 p-4 rounded-lg">
          <h2 className="text-2xl font-semibold mb-3">Importance</h2>
          <p className="text-lg flex-1">
            "Climate Action Awareness" is vital in educating people about the
            causes and consequences of climate change, motivating them to adopt
            sustainable behaviors, and advocating for effective environmental
            policies. It helps individuals understand the urgency of reducing
            carbon emissions, conserving resources, and supporting renewable
            energy. By raising awareness, we create a collective movement toward
            mitigating climate change, protecting ecosystems, and ensuring a
            healthier planet for future generations.
          </p>
        </div>

        {/* Section on Sustainable Development */}
        <div className="bg-gray-200 p-4 rounded-lg col-span-2">
          <h2 className="text-2xl font-semibold mb-3">
            Sustainable Development Needed
          </h2>
          <p className="text-lg flex-1">
            Sustainable development is crucial for balancing economic growth,
            environmental protection, and social equity to ensure a healthy
            planet for future generations. It involves meeting the needs of the
            present without compromising the ability of future generations to
            meet their own needs. By promoting sustainable practices—such as
            using renewable energy, reducing waste, and conserving natural
            resources—we can mitigate environmental damage, address climate
            change, and support long-term economic stability.
          </p>
        </div>

        {/* Section with another image */}
        <div className="bg-gray-200 p-4 rounded-lg">
          <img
            src={image2}
            alt="Role of Environment"
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* Role of Environment in Our Life */}
        <div className="bg-gray-200 p-4 rounded-lg">
          <h2 className="text-2xl font-semibold mb-3">
            Role of Environment in Our Life
          </h2>
          <p className="text-lg flex-1">
            The environment is crucial for our health, providing clean air,
            water, and fertile soil essential for life. It regulates climate
            through natural systems like forests and oceans, which help balance
            carbon dioxide levels and weather patterns. Biodiversity within the
            environment supports ecosystem stability, resilience, and essential
            services. Economically, industries such as agriculture, tourism, and
            fishing rely on a healthy environment. Cultural and recreational
            activities also benefit from natural landscapes, contributing to our
            quality of life and well-being.
          </p>
        </div>
      </div>

      {/* Footer section with a conclusion */}
      <footer className="text-center mt-6">
        <p>
          Conclusion: Climate change poses a significant threat to our planet.
          It's crucial to take collective action to mitigate its impacts and
          promote sustainable practices. For more information on how climate
          change impacts our world, visit our{" "}
          <a href="/impact" className="text-blue-500 hover:underline">
            Impact page
          </a>
          .
        </p>
      </footer>
    </div>
  );
};

export default Home; // Exporting the component for use in the application
