import React from "react";
import { useState, useEffect } from "react";

const Test = () => {
  const [index, setIndex] = useState(0);
  const images = [
    "swayam.png",
    "live.png",
    "nsdc-logo.png",
    "shopclues.png",
    "defacto.png",
    "cognizant.png",
    "capgemini.png",
    "zepto.png",
    "iit delhi.png",
    "bits.png",
    "madras.png",
    "kanpur.png",
  ];
  const [currentImages, setCurrentImages] = useState(images);
  const [fadeOut, setFadeOut] = useState(false);
  const headings = [
    "The easiest way to upgrade your skills",
    "Gain practical experience while you study",
    "Courses created with IITs and BITS Pilani",
  ];
  const [currentHeading, setCurrentHeading] = useState(headings[0]);
  const title = [
    "Learn Anytime, Grow Anytime",
    "Real Careers Start Here",
    "Study with the Best",
  ];
  const [currentTitle, setCurrentTitle] = useState(title[0]);

  const descriptions = [
    "Each month, thousands of learners turn to HopingMinds for flexible courses built by top institutes. Start learning from live sessions and recorded lessons today!",
    "From internships to freelance gigs, HopingMinds connects you with real-world opportunities. Build your skills, grow your portfolio, and launch your career!",
    "In collaboration with top institutes, HopingMinds offers courses that match today's industry needs. Learn from the best to make your mark in the world!",
  ];
  const [currentDescription, setCurrentDescription] = useState(descriptions[0]);
  const [personImages, setPersonImages] = useState([
    "man.png",
    "woman2.png",
    "man.png",
  ]);
  const [currentPersonImage, setCurrentPersonImage] = useState(personImages[0]);
  const [showLogoSection, setShowLogoSection] = useState(0);
  const [scaleDown, setScaleDown] = useState(false);
  const [slideDown, setSlideDown] = useState(false);
  const [slideIn, setSlideIn] = useState(false);

  useEffect(() => {
    const update = () => {
      setSlideDown(true);
      setTimeout(() => {
        setSlideIn(true);
        setTimeout(() => {
          setCurrentHeading(headings[index]);
          setCurrentDescription(descriptions[index]);
          setCurrentTitle(title[index]);
          setCurrentPersonImage(personImages[index]);
          setIndex((headingIndex) => (headingIndex + 1) % headings.length);
          setCurrentImages((prevImages) => {
            const rotated = [...prevImages];
            rotated.push(rotated.shift());
            return rotated;
          });
          setShowLogoSection((prev) => (prev + 1) % 3);
          setSlideDown(false);
          setTimeout(() => {
            setSlideIn(false);
          }, 5); // Reduced from 10 to 5 ms
        }, 300); // Reduced from 500 to 250 ms
      }, 300); // Reduced from 500 to 250 ms
    };

    const interval = setInterval(update, 4000);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className="min-h-screen flex flex-col lg:flex-row justify-center p-7 items-center font-poppins overflow-hidden">
      <div
        className={`h-full w-full  p-14 lg:p-16 text-center bg-[#0c171b] lg:rounded-tr-[50px] lg:rounded-tl-[50px] lg:rounded-bl-[150px] lg:rounded-br-[0px] rounded-[50px] lg:items-start 
    lg:ml-20 lg:w-screen 
    transition-all duration-500 transform ${
      slideDown ? "scale-0 opacity-0" : "scale-100 opacity-100"
    } ${
      slideIn ? "-translate-x-full" : "translate-x-0"
    }`}
      >
        <div className="flex items-center gap-2 ">
          <div className=" bg-yellow-400 rounded-full w-4 h-4"></div>
          <p className="text-green-500 font-bold uppercase ">{title[index]}</p>
        </div>
        <h1
          className={` lg:mt-8 mt-5 text-3xl lg:text-5xl font-bold text-white text-center lg:text-start  tracking-wide sm:leading-normal  lg:tracking-wide transition-all duration-500 ${
            fadeOut ? "opacity-0" : "opacity-100"
          }`}
        >
          {headings[index]}
        </h1>
        <p
          className={`mt-9 lg:mt-8 text-white text-xl text-center lg:text-start tracking-wide lg:max-w-2xl transition-all duration-500 ${
            fadeOut ? "opacity-0" : "opacity-100"
          }`}
        >
          {descriptions[index]}
        </p>
        <div className="flex flex-col lg:flex-row justify-center lg:justify-center lg:gap-10 mt-8">
          <div className="flex flex-col items-start">
            <h1 className="text-4xl font-bold text-green-500">80+</h1>
            <p className="text-xl text-white">Satisfied clients</p>
          </div>
          <hr className="h-20 w-[1px]  bg-green-500" />
          <div className="flex flex-col items-start">
            <h1 className="text-4xl font-bold text-green-500">200+</h1>
            <p className="text-xl text-white">Projects Completed</p>
          </div>
          <hr className="h-20 w-[1px]  bg-green-500" />
          <div className="flex flex-col items-start">
            <h1 className="text-4xl font-bold text-green-500 ">99+</h1>
            <p className="text-xl text-white">Review Given</p>
          </div>
        </div>
      </div>

      {/* Side Elements */}
      <div
        className={`hidden xl:block relative lg:w-2/3 w-[90%] items-center lg:-ml-3 mr-10 transition-all duration-500 transform ${
          slideDown ? "scale-0 opacity-0" : "scale-100 opacity-100"
        } ${
          slideIn ? "translate-x-full" : "translate-x-0"
        }`}
      >
        {/* companies logos */}
        {showLogoSection === 0 && (
          <>
            <div
              className={`absolute top-10 left-7 w-24 lg:w-32 z-30 transition-opacity duration-500 ${
                fadeOut ? "opacity-0" : "opacity-100"
              } animate-float-fast`}
            >
              <img src={images[0]} alt="" className="w-full h-auto" />
            </div>
            <div
              className={`absolute bottom-10 right-10 w-24 lg:w-32 z-30 transition-opacity duration-500 ${
                fadeOut ? "opacity-0" : "opacity-100"
              } animate-float-fast`}
            >
              <img src={images[1]} alt="" className="w-full h-auto" />
            </div>
            <div
              className={`absolute right-10 w-24 lg:w-32 z-30 transition-opacity duration-500 ${
                fadeOut ? "opacity-0" : "opacity-100"
              } animate-float-fast`}
            >
              <img src={images[2]} alt="" className="w-full h-auto" />
            </div>
          </>
        )}
        {showLogoSection === 1 && (
          <>
            <div
              className={`absolute mt-80 left-7 w-24 lg:w-32 z-30 transition-opacity duration-500 ${
                fadeOut ? "opacity-0" : "opacity-100"
              } animate-float-fast`}
            >
              <img src={images[3]} alt="" className="w-full h-auto" />
            </div>
            <div
              className={`absolute top-10 -right-5 lg:right-16 w-24 lg:w-32 z-30 transition-opacity duration-500 ${
                fadeOut ? "opacity-0" : "opacity-100"
              } animate-float-fast`}
            >
              <img src={images[4]} alt="" className="w-full h-auto" />
            </div>
            <div
              className={`absolute mt-80 -right-5 lg:right-16 w-24 lg:w-32 z-30 transition-opacity duration-500 ${
                fadeOut ? "opacity-0" : "opacity-100"
              } animate-float-fast`}
            >
              <img src={images[5]} alt="" className="w-full h-auto" />
            </div>
            <div
              className={`absolute mt-40  w-24 lg:w-32 z-30 transition-opacity duration-500 ${
                fadeOut ? "opacity-0" : "opacity-100"
              } animate-float-fast`}
            >
              <img src={images[6]} alt="" className="w-full h-auto" />
            </div>
            <div
              className={`absolute left-6 w-24 lg:w-32 z-30 transition-opacity duration-500 ${
                fadeOut ? "opacity-0" : "opacity-100"
              } animate-float-fast`}
            >
              <img src={images[7]} alt="" className="w-full h-auto" />
            </div>
          </>
        )}
        {showLogoSection === 2 && (
          <>
            
            <div
              className={`absolute top-10 right-10 w-24 lg:w-32 z-30 transition-opacity duration-500 ${
                fadeOut ? "opacity-0" : "opacity-100"
              } animate-float-fast`}
            >
              <img src={images[8]} alt="" className="w-full h-auto" />
            </div>
            <div
              className={`absolute bottom-10 left-7 w-24 lg:w-32 z-30 transition-opacity duration-500 ${
                fadeOut ? "opacity-0" : "opacity-100"
              } animate-float-fast`}
            >
              <img src={images[9]} alt="" className="w-full h-auto" />
            </div>
            <div
              className={`absolute  left-7 w-24 lg:w-32 z-30 transition-opacity duration-500 ${
                fadeOut ? "opacity-0" : "opacity-100"
              } animate-float-fast`}
            >
              <img src={images[10]} alt="" className="w-full h-auto" />
            </div>
            <div
              className={`absolute bottom-10 right-10 w-24 lg:w-32 z-30 transition-opacity duration-500 ${
                fadeOut ? "opacity-0" : "opacity-100"
              } animate-float-fast`}
            >
              <img src={images[11]} alt="" className="w-full h-auto" />
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
            src={personImages[index]}
            alt="Job Portal"
            className={`relative right-7 top-[7px] h-full w-auto z-10 animate-float-slow transition-all 
            `}
          />
        </div>
      </div>
    </div>
  );
};

export default Test;
