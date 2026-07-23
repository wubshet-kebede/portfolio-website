export type ProjectIcon = "football" | "nlp" | "focus" | "analytics";

export interface Project {
  title: string;
  icon: ProjectIcon;
  image?: string;
  accent: [string, string];
  blurb: string;
  tools: string[];
  link: string;
  store?: string;
}

export const projects: Project[] = [
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
      "A secure web-based system for managing military health records and services—streamlining medical care, appointments, and emergency response for personnel.",
    tools: ["React", "Node.js", "React Router", "MySQL"],
    link: "https://github.com/BytePhilosopher/military-management-system",
  },
];
