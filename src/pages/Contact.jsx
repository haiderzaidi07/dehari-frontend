const Contact = () => {
   
  return (
    <>

    <div className="bg-white opacity-70 hover:opacity-100 hover:-translate-y-1 transition-all duration-300 py-10 w-1/2 mx-auto p-6 rounded-lg shadow-md my-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4 text-emerald-500">Contact Us</h1>
        <formform action="https://formsubmit.co/u2021468@giki.edu.pk" method="POST">
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
            
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
     
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block mb-2">Message:</label>
            <textarea
              id="message"
              name="message"
              value=""
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="px-6 py-2 bg-emerald-500 text-white rounded-md"
          >
            Send Message
          </button>
        </formform>
      </div>
    </div>
    </>
  )
}

export default Contact
