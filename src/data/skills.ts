import {
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiNuxt,
  SiNestjs,
  SiJavascript,
  SiTypescript,
  SiGo,
  SiPython,
  SiOpenjdk,
  SiTailwindcss,
  SiDocker,
  SiGit,
  SiGithub,
  SiGraphql,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiPrisma,
  SiMongoose,
  SiSupabase,
  SiFirebase,
  SiPostman,
  SiJest,
  SiVitest,
  SiEslint,
  SiPrettier,
  SiRos,
  SiOpencv,
} from "react-icons/si";

import { TbApi, TbPlugConnected, TbBrandSocketIo } from "react-icons/tb";

import type { IconType } from "react-icons";

export interface Skill {
  name: string;
  icon: IconType;
}

export const skills: Skill[] = [
  // Frontend
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Vue.js", icon: SiVuedotjs },
  { name: "Nuxt.js", icon: SiNuxt },
  { name: "Tailwind CSS", icon: SiTailwindcss },

  // Languages
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Golang", icon: SiGo },
  { name: "Python", icon: SiPython },
  { name: "Java", icon: SiOpenjdk },

  // Backend
  { name: "NestJS", icon: SiNestjs },
  { name: "REST APIs", icon: TbApi },
  { name: "GraphQL", icon: SiGraphql },
  { name: "WebSockets", icon: TbPlugConnected },
  { name: "Socket.IO", icon: TbBrandSocketIo },
  { name: "tRPC", icon: TbApi },

  // Databases
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Redis", icon: SiRedis },
  { name: "Prisma ORM", icon: SiPrisma },
  { name: "Mongoose", icon: SiMongoose },
  { name: "Supabase", icon: SiSupabase },
  { name: "Firebase", icon: SiFirebase },

  // Tools
  { name: "Docker", icon: SiDocker },
  { name: "Git", icon: SiGit },
  { name: "GitHub", icon: SiGithub },
  { name: "Postman", icon: SiPostman },
  { name: "Jest", icon: SiJest },
  { name: "Vitest", icon: SiVitest },
  { name: "ESLint", icon: SiEslint },
  { name: "Prettier", icon: SiPrettier },

  // Robotics / Computer Engineering
  { name: "ROS 2", icon: SiRos },

  { name: "OpenCV", icon: SiOpencv },
];
