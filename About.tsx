import { motion } from "framer-motion";
import { Code, Lightbulb, Shield, Users } from "lucide-react";

const highlights = [
  {
    icon: Code,
    title: "Full-Stack Developer",
    description: "Building scalable web apps with React, Node.js, and modern frameworks",
  },
  {
    icon: Shield,
    title: "Cybersecurity Enthusiast",
    description: "Passionate about ethical hacking and secure application development",
  },
  {
    icon: Lightbulb,
    title: "AI & ML Explorer",
    description: "Working with NLP, machine learning, and AI-driven solutions",
  },
  {
    icon: Users,
    title: "Team Player",
    description: "Collaborative mindset with strong communication skills",
  },
];

const About = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary text-sm font-medium tracking-wider uppercase">
              About Me
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
              Passionate about building
              <span className="text-gradient"> secure & scalable software</span>
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                I'm Bhuvana Keerthi, a B.Tech Computer Science student at VIT-AP University 
                with a deep passion for technology and software development. My journey in 
                tech is driven by the goal of creating user-focused applications that solve 
                real-world problems.
              </p>
              <p>
                With expertise spanning full-stack development, cybersecurity, and AI-driven 
                solutions, I approach every project with a security-first mindset. I believe 
                in writing clean, efficient code that is both maintainable and scalable.
              </p>
              <p>
                Currently seeking engineering internship opportunities to apply my 
                problem-solving skills and software development expertise in real-world 
                product, security, and deployment challenges.
              </p>
            </div>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
              >
                <div className="p-3 rounded-xl bg-primary/10 w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;