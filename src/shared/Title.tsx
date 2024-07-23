import React from "react";
import { RiH4 } from "react-icons/ri";

type Props = {
  subtitle?: string;
  children: React.ReactNode;
};

const Title = ({ subtitle, children }: Props) => {
  return (
    <div className="title__container">
      <h1 style={{ marginBlockEnd: subtitle && 0 }}>
        {children}
      </h1>
      {subtitle && (
        <h4
          dangerouslySetInnerHTML={{ __html: subtitle }}
        />
      )}
    </div>
  );
};

export default Title;
