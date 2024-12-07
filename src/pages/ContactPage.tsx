import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaInstagram, FaYoutube, FaTwitter, FaDiscord } from "react-icons/fa";
import { useTranslation } from "react-i18next";


// Social Links Data
const socialLinks = [
  {
    id: 1,
    name: "Email",
    icon: <FaEnvelope size={50} />,
    link: "mailto:emiraydin1625@hotmail.com",
    bgColor: "bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600",
  },
  {
    id: 2,
    name: "GitHub",
    icon: <FaGithub size={50} />,
    link: "https://github.com/ibrahimemiraydin",
    bgColor: "bg-gradient-to-r from-gray-900 to-gray-800",
  },
  {
    id: 3,
    name: "Instagram",
    icon: <FaInstagram size={50} />,
    link: "https://instagram.com/emiraydin.16",
    bgColor: "bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600",
  },
  {
    id: 4,
    name: "YouTube",
    icon: <FaYoutube size={50} />,
    link: "https://youtube.com/@DejavuTR",
    bgColor: "bg-gradient-to-r from-red-500 to-red-700",
  },
  {
    id: 5,
    name: "X (Twitter)",
    icon: <FaTwitter size={50} />,
    link: "https://twitter.com/emiraydin1625",
    bgColor: "bg-gradient-to-r from-blue-400 to-blue-600",
  },
  {
    id: 6,
    name: "Discord",
    icon: <FaDiscord size={50} />,
    link: "https://discord.com/invite/DGqypeK5WR",
    bgColor: "bg-gradient-to-r from-indigo-500 to-indigo-700",
  },
];

const ContactPage = () => {
  const { t } = useTranslation();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900">
      {/* Title */}
      <motion.h1
        className="text-5xl font-extrabold text-gray-800 dark:text-gray-100 mb-12 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {t("İletişime Geç")}
      </motion.h1>

      {/* Social Media Links */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-16 lg:px-32"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {socialLinks.map((social) => (
          <motion.a
            key={social.id}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`relative group rounded-xl p-8 flex flex-col items-center justify-center text-white shadow-lg transform transition-all duration-300`}
            variants={itemVariants}
            whileHover={{
              scale: 1.1,
              rotate: 360,
              transition: { duration: 0.3 },
            }}
          >
            {/* Ripple Effect */}
            <div
              className="absolute inset-0 rounded-xl bg-gradient-to-r opacity-70 group-hover:animate-pulse group-hover:opacity-90 transition duration-300"
              style={{
                background: `radial-gradient(circle at center, rgba(255, 255, 255, 0.2), transparent)`,
              }}
            ></div>
            {/* Icon */}
            <div className="mb-4 text-white z-10 dark:text-white">{social.icon}</div>
            {/* Name */}
            <p className="text-lg font-semibold text-white dark:text-white z-10">{social.name}</p>
            {/* Background */}
            <div
              className={`absolute inset-0 rounded-xl ${social.bgColor} group-hover:brightness-125 transition duration-300`}
            ></div>
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
};

export default ContactPage;
