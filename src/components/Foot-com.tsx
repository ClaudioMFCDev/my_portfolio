import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer(){
    return (
        <section className="container mx-auto p-4 mb-6">
            <h3 className="text-7xl text-center">Footer</h3>
            <div className="bg-white h-12 w-12">
                <FontAwesomeIcon className="bounceInRight" icon={faEnvelope } style={{color: "#74C0FC", padding: 6}} beat />
                <FontAwesomeIcon className="beat" icon={faEnvelope} beat />
            </div>
        </section>
    )
}