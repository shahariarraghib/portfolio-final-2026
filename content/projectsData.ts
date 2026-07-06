import { Project, Category } from "@/types/project";

export const categories: Category[] = [
  { id: 1, name: "Client" },
  { id: 2, name: "personal" },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "Sluiceboxai",
    category: "client",
    filter: "frontend",
    thumbnailUrl: "/images/projects/sluicbox.webp",
    description:
      "Sluicebox is on a mission to uncover the gold in electronics carbon data. Like a sluice box separates gold from gravel, we filter out the incomplete, the erroneous, and the unverifiable — so what remains is precise, verified, and defensible at every level of the supply chain.",
    livelink: "https://www.sluicebox.ai/",
    tech: [{ name: "Next.js" }, { name: "Tailwind CSS" }],
  },
  {
    id: 2,
    title: "Biota",
    category: "client",
    filter: "frontend",
    thumbnailUrl: "/images/projects/biota.webp",
    description:
      "Bring Rapid Diagnostic technology to wastewater testing industry to harness this data and improve the health of our communities and the environment.",
    livelink: "https://www.biota-labs.com/",
    tech: [{ name: "Next.js" }, { name: "Tailwind CSS" }],
  },
  {
    id: 3,
    title: "Bluesidy",
    category: "client",
    filter: "frontend",
    thumbnailUrl: "/images/projects/bluesidy.webp",
    description: "New York Real Estate Standard Operating Procedures.",
    livelink: "https://www.bluesidy.com/",
    tech: [{ name: "Next.js" }, { name: "Tailwind CSS" }],
  },
  {
    id: 4,
    title: "IOT Hub",
    category: "client",
    filter: "frontend",
    thumbnailUrl: "/images/projects/iothub.webp",

    description: "Innovate with IoT, Robotics & Software.",
    github: "https://github.com/shahariarraghib/iot-hub",
    livelink: "https://iot-hub-bd.vercel.app/",
    tech: [{ name: "Next.js" }, { name: "Tailwind CSS" }],
  },
  {
    id: 5,
    title: "e-commerce",
    category: "personal",
    filter: "mern stack",
    thumbnailUrl: "/images/projects/ecommerce_project.webp",

    description: "Innovate with IoT, Robotics & Software.",
    github: "https://github.com/shahariarraghib/ecommerce-website",
    livelink: "https://ecommerce-website-peach-one.vercel.app/",
    tech: [
      { name: "React.js" },
      { name: "Node.js" },
      { name: "MongoDB" },
      { name: "bootstrap" },
    ],
  },
  {
    id: 6,
    title: "Fashion House",
    category: "personal",
    filter: "mern stack",
    thumbnailUrl: "/images/projects/fashionhouse.webp",

    description:
      "This is an e-commerce website where a buyer can purchase a product and a seller can manage inventory.",
    github:
      "https://github.com/shahariarraghib/fashion-house-server-side-node-js-MVC",
    livelink: "https://fashion-house-client-side-nextjs.vercel.app/",
    tech: [
      { name: "Node.js" },
      { name: "Next.Js" },
      { name: "Redux" },
      { name: "MongoDB" },
      { name: "multer" },
      { name: "jwt" },
      { name: "Tailwind CSS" },
    ],
  },
  {
    id: 7,
    title: "Doctor Portal",
    category: "personal",
    filter: "mern stack",
    thumbnailUrl: "/images/projects/doctorportal_project.webp",

    description:
      "Doctor Portal is a medical website where a patient can make an appointment.",
    github: "https://github.com/shahariarraghib/doctor-portal-client",
    livelink: "https://doctor-portal-client-844f5.web.app/",
    tech: [
      { name: "React.js" },
      { name: "ExpressJS" },
      { name: "MongoDB" },
      { name: "Material UI" },
      { name: "Firebase" },
    ],
  },
  {
    id: 8,
    title: "Tech Blog",
    category: "personal",
    filter: "frontend",
    thumbnailUrl: "/images/projects/techblog_project.webp",

    description:
      "This is a tech blogging website, where users keep updated with Tech.",
    github: "https://github.com/shahariarraghib/tech-blog-template",
    livelink: "https://tech-blog-template-ten.vercel.app/",
    tech: [{ name: "Next.js" }, { name: "Tailwind CSS" }],
  },
];
