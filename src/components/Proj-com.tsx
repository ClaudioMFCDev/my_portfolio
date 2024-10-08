import ImageCarousel from "./ImageCorousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { SiTailwindcss, SiTypescript } from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";
import { IconContext } from "react-icons";
import { FaBootstrap, FaPhp } from "react-icons/fa";
import { DiCodeigniter } from "react-icons/di";

// Propiedades del proyecto
type ProjectProps = {
  title: string;
  description: string;
  images: string[];
  technologies: { component: React.ElementType; label: string }[];
  repoLink: string;
  liveLink?: string;
};

// Componente para cada proyecto
const EachProject: React.FC<ProjectProps> = ({
  title,
  description,
  images,
  technologies,
  repoLink,
  liveLink,
}) => (
  <div className="bg-white my-4 p-1 border-deepblue-500 border-4 rounded-2xl max-lg:flex-wrap flex justify-center items-center">
    {/* Carousel */}
    <div className="pb-4 mx-2 max-sm:h-44 lg:mr-4 lg:w-4/6 lg:h-72 max-xl:w-full bg-deepblue-400 flex justify-center items-center rounded-2xl">
      <ImageCarousel images={images} />
    </div>

    {/* Datos del proyecto */}
    <div className="m-2 lg:w-2/6 lg:h-72 max-lg:w-full max-lg:mt-4 text-white rounded lg:rounded-l-2xl bg-deepblue-400 content-around">
      <h2 className="text-xl font-bold text-deepblue-600 text-center">{title}</h2>
      <p className="m-1 text-center">{description}</p>

      {/* Stack de tecnologías */}
      <div className="flex justify-center items-center h-10 bg-white rounded m-1">
        <IconContext.Provider value={{ className: "react-icons", size: "2em", color: "#534eff"}}>
          {technologies.map(({ component: Icon }, index) => (
            <div key={index} className="mx-4">
              <Icon />
            </div>
          ))}
        </IconContext.Provider>
      </div>

      {/* Enlaces de repo y sitio web */}
      <div className="flex justify-around items-center mt-2">
        {liveLink ? 
          (
            <a href={liveLink} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
              <FontAwesomeIcon icon={faSquareArrowUpRight} className="text-black w-6 h-6" />
              <span className="text-xs">Go to web</span>
            </a>
          ) :
          (
            <div className="flex flex-col items-center">
              <FontAwesomeIcon icon={faSquareArrowUpRight} className="text-black w-6 h-6" />
              <span className="text-xs">No online</span>
            </div>
          )
      
        }
        <a href={repoLink} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
          <FontAwesomeIcon icon={faGithub} className="text-black w-6 h-6" />
          <span className="text-xs">Repository</span>
        </a>
      </div>
    </div>
  </div>
);

// Componente principal
export default function Projectos() {
  const projects = [
    {
      title: "Game of Thrones web app",
      description:
        "App Web where you can create GOT's characters. App with user's authentication and bdd conection",
      images: [
        "https://thyrybfnmgjezqbsintw.supabase.co/storage/v1/object/public/imagenes/home1.png",
        "https://thyrybfnmgjezqbsintw.supabase.co/storage/v1/object/public/imagenes/login1.png",
        "https://thyrybfnmgjezqbsintw.supabase.co/storage/v1/object/public/imagenes/create1.png",
      ],
      technologies: [
        { component: SiTailwindcss, label: "Tailwind CSS" },
        { component: RiNextjsLine, label: "Next.js" },
        { component: SiTypescript, label: "TypeScript" },
      ],
      repoLink: "https://github.com/ClaudioMFCDev/GOT-api-next",
      liveLink: "https://got-api-nextjs.vercel.app",
    },
    //
    {
      title: "Petshop 'PATITAS'",
      description:
        "E-commerce about pet's products with search by categories, cart with subtotal, and customer and administrator profiles",
      images: [
        "https://thyrybfnmgjezqbsintw.supabase.co/storage/v1/object/public/e-commercePatitas/1.png",
        "https://thyrybfnmgjezqbsintw.supabase.co/storage/v1/object/public/e-commercePatitas/2.png",
      ],
      technologies: [
        { component: FaPhp, label: "PHP" },
        { component: DiCodeigniter, label: "CodeIgniter" },
        { component: FaBootstrap, label: "Bootstrap" },
      ],
      repoLink: "https://github.com/ClaudioMFCDev/Petshop-P-gina-Web",
      liveLink: "",
    },
  ];

  return (
    <section id="projects" className="container mx-auto w-2/3 p-4 mb-6">
      <h3 className="text-4xl sm:text-5xl text-center text-deepblue-500">Projects</h3>
      {projects.map((project, index) => (
        <EachProject key={index} {...project} />
      ))}
    </section>
  );
}
