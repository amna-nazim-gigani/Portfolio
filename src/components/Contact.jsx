import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    // TODO: Connect to EmailJS, Formspree, or backend API
    setTimeout(() => {
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <section id="contact" className="w-full py-16 bg-gradient-to-b from-[#1e0036] via-[#100020] to-black text-white flex justify-center">
      <div className="max-w-2xl w-full px-6">
        <h2 className="text-4xl font-bold text-center text-[#d5a3ff]">Contact Me</h2>
        <p className="text-gray-400 text-center mt-2">Let's work together! Send me a message.</p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className="block text-gray-300 text-sm mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-[#1a0128] text-white border border-[#a855f7] focus:outline-none focus:ring-2 focus:ring-[#d5a3ff]"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label className="block text-gray-300 text-sm mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-[#1a0128] text-white border border-[#a855f7] focus:outline-none focus:ring-2 focus:ring-[#d5a3ff]"
              placeholder="Your Email"
            />
          </div>

          <div>
            <label className="block text-gray-300 text-sm mb-1">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-[#1a0128] text-white border border-[#a855f7] focus:outline-none focus:ring-2 focus:ring-[#d5a3ff] h-32"
              placeholder="Your Message"
            ></textarea>
          </div>

          <button
            type="submit"
           // className="w-full bg-[#a855f7] hover:bg-[#d5a3ff] transition p-3 rounded-lg font-bold text-white shadow-lg"//
          className="w-full bg-[#7a1fa2] hover:bg-[#a855f7] transition p-3 rounded-lg font-bold text-white shadow-lg"
          >

            Send Message
          </button>

          {status && <p className="text-center mt-2 text-green-400">{status}</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
