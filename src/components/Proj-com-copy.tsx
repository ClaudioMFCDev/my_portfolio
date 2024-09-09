import ImageCarousel from "./ImageCorousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { SiTailwindcss, SiTypescript } from "react-icons/si";
import { IconContext } from "react-icons";
import { RiNextjsLine } from "react-icons/ri";
import IconWithLabelDark from "./IconWithLabel-dark";
import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";
import { title } from "process";

// Propiedades del proyecto
type ProjectProps = {
  title: string;
  description: string;
  images: string[];
  technologies: { component: React.ElementType; label: string }[];
  repoLink: string;
  liveLink: string;
};


//2 propiedades opcionales
type IconWithLabelProps = {
  icon?: IconProp;
  svgSrc?: string;
  label: string;
  color: string;
};

// Secundary component
const IconWithLabel: React.FC<IconWithLabelProps> = ({
  icon,
  svgSrc,
  label,
  color,
}) => (
  <div className="flex flex-col items-center mx-4">
    <div className=" p-2">
      {icon ? (
        <FontAwesomeIcon
          icon={icon}
          style={{ color: color, width: "40px", height: "40px" }}
        />
      ) : (
        <img
          src={svgSrc}
          alt={label}
          style={{ width: "30px", height: "auto" }}
          className="svg-icon"
        />
      )}
    </div>
    <span className="mt-2">{label}</span>
  </div>
);

// Componente principal
export default function Projectos() {
  const images = [
    "https://thyrybfnmgjezqbsintw.supabase.co/storage/v1/object/public/imagenes/home1.png?t=2024-08-14T13%3A53%3A49.398Z",
    "https://thyrybfnmgjezqbsintw.supabase.co/storage/v1/object/public/imagenes/login1.png?t=2024-08-14T13%3A54%3A03.554Z",
    "https://thyrybfnmgjezqbsintw.supabase.co/storage/v1/object/public/imagenes/create1.png?t=2024-08-14T13%3A54%3A20.147Z",
  ];

  const icons = [
    { component: SiTailwindcss, label: "Tailwind CSS" },
    { component: RiNextjsLine, label: "Next.js" },
    { component: SiTypescript, label: "TypeScript" },
  ];

  return (
    <section id="projects" className="container mx-auto w-2/3 p-4 mb-6 ">
      <h3 className="text-7xl text-center">Projects</h3>
      {/* contenido del projecto */}
      <div id="eachProject" className="bg-white my-4 p-1 border-deepblue-500 border-4 rounded-2xl max-lg:flex-wrap flex justify-center items-center ">
        {/* carousel */}
        <div className="pb-4 max-sm:h-44 lg:mr-4 lg:w-4/6 lg:h-72 max-xl:w-full bg-deepblue-400 flex justify-center items-center rounded-2xl">
          <ImageCarousel images={images} />
        </div>

        {/* Datos */}
        <div className="m-2 lg:w-2/6 lg:h-72 max-lg:w-full text-white rounded bg-deepblue-400 content-center ">
          <h2 className="text-xl font-bold text-deepblue-600 text-center">
            Aplicación web de Game of Throne
          </h2>
          <p className="m-1 text-center">
            App Web donde puedes crear y editar personajes de la serie GOT. Con
            autenticacion de usuario, conexión a base de datos.
          </p>
          {/* stack of project */}
          <div className="flex justify-center items-center h-10 bg-white rounded m-1">
            <IconContext.Provider
              value={{
                className: "react-icons",
                color: "#534eff",
                size: "2em",
              }}
            >
              {icons.map(({ component: Icon, label }, index) => (
                <div key={index} className=" mx-4">
                  <Icon />
                  {/* <span className="text-sm text-gray-700">{label}</span> */}
                </div>
              ))}
            </IconContext.Provider>
          </div>
          {/* repo y web */}
          <div className="flex justify-around items-center mt-2">
            <div className="flex flex-col justify-around items-center">
              <FontAwesomeIcon
                icon={faSquareArrowUpRight}
                style={{ color: "#000000", width: "30px", height: "30px" }}
              />
              <span className="text-xs">Go to web</span>
            </div>
            <div className="flex flex-col justify-around items-center">
              <FontAwesomeIcon
                icon={faGithub}
                style={{ color: "#000000", width: "30px", height: "30px" }}
              />
              <span className="text-xs">Repository</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
