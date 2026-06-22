import React from 'react'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import Whychooseus from './component/Whychooseus'
import { whyChooseUs } from './data/whychooseus'
import Services from './component/Services'
import { services } from './data/services'
import AboutUs from './component/AboutUs'
import Industries from './component/Industries'
import OurTeam from './component/OurTeam'
import ClientBenefits from './component/ClientBenefits'

const App = () => {
  return (
    <div>
      {/* <h1>My react App</h1> */}
      <Navbar />
      <Hero />
      <Services />
      <Industries />
      <Whychooseus />
      
      <AboutUs />
      
      <OurTeam />
      <ClientBenefits/>
    </div>
  )
}

export default App
