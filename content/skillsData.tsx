import { skills } from "@/types/skills";
import {
  FaReact,
  FaNode,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaGithub,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiMongodb,
  SiJavascript,
  SiExpress,
  SiRedux,
  SiTailwindcss,
  SiPostman,
  SiFirebase,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
const skillsData: skills[] = [
  {
    name: "nextjs",
    Icon: SiNextdotjs,
  },
  {
    name: "React",
    Icon: FaReact,
  },
  {
    name: "Node",
    Icon: FaNode,
  },
  {
    name: "expressjs",
    Icon: SiExpress,
  },
  {
    name: "mongodb",
    Icon: SiMongodb,
  },
  {
    name: "javascript",
    Icon: SiJavascript,
  },
  {
    name: "html5",
    Icon: FaHtml5,
  },
  {
    name: "css3",
    Icon: FaCss3Alt,
  },
  {
    name: "redux",
    Icon: SiRedux,
  },
  {
    name: "Tailwindcss",
    Icon: SiTailwindcss,
  },
  {
    name: "Bootstrap",
    Icon: FaBootstrap,
  },
  {
    name: "GitHub",
    Icon: FaGithub,
  },
  {
    name: "Postman",
    Icon: SiPostman,
  },
  {
    name: "Firebase",
    Icon: SiFirebase,
  },
  {
    name: "typescript",
    Icon: SiTypescript,
  },
  {
    name: "Vercel",
    Icon: SiVercel,
  },
];

export default skillsData;
