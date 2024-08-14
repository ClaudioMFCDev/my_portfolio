import Image from "next/image";
import ImageCarousel from "./ImageCorousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

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

export default function Projectos() {
  const images = [
    "https://thyrybfnmgjezqbsintw.supabase.co/storage/v1/object/public/imagenes/home1.png?t=2024-08-14T13%3A53%3A49.398Z",
    "https://thyrybfnmgjezqbsintw.supabase.co/storage/v1/object/public/imagenes/login1.png?t=2024-08-14T13%3A54%3A03.554Z",
    "https://thyrybfnmgjezqbsintw.supabase.co/storage/v1/object/public/imagenes/create1.png?t=2024-08-14T13%3A54%3A20.147Z",
  ];

  return (
    <section className="container mx-auto w-2/3 p-4 mb-6 ">
      <h3 className="text-7xl text-center">Section Projectos</h3>
      {/* contenido del projecto */}
      <div className="bg-white rounded mx-12 my-4 p-1 flex">
        {/* carousel */}
        <div className="w-2/3 h-72 my-grad m-2 pt-4 px-8">
          <ImageCarousel images={images} />
        </div>

        {/* Datos */}
        <div className=" h-64 ml-4 m-2 rounded text-black content-center bg-amber-200">
          <h2 className="text-xl font-bold text-center">
            Aplicación web de Game of Throne
          </h2>
          <h1 className="m-1 text-center">
            App Web donde puedes crear y editar personajes de la serie GOT. Con
            autenticacion de usuario, conexión a base de datos.
          </h1>

          {/* stacof project */}
          <div className="flex h-10 pt-1 bg-white">
            <IconWithLabel svgSrc="/ts.svg" label="" color="#FFFFFF" />
            <IconWithLabel svgSrc="/ts.svg" label="" color="#FFFFFF" />
            <IconWithLabel svgSrc="/ts.svg" label="" color="#FFFFFF" />
          </div>

          {/* repo */}
          <div>
            <FontAwesomeIcon icon={faGithub} style={{ color: "#DDDD" }} />
          </div>
        </div>
      </div>
    </section>
  );
}
