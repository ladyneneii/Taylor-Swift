import React from "react";
import "./styles.css";
import Carousel from "./Carousel";
import { blackish, CarouselProps, whitish } from "./types";
import Lyrics from "./Lyrics";
import { LyricsTitle } from "@/data/lyrics";

type Props = {
  eraNumber: number;
  textColor: string;
  bgcolor: string;
  children: React.ReactNode;
  pictures?: Array<CarouselProps>;
  lyricsArr?: Array<LyricsTitle>;
};

const EraContainer = ({
  eraNumber,
  textColor,
  bgcolor,
  children,
  pictures,
  lyricsArr,
}: Props) => {
  return (
    <section
      className="era-container"
      style={{ background: bgcolor, color: textColor, borderColor: textColor }}
    >
      <div className="era-container-padding">{children}</div>
      {pictures && (
        <Carousel
          bgColor={textColor === "white" ? blackish : whitish}
          pictures={pictures}
        />
      )}
      {lyricsArr &&
        lyricsArr.map((lyrics, index) => (
          <Lyrics key={index} eraNumber={eraNumber} lyrics={lyrics} />
        ))}
    </section>
  );
};

export default EraContainer;
