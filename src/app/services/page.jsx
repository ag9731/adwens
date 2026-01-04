import HomePageContactUsSection from '@/components/HomePageComponents.jsx/HomePageContactUsSection'
import ServicePageBanner from '@/components/ServicePageComponents/ServicePageBanner'
import ServicePageServices from '@/components/ServicePageComponents/ServicePageServices'
import React from 'react'

const page = () => {
  return (
    <div>
      <ServicePageBanner/>
      <ServicePageServices/>
      <HomePageContactUsSection/>
    </div>
  )
}

export default page
