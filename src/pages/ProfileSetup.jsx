import React,{useState} from 'react'

const ProfileSetup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [position, setPosition] = useState('');
  const [duration, setDuration] = useState('');
  const [project, setProject] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any necessary logic with the form data
    // e.g., send the data to an API or update state in a parent component
    // Reset form fields if needed
    setName('');
    setEmail('');
    setPhone('');
    setCompany('');
    setPosition('');
    setDuration('');
    setProject('');
    setDescription('');
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold my-4 p-4 text-emerald-500 shadow-md rounded-lg">User Profile Setup</h1>

      {/* Personal Details Section */}
      <div className='my-5 mb-10 bg-white shadow-lg opacity-60 hover:opacity-100 transition-all hover:translate-y-1 duration-500 rounded-lg p-6'>
      <h2 className="text-xl font-bold mb-2">Personal Details</h2>
      <form onSubmit={handleSubmit} >
        <label htmlFor="name" className="block mb-2">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md"
          required
        />

        <label htmlFor="email" className="block mb-2">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md"
          required
        />

        <label htmlFor="phone" className="block mb-2">Phone:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md"
          required
        />
      </form>
      </div>
      <div className='my-5 mb-10 bg-white shadow-lg opacity-60 hover:opacity-100 transition-all hover:translate-y-1 duration-500 rounded-lg p-6'>
      {/* Work Experience Section */}
      <h2 className="text-xl font-bold mb-2">Work Experience</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="company" className="block mb-2">Company:</label>
        <input
          type="text"
          id="company"
          name="company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md"
          required
        />

        <label htmlFor="position" className="block mb-2">Position:</label>
        <input
          type="text"
          id="position"
          name="position"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md"
          required
        />

        <label htmlFor="duration" className="block mb-2">Duration:</label>
        <input
          type="text"
          id="duration"
          name="duration"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md"
          required
        />
      </form>
</div>
      {/* Projects Section */}
      <div className='my-5 mb-10 bg-white shadow-lg opacity-60 hover:opacity-100 transition-all hover:translate-y-1 duration-500 rounded-lg p-6'>

      <h2 className="text-xl font-bold mb-2">Projects</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="project" className="block mb-2">Project:</label>
        <input
          type="text"
          id="project"
          name="project"
          value={project}
          onChange={(e) => setProject(e.target.value)}
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md"
          required
        />

        <label htmlFor="description" className="block mb-2">Description:</label>
        <textarea
          id="description"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md"
          required
        ></textarea>
      </form>
</div>
      {/* Submit Button */}
      <button
        type="submit"
        onClick={handleSubmit}
        className="px-6 py-2 bg-emerald-500 text-white rounded-md transition-all hover:text-emerald-500 hover:bg-white border-2 border-emerald-500 active:translate-y-1"
      >
        Save Profile
      </button>
    </div>
  );
}

export default ProfileSetup

