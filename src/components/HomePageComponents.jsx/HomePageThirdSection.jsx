import React from 'react'

const HomePageThirdSection = () => {
  return (
    <>
    <div className='bg-black h-[40vh]'>
     <div className='container mx-auto flex gap-5 items-center'>
            <h1 className='text-white font-inter-tight tracking-[4px] font-semibold'>SERVICES</h1>
            <div className='bg-[#ffff] h-[1px] w-[70px]'></div>
    </div>

      <div className='container mx-auto flex mt-8 justify-between items-center'>

        {/* Left Section */}
        <div className='w-1/2  flex gap-6 flex-col items-start'>
          <h1 className='text-white font-inter-tight text-7xl font-bold  leading-[80px] tracking-[4px]'>Driven by Structure. Built for Results</h1>
        </div>

        {/* Right Section */}
        <div className='w-1/2 flex justify-end'>
            <h1 className='text-white font-inter-tight tracking-[4px]'>Designed for speed, clarity, and a seamless user journey.</h1>
        </div>
     </div>
    </div>
    </>
  )
}

export default HomePageThirdSection