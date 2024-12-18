import React, { useState, useEffect } from "react";

interface RotatingIconProps {
  icons: { src: string; alt: string }[]; // İkonları içeren dizi (src ve alt özellikleri ile)
  interval?: number; // İkon değiştirme süresi (varsayılan 3000ms)
}

const RotatingIcon: React.FC<RotatingIconProps> = ({ icons, interval = 3000 }) => {
  const [currentIcon, setCurrentIcon] = useState(0);

  useEffect(() => {
    const iconInterval = setInterval(() => {
      setCurrentIcon((prev) => (prev + 1) % icons.length);
    }, interval);

    return () => clearInterval(iconInterval);
  }, [icons, interval]);

  return (
    <div className="text-4xl">
      <img
        src={icons[currentIcon].src} // Şu anki ikonun src'sini alıyoruz
        alt={icons[currentIcon].alt} // Şu anki ikonun alt metnini alıyoruz
        className="w-16 h-16 object-contain transition-transform transform hover:scale-110"
      />
    </div>
  );
};

export default RotatingIcon;
