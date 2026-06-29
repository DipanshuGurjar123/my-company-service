import React from 'react'

const Contact = () => {
    return (
        <section className="py-20 bg-gray-50 bg-slate-900/10">
            <div className="max-w-7xl mx-auto px-6">

                <div className='grid md:grid-cols-2 gap-8'>
                    <div className='bg-white p-8 rounded-3xl shadow-md'>
                        <h1 className='text-4xl font-bold text-blue-900 mb-4'>Contact us</h1>
                        <h2 className='mt-[40px] ml-4'>Let's Discuss Your Quality & compliance Requirements</h2>
                        <h1 className='text-2xl m-3'>RAHAN CONSULTANCY SERVICES LLP</h1>
                        <p className='m-3'>Address</p>
                        <p className='m-3'>+91 1111111111</p>
                        <p className='m-3'>client@gmail.com</p>
                    </div>


                    <div className='md:col-span-1 bg-white p-8 rounded-3xl shadow-lg'>
                        <h3 className='text-2xl font-bold text-blue-900 mb-8'>
                            Send us a inquiry
                        </h3>
                        <form className='space-y-5'>
                            <input
                                type="text"
                                name='name'
                                placeholder='Enter your full Name'
                                className='w-full p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500'
                            />
                            <input
                                type="text"
                                name='company'
                                placeholder='Enter Company Name'
                                className='w-full p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500'
                            />
                            <input
                                type="email"
                                name='email'
                                placeholder='Enter Email'
                                className='w-full p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500'
                            />
                            <input
                                type="text"
                                name='contact'
                                placeholder='Contact Number'
                                className='w-full p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500'
                            />
                            <input
                                type="text"
                                name='service'
                                placeholder='Service Required...'
                                className='w-full p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500'
                            />
                            <textarea
                                name="message"
                                placeholder='Enter your message here.....'
                                className='w-full p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500'
                            ></textarea>
                            <button
                            className='w-full bg-gradient-to-r from-blue-700 to-indigo-600 text-white py-3 rounded-xl font-semibold hover:scale-105 transition'
                            >Send Inquiry</button>
                        </form>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Contact
