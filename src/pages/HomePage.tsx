import React from "react";
import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import { projectsData } from "../data/projectsData";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

const getRandomProjects = (data: typeof projectsData, count: number) => {
  const shuffled = [...data].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};

const HomePage = () => {
  const showcaseProjects = getRandomProjects(projectsData, 3);
  const { t } = useTranslation();

  React.useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-800">
      
      {/* Projeler Showcase Bölümü */}
      <main className="flex-grow container mx-auto py-16 px-4" data-aos="fade-up">
        <h2
          id="projects"
          className="text-3xl text-center font-bold mb-8 text-gray-800 dark:text-gray-200"
          data-aos="fade-up"
        >
          {t("Projelerim")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {showcaseProjects.map((project) => (
            <motion.div
              key={project.id}
              data-aos="fade-up"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                imageUrl={project.imageUrl}
                tags={project.tags}
                link={project.link}
              />
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            to="/projects"
            className="inline-block px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-lg shadow hover:bg-blue-500 hover:scale-105 transition-all duration-300"
            data-aos="fade-up"
          >
            {t("Tüm Projelere Git")}
          </Link>
        </div>
      </main>
    </div>
  );
};

export default HomePage;