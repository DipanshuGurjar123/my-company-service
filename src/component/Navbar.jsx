import React from 'react'

const Navbar = () => {
    return (
        <div className='w-full bg-green-300 '>
            <nav className='max-w-7xl mx-auto flex justify-between items-center px-6 h-20'>
                <div className='logo '>
                    MCS LLP
                </div>
                <div className='flex gap-10'>
                    <h3 className='relative inline-block pb-1 after:absolute after:left-0 after:bottom-0 after:h-[3px] after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full'>Home</h3>
                    <h3 className='relative inline-block pb-1 after:absolute after:left-0 after:bottom-0 after:h-[3px] after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full'>Services</h3>
                    <h3 className='relative inline-block pb-1 after:absolute after:left-0 after:bottom-0 after:h-[3px] after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full'>Team</h3>
                    <h3 className='relative inline-block pb-1 after:absolute after:left-0 after:bottom-0 after:h-[3px] after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full'>Contact</h3>
                    <h3 className='relative inline-block pb-1 after:absolute after:left-0 after:bottom-0 after:h-[3px] after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full'>About</h3>
                </div>
                
            </nav>
        </div>
    )
}

export default Navbar
