import React, { useEffect } from 'react'
import HeroSection from '../components/landing/HeroSection'
import FeturesSection from '../components/landing/FeturesSection'
import PricingSection from '../components/landing/PricingSection'
import TestimonialsSections from '../components/landing/TestimonialsSections'
import CTASection from '../components/landing/CTASection'
import FooterSection from '../components/landing/FooterSection'
import { features, pricingPlans, testimonials } from '../assets/data'
import { useClerk, useUser } from '@clerk/clerk-react'
import { useNavigate } from 'react-router-dom'

const Landing = () => {
 const {openSignIn,openSignUp}= useClerk();
 const{isSignedIn}= useUser();
 const navigate = useNavigate();

 useEffect(()=>{
   if(isSignedIn){
           navigate("/dashboard");
   }
 },[isSignedIn,navigate]);

  return (
   <div className="landing-page vg-gradient-to-b from gray-50 to-gray-100">
    {/* Hero Section */}
     <HeroSection openSignIn={openSignIn} openSignUp={openSignUp}/>

    {/* Feture Setion*/}
    <FeturesSection features={features} />

    {/* Pricing Section */}

    <PricingSection pricingPlans={pricingPlans} openSignUp ={openSignUp} />

    {/* Testimone=ial Section */}
    <TestimonialsSections testimonials={testimonials} />

    {/* CTA  Section */}
    <CTASection openSignUp={openSignUp}/>

    {/* Footer Section */}
    <FooterSection/>



    
   </div>
  )
}

export default Landing