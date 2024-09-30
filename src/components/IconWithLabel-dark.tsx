// components/IconWithLabel.tsx
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { IconType } from "react-icons"; // Importa el tipo de react-icons

// Define las props para el componente
type IconWithLabelProps = {
  icon?: IconProp;
  reactIcon?: IconType;
  svgSrc?: string;
  label: string;
  color: string;
  url?: string;
  copyText?: string;
};

// Define el componente
const IconWithLabelDark: React.FC<IconWithLabelProps> = ({
  icon,
  reactIcon: ReactIcon,
  svgSrc,
  label,
  color,
  url,
  copyText,
}) => {
  const [showCopiedMessage, setShowCopiedMessage] = useState(false);

  const handleClick = (event: React.MouseEvent) => {
    if (copyText) {
      event.preventDefault();
      navigator.clipboard
        .writeText(copyText)
        .then(() => {
            setShowCopiedMessage(true);//show message
            setTimeout( () => setShowCopiedMessage(false), 2000);
        })
        .catch((err) => {
          console.log("Error to copy: ", err);
        });
    }
  };

  return (
    <div className="flex flex-col items-center mx-2 sm:mx-4">
      <a
        href={url}
        onClick={handleClick}
        target={url ? "_blank" : undefined}
        rel="noopener noreferrer"
        className="bg-gray-800 rounded-full  p-1.5 cursor-pointer"
      >
        {icon ? (
          <FontAwesomeIcon
            icon={icon}
            style={{ color: color, width: "35px", height: "35px" }}
          />
        ) : ReactIcon ? (
          <ReactIcon size={35} color={color} />
        ) : svgSrc ? (
          <img
            src={svgSrc}
            alt={label}
            style={{ width: "35px", height: "35px" }}
            className="svg-icon"
          />
        ): null}
      </a>
      <span className="mt-1 sm:mt-2 text-sm sm:text-base">{label}</span>
      {/* Message of copied! */}
      {showCopiedMessage && (
        <div className="absolute pb-2 px-2 text-sm bg-deepblue-400 text-white rounded ">
          ¡Copiado!
        </div>
      )}
    </div>
  );
};

export default IconWithLabelDark;
