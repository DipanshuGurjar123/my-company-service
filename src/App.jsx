import React from 'react'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import Whychooseus from './component/Whychooseus'
import { whyChooseUs } from './data/whychooseus'

const App = () => {
  return (
    <div>
      {/* <h1>My react App</h1> */}
      <Navbar/>
      <Hero/>
      <Whychooseus/>
    </div>
  )
}

export default App
