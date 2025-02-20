import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FeaturesSection from './components/FeaturesSection'
import Workflow from './components/Workflow'
import Pricing from './components/Pricing'

const App = () => {
  return (
     <>
       <Navbar />
       <div className="max-w-7xl mx-auto pt-20 px-6">
          <HeroSection />
          <FeaturesSection />
          <Workflow />
          <Pricing/>
       </div>       
     </>
  )
}

export default App