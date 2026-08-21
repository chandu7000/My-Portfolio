import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';
import image4 from '../assets/image4.png';
import image5 from '../assets/image5.png';


const projects = [
  {
    title: "Video Calling App (Full Stack)",
    img: image1,
    desc: "Developed a full-stack Video Calling App with real-time chat using React.js, Node.js, Express.js, MongoDB, Socket.IO, and styled with Tailwind CSS. Supports peer-to-peer video calls and instant messaging.",
    link: "https://github.com/chandu7000/VideoCalling-ChatApp",
  },
  {
    title: "Job Portal App (Frontend)",
    img: image2,
    desc: "Built a full-stack Job Portal App using React.js, Node.js, Express.js, MongoDB, and Tailwind CSS. Features include job listings, user authentication, role-based dashboards, and job applications with real-time status updates.",
    link: "https://github.com/chandu7000/Job-Portal-App",
  },
  {
    title: "Movie App (Frontend)",
    img: image3,
    desc: "his project is a React-based application designed to solve problem. It is used to React, The Movie Database(TMDB) API, Node.js, Javascript, Html, Tailwindcss.",
    link: "https://github.com/chandu7000/MovieApp",
  },
  {
    title: "Weather Forecast App (Frontend)",
    img: image4,
    desc: "This project is a React-based application designed to solve problem. It is used to React, Vite, Weather API, Node.js, Javascript, Html/CSS.",
    link: "https://github.com/chandu7000/weather-forecast",
  },
  {
    title: "Institute Web Page (Frontend)",
    img: image5,
    desc: "This Project is a Front-end web application designed. It's a web application built using HTML/CSS, JavaScript",
    link: "https://github.com/chandu7000/InstituteWebPage",
  },


];

export default function Projects() {
  return (
    <section id="projects" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.title} className="bg-gray-100 rounded-lg shadow hover:shadow-lg transition">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="text-sm text-gray-600 my-2">{project.desc}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
