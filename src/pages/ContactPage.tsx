import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaInstagram, FaYoutube, FaTwitter, FaDiscord } from "react-icons/fa";
import { useTranslation } from "react-i18next";

// Social Links Data
const socialLinks = [
  {
    id: 1,
    name: "Email",
    icon: <FaEnvelope size={40} />,
    link: "mailto:emiraydin1625@hotmail.com",
  },
  {
    id: 2,
    name: "GitHub",
    icon: <FaGithub size={40} />,
    link: "https://github.com/ibrahimemiraydin",
    bgColor: "bg-black"
  },
  {
    id: 3,
    name: "Instagram",
    icon: <FaInstagram size={40} />,
    link: "https://instagram.com/emiraydin.16",
  },
  {
    id: 4,
    name: "YouTube",
    icon: <FaYoutube size={40} />,
    link: "https://youtube.com/@DejavuTR",
  },
  {
    id: 5,
    name: "X (Twitter)",
    icon: <FaTwitter size={40} />,
    link: "https://twitter.com/emiraydin1625",
  },
  {
    id: 6,
    name: "Discord",
    icon: <FaDiscord size={40} />,
    link: "https://discord.gg/vVqSqUhNb9",
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
            className="flex flex-col items-center text-gray-800 dark:text-gray-100"
            variants={itemVariants}
            whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
          >
            {/* Icon */}
            <div className="mb-2 bg-white dark:bg-gray-700 shadow-lg rounded-lg w-10 py-0 border-1 ">{social.icon}</div>
            {/* Name */}
            <p className="text-lg font-semibold">{social.name}</p>
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
};

export default ContactPage;
