export interface SeoItemType {
  title: string;
  description: string;
  image: string;
  siteUrl: string;
  keywords: string[];
}
export interface SeoContent {
  baseSeo: SeoItemType;
}
export const SeoContent: SeoContent = {
  baseSeo: {
    title: "Shahariar Bhuiyan | Full Stack Web Developer",
    description:
      "I’m a full-stack developer building fast, scalable, and user-focused digital experiences. I specialize in React.js and Next.js and craft clean, responsive interfaces with TailwindCSS, Bootstrap, and Material UI. On the backend, I use Node.js, ExpressJS, MongoDB to develop efficient applications. I enjoy turning ideas into products while exploring new technologies.",
    image: "/images/shahariar-bhuiyan.png",
    siteUrl: `${process.env.NEXT_PUBLIC_SITE_URL}/`,
    keywords: [
      "frontend developer",
      "web developer",
      "website developer",
      "mern stack developer",
      "full stack web developer",
      "next.js",
      "react.js",
      "javaScript",
      "tailwindCSS",
      "node.js",
      "mongoDB",
      "e-commerce website developer",
      "landing page",
      "business website",
      "portfolio website",
      "portfolio website",
    ],
  },
};
