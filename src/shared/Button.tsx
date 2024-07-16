import React, { useState } from "react";
import "./styles.css";

type Props = {
  bgcolor: string;
  color: string;
  children: React.ReactNode;
};

const Button = ({ bgcolor, color, children }: Props) => {
  const [isHovered, SetIsHovered] = useState(false);
  return (
    <button
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
