import { whyChooseUs } from "../data/whychooseus";

function WhyChooseUs() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-8">
      <div className="text-center mb-14">
        <hr className="border-0 h-[1px] bg-gradient-to-r from-transparent via-gray-500 to-transparent" />
        <h2 className="text-4xl font-bold text-gray-800 p-4 ">
          Why Choose Us?
        </h2>
        <hr className="border-0 h-[1.5px] bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Trusted consulting, certification and compliance
          solutions designed to help organizations achieve
          operational excellence and sustainable growth.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {whyChooseUs.map((item) => (
          <div
            key={item.id}
            className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              {item.title}
            </h3>

            <p className="text-gray-600">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyChooseUs;