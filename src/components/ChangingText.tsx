import React, { useState, useEffect } from "react";

interface RotatingTextProps {
  texts: string[]; // Metinleri içeren dizi
  interval?: number; // Metin değiştirme süresi (varsayılan 3000ms)
}

const RotatingText: React.FC<RotatingTextProps> = ({ texts, interval = 3000 }) => {
  const [currentText, setCurrentText] = useState(0);

  useEffect(() => {
    const textInterval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, interval);

    return () => clearInterval(textInterval);
  }, [texts, interval]);

  return <p className="text-xl mt-4 text-center text-gray-800 dark:text-gray-200">
    {texts[currentText]}
  </p>;
};

export default RotatingText;
