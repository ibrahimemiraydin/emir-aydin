import { useTranslation } from "react-i18next";
import RotatingIcon from "./RotatingIcon";
import RotatingText from "./ChangingText";

// LogoText componenti
const LogoText: React.FC = () => {
  const { t } = useTranslation();

  // İkonlar ve metinler
  const icons = [
    { src: "public/icons/react-icon.png", alt: "React" },
    { src: "public/icons/typescript-icon.png", alt: "Typescript" },
    { src: "public/icons/tailwind-icon.png", alt: "Tailwind CSS" },
    { src: "public/icons/java-icon.png", alt: "Java" },
  ];
  const texts = [
    t("App Development"),
    t("Web Development"),
    t("UX / UI Design"),
    t("Modding"),
  ];

  // GitHub profil sayfasına yeni sekmede yönlendirme
  const handleLogoClick = () => {
    window.open("https://github.com/ibrahimemiraydin", "_blank");
  };

  return (
    <div className="flex flex-col items-center justify-center mt-14">
      {/* Rotating Icons */}
      <RotatingIcon icons={icons} interval={3000} />

      {/* Logo */}
      <img
        src="public/logo/light-logo.png" // Light mode logo
        alt="Light Logo"
        className="mb-4 block dark:hidden mt-14 cursor-pointer transform transition-transform hover:scale-110"
        onClick={handleLogoClick} // Tıklama ile yönlendirme
      />
      <img
        src="public/logo/dark-logo.png" // Dark mode logo
        alt="Dark Logo"
        className="mb-4 hidden dark:block mt-14 cursor-pointer transform transition-transform hover:scale-110"
        onClick={handleLogoClick} // Tıklama ile yönlendirme
      />

      {/* Rotating Text */}
      <RotatingText texts={texts} />
    </div>
  );
};

export default LogoText;
