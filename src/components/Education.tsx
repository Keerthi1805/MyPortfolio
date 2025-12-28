import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, BookOpen } from "lucide-react";

const educationData = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    field: "Computer Science",
    institution: "VIT-AP University",
    period: "Sep 2023 – Jul 2027",
    current: true,
  },
  {
    degree: "Intermediate Education",
    field: "MPC Stream",
    institution: "FIITJEE Junior College",
    period: "June 2021 – Jul 2023",
    current: false,
  },
  {
    degree: "10th Grade (Secondary Education)",
    field: "Secondary School",
    institution: "Sri Chaitanya High School",
    period: "Mar 2021",
    current: false,
  },
];

const Education = () => {
  return (
    <section id="education" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            Academic Background
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Education
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-6">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="relative p-6 md:p-8 rounded-2xl bg-card border border-border overflow-hidden"
            >
              {/* Gradient accent for current education */}
              {edu.current && (
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-purple-500 to-pink-500" />
              )}
              
              <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
                {/* Icon */}
                <div className={`p-3 md:p-4 rounded-2xl self-start ${edu.current ? 'bg-primary/10' : 'bg-secondary'}`}>
                  <GraduationCap className={`h-6 w-6 md:h-8 md:w-8 ${edu.current ? 'text-primary' : 'text-muted-foreground'}`} />
                </div>

                <div className="flex-1">
                  {/* Degree */}
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <h3 className="text-xl font-bold">
                      {edu.degree}
                    </h3>
                    {edu.current && (
                      <span className="px-2 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
                        Current
                      </span>
                    )}
                  </div>
                  
                  <p className="text-lg text-primary font-medium mb-3">
                    {edu.field}
                  </p>

                  {/* Details */}
                  <div className="flex flex-wrap gap-4 text-muted-foreground text-sm">
                    <div className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4" />
                      <span>{edu.institution}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{edu.period}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Relevant coursework */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-3xl mx-auto mt-8 p-6 md:p-8 rounded-2xl bg-card border border-border"
        >
          <h4 className="text-sm font-medium text-muted-foreground mb-4">
            RELEVANT COURSEWORK
          </h4>
          <div className="flex flex-wrap gap-2">
            {[
              "Data Structures & Algorithms",
              "Object-Oriented Programming",
              "Computer Networks",
              "Operating Systems",
              "Artificial Intelligence",
              "Machine Learning",
              "Natural Language Processing",
              "Cybersecurity",
            ].map((course) => (
              <span
                key={course}
                className="px-3 py-1.5 text-sm rounded-lg bg-secondary text-secondary-foreground"
              >
                {course}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;