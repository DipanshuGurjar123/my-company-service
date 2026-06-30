import React from 'react'
import  aboutimage  from "../assets/pexels-yankrukov-7698796.jpg"

const AboutUs = () => {
    return (
        <div className=' p-6 shadow-md hover:shadow-xl transition duration-300 bg-slate-900/10'>
            <section className="max-w-7xl mx-auto px-6 rounded-xl py-12 flex flex-col md:flex-row items-center justify-between gap-10 ">
                <div className="left-section flex-1 ">
                    <h1 className='text-4xl md:text-5xl font-bold text-gray-800'>About Us</h1>

                    <h1 className='mt-10 font-bold text-2xl'>Building Quality-Driven & <br />
                        Future-Ready Organizations</h1>

                    <p className='mt-6 text-lg text-gray-600'>We help organizations achieve operational excellence through <br /> quality management systems, compliance consulting,<br /> audits and professional training. Our team works closely <br /> with organizations to improve processes, maintain compliance <br /> and achieve sustainable business growth.
                    </p>
                    <p className=' text-lg text-gray-600'>✔ Management System Consulting</p>
                    <p className=' text-lg text-gray-600'>✔ Laboratory Accreditation Support</p>
                    <p className=' text-lg text-gray-600'>✔ Internal Auditing Services</p>
                    <p className=' text-lg text-gray-600'>✔ Professional Training Programs</p>
                    <p className=' text-lg text-gray-600'>✔ Documentation Development</p>
                    <p className=' text-lg text-gray-600'>✔ Process Improvement Initiatives</p>
                </div>

                <div className="right-section flex-1">
                    <img src={aboutimage}
                     alt="Business work" 
                    className='w-full max-w-lg mx-auto transition duration-300 hover:shadow-md'
                    />
                </div>
            </section>
        </div>
    )
}

export default AboutUs
