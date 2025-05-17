import { RevealOnScroll } from "./RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className=" min-h-screen flex flex-col items-center justify-center relative z-10 mt-16"
    >
      <RevealOnScroll>
        <div className="text-center px-4">
          <h1 className="text-5xl md:text-7xl gradient-text">
            Hello, I'm Luan Nguyen
          </h1>
          <p className="text-lg mb-8 text-center w-2/3 mx-auto">
            Computer Science undergraduate with passion in website development. I specialize in building responsive, accessible,
            visually appealing websites with clean, efficient codes.
          </p>
        </div>
        <div className="flex justify-center space-x-4">
          <a
            href="#projects"
            className="bg-blue-700 text-white py-3 px-6 rounded transition hover:-translate-y-0.5 hover:shadow-md shadow-blue-600/50"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="border border-blue-600/50 text-blue-600 py-3 px-6 rounded transition hover:-translate-y-0.5  hover:bg-blue-600/10 hover:shadow-md shadow-blue-600/50" 
          >
            Contact Me
          </a>
        </div>
      </RevealOnScroll>
    </section>
  );
};
