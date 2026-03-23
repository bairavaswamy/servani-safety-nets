const ContactForm = () => {
  return (
    <div className="bg-white/5 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-white/10 text-gray-300">
      
      <h2 className="text-2xl font-bold mb-6 text-center
        bg-gradient-to-r from-[#E78946] via-orange-300 to-[#E78946]
        bg-clip-text text-transparent">
        Send Us a Message
      </h2>

      <form className="space-y-5">
        
        {/* Full Name */}
        <div>
          <label className="block text-gray-400 font-medium mb-1">
            Full Name
          </label>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-xl border border-white/10
            bg-white/5 text-white placeholder-gray-500
            focus:ring-2 focus:ring-[#E78946] outline-none"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-gray-400 font-medium mb-1">
            Email
          </label>
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 rounded-xl border border-white/10
            bg-white/5 text-white placeholder-gray-500
            focus:ring-2 focus:ring-[#E78946] outline-none"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-gray-400 font-medium mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            placeholder="Your Phone Number"
            className="w-full px-4 py-3 rounded-xl border border-white/10
            bg-white/5 text-white placeholder-gray-500
            focus:ring-2 focus:ring-[#E78946] outline-none"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block text-gray-400 font-medium mb-1">
            Message
          </label>
          <textarea
            rows={4}
            placeholder="Write your message here..."
            className="w-full px-4 py-3 rounded-xl border border-white/10
            bg-white/5 text-white placeholder-gray-500
            focus:ring-2 focus:ring-[#E78946] outline-none"
          />
        </div>

        {/* Submit Button */}
        <button
          type="button"
          className="w-full py-3 bg-[#E78946] text-white font-bold rounded-xl shadow-lg
          hover:scale-[1.02] hover:shadow-orange-400/40 transition duration-300"
        >
          Send Message
        </button>

      </form>
    </div>
  );
};

export default ContactForm;