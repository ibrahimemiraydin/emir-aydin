import { FaEnvelope, FaGithub, FaInstagram, FaYoutube, FaTwitter, FaDiscord, FaExternalLinkAlt } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const socialLinks = [
  {
    id: 1,
    name: "Email",
    icon: <FaEnvelope size={24} />, 
    detail: "emiraydin1625@hotmail.com",
    link: "mailto:emiraydin1625@hotmail.com",
    color: "text-gray-600",
  },
  {
    id: 2,
    name: "GitHub",
    icon: <FaGithub size={24} />, 
    detail: "github.com/ibrahimemiraydin",
    link: "https://github.com/ibrahimemiraydin",
    color: "text-black",
  },
  {
    id: 3,
    name: "Instagram",
    icon: <FaInstagram size={24} />, 
    detail: "instagram.com/emiraydin.16",
    link: "https://instagram.com/emiraydin.16",
    color: "text-pink-500",
  },
  {
    id: 4,
    name: "YouTube",
    icon: <FaYoutube size={24} />, 
    detail: "youtube.com/@DejavuTR",
    link: "https://youtube.com/@DejavuTR",
    color: "text-red-600",
  },
  {
    id: 5,
    name: "X (Twitter)",
    icon: <FaTwitter size={24} />, 
    detail: "twitter.com/emiraydin1625",
    link: "https://twitter.com/emiraydin1625",
    color: "text-blue-500",
  },
  {
    id: 6,
    name: "Discord",
    icon: <FaDiscord size={24} />, 
    detail: "discord.gg/vVqSqUhNb9",
    link: "https://discord.gg/vVqSqUhNb9",
    color: "text-indigo-500",
  },
];

const ContactPage = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
      {/* Title */}
      <h1 className="text-4xl font-extrabold text-gray-800 dark:text-gray-100 mb-8 text-center">
        {t("İletişime Geç")}
      </h1>

      {/* Social Links */}
      <div className="w-full max-w-3xl grid grid-cols-1 sm:grid-cols-2 gap-6">
        {socialLinks.map((social) => (
          <a
            key={social.id}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md transition-transform hover:scale-105 hover:shadow-lg"
          >
            {/* Icon */}
            <div className={`flex-shrink-0 ${social.color}`}>{social.icon}</div>

            {/* Details */}
            <div className="ml-4 flex flex-col">
              <span className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                {social.name}
              </span>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {social.detail}
              </span>
            </div>

            {/* External Link Icon */}
            <FaExternalLinkAlt
              className="ml-auto text-gray-400 dark:text-gray-500"
              size={16}
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default ContactPage;
