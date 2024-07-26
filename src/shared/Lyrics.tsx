import React from "react";
import { blackish, whitish } from "./types";
import useMediaQuery from "@/hooks/useMediaQuery";
import { LyricsTitle } from "@/data/lyrics";

type Props = {
  eraNumber: number;
  lyrics: LyricsTitle;
};

const Lyrics = ({ eraNumber, lyrics }: Props) => {
  const isPhone = useMediaQuery("(max-width: 450px)");

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

  const { lines, songTitle, maxWidth } = lyrics;
  const lineIndent = lines.length > 3 ? 0 : !isPhone ? 5 : 2.5;

  return (
    <div
      className="quote__container"
      // style={{ color: lyricsColor[eraNumber - 1] }}
    >
      <div
        className="lyrics__container"
        style={{ color: lyricsColor[eraNumber - 1], maxWidth: maxWidth }}
        // style={{ color: "white" }}
      >
        {lines.map((line, index) => (
          <h1
            key={index}
            style={{
              textIndent: `${
                !isPhone ? index * lineIndent : index * lineIndent
              }rem`,
            }}
          >
            {line}
          </h1>
        ))}
      </div>
      <div className="cite-container">
        <cite style={{ color: citeColor[eraNumber - 1] }}>{songTitle}</cite>
      </div>
    </div>
  );
};

export default Lyrics;
