import { RevealOnScroll } from "./RevealOnScroll";

export const About = () => {
  const frontendSkills = ["React", "JavaScript", "TypeScript", "HTML", "CSS", "Tailwind", "EmailJS"];

  const backendSkills = ["Node.js", "MongoDB", "SQL", "MySQL", "Express.js", "Stripe", "AWS"];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20 text-left">
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl gradient-text text-center">
            About Me
          </h2>
          <div>
            <p>
              Aspirating full-stack developer studying at San Jose State
              University. I specialize in React for the front-end and Node.js in
              the back-end. I work with and optimize relational databses such as
              MySQL, as well as NoSQL databses like MongoDB. My goal as a
              developer is to turn ideas to scalable, user-friendly, and
              accessible solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-2 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold my-4">Front-End</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech) => (
                    <span className="tech-style">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-2 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold my-4">Back-End</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech) => (
                    <span className="tech-style">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-2 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">🎓Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>B.S. in Computer Science</strong> - San Jose State
                  University (2022-present)
                </li>
                <li>
                  <strong>Courseworks</strong>: Introduction to Database
                  Management Systems, Data Structure and Algorithm, Object
                  Oriented Design
                </li>
              </ul>
            </div>
            <div className="p-2 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">💼Work Experience</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>Intership at ABC (2023-2024)</strong>: Assisted in
                  building reusable front end components and integration of REST
                  APIs
                </li>
              </ul>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
