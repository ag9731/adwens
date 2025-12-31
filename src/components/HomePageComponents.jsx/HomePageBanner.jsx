import React from 'react'

const HomePageBanner = () => {
  return (
    <div className='relative h-[70vh] bg-black flex items-center overflow-hidden'>

      {/* Background Video */}
      <video
        className="absolute w-full h-full object-cover"
        src="/videos/herovideo.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

        {/* Black Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent" />

    <div className='container mx-auto flex flex-col gap-8 z-10'>
        <div className='flex flex-col gap-4'>
           <h1 className='text-white font-inter-tight text-7xl font-bold w-[40%] leading-[80px] tracking-[4px]'>Where Design Meets Purpose</h1>
           <p className='w-[40%] font-roboto text-white text-xl'>A sharp, modern template built for brands that want clarity, impact, and a premium digital presence.</p>
        </div>
        <div className='flex items-start gap-8'>
            <button className='bg-gradient-to-t from-[#0b0d10] to-[#0e1316]-600 py-4 px-8 text-white rounded-full border border-[#3d4c56] font-inter-tight tracking-[1px]'>
                  Get In Touch
            </button>
            <button className='bg-gradient-to-t from-[#0b0d10] to-[#0e1316]-600 py-4 px-8 text-white rounded-full border border-[#3d4c56] font-inter-tight tracking-[1px]'>
                  View Projects
            </button>
        </div>
    </div>
    </div>
  )
}

export default HomePageBanner