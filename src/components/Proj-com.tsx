import ImageCarousel from "./ImageCorousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { SiBootstrap, SiCss3, SiCsswizardry, SiDjango, SiGooglecolab, SiNestjs, SiPython, SiTailwindcss, SiTypescript } from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";
import { IconContext } from "react-icons";
import { FaBootstrap, FaPhp, FaTable } from "react-icons/fa";
import { DiCodeigniter, DiDjango } from "react-icons/di";
import { BiLogoPostgresql } from "react-icons/bi";
import { GiSnakeSpiral } from "react-icons/gi";

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
      <div className="flex justify-center items-center h-14 bg-white rounded m-1">
        <IconContext.Provider value={{ className: "react-icons", size: "2em", color: "#534eff" }}>
          {technologies.map(({ component: Icon, label }, index) => (
            <div key={index} className="flex flex-col items-center mx-4">
              <Icon />
              <span className="mt-1 text-xs text-gray-600">{label}</span>
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
      title: "CineAstas web app",
      description:
        "App Web where you can create GOT's characters. App with user's authentication and bdd conection",
      images: [
        "https://thyrybfnmgjezqbsintw.supabase.co/storage/v1/object/public/cineastas//cine1.png",
        "https://thyrybfnmgjezqbsintw.supabase.co/storage/v1/object/public/cineastas//cine2.png",
        "https://thyrybfnmgjezqbsintw.supabase.co/storage/v1/object/public/cineastas//cine3.png",
      ],
      technologies: [
        { component: SiTailwindcss, label: "Tailwind" },
        { component: SiNestjs, label: "Nest.js" },
        { component: SiTypescript, label: "TypeScript" },
      ],
      repoLink: "https://github.com/No-Country-simulation/s21-21-webapp",
      liveLink: "https://cine-astas.vercel.app/",
    },
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
        { component: SiTailwindcss, label: "Tailwind" },
        { component: RiNextjsLine, label: "Next.js" },
        { component: SiTypescript, label: "TypeScript" },
      ],
      repoLink: "https://github.com/ClaudioMFCDev/GOT-api-next",
      liveLink: "https://got-api-nextjs.vercel.app",
    },
    {
      title: "FreeTransfer App",
      description:
        "App that simulates a virtual wallet, where new users can register, make transfers to favorite users.",
      images: [
        "https://thyrybfnmgjezqbsintw.supabase.co/storage/v1/object/sign/projects/freetransfer_home.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9qZWN0cy9mcmVldHJhbnNmZXJfaG9tZS5wbmciLCJpYXQiOjE3MzI2NDk3MDMsImV4cCI6MjA0ODAwOTcwM30.asRtcNSPJoKRJHFlgIqjvNI6xumRvjRVjWDxGV9fMV8",
        "https://thyrybfnmgjezqbsintw.supabase.co/storage/v1/object/public/projects/freetransfer_movimientos.png",
        "https://thyrybfnmgjezqbsintw.supabase.co/storage/v1/object/public/projects/freetransfer_favoritos.png",
      ],
      technologies: [
        { component: SiBootstrap, label: "Bootstrap" },
        { component: BiLogoPostgresql, label: "PostGresql" },
        { component: DiDjango, label: "Django" },
      ],
      repoLink: "https://github.com/ClaudioMFCDev/free_trasnsfer",
      liveLink: "",
    },
    //
    {
      title: "Restorant App",
      description:
        "App to make tickets for a restaurant, including a list of drinks, meals and desserts",
      images: [
        "https://thyrybfnmgjezqbsintw.supabase.co/storage/v1/object/public/projects/fac1.png",
        "https://thyrybfnmgjezqbsintw.supabase.co/storage/v1/object/public/projects/fac2.png",
        "https://thyrybfnmgjezqbsintw.supabase.co/storage/v1/object/public/projects/fac3.png",
        "https://thyrybfnmgjezqbsintw.supabase.co/storage/v1/object/public/projects/fac4.png",
      ],
      technologies: [
        { component: FaTable, label: "Tkintertable" },
        { component: SiPython, label: "Python" },
      ],
      repoLink: "https://github.com/ClaudioMFCDev/free_trasnsfer",
      liveLink: "",
    },
    //
    {
      title: "Space Invasion Game",
      description:
        "Game about an space invasion, the classic game where you can shot the invaders, which increases your score, until one of the ships manages to touch you",
      images: [
        "https://thyrybfnmgjezqbsintw.supabase.co/storage/v1/object/public/projects/invasion_1.png",
        "https://thyrybfnmgjezqbsintw.supabase.co/storage/v1/object/public/projects/invasion_2.png",
        "https://thyrybfnmgjezqbsintw.supabase.co/storage/v1/object/public/projects/invasion_3.png",
      ],
      technologies: [
        { component: SiPython, label: "Python" },
        { component: GiSnakeSpiral, label: "PyGame" },
      ],
      repoLink: "https://github.com/ClaudioMFCDev/space_invasion.git",
      liveLink: "",
    },
    {
      title: "Titanic machine learning",
      description:
        "Analysis of a data set of Titanic survivors, training of a decision tree and measuring its results",
      images: [
        "https://thyrybfnmgjezqbsintw.supabase.co/storage/v1/object/public/projects/mll1.png",
        "https://thyrybfnmgjezqbsintw.supabase.co/storage/v1/object/public/projects/mll2.png",
        "https://thyrybfnmgjezqbsintw.supabase.co/storage/v1/object/public/projects/mll3.png",
      ],
      technologies: [
        { component: SiGooglecolab, label: "Google Colab" },
        { component: SiPython, label: "Python" },
      ],
      repoLink: "https://colab.research.google.com/drive/11ad5tmBNc0bCobEVtysIVRzrf34gp8h5?usp=sharing",
      liveLink: "https://drive.google.com/file/d/1mnwQcaCTu2UTOr26D7bkZzdArv--kJWZ/view?usp=sharing",
    },
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
