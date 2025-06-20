import "./styles.css";
import Carousel from "./Carousel";
import { blackish, eras, whitish } from "./types";
import { albums, heroEras, logos } from "@/data/img-data";
import { details } from "@/data/details";
import useMediaQuery from "@/hooks/useMediaQuery";
import Tracks from "./Tracks";
import Terminologies from "@/scenes/terminologies";
import DOMPurify from "dompurify";
import { Track } from "@/data/tracklists";

type Props = {
  eraNumber: number;
  eraTitle: string;
  textColor: string;
  track: Track;
  setSelectedEra: (value: string) => void;
  setTrack: (value: Track) => void;
  setShowSkipToTracks: (value: boolean) => void;
};

const EraContainer = ({
  eraNumber,
  eraTitle,
  textColor,
  track,
  setSelectedEra,
  setTrack,
  setShowSkipToTracks,
}: Props) => {
  const isLarge = useMediaQuery("(max-width: 1400px)");
  const isMedium = useMediaQuery("(max-width: 750px)");

  const heroEraStyle: Record<string, object> = {
    "Taylor Swift": {
      objectPosition: useMediaQuery("(min-width: 1600px)")
        ? "center 20%"
        : "center",
    },
    "Speak Now": {
      objectPosition: isMedium ? "70% center" : "center",
    },
    Red: {
      objectPosition: useMediaQuery("(min-width: 1600px)")
        ? "center 20%"
        : "center",
    },
    "1989": {
      objectPosition: useMediaQuery("(min-width: 1700px)")
        ? "center 25%"
        : "center",
    },
    Lover: {
      objectPosition: "top",
    },
    Folklore: {
      objectPosition: useMediaQuery("(min-width: 1700px)")
        ? "center 30%"
        : "center",
    },
    Evermore: {
      objectPosition: isLarge ? "90%" : "center",
    },
    Midnights: {
      objectPosition: "top",
    },
    TTPD: {
      objectPosition: !useMediaQuery("(max-width: 950px)") ? "40%" : "35%",
    },
  };

  const logoStyle = {
    height: isMedium
      ? "auto"
      : eras[eraNumber] === "Red" || eras[eraNumber] === "TTPD"
      ? "170px"
      : "120px",
    backgroundColor:
      eraTitle === "Reputation" ? "rgba(255, 255, 255, 0.5)" : "",
    boxShadow:
      eraTitle === "Reputation" ? "inset 0 0 2rem rgba(0, 0, 0, 0.9)" : "",
  };

  const sanitizedDetails = DOMPurify.sanitize(details[eraNumber - 1]);

  // console.log(`this is eraTitle: ${eraTitle}`);

  return (
    <div
      className="era-container"
      style={{ color: textColor, borderColor: textColor }}
   
    >
      {/* HERO SECTION */}
      {eraTitle !== "Home" && (
        <div className="era-hero">
          <img
            src={heroEras[eraNumber - 1]}
            alt={heroEras[eraNumber - 1]}
            className="era-hero-img"
            style={heroEraStyle[eraTitle]}
          />
          <div className="hero-overlay"></div>
          <div
            className="title-desc-album-photo"
            style={{
              paddingBlockEnd:
                eraTitle === "TTPD" ? (!isLarge ? "1rem" : "4rem") : "10rem",
            }}
          >
            <div
              className="title-desc"
              style={{ order: isLarge ? -2 : 0 }}
              // initial="hidden"
              // whileInView="visible"
              // viewport={{ once: false, amount: 0.5 }}
              // transition={{ duration: 0.5 }}
              // variants={{
              //   hidden: { opacity: 0 },
              //   visible: { opacity: 1, x: 0 },
              // }}
            >
              <img
                src={logos[eraNumber - 1]}
                alt={`${eras[eraNumber]}-album-cover`}
                style={logoStyle}
              />
              <p
                style={{ color: "white" }}
                dangerouslySetInnerHTML={{ __html: sanitizedDetails }}
              ></p>
            </div>
            <div
              className="album-photo"
              style={{ order: eraNumber % 2 !== 0 ? -1 : 1 }}
              // initial="hidden"
              // whileInView="visible"
              // viewport={{ once: false, amount: 0.5 }}
              // transition={{ duration: 0.5 }}
              // variants={{
              //   hidden: { opacity: 0 },
              //   visible: { opacity: 1, x: 0 },
              // }}
            >
              {eraTitle === "TTPD" ? (
                <img
                  src="/images/album-ttpd-standard.png"
                  alt="/images/album-ttpd-standard.png"
                />
              ) : (
                <img src={albums[eraNumber - 1]} alt={albums[eraNumber - 1]} />
              )}
            </div>
          </div>

          {eraTitle === "TTPD" && (
            <div
              className="title-desc-album-photo"
              style={{ paddingBlockStart: !isLarge ? "1rem" : "4rem" }}
            >
              <div
                className="title-desc"
                // initial="hidden"
                // whileInView="visible"
                // viewport={{ once: false, amount: 0.5 }}
                // transition={{ duration: 0.5 }}
                // variants={{
                //   hidden: { opacity: 0 },
                //   visible: { opacity: 1, x: 0 },
                // }}
              >
                <img
                  src="/images/logo-the-anthology-transparent.png"
                  alt={`${eras[eraNumber]}-album-cover`}
                />
                <p style={{ color: "white" }}>
                  This album covers a variety of emotions, whether you are going
                  through a heartbreak, grieving someone you just lost, being
                  betrayed by someone you cared for, being manipulated and
                  gaslit by an ex-lover, expressing your anger for being used,
                  making a choice between missing someone or taking your
                  revenge, falling in love with someone so hard you make up
                  scenarios of them in your head, going back to high school for
                  nostalgia, coming to terms with your bully and thanking them
                  retrospectively for making you a strong person, ending a
                  6-year relationship when you're about to get married, getting
                  back at the people who wronged you, and just dying at the fact
                  that you still have not understood how it came to be and how
                  it ended just like that. This album is A LOT to take in, so
                  make sure to take your time listening to it.
                </p>
              </div>
              <div
                className="album-photo"
                // initial="hidden"
                // whileInView="visible"
                // viewport={{ once: false, amount: 0.5 }}
                // transition={{ duration: 0.5 }}
                // variants={{
                //   hidden: { opacity: 0 },
                //   visible: { opacity: 1, x: 0 },
                // }}
              >
                <img src={albums[eraNumber - 1]} alt={albums[eraNumber - 1]} />
              </div>
            </div>
          )}
        </div>
      )}

      {/* TRACKS SECTION */}
      {eraTitle === "Home" ? (
        <Terminologies setSelectedEra={setSelectedEra} />
      ) : (
        <Tracks
          textColor={textColor}
          eraNumber={eraNumber}
          track={track}
          setTrack={setTrack}
          setShowSkipToTracks={setShowSkipToTracks}
        />
      )}

      {/* CAROUSEL SECTION */}
      {eraTitle !== "Home" && (
        <Carousel
          bgColor={textColor === "white" ? blackish : whitish}
          eraNumber={eraNumber}
        />
      )}
      {/* {eraTitle !== "Home" &&
        quotes[eraNumber - 1].map((lyrics, index) => (
          <Lyrics key={index} eraNumber={eraNumber} lyrics={lyrics} />
        ))} */}
    </div>
  );
};

export default EraContainer;
