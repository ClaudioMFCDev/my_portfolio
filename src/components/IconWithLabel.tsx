// components/IconWithLabel.tsx
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

// Define las props para el componente
type IconWithLabelProps = {
  icon?: IconProp;
  svgSrc?: string;
  label: string;
  color: string;
  url?: string;
  copyText?: string;
};

// Define el componente
const IconWithLabel: React.FC<IconWithLabelProps> = ({
  icon,
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
    <div className="flex flex-col items-center mx-4">
      <a
        href={url}
        onClick={handleClick}
        target={url ? "_blank" : undefined}
        rel="noopener noreferrer"
        className="bg-black rounded-full p-2 cursor-pointer"
      >
        {icon ? (
          <FontAwesomeIcon
            icon={icon}
            style={{ color: color, width: "40px", height: "40px" }}
          />
        ) : (
          <img
            src={svgSrc}
            alt={label}
            style={{ width: "50px", height: "50px" }}
            className="svg-icon"
          />
        )}
      </a>
      <span className="mt-2">{label}</span>
      {/* Message of copied! */}
      {showCopiedMessage && (
        <div className="absolute pb-2 px-2 text-sm bg-deepblue-400 text-white rounded">
          ¡Copiado!
        </div>
      )}
    </div>
  );
};

export default IconWithLabel;
