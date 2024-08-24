import { faEnvelope, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "animate.css";

export default function Footer() {
  return (
    <section className="container mx-auto p-4 mb-6">
      <h3 className="text-7xl text-center hover:animate__animated animate__bounce">
        Footer
      </h3>
      <div className="flex">
      <div className="h-12 w-12 mx-4 bg-white">
        <FontAwesomeIcon
          className="hover:animate__animated hover:animate-bounce"
          icon={faEnvelope}
          style={{ color: "#000000", padding: 6}}
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
      </div>
    </section>
  );
}
