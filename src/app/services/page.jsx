import ContentPageEducation from '@/components/ContentPageComponents/ContentPageEducation'
import ContentPageEntertainment from '@/components/ContentPageComponents/ContentPageEntertainment'
import ContentPageHero from '@/components/ContentPageComponents/ContentPageHero'
import HomePageContactUsSection from '@/components/HomePageComponents.jsx/HomePageContactUsSection'
import HomePageMediaInitiativesSection from '@/components/HomePageComponents.jsx/HomePageMediaInitiativesSection'
import ServicePageBanner from '@/components/ServicePageComponents/ServicePageBanner'
import ServicePageServices from '@/components/ServicePageComponents/ServicePageServices'
import { Content } from 'next/font/google'
import React from 'react'

const page = () => {
  return (
    <div>
      <ServicePageBanner/>
      {/* <HomePageMediaInitiativesSection/> */}
      <ServicePageServices/>
      <div className='bg-white w-[100%] h-[1px]'></div>
      <ContentPageHero/>
      <ContentPageEducation/>
      <ContentPageEntertainment/>
      <HomePageContactUsSection/>
    </div>
  )
}

export default page
