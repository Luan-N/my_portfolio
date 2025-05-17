import { RevealOnScroll } from "./RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20 bg-gray-50 dark:bg-[#181818] rounded-bl-[10rem] sm:rounded-bl-[20em]"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl gradient-text text-center underline">
            Personal Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            
            <div id="snap-summary" className="p-6 rounded-lg border border-gray-500/20 hover:-translate-y-1 hover:border-gray-500/50 transition hover:shadow-md shadow-gray-500/50">
              <h3 className="text-xl font-bold mb-2">Snap Summary</h3>
              <p className="mb-4">
                AI-powered tool that can process PDFs, text, audio, or live speech
                into concise summaries.
              </p>
              <ul className="flex flex-wrap gap-2">
                {["React", "Express.js"].map((tech, index) => (
                  <li className="tech-style" key={index}>{tech}</li>
                ))}
              </ul>
              <div className="mt-4 flex justify-end text-blue-600 hover:text-blue-300">
                <a href="#" aria-describedby="snap-summary">View Project →</a>
              </div>
            </div>

            
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
