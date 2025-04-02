import { RevealOnScroll } from "./RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className=" min-h-screen flex flex-col items-center justify-center relative z-10"
    >
      <RevealOnScroll>
        <div className="text-center px-4">
          <h1 className="text-5xl md:text-7xl gradient-text">
            Hello, I'm Luan Nguyen
          </h1>
          <p className="tex-gray-400 text-lg mb-8 max-w-lg mx-auto">
            As a Computer Science student who is passoniate about web
            development, I specialize in building responsive, accessible,
            visually appealing websites with clean, efficient codes.
          </p>
        </div>
        <div className="flex justify-center space-x-4">
          <a
            href="#projects"
            className="bg-blue-500 text-white py-3 px-6 rounded transition hover:-translate-y-0.5 hover:shadow-md shadow-blue-500/50"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded transition hover:-translate-y-0.5  hover:bg-blue-500/10 hover:shadow-md shadow-blue-500/50" 
          >
            Contact Me
          </a>
        </div>
      </RevealOnScroll>
    </section>
  );
};
