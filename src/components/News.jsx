import React, { useEffect, useState } from "react"; // Importing React and necessary hooks
import axios from "axios"; // Importing Axios for API requests

const News = () => {
  const [articles, setArticles] = useState([]); // State to store fetched articles

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          "https://newsapi.org/v2/everything?q=climate&apiKey=1f24857ada8f466896c105f3694539b3"
        );
        // Limit to the top 15 articles for display
        setArticles(response.data.articles.slice(0, 15));
      } catch (error) {
        console.error("Error fetching news:", error); // Log error if fetching fails
      }
    };

    fetchNews(); // Fetch news on component mount
  }, []); // Empty dependency array ensures this runs only once

  return (
    <section id="news" className="p-8 bg-gray-100">
      {/* Section Title */}
      <h2 className="text-4xl font-bold text-center text-green-800 mb-8">
        Latest News on Climate
      </h2>

      {/* Responsive Grid Layout for News Articles */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <div
            key={article.url} // Using URL as unique key since each article has a unique link
            className="bg-white relative p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            {/* Display article image if available */}
            {article.urlToImage && (
              <img
                src={article.urlToImage}
                alt={article.title}
                className="w-full h-48 object-cover rounded-t-lg mb-4"
              />
            )}

            {/* Article Title */}
            <h3 className="text-2xl font-semibold mb-2">{article.title}</h3>

            {/* Article Description */}
            <p className="text-gray-700 mb-4">{article.description}</p>

            {/* Read More Link */}
            <a
              href={article.url}
              className="text-white bg-blue-500 rounded p-1.5 absolute bottom-1.5 right-2 hover:bg-blue-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer" // Ensures safe navigation to external links
            >
              Read more
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default News; // Exporting the component for use in the app
