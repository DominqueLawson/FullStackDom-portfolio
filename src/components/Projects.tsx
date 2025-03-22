function Projects() {
  const projects = [
    { name: "Project 1", description: "Built with React & AWS", link: "#" },
    { name: "Project 2", description: "Full-stack web app", link: "#" },
    { name: "Project 3", description: "Security-focused app", link: "#" },
  ];

  return (
    <section id="projects" className="py-20 text-center">
      <h2 className="text-3xl font-bold">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-6">
        {projects.map((project, index) => (
          <a key={index} href={project.link} className="p-4 bg-gray-800 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">{project.name}</h3>
            <p className="text-gray-400">{project.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Projects;
