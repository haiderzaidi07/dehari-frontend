import React from 'react'

const About = () => {
  return (
    <>
          <div className="bg-gray-100 py-10 h-screen border-2">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4 text-emerald-500">About Us</h1>
        <p className="text-gray-700 mb-8">
          We are a team of talented freelancers passionate about providing high-quality services to our clients. With years of experience in various industries, we have honed our skills and expertise to deliver outstanding results.
        </p>
        <div className="flex flex-wrap -mx-4 ">
          <div className="w-full sm:w-1/2 md:w-1/3 px-4 mb-6 transition-transform duration-300 hover:-translate-y-2">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">Creative Solutions</h2>
              <p className="text-gray-700">
                We specialize in providing creative solutions tailored to meet your specific needs. Our team of designers, developers, and marketers work together to create unique and impactful projects.
              </p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 px-4 mb-6 ansition-transform duration-300 hover:-translate-y-2">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">Client Satisfaction</h2>
              <p className="text-gray-700">
                Our top priority is client satisfaction. We strive to understand your goals and deliver exceptional results that exceed your expectations. We value open communication and collaboration throughout the project.
              </p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 px-4 mb-6 ansition-transform duration-300 hover:-translate-y-2">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">Reliable Team</h2>
              <p className="text-gray-700">
                Our team is reliable, dedicated, and passionate about what we do. We are committed to delivering projects on time and ensuring a smooth and seamless experience for our clients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    </>
  )
}

export default About
