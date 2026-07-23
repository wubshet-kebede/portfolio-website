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
export const projects = [
  {
    title: "CP-Focus — Distraction Blocker",
    icon: "focus",
    image: "/cpfocus.jpg",
    accent: ["#33415c", "#9db2d9"],
    blurb:
      "A Chrome extension that blocks AI chatbots on competitive-programming sites.",
    tools: ["JavaScript", "Chrome Extension API"],
    link: "https://github.com/BytePhilosopher/CP-FOCUS",
    store:
      "https://chromewebstore.google.com/detail/cf-focus-%E2%80%94-ai-blocker-for/obkgjknggnkpboahhaeieemknmpngmpl",
  },
  {
    title: "Amharic Sentiment Analysis",
    icon: "nlp",
    accent: ["#7a4b2b", "#d9b48f"],
    blurb:
      "Classifies Amharic text sentiment — NLP for a low-resource language.",
    tools: ["Python", "Scikit-learn", "NLP", "TensorFlow"],
    link: "#",
  },
  {
    title: "Football Video Analytics",
    icon: "football",
    image: "/footballvideoanalytics.jpg",
    accent: ["#2f5d3a", "#8bb894"],
    blurb:
      "Detects, tracks, and analyzes players and the ball from real match footage.",
    tools: ["Python", "OpenCV", "YOLOv8", "ByteTrack", "Streamlit"],
    link: "https://github.com/ML-interns-aau/footballtracking",
  },
  {
    title: "Military Health Management",
    icon: "analytics",
    image: "/militaryhealthmanagament.jpg",
    accent: ["#5b3a5b", "#cfa9cf"],
    blurb:
      "A secure web-based system for managing military health records and services — streamlining medical care, appointments, and emergency response for personnel.",
    tools: ["React", "Node.js", "React Router", "MySQL"],
    link: "https://github.com/BytePhilosopher/military-management-system",
  },
];
