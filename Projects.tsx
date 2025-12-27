import { motion } from "framer-motion";
import { ExternalLink, Github, Folder } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Portfolio Critique Exchange Platform",
    description:
      "A web application that enables developers and designers to anonymously exchange portfolio reviews. Features include anonymous feedback submission, rating system, and community-driven critiques.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    outcome: "Enables designers and developers to receive honest, constructive feedback",
    github: "https://github.com/bhuvanakeerthi",
    live: "#",
  },
  {
    title: "Leave Management System",
    description:
      "A comprehensive web application to automate leave applications, approvals, and tracking. Features role-based access control, email notifications, and admin dashboard for HR management.",
    technologies: ["React.js", "Node.js", "PostgreSQL", "Express"],
    outcome: "Streamlined leave management workflow for organizations",
    github: "https://github.com/bhuvanakeerthi",
    live: "#",
  },
  {
    title: "Footprinting (Email & Website)",
    description:
      "Conducted ethical footprinting and reconnaissance using industry-standard security tools. Gathered OSINT on domains, DNS records, and email infrastructures for security assessment.",
    technologies: ["Nmap", "Maltego", "Hydra", "Zphisher", "YARA"],
    outcome: "Demonstrated ethical hacking skills and security awareness",
    github: "https://github.com/bhuvanakeerthi",
    live: "#",
  },
  {
    title: "Simple Chatbot (Python)",
    description:
      "Built a rule-based chatbot using Python with keyword matching and a predefined knowledge base. Handles basic user queries with intelligent response matching.",
    technologies: ["Python", "NLP", "Regex", "JSON"],
    outcome: "Foundation for understanding conversational AI systems",
    github: "https://github.com/bhuvanakeerthi",
    live: "#",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            My Work
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A selection of projects that showcase my problem-solving abilities
            and technical expertise across full-stack and security domains.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={item}
              className="group relative rounded-2xl bg-card border border-border overflow-hidden hover:border-primary/30 transition-all duration-500"
            >
              {/* Top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="p-8">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="p-3 rounded-xl bg-primary/10">
                    <Folder className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg hover:bg-secondary transition-colors"
                    >
                      <Github className="h-5 w-5 text-muted-foreground hover:text-foreground" />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg hover:bg-secondary transition-colors"
                    >
                      <ExternalLink className="h-5 w-5 text-muted-foreground hover:text-foreground" />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Outcome */}
                <div className="mb-6 p-3 rounded-lg bg-primary/5 border border-primary/10">
                  <p className="text-sm text-primary font-medium">
                    ✨ {project.outcome}
                  </p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View more button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg" asChild>
            <a href="https://github.com/bhuvanakeerthi" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              View More on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;