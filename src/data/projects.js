import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";

export const projects = [
  {
    id: "social-communication",
    title: "Real-Time Social Communication and Video Calling Platform",
    type: "Full Stack",
    featured: true,
    img: image1,
    purpose:
      "A full-stack communication application focused on bringing real-time messaging and peer-to-peer video calling into one responsive experience.",
    features: [
      "Real-time chat and instant messaging",
      "Peer-to-peer video calling",
      "Full-stack client and server architecture",
      "Responsive Tailwind CSS interface",
    ],
    stack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.IO",
      "Tailwind CSS",
    ],
    repoUrl: "https://github.com/chandu7000/VideoCalling-ChatApp",
    liveUrl: "https://real-time-social-communication-and.vercel.app",
  },

  {
    id: "recruitment-system",
    title: "Job Recruitment And Application Management System",
    type: "Full Stack",
    featured: true,
    img: image2,
    purpose:
      "A full-stack recruitment platform that organizes job discovery, user access, role-specific workflows, applications, and application-status tracking.",
    features: [
      "User authentication",
      "Role-based dashboards",
      "Job listings and application workflows",
      "Application status updates",
    ],
    stack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
    ],
    repoUrl: "https://github.com/chandu7000/Job-Portal-App",
    liveUrl:
      "https://job-recruitment-and-application-man.vercel.app/",
  },

  {
    id: "movie-app",
    title: "Movie App",
    type: "Full Stack",
    featured: false,
    img: image3,
    purpose:
      "A React-based movie application that integrates The Movie Database (TMDB) API to present movie-related content through a modern web interface.",
    features: [],
    stack: [
      "React.js",
      "TMDB API",
      "Node.js",
      "JavaScript",
      "HTML",
      "Tailwind CSS",
    ],
    repoUrl: "https://github.com/chandu7000/MovieApp",

    // Add Movie App deployed Live Demo URL here later.
    liveUrl: "https://ncs-movie-app.netlify.app",
  },

  {
    id: "weather-forecast",
    title: "Weather Forecast App",
    type: "Frontend",
    featured: false,
    img: image4,
    purpose:
      "A React and Vite weather application that integrates a weather API to present forecast information in a focused frontend experience.",
    features: [],
    stack: [
      "React.js",
      "Vite",
      "Weather API",
      "Node.js",
      "JavaScript",
      "HTML/CSS",
    ],
    repoUrl: "https://github.com/chandu7000/weather-forecast",

    // Add Weather Forecast App deployed Live Demo URL here later.
    liveUrl: "https://weather-app-ncs.netlify.app",
  },

  {
    id: "institute-page",
    title: "Institute Web Page",
    type: "Frontend",
    featured: false,
    img: image5,
    purpose:
      "A frontend institute website built with core web technologies to present structured information through a clean browser-based interface.",
    features: [],
    stack: ["HTML", "CSS", "JavaScript"],
    repoUrl: "https://github.com/chandu7000/InstituteWebPage",

    // Add Institute Web Page deployed Live Demo URL here later.
    liveUrl: "https://institute-webpage.netlify.app",
  },
];

export const featuredProjects = projects.filter(
  (project) => project.featured,
);

export const otherProjects = projects.filter(
  (project) => !project.featured,
);