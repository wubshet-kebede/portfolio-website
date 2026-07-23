import { motion } from "framer-motion";
import { Code2, Cpu, Database, Lightbulb } from "lucide-react";

const expertise = [
  {
    title: "Software Engineering",
    description:
      "Building clean, maintainable, and scalable applications using modern software engineering principles.",
    icon: Code2,
  },
  {
    title: "Computer Engineering",
    description:
      "Strong foundation in computer architecture, digital systems, and the interaction between hardware and software.",
    icon: Cpu,
  },
  {
    title: "Backend & Systems",
    description:
      "Interested in designing reliable backend services, APIs, databases, and system architectures.",
    icon: Database,
  },
  {
    title: "Problem Solving",
    description:
      "Enjoy solving complex engineering problems through continuous learning, analysis, and practical implementation.",
    icon: Lightbulb,
  },
];

const About = () => {
  return (
    <section id="about" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
            About Me
          </p>

          <h2 className="mt-3 text-4xl font-bold text-text md:text-5xl">
            Building software with an engineering mindset.
          </h2>
        </motion.div>

        {/* About Content */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="mt-10 max-w-4xl space-y-6 text-lg leading-8 text-text-muted"
        >
          <p>
            I'm a{" "}
            <span className="font-semibold text-text">
              Computer Engineering graduate
            </span>{" "}
            passionate about designing and developing reliable software that
            solves real-world problems. My background combines software
            development with a solid understanding of computer systems and
            hardware, allowing me to approach challenges from a broader
            engineering perspective.
          </p>

          <p>
            My primary focus is software engineering, where I enjoy building
            modern web applications, backend services, and scalable systems
            using clean architecture and best practices. At the same time, my
            engineering foundation enables me to understand how software
            interacts with the hardware beneath it.
          </p>

          <p>
            I believe great software is more than writing code—it's about
            understanding systems, solving meaningful problems, and continuously
            learning to build solutions that are efficient, maintainable, and
            impactful.
          </p>
        </motion.div>

        {/* Expertise Cards */}
        <div className="mt-20 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {expertise.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.15,
                  duration: 0.5,
                }}
                className="group rounded-2xl border border-white/10 bg-surface p-6 transition-all duration-300 hover:-translate-y-2 hover:border-primary/50 hover:shadow-xl
                "
              >
                <div className="flex h-14 w-14 items-center justify-center  rounded-xl  bg-primary/10  text-primary  transition group-hover:bg-primary group-hover:text-white">
                  <Icon size={28} />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-text">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-text-muted">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
