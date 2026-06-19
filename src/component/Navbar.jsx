import React from 'react'

const Navbar = () => {
    return (
        <div className='w-full bg-green-300 '>
            <nav className='max-w-7xl mx-auto flex justify-between items-center px-6 h-20'>
                <div className='logo '>
                    MCS LLP
                </div>
                <div className='flex gap-10'>
                    <h3>Home</h3>
                    <h3>Services</h3>
                    <h3>Team</h3>
                    <h3>Contact</h3>
                    <h3>About</h3>
                </div>
                
            </nav>
        </div>
    )
}

export default Navbar
