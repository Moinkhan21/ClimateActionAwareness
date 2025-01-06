import React from "react"; // Importing React to create the component

// Functional component for the footer
const Footer = () => {
  return (
    // Main footer element with styling for background, text color, padding, and alignment
    <footer className="bg-gray-800 text-white p-4 text-center">
      {/* Footer copyright text */}
      <p className="text-sm">
        &copy; 2024 Climate Action Awareness {/* Display copyright notice */}
      </p>
      
      {/* Section for a tagline or mission statement */}
      <div className="mt-2">
        <p className="text-xs">
          Empowering communities for a sustainable future {/* Highlighting the organization's purpose */}
        </p>
      </div>

      {/* Link to scroll back to the top of the page */}
      <div className="mt-4">
        <a
          href="#top" /* Scrolls to the element with the ID 'top' */
          className="text-blue-300 hover:text-blue-500" /* Changes text color on hover */
        >
          Back to top {/* Label for the link */}
        </a>
      </div>
    </footer>
  );
};

export default Footer; // Exporting the component for use in other parts of the application
