// src/data/projectsData.ts

export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  tags?: string[]; // Opsiyonel: Etiketler
  link?: string; // Opsiyonel: Proje Bağlantısı
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Discord Music Bot",
    description: "Javascript kullanarak oluşturduğum bir discord music botu projesidir. !play gibi komutlarla çalışır.",
    imageUrl: "https://keyubu.com/wp-content/uploads/2021/09/discord-vds-1.jpeg",
    tags: ["Javascript", "Discord", "Music Bot"],
    link: "https://github.com/ibrahimemiraydin/discord-music-bot",
  },
  {
    id: 2,
    title: "Kişisel Websitesi",
    description: "React ve Bootstrap kullanılarak oluşturulmuş bir kişisel websitesi örneğidir. ",
    imageUrl: "https://blog.openreplay.com/images/integrate-bootstrap-in-your-react-projects-with-these-2-libraries/images/hero.jpg",
    tags: ["React", "Bootstrap", "Website"],
    link: "https://github.com/ibrahimemiraydin/react-bootstrap-website",
  },
  {
    id: 3,
    title: "Electron Uygulaması",
    description: "Electron ile oluşturulmuş websitelerini açabilen bir uygulama. Yakında yeni özellikler eklemeyi düşünüyorum örneğin açılan sekmeleri üste tutturma gibi.",
    imageUrl: "https://www.electron-hero.com/fiddle.png",
    tags: ["Electron", "TypeScript", "App"],
    link: "https://github.com/ibrahimemiraydin/electron-app",
  },
  {
    id: 4,
    title: "Yakında Gelecek Proje",
    description: "Bir sonraki proje burada yer alacak.",
    imageUrl: "https://www.shutterstock.com/image-vector/coming-soon-teaser-poster-star-600nw-2397064575.jpg",
    tags: ["Coming Soon"],
    link: "https://taskmanager.com",
  },
];