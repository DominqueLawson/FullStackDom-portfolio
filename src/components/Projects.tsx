function Projects() {
  const projects = [
    {
      name: "Defilights",
      role: "Founder • Full Stack Engineer",
      description:
        "Airport food delivery experience with gated onboarding, real-time survey flows, and a cloud-native backend built on AWS Amplify Gen2.",
      tech: ["Flutter", "Riverpod", "AWS Amplify", "AppSync", "DynamoDB"],
      linkLabel: "View Case Study",
      link: "/defilights", 
    },
    {
      name: "Zero Day Associates",
      role: "Web Developer • Designer",
      description:
        "Designed and developed a professional website for Zero Day Associates, a cybersecurity consulting firm. Delivered a modern, responsive web presence focused on clarity, credibility, and conversion.",
      tech: ["React", "TypeScript", "TailwindCSS", "AWS Hosting"],
      linkLabel: "Visit Website",
      link: "https://zerodayassociates.com",
    },
    {
      name: "Zapbill",
      role: "Creator • SaaS Builder",
      description:
        "Simple invoice generator for creatives and small businesses, offering branded PDFs, quick client setup, and serverless infrastructure.",
      tech: ["React", "TypeScript", "Netlify", "Serverless", "Stripe (planned)"],
      linkLabel: "View Project",
      link: "zapbill.app",
    },
  ];

  return (
    <section id="projects" className="py-20 text-center">
      <h2 className="text-4xl font-bold">Projects</h2>
      <p className="mt-4 max-w-2xl mx-auto text-gray-400 text-lg">
        A selection of products and tools I’ve built — from airport food delivery to predictive inventory and
        invoicing SaaS — focused on real users, reliability, and cloud-native architecture.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-10">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            className="group relative p-6 bg-gray-900/80 rounded-xl shadow-lg border border-gray-800 
                       hover:border-purple-500/70 hover:-translate-y-1 transform transition duration-300 text-left"
          >
            <h3 className="text-xl font-semibold text-white group-hover:text-purple-300">
              {project.name}
            </h3>
            <p className="text-sm text-purple-300 mt-1">{project.role}</p>
            <p className="text-gray-300 mt-3 text-sm leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-4">
              {project.tech.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1 rounded-full bg-gray-800 text-gray-200 border border-gray-700"
                >
                  {tag}
                </span>
              ))}
            </div>

            <span className="inline-flex items-center text-sm font-semibold text-purple-300 mt-5 group-hover:underline">
              {project.linkLabel}
              <span className="ml-1 group-hover:translate-x-0.5 transform transition">↗</span>
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Projects;
