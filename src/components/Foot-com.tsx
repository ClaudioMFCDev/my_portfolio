import { faEnvelope, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "animate.css";
import IconWithLabel from "./IconWithLabel";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <section className="container mx-auto flex justify-center items-center">
      <div className="flex mt-1 h-16">
        <div className="p-4 pr-8 border-r-4 border-deepblue-500 mr-2">
          <p className="text-3xl font-bold text-deepblue-500">ClauDev</p>
        </div>
        <div>
          <div className=" flex mt-1">
            <IconWithLabel icon={faLinkedin} label="" url="https://www.linkedin.com/in/claudio-castillo-dev" color="#8183ff" />
            
            <IconWithLabel icon={faEnvelope} label="" color="#8183ff" copyText="ccmf.dev@gmail.com" />
            <IconWithLabel icon={faGithub} label="" url="https://github.com/ClaudioMFCDev" color="#8183ff" />
          </div>
        </div>
      </div>

      {/* <div className="flex">
        <div className="h-12 w-12 mx-4 bg-white">
          <FontAwesomeIcon
            className="hover:animate__animated hover:animate-bounce"
            icon={faEnvelope}
            style={{ color: "#000000", padding: 6 }}
          />
        </div>
        <div className="h-12 w-12 mx-2 bg-white">
          <FontAwesomeIcon
            icon={faSpinner}
            size="2x"
            className="hover:animate-spin"
            style={{ color: "#000000", padding: 6 }}
          />
        </div>
      </div> */}
    </section>
  );
}
