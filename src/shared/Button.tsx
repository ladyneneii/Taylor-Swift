import React, { useState } from "react";
import "./styles.css";

type Props = {
  bgcolor: string;
  color: string;
  section: string;
  children: React.ReactNode;
};

const Button = ({ bgcolor, color, section, children }: Props) => {
  const [isHovered, SetIsHovered] = useState(false);

  return (
    <button
      // onClick={() => (window.location.hash = "terms")}
      onClick={() => document.getElementById(section)?.scrollIntoView({ behavior: "smooth" })}
      onMouseEnter={() => SetIsHovered(true)}
      onMouseLeave={() => SetIsHovered(false)}
      style={{
        backgroundColor: isHovered ? "transparent" : bgcolor,
        borderColor: bgcolor,
        color: !isHovered ? color : color === "white" ? "black" : "white",
        cursor: isHovered ? "pointer" : "",
      }}
    >
      <p>{children}</p>
    </button>
  );
};

export default Button;
