import React from "react";
import { FaLink } from "react-icons/fa"; // Import the link icon

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  tags?: string[];
  link?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  tags,
  link,
}) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block relative overflow-hidden rounded-lg shadow-lg bg-white dark:bg-gray-800 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
    >
      {/* Proje Görseli */}
      <div className="relative overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-black/80 transition-all duration-500"></div>
        {/* Hover Highlight */}
        <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-20 mix-blend-screen transition-all duration-300"></div>
      </div>
      {/* İçerik */}
      <div className="p-4 relative">
        <h2 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-200 transition-colors duration-300">
          {title}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
          {description}
        </p>
        {/* Etiketler */}
        {tags && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 py-1 px-2 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
      {/* Alt Kenarlık Animasyonu */}
      <div className="absolute bottom-0 left-1/2 w-0 h-1 bg-blue-500 transition-all duration-500 group-hover:w-full group-hover:left-0"></div>
      {/* Link Icon */}
      <div className="absolute top-4 right-4 bg-gray-900 text-white p-2 rounded-full opacity-100 md:opacity-0 md:group-hover:opacity-100 transition duration-300">
        <FaLink size={16} />
      </div>
    </a>
  );
};

export default ProjectCard;
