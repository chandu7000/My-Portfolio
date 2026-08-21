const skills = [
  {
    category: "Programming Languages",
    list: ["HTML5", "CSS3", "JavaScript", "Python"],
  },
  {
    category: "Frameworks & Libraries",
    list: ["React.js", "Node.js", "Express.js", "Bootstrap", "Tailwind CSS"],
  },
  {
    category: "Databases",
    list: ["MongoDB", "MySQL"],
  },
  {
    category: "Developer Tools",    
    list: ["VS Code", "Notepad++", "Git", "GitHub"],
  },


];

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10">Skills & Tools</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {skills.map((group) => (
            <div key={group.category} className="bg-white p-6 rounded shadow">
              <h3 className="text-lg font-semibold mb-4">{group.category}</h3>              
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {group.list.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
