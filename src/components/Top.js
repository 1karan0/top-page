import React from 'react'
import { useState, useEffect } from 'react';
const Top = () => {
    const placeholders = ["UI/UX", "Frontend Developer", " Backend Developer", "Full Stack Developer"];
  const [currentPlaceholder, setCurrentPlaceholder] = useState("");
  const [index, setIndex] = useState(0);
 
    useEffect(() => {
        
        // Function to update the placeholder text
        const updatePlaceholder = () => {
          setCurrentPlaceholder(placeholders[index]);
          setIndex((prevIndex) => (prevIndex + 1) % placeholders.length);
           
        };

        // Set an interval to update the placeholder every 2 seconds
        const interval = setInterval(updatePlaceholder, 2000, );
   
    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className=" min-h-screen flex flex-col lg:flex-row justify-center p-7 items-center bg-white font-poppins  ">
    <div className=" h-full w-full p-14 lg:p-20  text-center bg-[#0c171b] lg:rounded-tr-[50px] lg:rounded-tl-[50px] lg:rounded-bl-[150px] lg:rounded-br-[0px] rounded-[50px]  lg:items-start 
    ">
      
      <h1 className=" lg:mt-2 mt-5 text-3xl lg:text-5xl font-bold text-white text-center lg:text-start  tracking-wide sm:leading-normal  lg:tracking-wide">Unlock Tech Skills with Real-World Experience</h1>
      <p className=" mt-3 lg:mt-10  text-white text-xl text-center lg:text-start tracking-wide ">
      Bridge the gap between learning and employment with industry- <br /> focused courses, mentorship, and job placement opportunities
      </p>

      {/* Search Bar */}
      <div className=" bg-white rounded-lg shadow-xl lg:p-1 p-2 flex lg:flex-row flex-col justify-center items-center lg:gap-28 lg:mt-24 mt-10 max-w-xl ">
        <input type="text" placeholder="Select your course" className=" outline-none w-full lg:w-[350px]  p-2 lg:p-3" />
        <button className="lg:px-5  bg-[#1DBF73] text-white rounded-lg font-semibold shadow-lg px-12 py-2">Find now</button>
      </div>

      {/* Popular Searches */}
      <div className={`lg:mt-5 text-sm mt-5 text-white lg:text-left text-center`}>
      Popular Searches: <span style={{ color: '#1DBF73' }}>{currentPlaceholder}</span>
      </div>
    </div>

    {/* Side Elements */}
    <div className=" hidden xl:block relative lg:w-2/3 w-[90%]  items-center lg:right-2 mt-10 mr-10">
      {/* Notification Cards */}
      <div className="absolute left-10 top-8 w-24 lg:w-32 z-30 animate-float-rendom">
        <img  src="swayam.png" alt="" />
      </div>
      <div className="absolute mt-80 left-6 w-24 lg:w-32  z-30 animate-float-fast">
      <img  src="swayam.png" alt="" />

      </div>
      
      <div className="absolute lg:w-32 w-24 lg:bottom-12 bottom-12 right-10 rounded-lg z-30 mb-12 animate-float-rendom ">
        <img src="nsdc-logo.png" alt="" />
      </div>
      <div className="absolute top-10 -right-5 lg:right-16 w-24 lg:w-32  z-30 animate-float-fast">
            <img src="nsdc-logo.png" alt="" />
          
        </div>
      {/* User Image Placeholder */}
      <img src="rec1.png" alt=""  className=' absolute -mt-8 ml-5  w-[440px] h-[500px] animate-float-slow'/>
      <img src="rec2.png" alt=""  className=' absolute -mt-5 ml-9  w-[440px] h-[500px]  animate-float-slow'/>
      <img  src="wooman.png" alt="Job Portal" className=" relative left-1 lg:left-11 top-12 lg:-top-6 w-[355px] z-10 animate-float-slow " />
    </div>
  </div>
  )
}

export default Top
