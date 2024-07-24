import { eras, erasColor } from "./types";

type Props = {
  details?: string;
  children: React.ReactNode | string;
};

const Title = ({ details, children }: Props) => {
  const era = typeof children === "string" ? children : "";

  const hasTV = [
    false,
    true,
    true,
    true,
    true,
    false,
    false,
    false,
    false,
    false,
    false,
  ];

  return (
    <div className="title__container">
      <h1
        style={{
          fontFamily: era === "1989" ? "PistilliRoman" : undefined,
          transform: era === "1989" ? "scale(0.6, 1)" : undefined,
          fontWeight: erasColor[eras.indexOf(era)] === "black" ? 800 : 500,
        }}
      >
        {children}
      </h1>

      {hasTV[eras.indexOf(era) - 1] && <h2>(TAYLOR'S VERSION)</h2>}

      {details && (
        <h4
          style={{
            fontWeight: erasColor[eras.indexOf(era)] === "black" ? 500 : 100,
          }}
        >
          {details}
        </h4>
      )}
    </div>
  );
};

export default Title;
