import React from 'react'

const About = () => {
  return (
    <div className="w-[54vw] h-[48vh] bg-yellow-300 border-4 border-black rounded-4xl shadow-[7px_7px_0px_#000000] relative items-center pt-8 px-9">
      <h2 className='font-display text-[40px] text-black'>Hi people! 👋</h2>
      <p className='font-pops text-[18px] text-black pt-2'>
        I am a <span className='font-bold bg-emerald-200 border px-0.5'>1st-year student at RVSCET</span>, pursuing a Bachelor of Technology degree in Computer Science and Engineering. I define myself as a curious and dedicated individual <span className='font-bold bg-emerald-200 border px-0.5'>aspiring to build scalable LLM applications</span>.
      </p>
      <p className='font-pops text-[18px] text-black pt-3'>
        I have strong aptitude, technical and communication skills, and a logical approach to problem-solving. My polymath nature allows me to adapt quickly and excel in various domains. I am eager to contribute my skills and knowledge to create innovative solutions that make a positive impact on society.
      </p>
      <div className='font-pops text-[18px] text-black mt-3 py-3 w-fit px-2 bg-white border border-black rounded-lg shadow-[4px_4px_0px_#000000] font-bold'>
       🚀 Open to Software and Research Internships
      </div>
    </div>
  )
}

export default About
