export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for reaching out! I will get back to you shortly.");
    e.target.reset();
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-blue-700 to-cyan-500 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
        <p className="mb-10">Feel free to contact me for collaboration or inquiries.</p>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            required
            className="w-full px-4 py-2 rounded text-black"
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-2 rounded text-black"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            required
            className="w-full px-4 py-2 rounded text-black"
          />
          <button
            type="submit"
            className="bg-black px-6 py-2 rounded hover:bg-white hover:text-black transition"
          >
            Send Message
          </button>
        </form>

        <div className="flex justify-center gap-7 mt-10">
          {[
            ["fab fa-whatsapp", "https://wa.me/7013988318"],
            ["fab fa-instagram", "https://instagram.com/chandu95_"],
            ["fab fa-linkedin", "https://linkedin.com/in/chandu7000"],
            ["fab fa-github", "https://github.com/chandu7000"],
          ].map(([icon, url]) => (
            <a key={icon} href={url} target="_blank" rel="noreferrer">
              <i className={`${icon} transition-transform duration-300 hover:text-indigo-400 text-3xl hover:scale-125 hover:z-10`}></i>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
