function Experience() {
  const experiences = [
    {
      company: "Amazon Prime Video & Amazon Studios",
      role: "Software Development Engineer",
      highlight:
        "Worked on metadata and data processing services powering live and on-demand video experiences for millions of customers.",
      details: [
        "Built and maintained backend services using AWS, Java, and microservice architectures.",
        "Improved reliability and observability with logging, metrics, and test coverage across critical workflows.",
        "Collaborated with cross-functional teams to deliver features from design to production with an emphasis on security and scalability.",
      ],
    },
    {
      company: "Cedarware Corporation",
      role: "Software Engineer",
      highlight:
        "Developed cross-platform, device-connected applications with cloud-backed dashboards and rich user interfaces.",
      details: [
        "Built responsive frontends and dashboards, focusing on usability and real-time device interaction.",
        "Implemented AWS-based infrastructure and CI/CD workflows for consistent, repeatable deployments.",
        "Partnered with product and stakeholders to translate requirements into shippable features.",
      ],
    },
    {
      company: "Interrogas",
      role: "Full Stack Software Engineer",
      highlight:
        "Delivered full stack web applications for internal tools and customer-facing products.",
      details: [
        "Developed RESTful APIs and frontends using modern JavaScript frameworks and cloud services.",
        "Optimized application performance and reliability through iterative refactoring and monitoring.",
        "Collaborated directly with clients to gather feedback and continuously improve solutions.",
      ],
    },
    {
      company: "U.S. Navy",
      role: "Veteran",
      highlight:
        "Served as an Avionics Engineer, Career Counselor, and Supervisor in the U.S. Navy — blending technical precision with leadership and mentorship across large-scale operations.",
      details: [
        "Diagnosed and repaired complex electronic systems by reading schematics and tracing signal paths down to the component level.",
        "Supervised and managed workshops of 20–30 personnel, coordinating production schedules, addressing backlogs, and leading daily operational meetings.",
        "Led career development programs for over 600 service members, guiding professional growth, retention, and administrative processes with accuracy and care.",
        "Built a leadership style rooted in accountability, clear communication, and mission-focused execution — skills that now shape my engineering and team collaboration approach.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 text-center">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold">Experience</h2>
        <p className="mt-4 text-gray-400 text-lg">
          From serving in the U.S. Navy to building production systems at Amazon and beyond, I bring a mix of
          discipline, curiosity, and execution to every team I join.
        </p>

        <div className="mt-10 space-y-6 text-left">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group relative p-6 bg-gray-900/80 rounded-xl border border-gray-800 shadow-lg
                         transform transition duration-300 hover:-translate-y-1 hover:border-purple-500/70"
            >
              <h3 className="text-xl font-semibold text-white group-hover:text-purple-300">
                {exp.role}
              </h3>
              <p className="text-sm text-purple-300 mt-1">{exp.company}</p>
              <p className="mt-3 text-sm text-gray-200 leading-relaxed">{exp.highlight}</p>
              <ul className="mt-3 space-y-2 text-sm text-gray-300 leading-relaxed list-disc list-inside">
                {exp.details.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
