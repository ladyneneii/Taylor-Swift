import React from "react";
import { blackish, whitish } from "./types";

type Props = {
  eraNumber: number;
  lines: Array<string>;
};

const Lyrics = ({ eraNumber, lines }: Props) => {
  const lyricsColor = [
    "white",
    "white",
    "white",
    "white",
    "white",
    "black",
    "white",
    "white",
    "white",
    "white",
    "white",
  ];

  const citeColor = [
    blackish,
    whitish,
    blackish,
    blackish,
    blackish,
    blackish,
    blackish,
    blackish,
    whitish,
    whitish,
    blackish,
  ];

  return (
    <div
      className="quote__container"
      // style={{ color: lyricsColor[eraNumber - 1] }}
    >
      <div
        className="lyrics__container"
        style={{ color: lyricsColor[eraNumber - 1], maxWidth: "1386.5px" }}
        // style={{ color: "white" }}
      >
        <h1>{lines[0]}</h1>
        <h1>{lines[1]}</h1>
        <h1>{lines[2]}</h1>
      </div>
      <div className="cite-container">
        <cite style={{ color: citeColor[eraNumber - 1] }}>
          Teardrops On My Guitar (Taylor Swift, 2009)
        </cite>
      </div>
    </div>
  );
};

export default Lyrics;
