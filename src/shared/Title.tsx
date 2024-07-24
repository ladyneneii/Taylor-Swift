import { eras, erasColor } from "./types";

type Props = {
  subtitle?: string;
  children: React.ReactNode | string;
};

const Title = ({ subtitle, children }: Props) => {
  const era = typeof children === "string" ? children : "";

  return (
    <div className="title__container">
      <h1
        style={{
          fontFamily: era === "1989" ? "PistilliRoman" : undefined,
          transform: era === "1989" ? "scale(0.6, 1)" : undefined,
        }}
      >
        {children}
      </h1>
      {subtitle && (
        <h4
          style={{
            fontWeight: erasColor[eras.indexOf(era)] === "black" ? 500 : 100,
          }}
          dangerouslySetInnerHTML={{ __html: subtitle }}
        />
      )}
    </div>
  );
};

export default Title;
