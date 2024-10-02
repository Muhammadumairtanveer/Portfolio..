import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold">Connect with Me</h2>
          <p className="mt-2">Feel free to reach out on my social media channels!</p>
        </div>
        
        <div className="flex space-x-4 mt-4 md:mt-0">
          {/* Replace the href values with your actual social media links */}
          <a href="https://github.com/Muhammadumairtanveer" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2C6.48 2 2 6.48 2 12c0 4.41 3.05 8.14 7.07 9.39.51.09.69-.22.69-.49v-1.75c-2.88.63-3.49-1.39-3.49-1.39-.47-1.19-1.15-1.51-1.15-1.51-.94-.64.07-.63.07-.63 1.04.07 1.59 1.07 1.59 1.07.93 1.59 2.44 1.13 3.04.86.1-.67.36-1.13.65-1.39-2.22-.25-4.55-1.11-4.55-4.93 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.64 9.64 0 0112 6.85c.85.004 1.72.115 2.53.34 1.91-1.29 2.75-1.02 2.75-1.02.56 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.82-2.34 4.67-4.57 4.92.37.32.69.96.69 1.93v2.87c0 .27.18.58.69.49A9.94 9.94 0 0022 12c0-5.52-4.48-10-10-10z" />
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/muhammad-umair-b28b29227/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8a6 6 0 10-12 0 6 6 0 0012 0zM6 14h2v8H6v-8zm4 0h2v8h-2v-8zm4 0h2v8h-2v-8z" />
            </svg>
          </a>
          <a href="" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 19c9 0 14-7.5 14-14S20 0 10 0C7.7 0 5.5 1.2 4 3C6 2.4 8 2.2 9 2c-4 2-6 8-6 8s1.7-1 3.4-1c-3 2-5 4-5 4s1.7-1 4.3-1c-5.2 1.5-7 3-7 3s4.8-4 10-4c2.3 0 4.3 0 6 1c1.7 1 2.4 2.4 2.4 2.4c-.7-.6-2.3-1-3.8-1c-.2 0-.4 0-.6.1c.5.3 1.2 1 1.2 1c-.8 1.2-2.7 2.1-3.5 2.1c-2.5 0-4-1.5-4-1.5c0 1.1.8 2 2 2c1 0 3-1 3-1s1 2 2 2c0-2-2-3-3-3s1 0 2-2s-1 0-1-1c1-1 3-3 3-3s1 0 2 1c1-1 1-1 2-1c2 0 4 0 4 0s0 2-2 4c0 0 2 0 3 2s0 3-1 4c-2 1-2 1-2 1s0 2 0 2z" />
            </svg>
          </a>
        </div>
      </div>

      <div className="mt-6 text-center border-t border-gray-700 pt-4">
        <p className="text-sm">© {new Date().getFullYear()} Muhammad Umair. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
