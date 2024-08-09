import React, { useState } from "react";
import "./styles.css";

type Props = {
  bgcolor: string;
  color: string;
  dest: string;
  children: React.ReactNode;
  isWebsite: boolean;
};

const Button = ({ bgcolor, color, dest, children, isWebsite }: Props) => {
  const [isHovered, SetIsHovered] = useState(false);
  const oppBgColor = bgcolor === "black" ? "white" : "black";

  return (
    <a href={dest} target={isWebsite ? "_blank" : ""}>
      <button
        onMouseEnter={() => SetIsHovered(true)}
        onMouseLeave={() => SetIsHovered(false)}
        style={{
          backgroundColor: isHovered ? oppBgColor : bgcolor,
          borderColor: bgcolor,
          color: !isHovered ? color : color === "white" ? "black" : "white",
          cursor: isHovered ? "pointer" : "",
        }}
      >
        <p>{children}</p>
      </button>
    </a>
  );
};

export default Button;
