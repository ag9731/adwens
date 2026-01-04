import AbousWhyUs from '@/components/AboutPageComponents/AbousWhyUs'
import AboutUsBanner from '@/components/AboutPageComponents/AboutUsBanner'
import AboutUsHowWeAreDifferent from '@/components/AboutPageComponents/AboutUsHowWeAreDifferent'
import AboutUsMissionVision from '@/components/AboutPageComponents/AboutUsMissionVision'
import HomePageContactUsSection from '@/components/HomePageComponents.jsx/HomePageContactUsSection'
import HomePageThirdSection from '@/components/HomePageComponents.jsx/HomePageThirdSection'
import React from 'react'

const page = () => {
    
  return (
    <div>
      <AboutUsBanner/>
      <AbousWhyUs/>
      <HomePageThirdSection/>
      <AboutUsMissionVision/>
      <AboutUsHowWeAreDifferent/>
      <HomePageContactUsSection/>
    </div>
  )
}

export default page
