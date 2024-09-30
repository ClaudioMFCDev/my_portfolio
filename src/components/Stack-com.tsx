import {
  faBootstrap,
  faCss3Alt,
  faGithub,
  faHtml5,
  faNode,
  faPython,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { faSquareJs } from "@fortawesome/free-brands-svg-icons/faSquareJs";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { SiMongodb } from "react-icons/si";
import { RiSupabaseLine } from "react-icons/ri";
import { CgVercel } from "react-icons/cg";



import React from "react";
import IconWithLabel from "./IconWithLabel-dark";

const iconData = [
  {
    title: "Languages",
    items: [
      { icon: faSquareJs, label: "Javascript", color: "#FFD43B" },
      { icon: faPython, label: "Python", color: "#306998" },
      { icon: faHtml5, label: "HTML5", color: "#E34F26" },
      { icon: faCss3Alt, label: "CSS3", color: "#1572B6" },
    ],
  },
  {
    title: "Frameworks and Libreries",
    items: [
      { icon: faReact, label: "React.js", color: "#61DAFB" },
      { icon: faNode, label: "Node.js", color: "#339933" },
      { icon: faBootstrap, label: "Bootstrap", color: "#7952B3" },
      { svgSrc: "/tailwind.svg", label: "Tailwind", color: "#38B2AC" },
    ],
  },
  {
    title: "Tecnologies and Tools",
    items: [
      { icon: faDatabase, label: "SQL Server", color: "#FFD43B" },
      { reactIcon: SiMongodb, label: "MongoDB", color: "#09b025" },
      { reactIcon: RiSupabaseLine, label: "Supabase", color: "#2f9440" },
      { reactIcon: CgVercel, label: "Vercel", color: "#FFFFFF" },
      { icon: faGithub, label: "GitHub", color: "#FFFFFF" },
    ],
  },
];

const Tecnos: React.FC = () => {
  return (
    <section id="stack" className="container mx-auto p-4 pt-0">
      {iconData.map((section, index) => (
        <div key={index} className="my-4">
          <h2 className="text-4xl sm:text-5xl text-center text-deepblue-500">
            {section.title}
          </h2>
          <div className="flex items-center justify-center my-4">
            {section.items.map((item, i) => (
              <IconWithLabel
                key={i}
                icon={item.icon}
                reactIcon={item.reactIcon}
                svgSrc={item.svgSrc}
                label={item.label}
                color={item.color}
              />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Tecnos;
