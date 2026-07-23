import type { Skill } from "@/data/skills";

type Props = {
  skill: Skill;
};

const SkillBadge = ({ skill }: Props) => {
  const Icon = skill.icon;

  return (
    <div
      className="
      mx-3
      flex
      shrink-0
      items-center
      gap-3
      rounded-full
      border
      border-white/10
      bg-surface
      px-6
      py-3
      transition-all
      duration-300
      hover:-translate-y-1
      hover:border-primary
      hover:bg-primary/10
      "
    >
      <Icon size={22} className="text-primary" />

      <span
        className="
        text-sm
        font-medium
        text-text
      "
      >
        {skill.name}
      </span>
    </div>
  );
};

export default SkillBadge;
