import { RevealOnScroll } from "./RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "React/Next.js",
    "JavaScript/TS",
    "HTML",
    "Tailwind/CSS",
  ];

  const backendSkills = ["Node.js/Express", "MongoDB", "SQL"];

  const tools = ["Git/GitHub"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20 text-left bg-gray-50 dark:bg-[#181818] rounded-tr-[10rem] sm:rounded-tr-[20em]"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl gradient-text text-center underline">About Me</h2>
          <div>
            <p>
              Wesite developer studying at San Jose State
              University. I specialize in React, Nextjs for the front-end, Nodejs, Expressjs in
              the back-end. I work with and optimize relational databses such as
              MySQL, as well as NoSQL databses like MongoDB. My goal as a
              developer is to turn ideas into scalable, user-friendly, and
              accessible solutions.
            </p>
            {/* SKILLS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-2 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold my-4">Front-End</h3>
                <ul className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, index) => (
                    <li className="tech-style" key={index}>
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl p-2 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold my-4">Back-End</h3>
                <ul className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, index) => (
                    <li className="tech-style" key={index}>
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="rounded-xl p-2 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold my-4">Tools & Services</h3>
              <ul className="flex flex-wrap gap-2">
                {tools.map((tech, index) => (
                  <li className="tech-style" key={index}>
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* EDUCATION */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-2 rounded-xl border-gray-500/20 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">🎓Education</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <span className="font-bold">B.S. in Computer Science</span> - San Jose State
                  University (2022-present)
                </li>
                <li>
                  <span className="font-bold">Courseworks</span>: Introduction to Database
                  Management Systems, Data Structure and Algorithm, Object
                  Oriented Design
                </li>
              </ul>
            </div>
            {/* WORK EXPEREIENCE */}
            <div className="p-2 rounded-xl border-gray-500/20 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">💼Work Experience</h3>
              <ul className="list-disc list-inside space-y-2"></ul>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
