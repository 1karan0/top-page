import React from 'react'
import { useState, useEffect } from 'react';
const Top = () => {
  const placeholders = ["UI/UX", "Frontend Developer", " Backend Developer", "Full Stack Developer"];
  const [currentPlaceholder, setCurrentPlaceholder] = useState("");
  const [index, setIndex] = useState(0);
  const images = ["swayam.png", "nasscom.png", "CII.png", "nsdc-logo.png","URstory.png","IHSFC.png"];
  const [currentImages, setCurrentImages] = useState(images);
  const [fadeOut, setFadeOut] = useState(false);
 
  useEffect(() => {
    const update = () => {
        setFadeOut(true);
        setTimeout(() => {
            setCurrentPlaceholder(placeholders[index]);
            setIndex((prevIndex) => (prevIndex + 1) % placeholders.length);
            setCurrentImages(prevImages => {
                const rotated = [...prevImages];
                rotated.push(rotated.shift());
                return rotated;
            });
            setFadeOut(false);
        }, 500); // Half of the interval time
    };

    const interval = setInterval(update, 2000);

    return () => clearInterval(interval);
}, [index]);

  return (
    <div className=" min-h-screen flex flex-col lg:flex-row justify-center p-7 items-center bg-white font-poppins  ">
    <div className=" h-full w-full p-14 lg:p-20  text-center bg-[#0c171b] lg:rounded-tr-[50px] lg:rounded-tl-[50px] lg:rounded-bl-[150px] lg:rounded-br-[0px] rounded-[50px]  lg:items-start 
    lg:ml-20 lg:w-full
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
      <div className={`lg:mt-5 text-sm mt-5 text-white lg:text-left text-center `}>
      Popular Searches: <span className={`transition-all duration-500 ${fadeOut ? 'opacity-0' : 'opacity-100'}`} style={{ color: '#1DBF73' }}>{currentPlaceholder}</span>
      </div>
    </div>

    {/* Side Elements */}
    <div className=" hidden xl:block relative lg:w-2/3 w-[90%]  items-center lg:-ml-3 mt-10 mr-10">
      {/* Notification Cards */}
        <div className={`absolute left-10 top-8 w-24 lg:w-32 z-30 transition-opacity duration-500 transform ${fadeOut ? 'opacity-0' : 'opacity-100 '} animate-float-rendom`}>
                <img src={currentImages[0]} alt="" className="w-full h-auto" />
            </div>
            <div className={`absolute mt-80 left-6 w-24 lg:w-32 z-30 transition-opacity duration-500 ${fadeOut ? 'opacity-0' : 'opacity-100'} animate-float-fast`}>
                <img src={currentImages[3]} alt="" className="w-full h-auto" />
            </div>
            <div className={`absolute lg:w-32 w-24 lg:bottom-10 bottom-12 right-10 rounded-lg z-30 mb-12 transition-opacity duration-500 ${fadeOut ? 'opacity-0' : 'opacity-100'} animate-float-rendom`}>
                <img src={currentImages[2]} alt="" className="w-full h-auto" />
            </div>
            <div className={`absolute top-10 -right-5 lg:right-16 w-24 lg:w-32 z-30 transition-opacity duration-500 ${fadeOut ? 'opacity-0' : 'opacity-100'} animate-float-fast`}>
                <img src={currentImages[1]} alt="" className="w-full h-auto" />
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
