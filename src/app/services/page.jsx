import HomePageContactUsSection from '@/components/HomePageComponents.jsx/HomePageContactUsSection'
import HomePageMediaInitiativesSection from '@/components/HomePageComponents.jsx/HomePageMediaInitiativesSection'
import ServicePageBanner from '@/components/ServicePageComponents/ServicePageBanner'
import ServicePageServices from '@/components/ServicePageComponents/ServicePageServices'
import React from 'react'

const page = () => {
  return (
    <div>
      <ServicePageBanner/>
      <HomePageMediaInitiativesSection/>
      <ServicePageServices/>
      <HomePageContactUsSection/>
    </div>
  )
}

export default page
