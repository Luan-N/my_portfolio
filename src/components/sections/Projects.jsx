import { RevealOnScroll } from "./RevealOnScroll";
import pcLinkerImg from "../../../public/pc-linker.png";

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
          <div className="grid grid-cols-1 gap-6 text-left">

            <div id="pc-linker" className="flex flex-row p-6 rounded-lg border border-gray-500/20 hover:-translate-y-1 hover:border-gray-500/50 transition hover:shadow-md shadow-gray-500/50">
              <img
                src={pcLinkerImg}
                alt="PC Linker Project Screenshot"
                className="w-60 h-full object-cover rounded-t-lg mb-4"
              />
              <div className="ml-4 flex-1">
                <h3 className="text-xl font-bold mb-2">PC Linker</h3>
              <p className="mb-4">
                A web application that allows users to browse pc components and recommended builds. A compatibility checker ensures that selected components work together, powered by Gemini API. Users can also bookmark their favorite components and builds.
              </p>
              <ul className="flex flex-wrap gap-2">
                {["Next.js", "Tailwind CSS", "Firebase Firestore", "Gemini API"].map((tech, index) => (
                  <li className="tech-style" key={index}>{tech}</li>
                ))}
              </ul>
              <div className="mt-4 flex justify-end text-blue-600 hover:text-blue-300">
                <a href="https://pc-linker.vercel.app/" target="_blank" rel="noopener noreferrer" aria-describedby="pc-linker">View Project →</a>
              </div>

              </div>
              
            </div>

            
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
