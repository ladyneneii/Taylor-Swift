import React from "react";
import { RiH4 } from "react-icons/ri";

type Props = {
  color?: string;
  subtitle?: string;
  children: React.ReactNode;
};

const Title = ({ color, subtitle, children }: Props) => {
  return (
    <div className="title__container">
      <h1 style={{ color: color || "white", marginBlockEnd: subtitle && 0 }}>
        {children}
      </h1>
      {subtitle && (
        <h4
          style={{ color: color || "white" }}
          dangerouslySetInnerHTML={{ __html: subtitle }}
        />
      )}
    </div>
  );
};

export default Title;
