import ImageCarousel from "./ImageCorousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { SiTailwindcss, SiTypescript } from "react-icons/si";
import { IconContext } from "react-icons";
import { RiNextjsLine } from "react-icons/ri";

{
  /** Breve descripcion y que tecnologias utilicé */
}

//2 propiedades opcionales
type IconWithLabelProps = {
  icon?: IconProp;
  svgSrc?: string;
  label: string;
  color: string;
};

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

// Componente
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
      <div className="bg-white my-4 p-1 border-deepblue-500 border-4 rounded-2xl max-lg:flex-wrap flex justify-center items-center ">
        {/* carousel */}
        <div className="pb-4 max-sm:h-44 lg:mr-4 lg:w-4/6 lg:h-72 max-xl:w-full bg-deepblue-400 flex justify-center items-center rounded-2xl">
          <ImageCarousel images={images} />
        </div>

        {/* Datos */}
        <div className="m-2 lg:w-2/6 lg:h-72 max-lg:w-full  rounded bg-amber-200 text-black content-center ">
          <h2 className="text-xl font-bold text-center">
            Aplicación web de Game of Throne
          </h2>

          <p className="m-1 text-center">
            App Web donde puedes crear y editar personajes de la serie GOT. Con
            autenticacion de usuario, conexión a base de datos.
          </p>

          {/* stacof project */}
          <div className="flex justify-center h-10 pt-2 bg-white">
            <IconContext.Provider
              value={{ className: "react-icons", color: "#534eff", size: "2em" }}
            >
              
                {icons.map(({ component: Icon, label }, index) => (
                  <div key={index} className=" mx-4">
                    <Icon />
                    {/* <span className="text-sm text-gray-700">{label}</span> */}
                  </div>
                ))}
              
            </IconContext.Provider>
          </div>
          {/* repo */}
          <div>
            <FontAwesomeIcon icon={faGithub} style={{ color: "#000000" }} />
          </div>
        </div>
      </div>
    </section>
  );
}
