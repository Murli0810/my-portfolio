"use client";

import React, { useState, useEffect } from 'react'

const Navbar = () => {

  const [isOpen, setisOpen] = useState(false);
  const [currentDate, setcurrentDate] = useState("");

  useEffect(() => {
    const formatLiveDate = () => {
      const dateOptions = { 
        weekday: 'long', 
        month: 'long',   
        day: 'numeric',
        year: 'numeric'  
      };
      
      const formatted = new Date().toLocaleDateString('en-US', dateOptions);
      setcurrentDate(formatted);
    };

    formatLiveDate();
    
    const midnightInterval = setInterval(formatLiveDate, 60000); 
    return () => clearInterval(midnightInterval);
  }, []);

  const toggleMenu= ()=>{
    setisOpen(!isOpen);
  }

  return (
    <div className='px-4 flex gap-15 justify-center w-[85vw] mx-auto bg-[#A78BFA] h-20 items-center border-3 border-black shadow-[6px_6px_0px_#000000] rounded-full mt-5 sticky top-5 z-20'>
      <div className="bg-[#a78bfa] inline-block">
      <h1 className='font-display text-2xl font-extrabold font-black tracking-wider uppercase drop-shadow-[3px_3px_0px_rgba(0,0,0,1)] '>PORTFOLIO</h1>
      </div>
      <div>
        <ul className='flex gap-4 text-[17px] text-black font-bold max-[1313px]:hidden'>
          <li className='w-fit border-2 border-black rounded-full px-3.5 py-1 bg-white shadow-[3px_3px_0px_#000000] hover:shadow-[2px_2px_0px_#000000] hover:translate-x-[3px] hover:translate-y-[3px] text-center cursor-pointer uppercase transition-all duration-75 ease-in-out'>About</li>          
          <li className='w-fit border-2 border-black rounded-full px-3.5 py-1 bg-white shadow-[3px_3px_0px_#000000] hover:shadow-[2px_2px_0px_#000000] hover:translate-x-[3px] hover:translate-y-[3px] text-center cursor-pointer uppercase transition-all duration-75 ease-in-out'>Education</li>          
          <li className='w-fit border-2 border-black rounded-full px-3.5 py-1 bg-white shadow-[3px_3px_0px_#000000] hover:shadow-[2px_2px_0px_#000000] hover:translate-x-[3px] hover:translate-y-[3px] text-center cursor-pointer uppercase transition-all duration-75 ease-in-out'>Skills</li>          
          <li className='w-fit border-2 border-black rounded-full px-3.5 py-1 bg-white shadow-[3px_3px_0px_#000000] hover:shadow-[2px_2px_0px_#000000] hover:translate-x-[3px] hover:translate-y-[3px] text-center cursor-pointer uppercase transition-all duration-75 ease-in-out'>Projects</li>          
          <li className='w-fit border-2 border-black rounded-full px-3.5 py-1 bg-white shadow-[3px_3px_0px_#000000] hover:shadow-[2px_2px_0px_#000000] hover:translate-x-[3px] hover:translate-y-[3px] text-center cursor-pointer uppercase transition-all duration-75 ease-in-out'>Extra-Curriculars</li>          
          <li className='w-fit border-2 border-black rounded-full px-3.5 py-1 bg-amber-300 shadow-[3px_3px_0px_#000000] hover:shadow-[2px_2px_0px_#000000] hover:translate-x-[3px] hover:translate-y-[3px] text-center cursor-pointer uppercase transition-all duration-75 ease-in-out'>Contact</li>          
        </ul>
      </div>
      <div className='w-fit border-2 border-black rounded-full px-3.5 bg-emerald-400 shadow-[2px_2px_0px_#000000] text-center text-black max-[1313px]:hidden'>{currentDate || "Loading..."}</div>
      <button className="hidden max-[1313px]:block text-white p-2 focus:outline-none" onClick={toggleMenu}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute top-[105px] max-w-[90%] mx-auto left-0 right-0 bg-[#A78BFA] border-5 border-black border-b-10 border-r-10 rounded-3xl pt-10 pb-6 px-6 z-10 hidden max-[1313px]:block">
        <ul className='flex flex-col gap-4 text-[20px] text-black font-bold'>
          <li className='w-full border-2 border-black rounded-full px-3.5 bg-white shadow-[6px_6px_0px_#000000] text-center cursor-pointer hover:shadow-[2px_2px_0px_#000000] hover:translate-x-[3px] hover:translate-y-[3px] uppercase transition-all duration-75 ease-in-out'>About</li>          
          <li className='w-full border-2 border-black rounded-full px-3.5 bg-white shadow-[6px_6px_0px_#000000] text-center cursor-pointer hover:shadow-[2px_2px_0px_#000000] hover:translate-x-[3px] hover:translate-y-[3px] uppercase transition-all duration-75 ease-in-out'>Education</li>          
          <li className='w-full border-2 border-black rounded-full px-3.5 bg-white shadow-[6px_6px_0px_#000000] text-center cursor-pointer hover:shadow-[2px_2px_0px_#000000] hover:translate-x-[3px] hover:translate-y-[3px] uppercase transition-all duration-75 ease-in-out'>Skills</li>          
          <li className='w-full border-2 border-black rounded-full px-3.5 bg-white shadow-[6px_6px_0px_#000000] text-center cursor-pointer hover:shadow-[2px_2px_0px_#000000] hover:translate-x-[3px] hover:translate-y-[3px] uppercase transition-all duration-75 ease-in-out'>Projects</li>          
          <li className='w-full border-2 border-black rounded-full px-3.5 bg-white shadow-[6px_6px_0px_#00000₀] hover:shadow-[2px_2px_₀px_#₀₀₀₀₀₀] hover:translate-x-[3px] hover:translate-y-[3px] text-center cursor-pointer uppercase transition-all duration-75 ease-in-out'>Extra-Curriculars</li>          
          <li className='w-full border-2 border-black rounded-full px-3.5 bg-amber-300 shadow-[6px_6px_0px_#000000] text-center cursor-pointer uppercase transition-all duration-75 ease-in-out'>Contact</li>
        </ul>
          <div className='w-full mt-4 border-2 border-black rounded-full px-3.5 bg-emerald-400 shadow-[2px_2px_0px_#000000] text-center text-black '>{currentDate || "Loading..."}</div>      
      </div>
      )}
    </div>
  )
}

export default Navbar
