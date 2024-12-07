import React from "react";
import ProjectCard from "../components/ProjectCard";
import { projectsData } from "../data/projectsData";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const ProjectsPage = () => {
  const { t } = useTranslation();


  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-800 py-16 px-4">
      <h2 className="text-3xl text-center font-bold mb-8 text-gray-800 dark:text-gray-200">
        {t("Tüm Projeler")}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }} // Başlangıç durumu
            animate={{ opacity: 1, y: 0 }} // Animasyon son durumu
            transition={{ delay: index * 0.2, duration: 0.5 }} // Her bir kart için gecikme ve süre
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
    </div>
  );
};

export default ProjectsPage;
