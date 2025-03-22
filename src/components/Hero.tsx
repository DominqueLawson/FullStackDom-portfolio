import heroBg from "../assets/herobg.svg";
function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen flex flex-col justify-center items-center text-center bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 text-white px-6">
        <h1 className="text-4xl font-bold">Hi, I'm Dominque Lawson</h1>
        <p className="text-lg text-gray-300 mt-2">
          Full Stack Software Engineer | AWS Cloud Engineer | Google Cybersecurity Certified
        </p>
        <div className="flex flex-row justify-evenly">
          <a
          href="#projects"
          className="mt-4 inline-block px-6 py-2 bg-purple-500 hover:bg-purple-600 text-white font-semibold rounded-lg transition duration-300 shadow-md"
        >
          View My Work
        </a>
        <a
          href="/DominqueLawson-Resume.pdf"
          download="DominqueLawson-Resume.pdf"
          className="mt-4 inline-block px-6 py-2 bg-purple-500 hover:bg-purple-600 text-white font-semibold rounded-lg transition duration-300 shadow-md"
        >
          View My Resume
        </a>
        <a
          href="https://github.com/DominqueLawson"
          className="mt-4 inline-block px-6 py-2 bg-purple-500 hover:bg-purple-600 text-white font-semibold rounded-lg transition duration-300 shadow-md"
        >
          View My Github
        </a>
        </div>
        
      </div>
    </section>
  );
}

export default Hero;
