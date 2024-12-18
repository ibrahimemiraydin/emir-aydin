import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Sayfa her değiştiğinde en üste kaydır
  }, [pathname]);

  return null; // Görünür bir şey render etmiyoruz
};

export default ScrollToTop;
