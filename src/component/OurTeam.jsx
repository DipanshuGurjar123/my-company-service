import React from 'react'
import ourteamMembers from '../data/ourteamMembers'
import { FaUserTie } from "react-icons/fa"

const OurTeam = () => {

    const images = {
        user1: <FaUserTie size={70} />,
        user2: <FaUserTie size={70} />,
        user3: <FaUserTie size={70} />
    }

    return (

        <section className='max-w-7xl mx-auto px-6 py-4 bg-slate-900/10'>
            <div className='text-center mb-10'>
                <h1 className='text-4xl font-bold mb-7 '>Our Team Members</h1>
                <hr className="border-0 h-[1px] bg-gradient-to-r from-transparent via-gray-500 to-transparent" />
                <br />

                <div className='grid md:grid-cols-3 gap-8'>
                    {ourteamMembers.map((member) => (
                        <div key={member.id}
                            className="bg-white rounded-2xl p-8 text-center shadow-md hover:shadow-2xl hover:bg-blue-500 hover:-translate-y-2 transition-all duration-300 border border-gray-100"
                        >
                            <p className="text-blue-600 mb-4 flex justify-center">{images[member.image]}</p>
                            <p className="text-xl font-semibold text-gray-800 mb-3">Name : {member.name}</p>
                            <p className=''><b>Role</b> : {member.role}</p>
                            <p><b>Experience</b> : {member.experience}</p>
                        </div>
                    ))}
                </div>

            </div>
            
        </section>


    )
}

export default OurTeam
