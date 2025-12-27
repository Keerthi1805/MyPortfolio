import { motion } from "framer-motion";
import { Trophy, Medal, Award, Star, CheckCircle, Cloud } from "lucide-react";

const achievements = [
  {
    icon: Cloud,
    title: "AWS Internship",
    description: "Amazon Web Services Internship at NSIC Technical Services Centre",
    category: "Experience",
    color: "from-orange-500 to-yellow-500",
  },
  {
    icon: Medal,
    title: "Cyber Security & Ethical Hacking",
    description: "Credit Course certification from Blackbucks Education",
    category: "Certification",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: Award,
    title: "C Programming Certification",
    description: "Training certification from NSIC Technical Services Centre",
    category: "Certification",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Trophy,
    title: "Goldman Sachs Job Simulation",
    description: "Software Engineering Virtual Experience Program via Forage",
    category: "Experience",
    color: "from-purple-500 to-violet-500",
  },
  {
    icon: Star,
    title: "Wadhwani Foundation IGNITE 3.4",
    description: "Entrepreneurship and innovation program completion",
    category: "Achievement",
    color: "from-rose-500 to-pink-500",
  },
  {
    icon: CheckCircle,
    title: "Full Stack Web Development",
    description: "Comprehensive web development course certification from Udemy",
    category: "Certification",
    color: "from-indigo-500 to-blue-500",
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
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 },
};

const Achievements = () => {
  return (
    <section id="achievements" className="section-padding bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            Recognition
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Achievements & Certifications
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A collection of certifications, internships, and achievements that reflect 
            my commitment to continuous learning and professional growth.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block" />

            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  variants={item}
                  className="relative flex gap-6 group"
                >
                  {/* Timeline dot */}
                  <div className="hidden md:flex items-start pt-2">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${achievement.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <achievement.icon className="h-7 w-7 text-white" />
                    </div>
                  </div>

                  {/* Content card */}
                  <div className="flex-1 p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                      <div className="flex items-center gap-3 md:hidden">
                        <div
                          className={`w-10 h-10 rounded-xl bg-gradient-to-br ${achievement.color} flex items-center justify-center`}
                        >
                          <achievement.icon className="h-5 w-5 text-white" />
                        </div>
                      </div>
                      <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
                        {achievement.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{achievement.title}</h3>
                    <p className="text-muted-foreground">{achievement.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;