import React from 'react'

function Industries() {
    const industries = [
        "Foundry & Casting Industries",
        "Forging Industries",
        "Valve Manufacturing",
        "Automotive Components",
        "Railway Manufacturing",
        "Engineering & Fabrication Industries",
        "Testing & Calibration Laboratories",
        "Educational Institutions",
    ];

    return (
        <section className="max-w-7xl mx-auto px-6 py-20 bg-slate-900/10">
            <div className="text-center mb-14">
                <h1 className="text-4xl font-bold text-gray-800">
                    Industries We Serve
                </h1>

                <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                    We provide consulting, compliance and audit solutions <br />
                    across a wide range of industries and business sectors.
                </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
        {industries.map((industry, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-xl transition duration-300"
          >
            <h3 className="font-semibold text-gray-800">
              {industry}
            </h3>
          </div>
        ))}
      </div>
        </section>
    )
}

export default Industries
