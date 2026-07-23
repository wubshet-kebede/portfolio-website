import { motion } from "framer-motion";

import type { Skill } from "@/data/skills";
import SkillBadge from "./SkillBadge";

type Props = {
  items: Skill[];
  reverse?: boolean;
};

const InfiniteMarquee = ({ items, reverse = false }: Props) => {
  const duplicated = [...items, ...items];

  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex w-max"
        animate={{
          x: reverse ? ["-50%", "0%"] : ["0%", "-50%"],
        }}
        transition={{
          duration: 28,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {duplicated.map((skill, index) => (
          <SkillBadge key={index} skill={skill} />
        ))}
      </motion.div>
    </div>
  );
};

export default InfiniteMarquee;
