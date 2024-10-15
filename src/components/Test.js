import React, { useState } from 'react'


const Test = () => {
    const [content, setContent] = useState({
        title: "Unlock Tech Skills with Real-World Experience",
        description: "Bridge the gap between learning and employment with industry-focused courses, mentorship, and job placement opportunities.",
        buttonText: "Find now",
        popularSearch: "Frontend Developer",
        partners: ["swayam", "nasscom", "nsdc", "cii"]
      });
    
      const handleContentChange = () => {
        // Set new content here
        setContent({
          title: "New Title Here",
          description: "New description here for the updated content.",
          buttonText: "Search Now",
          popularSearch: "Backend Developer",
          partners: ["newpartner1", "newpartner2", "newpartner3", "newpartner4"]
        });
      };
  return (
    <div className="bg-gray-900 text-white p-8 rounded-lg w-full max-w-md mx-auto">
    <h1 className="text-2xl font-bold mb-4">{content.title}</h1>
    <p className="mb-4">{content.description}</p>
    <div className="flex items-center mb-4">
      <input 
        type="text" 
        placeholder="Select your course" 
        className="flex-grow p-2 rounded-lg bg-gray-800 text-white placeholder-gray-400 mr-2 focus:outline-none"
      />
      <button 
        onClick={handleContentChange} 
        className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300"
      >
        {content.buttonText}
      </button>
    </div>
    <p className="text-green-400 mb-6">Popular Searches: {content.popularSearch}</p>
    
    <div className="flex space-x-4">
      {content.partners.map((partner, index) => (
        <img 
          key={index} 
          src={`/path/to/${partner}-logo.png`} 
          alt={`${partner} logo`} 
          className="w-12 h-12 object-contain"
        />
      ))}
    </div>
  </div>
  )
}

export default Test
