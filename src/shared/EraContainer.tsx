import React from "react";
import "./styles.css"

type Props = {
    bgcolor: string;
    children: React.ReactNode
};

const EraContainer = ({bgcolor, children}: Props) => {
  return (
    <section className="era-container" style={{ background: bgcolor }}>
      <div className="era-container-padding">
        {children}
      </div>
    </section>
  );
};

export default EraContainer;
