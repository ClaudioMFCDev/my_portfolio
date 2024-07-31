//import { faSquareJs } from "@fortawesome/free-brands-svg-icons";
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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

{
  /** Iconos con texto. Lenguajes, frameworks y librerias, tecnologias y herramientas*/
}
export default function Tecnos() {
  return (
    <section className="container mx-auto p-4 mb-6">
      <h3 className="text-7xl text-center">Section Tecnologías</h3>
      <h2 className="text-5xl text-center">Lenguajes</h2>
      <div className=" flex items-center justify-center my-4">
        <FontAwesomeIcon
          className="mr-4"
          icon={faSquareJs}
          style={{ color: "#FFD43B", width: "50px", height: "50px" }}
        />
        <h1>JavaScript</h1>
        <FontAwesomeIcon
          className="mr-4"
          icon={faPython}
          style={{ color: "", width: "50px", height: "50px" }}
        />
        <FontAwesomeIcon
          className="mr-4"
          icon={faHtml5}
          style={{ color: "", width: "50px", height: "50px" }}
        />
        <FontAwesomeIcon
          icon={faCss3Alt}
          style={{ color: "", width: "50px", height: "50px" }}
        />
      </div>
      <h2 className="text-5xl text-center">Frameworks y Librerías</h2>
      <div className=" flex items-center justify-center">
        <FontAwesomeIcon
          className="mr-4"
          icon={faReact}
          style={{ color: "", width: "50px", height: "50px" }}
        />
        <FontAwesomeIcon
          className="mr-4"
          icon={faNode}
          style={{ color: "", width: "50px", height: "50px" }}
        />
        <FontAwesomeIcon
          className="mr-4"
          icon={faBootstrap}
          style={{ color: "#FFD43B", width: "50px", height: "50px" }}
        />
        <Image
          className="mr-4"
          src="/tailwind.svg"
          alt="tailwind-icon"
          width={50}
          height={50}
        />
      </div>
      <h2 className="text-5xl text-center">Tecnologías y Herramientas</h2>
      <div className=" flex items-center justify-center">
        <FontAwesomeIcon
          className="mr-4"
          icon={faDatabase}
          style={{ color: "", width: "50px", height: "50px" }}
        />
      </div>
    </section>
  );
}
