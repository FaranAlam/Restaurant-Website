const Contact = () => {
  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-4xl text-red-600 font-bold text-center mb-8">Contact Us</h1>
      
      <form className="bg-yellow-50 shadow-lg rounded-xl p-6 space-y-4">
        <div>
          <label className="block mb-1 text-gray-800 font-medium">Name</label>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-yellow-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        <div>
          <label className="block mb-1 text-gray-800 font-medium">Email</label>
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border border-yellow-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        <div>
          <label className="block mb-1 text-gray-800 font-medium">Message</label>
          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full border border-yellow-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
