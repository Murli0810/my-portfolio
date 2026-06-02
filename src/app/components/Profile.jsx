import React from "react";

const Profile = () => {
  return (
    <div className="w-[28vw] h-[75vh] bg-white border-4 border-black rounded-4xl shadow-[7px_7px_0px_#000000] relative flex flex-col items-center pt-12">

      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-22 h-7 bg-white/25 backdrop-blur-[1] border-2 border-black/25 rotate-[-9deg] z-10 shadow-[inset_0_0_8px_rgba(255,255,255,0.4)]"></div>

      <div className="w-35 h-35 rounded-full border-4 border-black bg-[#FBBF24] overflow-hidden flex items-center justify-center absolute top-3.5">
        <img
          src="/avatar_img.jpeg"
          alt="Profile Avatar"
          className="w-full h-full object-cover scale-110 translate-y-2 drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
        />
      </div>
      <h2 className="font-display uppercase text-black relative top-[23%] text-3xl">
        Murli Agarwal
      </h2>
      <div className="font-mono text-[16px] w-fit px-3 py-0.5 bg-black relative top-[26%] rounded-[6px] rotate-[1deg]">
        FULL_STACK_DEVELOPER()
      </div>
      <div className="w-[90%] mx-auto h-[1.5] bg-gray-800 my-6 relative top-[27%]"></div>
      <div className="flex items-center gap-4 relative top-[28%] w-[25vw] mx-auto">
        <span className="font-mono text-[15px] w-[90px] h-[22px] text-center bg-yellow-400 px-1 relative right-[-2%] text-black font-extrabold uppercase border border-black">
          [location]
        </span>
        <p className="uppercase text-[15px] text-black font-extrabold font-mono ">
          Jamshedpur, Jharkhand
        </p>
      </div>
      <div className="flex items-center gap-4 relative top-[30%] w-[25vw] mx-auto">
        <span className="font-mono text-[15px] w-[90px] h-[22px] text-center bg-green-400 px-1 relative right-[-2%] text-black font-extrabold uppercase border border-black">
          [status]
        </span>
        <p className="uppercase text-[15px] text-black font-extrabold font-mono ">
          1st year btech student
        </p>
      </div>
      <div className="flex items-center gap-4 relative top-[32%] w-[25vw] mx-auto">
        <span className="font-mono text-[15px] w-[90px] h-[22px] text-center bg-blue-400 px-1 relative right-[-2%] text-black font-extrabold uppercase border border-black">
          [mission]
        </span>
        <p className="text-[15px] text-black font-extrabold font-mono ">
          Code. Vibe. Chill.
        </p>
      </div>
      <button className=" text-[20px] uppercase relative top-[35%] w-[25vw] bg-green-400 text-black font-bold py-2 px-4 border-2 border-black rounded-xl shadow-[5px_5px_0px_#000000] hover:shadow-[2px_2px_0px_#000000] hover:translate-x-[5px] hover:translate-y-[5px] transition-all duration-75 ease-in-out">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-7 h-7 inline-block">
          <path
            fillRule="evenodd"
            d="M12 2.25a.75.75 0 0 1 .75.75v11.59l3.72-3.72a.75.75 0 1 1 1.06 1.06l-5 5a.75.75 0 0 1-1.06 0l-5-5a.75.75 0 1 1 1.06-1.06l3.72 3.72V3a.75.75 0 0 1 .75-.75ZM4.5 19.5a.75.75 0 0 1 .75-.75h13.5a.75.75 0 0 1 0 1.5H5.25a.75.75 0 0 1-.75-.75Z"
            clipRule="evenodd"
          />
        </svg>
        download_resume
      </button>
      <button className=" text-[20px] uppercase relative top-[37%] w-[25vw] bg-red-400 font-bold py-2 px-4 border-2 border-black rounded-xl shadow-[5px_5px_0px_#000000] hover:shadow-[2px_2px_0px_#000000] hover:translate-x-[5px] hover:translate-y-[5px] transition-all duration-100 ease-in-out">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-7 h-7 m-1 inline-block">
          <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
          <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
        </svg>
        contact me
      </button>
      <div className="flex items-center justify-center gap-4 relative top-[40%] w-[25vw] mx-auto">
        <a href="https://github.com/murli0810/" target="_blank" rel="noopener noreferrer">
          <img src="/github_logo.png" alt="GitHub" className="w-8 h-8 hover:scale-110 transition-transform duration-200" />
        </a>
        <a href="https://www.linkedin.com/in/murli-agarwal/" target="_blank" rel="noopener noreferrer">
          <img src="/linkedin_logo.png" alt="LinkedIn" className="w-8 h-8 hover:scale-110 transition-transform duration-200" />
        </a>
        <a href="https://leetcode.com/u/Murli081007/" target="_blank" rel="noopener noreferrer">
          <img src="/LeetCode_logo.png" alt="Leetcode" className="w-8 h-8 hover:scale-110 transition-transform duration-200" />
        </a>
      </div>
    </div>
  );
};

export default Profile;
