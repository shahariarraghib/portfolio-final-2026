"use client";
import { useState, useRef, useEffect, useCallback, useMemo } from "react";
import { categories, projects } from "@/content/projectsData";
import { Project, Category } from "@/types/project";
import {
  motion,
  AnimatePresence,
  useInView,
  Variants,
  Transition,
} from "framer-motion";
import { X, Share2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface AnimationVariants extends Variants {
  hidden: {
    opacity: number;
    y?: number;
    scale?: number;
    width?: number | string;
  };
  visible: {
    opacity: number;
    y?: number;
    scale?: number;
    width?: number | string;
    transition: Transition;
  };
}

const useScrollAnimation = () => {
  const containerAnimation: AnimationVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemAnimation: AnimationVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return { containerAnimation, itemAnimation };
};

const ProjectShowcase: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [category, setCategory] = useState<string>("all");
  const [imageError, setImageError] = useState<{ [key: number]: boolean }>({});
  const [currentProjectIndex, setCurrentProjectIndex] = useState<number>(0);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isSearchActive, setIsSearchActive] = useState<boolean>(false);

  const ref = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const { containerAnimation, itemAnimation } = useScrollAnimation();

  const categoryOptions = [
    "all",
    ...categories.map((cat) => cat.name.toLowerCase()),
  ];

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        category === "all" || project.category === category;
      const matchesSearch =
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [category, searchTerm]);

  const openProject = useCallback(
    (project: Project) => {
      const projectIndex = filteredProjects.findIndex(
        (p) => p.id === project.id,
      );
      setCurrentProjectIndex(projectIndex);
      setSelectedProject(project);
      setIsPlaying(false);
      document.body.style.overflow = "hidden";
    },
    [filteredProjects],
  );

  const closeProject = useCallback(() => {
    setSelectedProject(null);
    setIsPlaying(false);
    setIsFullscreen(false);
    document.body.style.overflow = "auto";
  }, []);

  const navigateProject = useCallback(
    (direction: "next" | "prev") => {
      const newIndex =
        direction === "next"
          ? (currentProjectIndex + 1) % filteredProjects.length
          : (currentProjectIndex - 1 + filteredProjects.length) %
            filteredProjects.length;

      setCurrentProjectIndex(newIndex);
      setSelectedProject(filteredProjects[newIndex]);
      setIsPlaying(false);
    },
    [currentProjectIndex, filteredProjects],
  );

  const toggleFullscreen = useCallback(() => {
    setIsFullscreen((prev) => !prev);
  }, []);

  const handleShare = useCallback(async () => {
    if (navigator.share && selectedProject) {
      try {
        await navigator.share({
          title: selectedProject.title,
          text: selectedProject.description,
          url: window.location.href,
        });
      } catch {
        navigator.clipboard.writeText(window.location.href);
      }
    }
  }, [selectedProject]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedProject) {
        if (e.key === "/" && !isSearchActive) {
          e.preventDefault();
          setIsSearchActive(true);
          setTimeout(() => searchInputRef.current?.focus(), 100);
        }
        return;
      }
      switch (e.key) {
        case "Escape":
          closeProject();
          break;
        case "ArrowLeft":
          e.preventDefault();
          navigateProject("prev");
          break;
        case "ArrowRight":
          e.preventDefault();
          navigateProject("next");
          break;
        case " ":
          e.preventDefault();
          if (!isPlaying) {
            setIsPlaying(true);
          }
          break;
        case "f":
        case "F":
          e.preventDefault();
          toggleFullscreen();
          break;
        case "s":
        case "S":
          e.preventDefault();
          handleShare();
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [
    selectedProject,
    isPlaying,
    navigateProject,
    closeProject,
    handleShare,
    toggleFullscreen,
    isSearchActive,
  ]);

  const handleImageError = (id: number) => {
    setImageError((prev) => ({ ...prev, [id]: true }));
  };

  const buttonHoverAnimation = {
    scale: 1.05,
    transition: {
      stiffness: 400,
      damping: 10,
    },
  };

  const cardHoverAnimation = {
    scale: 1.03,
    y: -8,
    transition: {
      stiffness: 300,
      damping: 20,
    },
  };

  return (
    <section
      id="gallery"
      className="py-12 sm:py-16 md:py-20 bg-black min-h-screen relative overflow-hidden max-w-8xl mx-auto"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          variants={containerAnimation}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.h2
            variants={itemAnimation}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 text-white tracking-tight"
          >
            Project Showcase
          </motion.h2>
          <motion.div
            variants={itemAnimation}
            className="w-24 h-1 bg-white mx-auto mb-6"
          />
          <motion.p
            variants={itemAnimation}
            className="text-gray-300 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed"
          >
            Have a project or an idea? Let’s connect! @ sr.raghib@gmail.com
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerAnimation}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-12 sm:mb-16"
        >
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 ">
            {categoryOptions.map((cat) => (
              <motion.button
                key={cat}
                variants={itemAnimation}
                className={`px-6 py-3 rounded uppercase tracking-widest text-sm font-semibold transition-all duration-300 ${
                  category === cat
                    ? "bg-white text-black"
                    : "border border-gray-600 text-gray-200 hover:border-white hover:text-white"
                } focus:outline-none focus:border-white`}
                onClick={() => setCategory(cat)}
                whileHover={buttonHoverAnimation}
                whileTap={{ scale: 0.95 }}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <motion.div
          layout
          variants={containerAnimation}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 xxl:grid-cols-2 gap-6 sm:gap-18"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                variants={itemAnimation}
                className="relative group  rounded overflow-hidden h-72 sm:h-96 bg-gray-900 border border-gray-800 max-w-4xl"
                // onClick={() => openProject(project)}
                whileHover={cardHoverAnimation}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
              >
                {!imageError[project.id] ? (
                  <img
                    src={project.thumbnailUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={() => handleImageError(project.id)}
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-900 flex items-center justify-center">
                    <span className="text-gray-400 text-sm font-medium">
                      Image unavailable
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                  <motion.h3
                    className="text-lg sm:text-xl font-bold text-white mb-1"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    {project.title}
                  </motion.h3>
                  <motion.p
                    className="text-gray-300 text-sm uppercase tracking-wider mb-3"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {project.category}
                  </motion.p>
                  <motion.div
                    className="text-gray-300 text-sm uppercase tracking-wider mb-3"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className=" py-1  rounded text-xs text-gray-300 uppercase tracking-wider font-semibold inline-flex gap-2">
                      {project.tech.map((tech, index) => (
                        <div
                          key={index}
                          className="bg-black/60 px-3 py-1 rounded text-xs text-gray-300 uppercase tracking-wider font-semibold"
                        >
                          {tech.name}
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-center"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    <div className="">
                      {project.github ? (
                        <>
                          {" "}
                          <Link href={project.livelink} target="_blank">
                            <div className="w-8 h-8 rounded bg-white flex items-center justify-center mr-4">
                              {" "}
                              <Image
                                src={
                                  project.githubimage ||
                                  "/images/projects/github-logo.png"
                                }
                                alt="code link"
                                width={26}
                                height={26}
                              />
                            </div>
                          </Link>
                        </>
                      ) : (
                        <>
                          <div className=""></div>
                        </>
                      )}
                    </div>
                    <Link href={project.livelink} target="_blank">
                      {" "}
                      <div className="flex items-center">
                        <span className="group/link flex items-center gap-2 text-white text-sm font-medium cursor-pointer">
                          <span className="relative">
                            Live Link
                            <span className="absolute left-0 -bottom-0.5 w-0 h-[1px] bg-white transition-all duration-300 group-hover/link:w-full"></span>
                          </span>

                          <span className="w-4 h-4 rounded-full bg-white/90 flex items-center justify-center transition-all duration-300 group-hover/link:bg-white group-hover/link:translate-x-1">
                            <svg
                              className="w-3 h-3 text-black transform transition-all duration-300 group-hover/link:-rotate-45"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="3"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 12h14M13 6l6 6-6 6"
                              />
                            </svg>
                          </span>
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                </div>
                <div className="absolute top-4 left-4 px-3 py-1 bg-black/60 rounded text-xs text-gray-300 uppercase tracking-wider font-semibold">
                  {project.filter}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className={`fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 sm:p-6 ${isFullscreen ? "p-0" : ""}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeProject}
          >
            <motion.div
              ref={modalRef}
              className={`relative bg-black w-full overflow-y-auto rounded shadow border border-gray-800 ${
                isFullscreen
                  ? "max-w-none max-h-none h-full rounded-none"
                  : "max-w-6xl max-h-[90vh]"
              }`}
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              transition={{ damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute top-0 left-0 right-0 z-20 flex justify-between items-center p-4 bg-gradient-to-b from-black/80 to-transparent">
                <div className="flex items-center space-x-4"></div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={handleShare}
                    className="w-10 h-10 rounded bg-gray-800/80 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors duration-300"
                    title="Share (S)"
                  >
                    <Share2 size={16} />
                  </button>

                  <button
                    onClick={closeProject}
                    className="w-10 h-10 rounded bg-gray-800/80 flex items-center justify-center text-white hover:bg-gray-500 transition-colors duration-300"
                    title="Close (Esc)"
                  >
                    <X size={16} />
                  </button>
                </div>
              </div>

              <div
                className={`relative bg-black ${isFullscreen ? "h-full" : "aspect-video"}`}
              >
                <>
                  <img
                    src={selectedProject.thumbnailUrl}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </>
              </div>

              {!isFullscreen && (
                <motion.div
                  className="p-6 sm:p-8 md:p-10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-white">
                    {selectedProject.title}
                  </h2>
                  <p className="text-gray-300 text-sm uppercase tracking-widest mb-4">
                    {selectedProject.category}
                  </p>
                  <p className="text-gray-200 mb-8 text-base sm:text-lg leading-relaxed">
                    {selectedProject.description}
                  </p>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-white font-semibold mb-4 text-lg">
                        Project Details
                      </h3>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectShowcase;
