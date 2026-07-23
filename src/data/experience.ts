import { Briefcase, Bot, Building2, GraduationCap } from "lucide-react";

export const experiences = [
  {
    title: "RoboCare",
    company: "Final Year Computer Engineering Thesis",
    period: "Mar 2026 – Jun 2026",
    icon: GraduationCap,
    highlights: [
      "Engineered a full-stack healthcare platform using Nuxt 4, Golang, and PostgreSQL.",
      "Integrated MQTT, WebSockets, JWT authentication, and WebRTC telepresence.",
      "Developed autonomous navigation using ROS 2 Jazzy, Nav2, and SLAM Toolbox.",
      "Built and tested robotic workflows in Gazebo Harmonic.",
      "Deployed production services using Vercel and Render.",
    ],
  },

  {
    title: "AI Trainer",
    company: "Postwork Platform",
    period: "Apr 2026 – May 2026",
    icon: Bot,
    highlights: [
      "Created software workflow demonstrations for AI model training.",
      "Produced high-quality recordings following strict project guidelines.",
    ],
  },

  {
    title: "Full-Stack SaaS Developer",
    company: "Microloan Platform (Team Project)",
    period: "Sep 2025 – 2026",
    icon: Briefcase,
    highlights: [
      "Developed a React frontend with a Golang backend.",
      "Designed REST APIs and loan management modules.",
      "Collaborated within a development team using Git workflows.",
    ],
  },

  {
    title: "Full-Stack Developer Intern",
    company: "Minab IT Solution",
    period: "May 2025 – Sep 2025",
    icon: Building2,
    highlights: [
      "Developed responsive frontend interfaces.",
      "Integrated GraphQL APIs with Hasura.",
      "Connected frontend applications to backend services.",
      "Collaborated with engineers to deliver new features.",
    ],
  },
];
