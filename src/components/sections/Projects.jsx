import { RevealOnScroll } from "./RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20 bg-gray-100 dark:bg-gray-900 rounded-bl-[10rem] sm:rounded-bl-[30rem]"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl gradient-text text-center">
            Personal Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            
            <div className="p-6 rounded-xl border border-gray-500/20 hover:-translate-y-1 hover:border-blue-500/30 transition hover:shadow-md shadow-blue-500">
              <h3 className="text-xl font-bold mb-2">Snap Summary</h3>
              <p className="text-gray-500 mb-4">
                AI-powered tool that process PDFs, text, audio, or live speech
                into concise summaries for users convenience.
              </p>
              <ul className="flex flex-wrap gap-2">
                {["React", "Express.js", "Generative AI"].map((tech, index) => (
                  <li className="tech-style" key={index}>{tech}</li>
                ))}
              </ul>
              <div className="mt-4 flex justify-end text-blue-500 hover:text-blue-300">
                <a href="#">View Project →</a>
              </div>
            </div>

            
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
