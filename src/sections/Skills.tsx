import { motion } from "framer-motion";

import InfiniteMarquee from "@/components/ui/InfiniteMarquee";
import { skills } from "@/data/skills";

const Skills = () => {
  return (
    <section id="skills" className="py-24">
      <div className="mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="
            text-center
            text-5xl
            font-bold
          "
        >
          Skills
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="
            mx-auto
            mt-6
            max-w-2xl
            text-center
            text-text-muted
          "
        >
          Technologies and tools I use to build modern software.
        </motion.p>

        <div className="mt-16 space-y-6">
          <InfiniteMarquee items={skills} />

          <InfiniteMarquee items={[...skills].reverse()} reverse />
        </div>
      </div>
    </section>
  );
};

export default Skills;
