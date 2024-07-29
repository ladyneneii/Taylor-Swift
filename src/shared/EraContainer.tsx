import React from "react";
import "./styles.css";
import Carousel from "./Carousel";
import { blackish, CarouselProps, eras, whitish } from "./types";
import Lyrics from "./Lyrics";
import { LyricsTitle } from "@/data/lyrics";
import { albums, heroEras, logos } from "@/data/img-data";
import { details } from "@/data/details";
import useMediaQuery from "@/hooks/useMediaQuery";

type Props = {
  eraNumber: number;
  eraTitle: string;
  textColor: string;
  bgcolor: string;
  children: React.ReactNode;
  pictures?: Array<CarouselProps>;
  lyricsArr?: Array<LyricsTitle>;
};

const EraContainer = ({
  eraNumber,
  eraTitle,
  textColor,
  bgcolor,
  children,
  pictures,
  lyricsArr,
}: Props) => {
  const isTablet = useMediaQuery("(max-width: 1400px)");
  const isMedium = useMediaQuery("(max-width: 750px)");

  const formatEraId = (currEra: string) => {
    return currEra?.toLowerCase().replace(/\s+/g, "");
  };

  const eraId = formatEraId(eraTitle);

  const heroEraStyle: Record<string, object> = {
    "Taylor Swift": useMediaQuery("(min-width: 1600px)")
      ? {
          objectPosition: "center 20%",
        }
      : {
          objectPosition: "center",
        },
    "Speak Now": isMedium
      ? {
          objectPosition: "70% center",
        }
      : {
          objectPosition: "center",
        },
    Red: useMediaQuery("(min-width: 1600px)")
      ? {
          objectPosition: "center 20%",
        }
      : {
          objectPosition: "center",
        },
    "1989": useMediaQuery("(min-width: 1700px)")
      ? {
          objectPosition: "center 25%",
        }
      : {
          objectPosition: "center",
        },
    Lover: {
      objectPosition: "top",
    },
    Folklore: useMediaQuery("(min-width: 1700px)")
      ? {
          objectPosition: "center 30%",
        }
      : {
          objectPosition: "center",
        },
    Midnights: {
      objectPosition: "top",
    },
    TTPD: {
      transform: "scaleX(-1)",
    },
  };

  return (
    <section
      className="era-container"
      style={{ background: bgcolor, color: textColor, borderColor: textColor }}
      id={eraId}
    >
      {eraTitle !== "Home" && (
        <div className="era-hero">
          <img
            src={heroEras[eraNumber - 1]}
            alt={heroEras[eraNumber - 1]}
            className="era-hero-img"
            style={heroEraStyle[eraTitle]}
          />
          <div
            className="hero-overlay"
            style={{ background: "rgba(0, 0, 0, 0.6)" }}
            // style={{ background: overlayColors[eraNumber - 1] }}
          ></div>
          <div className="title-desc-album-photo">
            <div className="title-desc" style={{ order: isTablet ? -2 : 0 }}>
              <img
                src={logos[eraNumber - 1]}
                alt={`${eras[eraNumber]}-album-cover`}
                style={{
                  height: isMedium
                    ? "auto"
                    : eras[eraNumber] === "Red" || eras[eraNumber] === "TTPD"
                    ? "170px"
                    : "120px",
                  backgroundColor:
                    eraTitle === "Reputation" ? "rgba(255, 255, 255, 0.5)" : "",
                  boxShadow:
                    eraTitle === "Reputation"
                      ? "inset 0 0 2rem rgba(0, 0, 0, 0.9)"
                      : "",
                }}
              />
              <p style={{ color: "white" }}>{details[eraNumber - 1]}</p>
            </div>
            <div
              className="album-photo"
              style={{ order: eraNumber % 2 !== 0 ? -1 : 1 }}
            >
              {eraTitle === "TTPD" && (
                <img
                  src="/images/album-ttpd-standard.png"
                  alt="/images/album-ttpd-standard.png"
                />
              )}
              <img src={albums[eraNumber - 1]} alt={albums[eraNumber - 1]} />
            </div>
          </div>
        </div>
      )}

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
