import { motion } from "framer-motion";
import { Code2, Database, GitBranch, Layout, Shield, Brain } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code2,
    skills: ["Python", "Java", "C", "C++"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Web Technologies",
    icon: Layout,
    skills: ["HTML", "CSS", "JavaScript", "React.js"],
    color: "from-orange-500 to-yellow-500",
  },
  {
    title: "AI & Machine Learning",
    icon: Brain,
    skills: ["Artificial Intelligence", "NLP", "Machine Learning", "Prompt Engineering"],
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Cybersecurity",
    icon: Shield,
    skills: ["Ethical Hacking", "OSINT", "Network Security", "Penetration Testing"],
    color: "from-emerald-500 to-teal-500",
  },
  {
    title: "Development Tools",
    icon: GitBranch,
    skills: ["Git", "Node.js", "PostgreSQL", "Express.js"],
    color: "from-rose-500 to-red-500",
  },
  {
    title: "Core Concepts",
    icon: Database,
    skills: ["Operating Systems", "Computer Networking", "UI/UX Design", "Problem-Solving"],
    color: "from-indigo-500 to-violet-500",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            What I Know
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Skills & Technologies
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A comprehensive toolkit built through academic coursework, certifications, 
            and hands-on project experience.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={item}
              className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
            >
              {/* Gradient background on hover */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              />
              
              <div className="relative z-10">
                <div
                  className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${category.color} mb-4`}
                >
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                
                <h3 className="text-lg font-semibold mb-4">{category.title}</h3>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm rounded-lg bg-secondary text-secondary-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;