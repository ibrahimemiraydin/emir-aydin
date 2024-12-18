import { useTranslation } from "react-i18next";
import RotatingIcon from "./RotatingIcon";
import RotatingText from "./ChangingText";

// LogoText componenti
const LogoText: React.FC = () => {
  const { t } = useTranslation();

  // İkonlar ve metinler
  const icons = [
    { src: "../src/assets/icons/react-icon.png", alt: "React" },
    { src: "../src/assets/icons/typescript-icon.png", alt: "Typescript" },
    { src: "../src/assets/icons/tailwind-icon.png", alt: "Tailwind CSS" },
    { src: "../src/assets/icons/java-icon.png", alt: "Java" },
  ];
  const texts = [
    t("React"),
    t("Typescript"),
    t("Tailwind CSS"),
    t("Java"),
  ];

  // GitHub profil sayfasına yeni sekmede yönlendirme
  const handleLogoClick = () => {
    window.open("https://github.com/ibrahimemiraydin", "_blank");
  };

  return (
    <div className="flex flex-col items-center justify-center mt-14">
      {/* Rotating Icons */}
      <RotatingIcon icons={icons} interval={2000} />

      {/* Logo */}
      <img
        src="../src/assets/light-logo.png" // Light mode logo
        alt="Light Logo"
        className="mb-4 block dark:hidden mt-14 cursor-pointer transform transition-transform hover:scale-110"
        onClick={handleLogoClick} // Tıklama ile yönlendirme
      />
      <img
        src="../src/assets/dark-logo.png" // Dark mode logo
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
