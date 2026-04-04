import portfolioImg from "../assets/portfolio.png";
import figmaImg from "../assets/figma.png";
import pufftradeImg from "../assets/pufftrade.png";

const projects = [
  {
    id: "1",
    title: "Website Portfolio",
    image: portfolioImg,
    desc: "Portfolio pribadi menggunakan React",
    description:
      "Website portfolio pribadi yang dibuat menggunakan React untuk menampilkan profil dan project.",
    tech: ["React", "CSS", "Vite"],
    github: "https://github.com/Hyjaayyy/portfolio",
    demo: "https://portofolio-vijay.vercel.app", 
  },
  {
    id: "2",
    title: "UI/UX Design PuffTrade",
    image: figmaImg,
    desc: "Design aplikasi di Figma",
    description:
      "Design UI/UX aplikasi PuffTrade yang dibuat menggunakan Figma.",
    tech: ["Figma"],
    github: "",
    demo: "https://www.figma.com/design/ambMNVtGSVruQpMT12Qla1/PuffTrade?node-id=5-24&t=WcVuI8UX7OnPqT3y-1",
  },
  {
    id: "3",
    title: "PuffTrade Web",
    image: pufftradeImg,
    desc: "Project di GitHub",
    description:
      "Project PuffTrade yang sudah diimplementasikan dan tersedia di GitHub.",
    tech: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/Hyjaayyy/PuffTrade",
    demo: "", // nanti isi kalau sudah deploy
  },
];

export default projects;