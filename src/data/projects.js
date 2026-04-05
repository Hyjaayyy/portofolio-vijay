import portfolioImg from "../assets/portfolio.png";
import figmaImg from "../assets/figma.png";
import pufftradeImg from "../assets/yabeetracker.png";

const projects = [
  {
    id: "1",
    title: "Website Portfolio",
    image: portfolioImg,
    desc: "Portfolio pribadi",
    description:
      "Website portfolio pribadi yang dibuat menggunakan React untuk menampilkan profil dan project.",
    tech: ["React", "CSS", "Vite", "MongoDB"],
    github: "https://github.com/Hyjaayyy/portfolio",
    demo: "https://portofolio-vijay.vercel.app", 
  },
  {
    id: "2",
    title: "UI/UX Design PuffTrade",
    image: figmaImg,
    desc: "Design aplikasi Figma",
    description:
      "Design UI/UX aplikasi PuffTrade yang dibuat menggunakan Figma.",
    tech: ["Figma"],
    github: "",
    demo: "https://www.figma.com/design/ambMNVtGSVruQpMT12Qla1/PuffTrade?node-id=5-24&t=WcVuI8UX7OnPqT3y-1",
  },
  {
    id: "3",
    title: "YABEE Habit Tracker",
    image: pufftradeImg,
    desc: "Project di GitHub",
    description:
      "HYJAAYYY Habit Tracker adalah aplikasi web interaktif yang dirancang untuk membantu pengguna membangun kebiasaan secara konsisten melalui fitur streak tracking, visualisasi aktivitas (heatmap), dan pengalaman pengguna yang modern.",
    tech: ["NextJs", "React", "Tailwind CSS"],
    github: "https://github.com/Hyjaayyy/YabeeTracker",
    demo: "https://yabee-tracker.vercel.app/", 
  },
];

export default projects;