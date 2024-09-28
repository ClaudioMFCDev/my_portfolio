import { faEnvelope, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "animate.css";
import IconWithLabel from "./IconWithLabel-dark";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import IconWithLabelDark from "./IconWithLabel-dark";

export default function Footer() {
  return (
    <section className="container mx-auto flex justify-center items-center w-full">
      <div className="flex flex-col sm:flex-row mt-0.5 sm:mt-1 sm:h-16 w-full justify-center">
        <div className="p-1 sm:p-4 pr-3 sm:pr-8 max-sm:border-b-2 max-sm:border-deepblue-500 sm:border-r-4 sm:border-deepblue-500 mr-1 sm:mr-2 flex items-center justify-center">
          <p className="text-2xl sm:text-3xl font-bold text-deepblue-500">ClauDev</p>
        </div>
        <div className="flex justify-center sm:flex-row mt-1 sm:space-x-4 ">
          <IconWithLabelDark icon={faLinkedin} label="" url="https://www.linkedin.com/in/claudio-castillo-dev" color="#8183ff" />
          <IconWithLabelDark icon={faEnvelope} label="" color="#8183ff" copyText="ccmf.dev@gmail.com" />
          <IconWithLabelDark icon={faGithub} label="" url="https://github.com/ClaudioMFCDev" color="#8183ff" />
        </div>
      </div>
    </section>
  );
}
