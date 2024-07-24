import React from "react";
import "./styles.css";
import Carousel from "./Carousel";
import { CarouselProps } from "./types";
import Lyrics from "./Lyrics";

type Props = {
  eraNumber: number;
  textColor: string;
  bgcolor: string;
  children: React.ReactNode;
  pictures?: Array<CarouselProps>;
  lyrics?: Array<string>;
};

const EraContainer = ({
  eraNumber,
  textColor,
  bgcolor,
  children,
  pictures,
  lyrics,
}: Props) => {
  return (
    <section
      className="era-container"
      style={{ background: bgcolor, color: textColor, borderColor: textColor }}
    >
      <div className="era-container-padding">{children}</div>
      {pictures && (
        <Carousel
          bgColor={textColor === "white" ? "black" : "white"}
          pictures={pictures}
        />
      )}
      {lyrics && (
        <Lyrics eraNumber={eraNumber} lines={lyrics} />
      )}
    </section>
  );
};

export default EraContainer;
