import {
  faBootstrap,
  faCss3Alt,
  faHtml5,
  faNode,
  faPython,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { faSquareJs } from "@fortawesome/free-brands-svg-icons/faSquareJs";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import IconWithLabel from "./IconWithLabel-dark";
import { title } from "process";

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
    title: "Frameworks y Libreries",
    items: [
      { icon: faReact, label: "React.js", color: "#61DAFB" },
      { icon: faNode, label: "Node.js", color: "#339933" },
      { icon: faBootstrap, label: "Bootstrap", color: "#7952B3" },
      { svgSrc: "/tailwind.svg", label: "Tailwind", color: "#38B2AC" },
    ],
  },
  {
    title: "Tecnologies and Tools",
    items: [{ icon: faDatabase, label: "SQL y NoSQL", color: "#FFD43B" }],
  },
];

const Tecnos: React.FC = () => {
  return (
    <section id="stack" className="container mx-auto p-4 my-4">
      {iconData.map((section, index) => (
        <div key={index} className="my-4">
          <h2 className="text-5xl text-center text-deepblue-500">
            {section.title}
          </h2>
          <div className="flex items-center justify-center my-4">
            {section.items.map((item, i) => (
              <IconWithLabel
                key={i}
                icon={item.icon}
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
