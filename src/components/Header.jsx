import React from "react"; // Importing React to define the component

// Functional component for the header
const Header = () => {
  return (
    // Main header container with styling for background, text color, padding, and layout
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      {/* Branding or site title */}
      <div className="text-2xl font-bold">
        Climate Action Awareness {/* Displays the site name prominently */}
      </div>
      
      {/* Navigation section */}
      <nav className="text-lg">
        <ul className="flex space-x-4">
          {/* List of navigation links */}
          <li>
            <a
              href="#home" /* Links to the 'home' section of the page */
              className="hover:text-gray-400" /* Changes text color on hover for interactivity */
            >
              Home {/* Label for the navigation link */}
            </a>
          </li>
          <li>
            <a
              href="#impact" /* Links to the 'impact' section of the page */
              className="hover:text-gray-400"
            >
              Impact {/* Label for the navigation link */}
            </a>
          </li>
          <li>
            <a
              href="#solutions" /* Links to the 'solutions' section of the page */
              className="hover:text-gray-400"
            >
              Solutions {/* Label for the navigation link */}
            </a>
          </li>
          <li>
            <a
              href="#news" /* Links to the 'news' section of the page */
              className="hover:text-gray-400"
            >
              News {/* Label for the navigation link */}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header; // Exporting the component for use in other parts of the application
