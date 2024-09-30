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
      { icon: faSquareJs, label: "Javascript", color: "#FFD43B", svgSrc:"", reactIcon:null },
      { icon: faPython, label: "Python", color: "#306998", svgSrc:"", reactIcon:null },
      { icon: faHtml5, label: "HTML5", color: "#E34F26", svgSrc:"", reactIcon:null },
      { icon: faCss3Alt, label: "CSS3", color: "#1572B6", svgSrc:"", reactIcon:null  },
    ],
  },
  {
    title: "Frameworks and Libreries",
    items: [
      { icon: faReact, label: "React.js", color: "#61DAFB", svgSrc:"", reactIcon:null },
      { icon: faNode, label: "Node.js", color: "#339933", svgSrc:"", reactIcon:null  },
      { icon: faBootstrap, label: "Bootstrap", color: "#7952B3", svgSrc:"", reactIcon:null },
      { svgSrc: "/tailwind.svg", label: "Tailwind", color: "#38B2AC", reactIcon:null},
    ],
  },
  {
    title: "Tecnologies and Tools",
    items: [
      { icon: faDatabase, label: "SQL Server", color: "#FFD43B", svgSrc:"", reactIcon:null },
      { reactIcon: SiMongodb, label: "MongoDB", color: "#09b025", svgSrc:"", icon: null  },
      { reactIcon: RiSupabaseLine, label: "Supabase", color: "#2f9440", svgSrc:"", icon: null  },
      { reactIcon: CgVercel, label: "Vercel", color: "#FFFFFF", svgSrc:"", icon: null  },
      { icon: faGithub, label: "GitHub", color: "#FFFFFF", svgSrc:"", reactIcon:null  },
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
                label={item.label}
                color={item.color}
                {...(item.icon ? { icon: item.icon } : {})}
                {...(item.svgSrc ? { svgSrc: item.svgSrc } : {})}
                {...(item.reactIcon ? { reactIcon: item.reactIcon } : {})}
              />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Tecnos;
