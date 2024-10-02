import React from 'react';

const About = () => {
  return (
    <>
      {/* What I Do Section */}
      <section className="mb-12 bg-gradient-to-r from-blue-100 via-blue-50 to-blue-100 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">What I Do</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex justify-center mb-4">
                <span className="bg-blue-600 text-white p-4 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                  </svg>
                </span>
              </div>
              <h3 className="text-2xl font-semibold text-blue-600 mb-3 text-center">Learning Front-End Development</h3>
              <p className="text-gray-700 text-center">
                I’m currently focused on mastering front-end development, particularly using technologies like <strong>HTML</strong>, <strong>CSS</strong>, and <strong>JavaScript</strong>. I’m also starting to work with <strong>React.js</strong> to build more dynamic and interactive user interfaces.
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex justify-center mb-4">
                <span className="bg-blue-600 text-white p-4 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                  </svg>
                </span>
              </div>
              <h3 className="text-2xl font-semibold text-blue-600 mb-3 text-center">Building Responsive Websites</h3>
              <p className="text-gray-700 text-center">
                As a beginner, I’m learning how to make websites that look good on different screen sizes, from mobile to desktop. I ensure my designs are simple yet effective.
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex justify-center mb-4">
                <span className="bg-blue-600 text-white p-4 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6" />
                  </svg>
                </span>
              </div>
              <h3 className="text-2xl font-semibold text-blue-600 mb-3 text-center">Problem Solving</h3>
              <p className="text-gray-700 text-center">
                I enjoy solving small coding challenges as I continue to develop my skills. I aim to grow by working on projects that help me improve my problem-solving and coding abilities.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
