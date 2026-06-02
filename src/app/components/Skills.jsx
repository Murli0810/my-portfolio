import React from "react";

const Skills = () => {
  return (
    <div className="w-[84vw] px-3 mx-auto h-[68vh] items-center py-10 bg-[#FF9FAC] border-2 border-black shadow-[8px_8px_0px_#000000] rounded-3xl relative flex flex-col gap-10 items-center">
      <span className="text-black text-xl w-fit px-8 py-2 border-4 border-black rounded-4xl font-display bg-[#FCD34D] text-[31px] shadow-[7px_7px_0px_#000000] text-center uppercase">
        Skills 🛠️
      </span>
      <div className="flex flex-col gap-10 w-full">
        <div className="flex w-full h-[20vh] items-center justify-center gap-6">
          <div className="bg-white w-[25vw] h-full border-2 border-black shadow-[8px_8px_0px_#000000] rounded-2xl hover:shadow-[2px_2px_0px_#000000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-100 ease-in-out flex flex-col justify-start pt-3 gap-4 pl-4">
            <span className="font-display text-black w-fit px-2 bg-red-300 text-[21px] border-2 border-black rounded-lg">Languages</span>
            <ul className="flex gap-3 justify-start items-center flex-wrap">
              <li className="bg-gray-100 text-black px-3 py-0.5 rounded-full border-2 border-black font-bold hover:bg-green-300">JavaScript</li>
              <li className="bg-gray-100 text-black px-3 py-0.5 rounded-full border-2 border-black font-bold hover:bg-green-300">Python</li>
              <li className="bg-gray-100 text-black px-3 py-0.5 rounded-full border-2 border-black font-bold hover:bg-green-300">C</li>
              <li className="bg-gray-100 text-black px-3 py-0.5 rounded-full border-2 border-black font-bold hover:bg-green-300">C++</li>
            </ul>
          </div>
          <div className="bg-white w-[25vw] h-full border-2 border-black shadow-[8px_8px_0px_#000000] rounded-2xl hover:shadow-[2px_2px_0px_#000000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-100 ease-in-out flex flex-col justify-start pt-3 gap-4 pl-4">
            <span className="font-display text-black w-fit px-2 bg-blue-300 text-[21px] border-2 border-black rounded-lg">Frontend</span>
            <ul className="flex gap-3 justify-start items-center flex-wrap">
              <li className="bg-gray-100 text-black px-3 py-0.5 rounded-full border-2 border-black font-bold hover:bg-green-300">HTML5</li>
              <li className="bg-gray-100 text-black px-3 py-0.5 rounded-full border-2 border-black font-bold hover:bg-green-300">CSS3</li>
              <li className="bg-gray-100 text-black px-3 py-0.5 rounded-full border-2 border-black font-bold hover:bg-green-300">React.js</li>
              <li className="bg-gray-100 text-black px-3 py-0.5 rounded-full border-2 border-black font-bold hover:bg-green-300">Vite</li>
              <li className="bg-gray-100 text-black px-3 py-0.5 rounded-full border-2 border-black font-bold hover:bg-green-300">tailwindCSS</li>
            </ul>
          </div>
          <div className="bg-white w-[25vw] h-full border-2 border-black shadow-[8px_8px_0px_#000000] rounded-2xl hover:shadow-[2px_2px_0px_#000000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-100 ease-in-out flex flex-col justify-start pt-3 gap-4 pl-4">
            <span className="font-display text-black w-fit px-2 bg-green-300 text-[21px] border-2 border-black rounded-lg">Backend</span>
            <ul className="flex gap-3 justify-start items-center flex-wrap">
              <li className="bg-gray-100 text-black px-3 py-0.5 rounded-full border-2 border-black font-bold hover:bg-green-300">Node.js</li>
              <li className="bg-gray-100 text-black px-3 py-0.5 rounded-full border-2 border-black font-bold hover:bg-green-300">Express.js</li>
              <li className="bg-gray-100 text-black px-3 py-0.5 rounded-full border-2 border-black font-bold hover:bg-green-300">FastAPI</li>
              <li className="bg-gray-100 text-black px-3 py-0.5 rounded-full border-2 border-black font-bold hover:bg-green-300">Next.js</li>
              <li className="bg-gray-100 text-black px-3 py-0.5 rounded-full border-2 border-black font-bold hover:bg-green-300">REST APIs</li>
            </ul>
          </div>
        </div>
        <div className="flex w-full h-[20vh] items-center justify-center gap-6">
          <div className="bg-white w-[25vw] h-full border-2 border-black shadow-[8px_8px_0px_#000000] rounded-2xl hover:shadow-[2px_2px_0px_#000000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-100 ease-in-out flex flex-col justify-start pt-3 gap-4 pl-4">
            <span className="font-display text-black w-fit px-2 bg-orange-300 text-[21px] border-2 border-black rounded-lg">Databases</span>
            <ul className="flex gap-3 justify-start items-center flex-wrap">
              <li className="bg-gray-100 text-black px-3 py-0.5 rounded-full border-2 border-black font-bold hover:bg-green-300">MySQL</li>
              <li className="bg-gray-100 text-black px-3 py-0.5 rounded-full border-2 border-black font-bold hover:bg-green-300">Supabase</li>
              <li className="bg-gray-100 text-black px-3 py-0.5 rounded-full border-2 border-black font-bold hover:bg-green-300">MongoDB</li>
            </ul>
          </div>
          <div className="bg-white w-[25vw] h-full border-2 border-black shadow-[8px_8px_0px_#000000] rounded-2xl hover:shadow-[2px_2px_0px_#000000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-100 ease-in-out flex flex-col justify-start pt-3 gap-4 pl-4">
            <span className="font-display text-black w-fit px-2 bg-cyan-300 text-[21px] border-2 border-black rounded-lg">Artificial Intelligence</span>
            <ul className="flex gap-3 justify-start items-center flex-wrap">
              <li className="bg-gray-100 text-black px-3 py-0.5 rounded-full border-2 border-black font-bold hover:bg-green-300">Numpy</li>
              <li className="bg-gray-100 text-black px-3 py-0.5 rounded-full border-2 border-black font-bold hover:bg-green-300">Pandas</li>
              <li className="bg-gray-100 text-black px-3 py-0.5 rounded-full border-2 border-black font-bold hover:bg-green-300">LangChain</li>
              <li className="bg-gray-100 text-black px-3 py-0.5 rounded-full border-2 border-black font-bold hover:bg-green-300">LangGraph</li>
            </ul>
          </div>
          <div className="bg-white w-[25vw] h-full border-2 border-black shadow-[8px_8px_0px_#000000] rounded-2xl hover:shadow-[2px_2px_0px_#000000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-100 ease-in-out flex flex-col justify-start pt-3 gap-4 pl-4">
            <span className="font-display text-black w-fit px-2 bg-purple-300 text-[21px] border-2 border-black rounded-lg">Tools & Cloud</span>
            <ul className="flex gap-3 justify-start items-center flex-wrap">
              <li className="bg-gray-100 text-black px-3 py-0.5 rounded-full border-2 border-black font-bold hover:bg-green-300">Git</li>
              <li className="bg-gray-100 text-black px-3 py-0.5 rounded-full border-2 border-black font-bold hover:bg-green-300">GitHub</li>
              <li className="bg-gray-100 text-black px-3 py-0.5 rounded-full border-2 border-black font-bold hover:bg-green-300">Vercel</li>
              <li className="bg-gray-100 text-black px-3 py-0.5 rounded-full border-2 border-black font-bold hover:bg-green-300">Render</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
