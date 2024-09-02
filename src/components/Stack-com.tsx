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
import IconWithLabel from "./IconWithLabel";



// Iconos con texto. Lenguajes, frameworks y librerias, tecnologias y herramientas

const Tecnos: React.FC = () => {
  return (
    <section className="container mx-auto p-4 my-4">
      <h2 className="text-5xl text-center">Lenguajes</h2>
      <div className="flex items-center justify-center my-4">
        <IconWithLabel icon={faSquareJs} label="JavaScript" color="#FFD43B" />
        <IconWithLabel icon={faPython} label="Python" color="#306998" />
        <IconWithLabel icon={faHtml5} label="HTML5" color="#E34F26" />
        <IconWithLabel icon={faCss3Alt} label="CSS3" color="#1572B6" />
      </div>
      <h2 className="text-5xl text-center">Frameworks y Librerías</h2>
      <div className=" flex items-center justify-center my-4">
        <IconWithLabel icon={faReact} label="React.js" color="#FFD43B" />
        <IconWithLabel icon={faNode} label="Node.js" color="#FFD43B" />
        <IconWithLabel icon={faBootstrap} label="Bootstrap" color="#FFD43B" />
        <IconWithLabel svgSrc="/tailwind.svg" label="Tailwind" color="#FFD40B"/>
      </div>
      <h2 className="text-5xl text-center">Tecnologías y Herramientas</h2>
      <div className=" flex items-center justify-center my-4">
        <IconWithLabel icon={faDatabase} label="SQL y NoSQL" color="#FFD43B" />
      </div>
    </section>
  );
};

export default Tecnos;
