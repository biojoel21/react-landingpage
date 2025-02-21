import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FeaturesSection from './components/FeaturesSection'
import Workflow from './components/Workflow'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'

const App = () => {
  return (
     <>
       <Navbar />
       <div className="max-w-7xl mx-auto pt-20 px-6">
          <HeroSection />
          <FeaturesSection />
          <Workflow />
          <Pricing/>
          <Testimonials />
       </div>       
     </>
  )
}

export default App