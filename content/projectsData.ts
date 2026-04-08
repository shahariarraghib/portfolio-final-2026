import { Project, Category } from "@/types/project";

export const categories: Category[] = [
  { id: 1, name: "Client" },
  { id: 2, name: "Personal" },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "Biota",
    category: "client",
    filter: "frontend",
    thumbnailUrl:
      "https://img.freepik.com/premium-photo/professional-cinema-camera-recording-commercial-studio_237404-9535.jpg",

    description:
      "Bring Rapid Diagnostic technology to wastewater testing industry to harness this data and improve the health of our communities and the environment.",
    github: "",
    githubimage: "/images/projects/github-logo.png",
    livelink: "https://www.biota-labs.com/",
    tech: [{ name: "Next.js" }, { name: "Tailwind CSS" }],
  },
  {
    id: 2,
    title: "Biota",
    category: "client",
    filter: "frontend",
    thumbnailUrl:
      "https://img.freepik.com/premium-photo/professional-cinema-camera-recording-commercial-studio_237404-9535.jpg",

    description:
      "Bring Rapid Diagnostic technology to wastewater testing industry to harness this data and improve the health of our communities and the environment.",
    github: "   ",
    livelink: "https://www.biota-labs.com/",
    tech: [{ name: "Next.js" }, { name: "Tailwind CSS" }],
  },
  {
    id: 3,
    title: "Biota",
    category: "client",
    filter: "frontend",
    thumbnailUrl:
      "https://img.freepik.com/premium-photo/professional-cinema-camera-recording-commercial-studio_237404-9535.jpg",

    description:
      "Bring Rapid Diagnostic technology to wastewater testing industry to harness this data and improve the health of our communities and the environment.",
    github: "   ",
    livelink: "https://www.biota-labs.com/",
    tech: [{ name: "Next.js" }, { name: "Tailwind CSS" }],
  },
];
