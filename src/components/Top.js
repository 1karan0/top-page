import React from "react";
import { useState, useEffect } from "react";
const Top = () => {
  const placeholders = [
    "UI/UX",
    "Frontend Developer",
    " Backend Developer",
    "Full Stack Developer",
  ];
  const [currentPlaceholder, setCurrentPlaceholder] = useState("");
  const [index, setIndex] = useState(0);
  const images = [
    "swayam.png",
    "nasscom.png",
    "CII.png",
    "nsdc-logo.png",
    "URstory.png",
    "IHSFC.png",
  ];
  const [currentImages, setCurrentImages] = useState(images);
  const [fadeOut, setFadeOut] = useState(false);
  const headings = [
    "Unlock Tech Skills with Real-World Experience",
    "Boost Your Career with Industry-Focused Training",
    "Master In-Demand Skills for Tech Success",
    "Transform Your Future in Technology",
  ];
  const [currentHeading, setCurrentHeading] = useState(headings[0]);
  const [bgColors, setBgColors] = useState([
    "#0c171b",
    "#1a2a33",
    "#2c3e50",
    "#34495e",
  ]);
  const [currentBgColor, setCurrentBgColor] = useState(bgColors[0]);
  const descriptions = [
    "Bridge the gap between learning and employment with industry-focused courses, mentorship, and job placement opportunities.",
    "Enhance your skills with practical training designed to meet industry demands and boost your career prospects.",
    "Gain hands-on experience and master cutting-edge technologies to become a sought-after tech professional.",
    "Embark on a transformative journey to build a successful career in the ever-evolving tech industry.",
  ];
  const [currentDescription, setCurrentDescription] = useState(descriptions[0]);
  const [personImages, setPersonImages] = useState([
    "man.png",
    "woman2.png",
    "man.png",
    "woman2.png",
  ]);
  const [currentPersonImage, setCurrentPersonImage] = useState(personImages[0]);
  const [showFirstPair, setShowFirstPair] = useState(true);

  useEffect(() => {
    const update = () => {
      setFadeOut(true);
      setTimeout(() => {
        setCurrentPlaceholder(placeholders[index]);
        setCurrentHeading(headings[index]);
        setCurrentBgColor(bgColors[index]);
        setCurrentDescription(descriptions[index]);
        setCurrentPersonImage(personImages[index]);
        setIndex((prevIndex) => (prevIndex + 1) % placeholders.length);
        setCurrentImages((prevImages) => {
          const rotated = [...prevImages];
          rotated.push(rotated.shift());
          return rotated;
        });
        setShowFirstPair((prev) => !prev);
        setFadeOut(false);
      }, 700); // Half of the interval time
    };

    const interval = setInterval(update, 2000);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className=" min-h-screen flex flex-col lg:flex-row justify-center p-7 items-center font-poppins overflow-hidden ">
      <div
        className={`h-[550px] w-full p-14 lg:p-20  text-center bg-[#0c171b] lg:rounded-tr-[50px] lg:rounded-tl-[50px] lg:rounded-bl-[150px] lg:rounded-br-[0px] rounded-[50px]  lg:items-start 
    lg:ml-20 lg:w-full
    transition-all duration-1000 ${
      fadeOut ? "-translate-x-[150%] opacity-0" : "translate-x-0 opacity-100"
    }`}
      >
        <h1
          className={` lg:mt-2 mt-5 text-3xl lg:text-5xl font-bold text-white text-center lg:text-start  tracking-wide sm:leading-normal  lg:tracking-wide transition-all duration-500 ${
            fadeOut ? "opacity-0" : "opacity-100"
          }`}
        >
          {" "}
          {currentHeading}{" "}
        </h1>
        <p
          className={`mt-9 lg:mt-14 text-white text-xl text-center lg:text-start tracking-wide lg:max-w-2xl transition-all duration-500 ${
            fadeOut ? "opacity-0" : "opacity-100"
          }`}
        >
          {currentDescription}
        </p>
      </div>

      {/* Side Elements */}
      <div
        className={`hidden xl:block relative lg:w-2/3 w-[90%]  items-center lg:-ml-3 mt-2 mr-10 transition-all duration-1000 ${
          fadeOut ? "translate-x-[150%]" : "translate-x-[0]"
        } 
           `}
      >
        {/* companies logos */}
        {showFirstPair ? (
          <>
            <div
              className={`absolute top-10 left-7 w-24 lg:w-32 z-30 transition-opacity duration-500 ${
                fadeOut ? "opacity-0" : "opacity-100"
              } animate-float-fast`}
            >
              <img src={currentImages[0]} alt="" className="w-full h-auto" />
            </div>
            <div
              className={`absolute bottom-10 right-10 w-24 lg:w-32 z-30 transition-opacity duration-500 ${
                fadeOut ? "opacity-0" : "opacity-100"
              } animate-float-fast`}
            >
              <img src={currentImages[1]} alt="" className="w-full h-auto" />
            </div>
          </>
        ) : (
          <>
            <div
              className={`absolute mt-80 left-6 w-24 lg:w-32 z-30 transition-opacity duration-500 ${
                fadeOut ? "opacity-0" : "opacity-100"
              } animate-float-fast`}
            >
              <img src={currentImages[2]} alt="" className="w-full h-auto" />
            </div>
            <div
              className={`absolute top-10 -right-5 lg:right-16 w-24 lg:w-32 z-30 transition-opacity duration-500 ${
                fadeOut ? "opacity-0" : "opacity-100"
              } animate-float-fast`}
            >
              <img src={currentImages[3]} alt="" className="w-full h-auto" />
            </div>
          </>
        )}

        <div>
          <img
            src="rec1.png"
            alt=""
            className={` absolute -mt-9 ml-5  w-[440px] h-[508px] animate-float-slow ${
              fadeOut ? "translate-x-[100%]" : "translate-x-[0]  "
            } `}
          />
          <img
            src={currentPersonImage}
            alt="Job Portal" 
            className={`relative right-7 top-0 h-full w-auto z-10 animate-float-slow transition-all 
            `}
          />
        </div>
      </div>
      
    </div>
  );
};

export default Top;
