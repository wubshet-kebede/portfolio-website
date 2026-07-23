import { motion } from "framer-motion";
import { experiences } from "@/data/experience";

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-background">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-primary uppercase tracking-[0.2em] text-sm font-semibold">
            Experience
          </p>

          <h2 className="mt-3 text-4xl font-bold text-text">
            Professional Journey
          </h2>
        </motion.div>

        <div className="relative mt-20">
          {/* vertical line */}

          <div
            className="
              absolute
              left-5
              top-0
              h-full
              w-[2px]
              bg-primary/20
            "
          />

          <div className="space-y-16">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;

              return (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.15,
                  }}
                  className="relative flex gap-8"
                >
                  {/* Icon */}

                  <div
                    className="
                      z-10
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      bg-primary
                      text-white
                    "
                  >
                    <Icon size={20} />
                  </div>

                  {/* Card */}

                  <div
                    className="
                      flex-1
                      rounded-2xl
                      border
                      border-white/10
                      bg-surface
                      p-8
                      shadow-card
                    "
                  >
                    <div
                      className="
                        flex
                        flex-col
                        justify-between
                        gap-2
                        md:flex-row
                      "
                    >
                      <div>
                        <h3
                          className="
                            text-2xl
                            font-bold
                            text-text
                          "
                        >
                          {exp.title}
                        </h3>

                        <p
                          className="
                            mt-1
                            text-primary
                          "
                        >
                          {exp.company}
                        </p>
                      </div>

                      <span
                        className="
                          text-sm
                          text-text-muted
                        "
                      >
                        {exp.period}
                      </span>
                    </div>

                    <ul
                      className="
                        mt-6
                        space-y-3
                      "
                    >
                      {exp.highlights.map((item) => (
                        <li
                          key={item}
                          className="
                            flex
                            gap-3
                            text-text-muted
                          "
                        >
                          <span className="mt-2 h-2 w-2 rounded-full bg-primary" />

                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
