import React, { useEffect, useState } from 'react';
import profileImage from '../assets/umair.png'; // Import your image

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200); // Delay to create a fade-in effect
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Construct the mailto link
    const mailtoLink = `mailto:umair799284@mail.com?subject=Contact Form Submission&body=Name: ${formData.name}%0AEmail: ${formData.email}%0AMessage: ${formData.message}`;
    
    // Open the default email client with pre-filled fields
    window.location.href = mailtoLink;
    
    // Optionally, reset form fields and show submission message
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' }); // Reset form
  };

  return (
    <div className="container mx-auto p-6 bg-gray-100 min-h-screen">
      {/* Welcome Section */}
      <section
        className={`mb-12 text-center bg-gradient-to-r from-blue-500 to-purple-600 text-white py-12 rounded-lg shadow-lg transition-opacity duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <img
          src={profileImage}
          alt="Profile"
          className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-white shadow-xl transition-transform duration-300 transform hover:scale-110"
        />
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Welcome to My Portfolio</h1>
        <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
          Hello! I’m <strong>Muhammad Umair</strong>, a <strong>beginner web developer</strong> eager to grow and learn in the world of web development. I enjoy building simple, responsive websites using <strong>HTML</strong>, <strong>CSS</strong>, and <strong>JavaScript</strong>. My journey in web development has just begun, but I’m passionate about learning new technologies and improving my skills every day.
        </p>
      </section>

      {/* Contact Section */}
      <section
        className={`bg-white py-12 rounded-lg shadow-lg border border-gray-300 transition-opacity duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-800">Let's Connect</h2>
        <p className="text-md md:text-lg leading-relaxed max-w-2xl mx-auto text-center text-gray-600">
          As I continue to learn and grow in web development, I’m always open to new opportunities and collaborations. If you’re looking for a dedicated beginner to help on projects or just want to connect, feel free to reach out!
        </p>
        
        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-6 px-4">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">Name</label>
            <input 
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              required 
              className="w-full p-3 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
              className="w-full p-3 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700">Message</label>
            <textarea 
              name="message" 
              value={formData.message} 
              onChange={handleChange} 
              required 
              rows="4" 
              className="w-full p-3 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button 
            type="submit" 
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 shadow-lg transform hover:scale-110"
          >
            Send Message
          </button>
        </form>

        {submitted && <p className="mt-4 text-center text-green-600">Message sent successfully!</p>}
      </section>
    </div>
  );
};

export default Home;
