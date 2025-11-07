import heroBg from "../assets/herobg.svg";

function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen flex flex-col justify-center items-center text-center bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 text-white px-6 max-w-3xl">
        <p className="text-sm uppercase tracking-[0.2em] text-purple-300 mb-3">
          FullStackDom • Software Engineer
        </p>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          I build secure, cloud-native products that ship to production.
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mt-4 leading-relaxed">
          I’m <span className="font-semibold">Dominque D. Lawson</span>, a U.S. Navy Veteran and{" "}
          <span className="font-semibold">Full Stack Software Engineer</span> with experience at{" "}
          <span className="text-purple-300">Amazon Prime Video</span> and{" "}
          <span className="text-purple-300">Cedarware Corp</span>, focused on React, AWS, and application security.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row sm:justify-center gap-4">
          <a
            href="#projects"
            className="px-8 py-3 bg-purple-500 hover:bg-purple-600 text-white font-semibold rounded-lg transition duration-300 shadow-md"
          >
            View My Work
          </a>
          <a
            href="/DominqueLawson-Resume.pdf"
            download="DominqueLawson-Resume.pdf"
            className="px-8 py-3 border border-purple-400/80 hover:bg-purple-500/10 text-gray-200 font-semibold rounded-lg transition duration-300"
          >
            Download Resume
          </a>
          <a
            href="https://github.com/DominqueLawson"
            className="px-8 py-3 border border-gray-600 hover:border-purple-400 hover:bg-purple-500/5 text-gray-300 font-medium rounded-lg transition duration-300"
          >
            GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;