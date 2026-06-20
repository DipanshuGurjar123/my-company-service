import React from 'react'
import { services } from '../data/services';
import {
    FaShieldAlt,
    FaFileAlt,
    FaWater,
    FaBolt,
    FaGraduationCap,
} from "react-icons/fa";

const Services = () => {
    const icons = {
        shield: <FaShieldAlt size={40} />,
        file: <FaFileAlt size={40} />,
        water: <FaWater size={40} />,
        energy: <FaBolt size={40} />,
        graduation: <FaGraduationCap size={40} />,
    };

    return (
        <section className='max-w-7xl mx-auto px-6 py-4'>
            <div className='text-center mb-14'>
                <h1 className='text-4xl font-bold mb-7 '>
                    Our Services
                </h1>
                <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                    Comprehensive consulting, compliance, audit and
                    training solutions designed to help organizations
                    achieve operational excellence.
                </p>
            </div>

            <div className='grid md:grid-cols-3 gap-8'>
                {services.map((service) => (
                    <div 
                    key={service.id}
                    className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300"
                    >
                        <div className="text-blue-600 mb-4">
                            {icons[service.shield]}
                            </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
                        <p className='text-gray-600'>{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Services
