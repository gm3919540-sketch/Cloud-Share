import React from 'react'
import HeroSection from '../components/landing/HeroSection'
import FeturesSection from '../components/landing/FeturesSection'
import PricingSection from '../components/landing/PricingSection'
import TestimonialsSections from '../components/landing/TestimonialsSections'
import CTASection from '../components/landing/CTASection'
import FooterSection from '../components/landing/FooterSection'
import { features } from '../assets/data'

const Landing = () => {
  return (
   <div className="landing-page vg-gradient-to-b from gray-50 to-gray-100">
    {/* Hero Section */}
     <HeroSection/>
    {/* Feture Setion*/}
    <FeturesSection features={features} />

    {/* Pricing Section */}

    <PricingSection/>

    {/* Testimone=ial Section */}
    <TestimonialsSections />

    {/* CTA  Section */}
    <CTASection/>

    {/* Footer Section */}
    <FooterSection/>



    
   </div>
  )
}

export default Landing