import React from 'react'

const HomePageThirdSection = () => {
  return (
    <>
    <div className='bg-black h-[40vh]'>
     <div className='container mx-auto flex gap-5'>
            <button className='bg-gradient-to-t from-[#0b0d10] to-[#0e1316]-600 py-4 px-8 text-white rounded-full border border-[#3d4c56] font-inter-tight tracking-[1px]'>
                  View Projects
            </button>
    </div>

      <div className='container mx-auto flex mt-8 items-center'>

        {/* Left Section */}
        <div className='flex-1 w-[50%] flex gap-6 flex-col items-start'>
          <h1 className='text-white font-inter-tight text-7xl font-bold  leading-[80px] tracking-[4px]'>Driven by Structure. Built for Results</h1>
        </div>

        {/* Right Section */}
        <div className='flex-1 w-[50%]'>
            <h1 className='text-white'>Designed for speed, clarity, and a seamless user journey.</h1>
        </div>
     </div>
    </div>
    </>
  )
}

export default HomePageThirdSection