import { motion } from "framer-motion";

import { skillCategories } from "@/data/skills";

const Skills = () => {
  return (
    <section id="skills" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
            Skills
          </p>

          <h2 className="mt-3 text-4xl font-bold text-text md:text-5xl">
            Technologies I Work With
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-text-muted">
            A collection of technologies, tools, and frameworks I use to design,
            develop, test, and deploy modern software applications.
          </p>
        </motion.div>

        {/* Categories */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-2xl border border-white/10 bg-surface p-8 shadow-card"
            >
              <h3 className="text-2xl font-semibold text-text">
                {category.title}
              </h3>

              <div className="mt-6 flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="
                      rounded-full
                      border
                      border-primary/20
                      bg-primary/10
                      px-4
                      py-2
                      text-sm
                      font-medium
                      text-primary
                      transition
                      hover:border-primary
                      hover:bg-primary
                      hover:text-white
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
