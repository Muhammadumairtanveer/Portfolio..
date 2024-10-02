import React from 'react';

const Projects = () => {
  return (
    <>
      {/* Projects Section */}
      <section className="mb-12 bg-gradient-to-br from-gray-100 via-white to-gray-200 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">My Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            
            {/* Project 1 */}
            <div className="group relative overflow-hidden rounded-lg shadow-lg bg-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-56 bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                <span className="text-white text-4xl font-bold">To Do List</span>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-blue-600 mb-3">To Do List Website</h3>
                <p className="text-gray-700 mb-4">
                  I created a simple To Do List website to showcase my projects. This project helped me practice <strong>HTML</strong>,<strong>CSS</strong>, <strong>JavaScript</strong> and <strong>React js</strong> and learn how to structure a website and make it responsive.
                </p>
                <a href="https://to-do-list-in-react-js.vercel.app/"
                   className="inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300">
                  View Project
                </a>
              </div>
            </div>
            
            {/* Project 2 */}
            <div className="group relative overflow-hidden rounded-lg shadow-lg bg-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-56 bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center">
                <span className="text-white text-4xl font-bold">Color Picker</span>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-green-600 mb-3">To-Do List Application</h3>
                <p className="text-gray-700 mb-4">
                  A basic color picker app using <strong>React</strong> to set color. This project helped me understand how to interact with the DOM and add interactivity to a web page.
                </p>
                <a href="https://color-picker-eta-ten.vercel.app/"
                   className="inline-block px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-300">
                  View Project
                </a>
              </div>
            </div>
            
          </div>

          {/* GitHub Profile Section */}
          <div className="mt-12 text-center">
            <h3 className="text-3xl font-semibold text-gray-800 mb-4">Check Out My GitHub</h3>
            <p className="text-gray-600 mb-4">
              Explore more of my projects and contributions on GitHub. I regularly update my repository with new work and learning projects.
            </p>
            <a href="https://github.com/Muhammadumairtanveer"
               target="_blank" 
               rel="noopener noreferrer"
               className="inline-block px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300">
              Visit My GitHub Profile
            </a>
          </div>

        </div>
      </section>
    </>
  );
};

export default Projects;
