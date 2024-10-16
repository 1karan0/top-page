import React from 'react'

const New = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-green-500 p-6">
    <div className="bg-white rounded-lg shadow-lg p-8 relative text-center max-w-xs">
      {/* Logos */}
      <div className="absolute top-4 left-4">
        <img src="https://zepto.com/logo.png" alt="Zepto" className="w-20 h-auto" />
      </div>
      <div className="absolute top-4 right-4">
        <img src="https://cognizant.com/logo.png" alt="Cognizant" className="w-20 h-auto" />
      </div>
      <div className="absolute bottom-4 right-4">
        <img src="https://shopclues.com/logo.png" alt="ShopClues" className="w-20 h-auto" />
      </div>

      {/* Image of Person */}
      <img
        src="https://via.placeholder.com/150" // Replace with actual image URL
        alt="Person"
        className="w-32 h-32 rounded-full mx-auto mt-8"
      />

      {/* Text */}
      <h1 className="text-white text-2xl font-semibold mt-4">Corporate Partners</h1>
    </div>
  </div>
  )
}

export default New
