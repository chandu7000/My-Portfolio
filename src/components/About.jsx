export default function About() {
  return (
    <section id="about" className="min-h-screen py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10">About Me</h2>
        <div className="flex flex-col md:flex-row items-center gap-10">
          <img
            src="https://res.cloudinary.com/dmafwatx5/image/upload/w_300,c_fill,ar_1:1,g_auto,r_max/v1727951863/portfolio-pic_mwmr8i.jpg"
            alt="My Profile"
            className="rounded-full w-48 sm:w-56 md:w-64 h-auto object-cover border-4 border-blue-500"
          />
          <div>
            <p className="text-base sm:text-lg text-gray-700 mb-4 leading-relaxed">
              Hello, I'm <strong>Chandra Sekhar</strong>, a software engineer passionate about building dynamic and scalable web applications. I'm proficient in <strong>MERN Stack</strong> development, using frontend technologies like <strong>React.js</strong> and backend tools like <strong>Node.js, Express.js</strong>, along with <strong>MongoDB</strong> for database management.
            </p>

            <div>
              <h3 className="text-lg font-semibold mb-2">🎓 Education</h3>
              <div>
                <p className="text-gray-600 font-medium">B.Tech in Electronics & Communication</p>
                <p className="text-gray-500">Lakireddy Balireddy College of Engineering, 2024</p>
              </div>
              <div className="my-4">
                <p className="text-gray-600 font-medium">Board Of Intermediate</p>
                <p className="text-gray-500">Sri Chaitanya Junior College, 2020</p>

              </div>
              <div>
                <p className="text-gray-600 font-medium">Secondary Eduation</p>
                <p className="text-gray-500">Lakireddy Balireddy College of Engineering, 2024</p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
