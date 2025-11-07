function Contact() {
  return (
    <section id="contact" className="py-20 text-center bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-white">Let’s Connect</h2>
        <p className="text-gray-400 text-lg mt-4 leading-relaxed">
          Whether you’re a recruiter, collaborator, or fellow engineer — I’d love to connect. 
          Let’s talk about building secure, scalable products or mentoring the next generation of technologists.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-6">
          <a
            href="mailto:domlawson.dev@gmail.com"
            className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg shadow-md transition duration-300"
          >
            Send Me an Email
          </a>

          <a
            href="https://www.linkedin.com/in/dominque-fullstack/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-purple-500 hover:bg-purple-500/10 text-gray-200 font-semibold rounded-lg transition duration-300"
          >
            Connect on LinkedIn
          </a>
        </div>

        <p className="text-sm text-gray-500 mt-10">
          © {new Date().getFullYear()} Dominque D. Lawson — FullStackDom. All rights reserved.
        </p>
      </div>
    </section>
  );
}

export default Contact;
