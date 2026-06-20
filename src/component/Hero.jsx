import React from 'react'
import heroImg from "../assets/marketing-consulting-rafiki.png";

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-10">

      <div className="hero-left flex-1">
        <h1 className='text-4xl md:text-5xl font-bold text-gray-800 leading-tight'>
          Transforming Businesses Through
          Quality, Compliance &
          Operational Excellence
        </h1>

        <p className='mt-6 text-lg text-gray-600'>
          Professional consulting, certification,
          audit and training solutions for
          sustainable business growth.
        </p>

        <div className="hero-btns mt-8 flex gap-4">
          <button className='bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700'>Free Consultation</button>
          <button className='border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50'>Our Services</button>
        </div>
      </div>

      <div className="hero-right flex-1">
        <img
          src={heroImg}
          alt="Business Consulting"
          className='w-full max-w-lg mx-auto'
        />
      </div>

    </section>
  );
}



export default Hero
