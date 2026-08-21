import { useEffect, useState } from "react";

export default function Home() {
  const roles = ["Web Developer", "UI Designer", "Creative Coder"];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [char, setChar] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = roles[index];
      if (!deleting) {
        setText(current.substring(0, char + 1));
        setChar(char + 1);
        if (char === current.length) setDeleting(true);
      } else {
        setText(current.substring(0, char - 1));
        setChar(char - 1);
        if (char === 0) {
          setDeleting(false);
          setIndex((index + 1) % roles.length);
        }
      }
    }, deleting ? 50 : 100);
    return () => clearTimeout(timeout);
  }, [char, deleting, index]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gray-100 px-4 py-16 md:py-32"
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        {/* Text Content */}
        <div className="w-full md:w-2/3 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Hi, I'm a <span className="text-purple-600">{text}</span>
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Building stunning and professional web experiences.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a
              href="#about"
              className="bg-black text-white px-5 py-2 rounded hover:bg-cyan-500 transition duration-300"
            >
              Discover More
            </a>
            <a
              href="/Assets/Resume.pdf"
              download
              className="bg-black text-white px-5 py-2 rounded hover:bg-cyan-500 transition duration-300"
            >
              Download PDF
            </a>
          </div>

          {/* Social Media */}
          <div className="mt-6 flex justify-center md:justify-start gap-7">
            {[
              ["fab fa-whatsapp", "https://wa.me/7013988318"],
              ["fab fa-instagram", "https://instagram.com/chandu95_"],
              ["fab fa-linkedin", "https://linkedin.com/in/chandu7000"],
              ["fab fa-github", "https://github.com/chandu7000"],
            ].map(([icon, link]) => (
              <a
                key={icon}
                href={link}
                target="_blank"
                rel="noreferrer"
                className="text-gray-800 hover:text-cyan-500 transform hover:scale-125 transition duration-300"
              >
                <i className={`${icon} text-3xl`}></i>
              </a>
            ))}
          </div>
        </div>

        {/* Profile Image */}
        <div className="w-full md:w-1/3 flex justify-center">
          <img
            src="https://res.cloudinary.com/dmafwatx5/image/upload/v1727030004/port1_trtqcm.jpg"
            alt="profile"
            className="rounded-lg w-64 sm:w-72 md:w-80 object-cover"
          />
        </div>
      </div>
    </section>
  );
}
