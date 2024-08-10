import "./styles.css";
import TaylorSwift from "@/assets/taylor-swift.jpg";
import FearlessTV from "@/assets/fearless-logo.png";
import SpeakNowTV from "@/assets/speak-now-logo.png";
import RedTV from "@/assets/red-logo.png";
import NineteenEightyNineTV from "@/assets/1989-logo.png";
import { eras, formatEraId } from "@/shared/types";
import Button from "@/shared/Button";

type Props = {
  setSelectedEra: (value: string) => void;
};

const Terminologies = ({ setSelectedEra }: Props) => {
  const getCurrentDateFormatted = (): string => {
    const currentDate = new Date();

    const year = currentDate.getFullYear();
    const month = currentDate.toLocaleString("en-US", { month: "long" });
    const day = currentDate.getDate();

    const daySuffix = (day: number): string => {
      if (day > 3 && day < 21) return "th"; // covers 4th to 20th
      switch (day % 10) {
        case 1:
          return "st";
        case 2:
          return "nd";
        case 3:
          return "rd";
        default:
          return "th";
      }
    };

    return `${day}${daySuffix(day)} of ${month}, ${year}`;
  };

  const handleButtonClick = (era: string) => {
    setSelectedEra(era);
    // window.scrollTo({ top: 0 });

    /// Temporarily disable smooth scrolling
    document.documentElement.style.scrollBehavior = "auto";

    // Scroll to the top of the page without smooth scrolling
    window.scrollTo({ top: 0 });

    // Restore smooth scrolling after the operation
    setTimeout(() => {
      document.documentElement.style.scrollBehavior = "";
    }, 0);
  };
  
  return (
    <div id="terms" className="terms__container">
      <div className="h1-container">
        <h1>
          Some Terminologies Before <span className="nowrap">We Start</span>
        </h1>
      </div>
      <div className="terms__eras-tv-container">
        <div className="terms__ts-container">
          <h1>Who is Taylor Swift?</h1>
          <div className="terms__ts-pic-text-container">
            <div className="terms__ts-pic-media-title-container">
              <div className="terms__ts-pic-container">
                <img src={TaylorSwift} alt="taylor-swift-golden-globes" />
              </div>
              <div>
                <p className="media-title">
                  <span className="nowrap">Taylor Swift</span> at the Golden
                  Globes 2024
                </p>
              </div>
            </div>
            <div className="terms__about-taylor">
              <p>
                Taylor Alison Swift is an American songwriter, singer, and
                musician who tells vivid, artistic, and poetic stories through
                her music. She was born in 1989 on the 13th of December, started
                her career in 2006, and has released 11 albums since then. She
                used to make country music, but now she has been exploring other
                genres of music that can be enjoyed by all ages. Her discography
                is a lot more diverse than what a lot of people take credit her
                for, but she excels at making songs that are too relatable as if
                she has known you all her life. For some reason, she always has
                songs for every emotion you feel and for every stage of life you
                are at. She stays authentic to her aesthetic and does not
                attempt to please a target audience to gain their favor. Her
                music is as raw and real as it gets.
              </p>
              <p>
                As proof of her hard work, she has won multiple awards and is
                the first and only artist to win the GRAMMY for Album Of The
                Year four times. She is regarded as THE music industry for a
                reason.
              </p>
            </div>
          </div>
        </div>
        <div className="terms__eras-container">
          <h1>What is the Eras Tour?</h1>
          <div className="terms__eras-vid-container">
            <div>
              <p>
                The Eras Tour is Taylor Swift's sixth concert and worldwide
                tour, starting in March 2023 and ending in December 2024. She
                divides the setlist of the 3-hour concert into her first 11
                albums or eras (10 eras at first before the release of the 11th
                album last April 2024), each having its dedicated set excluding
                the first album. The setlist is already predetermined, except
                for the songs in the acoustic set, where she plays any songs (or
                mash-ups thereof) from any of her 11 albums on a guitar or
                piano, hence so famously called the "surprise songs".
              </p>
              <p>
                On the 13th of October, 2023, Taylor Swift released a film
                version of the Eras Tour with some songs excluded due to the
                film's length.
              </p>
            </div>
            <div className="terms__iframe-container">
              <iframe
                src="https://www.youtube.com/embed/KudedLV0tP0?si=SwmdGfcIKuyPOj2Y"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
              <p className="media-title">THE ERAS TOUR CONCERT FILM TRAILER</p>
            </div>
          </div>
        </div>
        <div className="terms__tv-container">
          <h1>What is Taylor's Version (TV)?</h1>
          <div className="terms__tv-pics-text-container">
            <div className="terms__tv-pics-media-title-container">
              <div className="terms__tv-pics-container">
                <div>
                  <img src={FearlessTV} alt="fearless-tv-logo" />
                </div>
                <div>
                  <img src={SpeakNowTV} alt="speak-now-tv-logo" />
                </div>
                <div>
                  <img src={RedTV} alt="red-tv-logo" />
                </div>
                <div>
                  <img src={NineteenEightyNineTV} alt="1989-tv-logo" />
                </div>
              </div>
              <div>
                <p className="media-title">
                  Albums that currently have a{" "}
                  <span className="nowrap">Taylor's Version</span>
                </p>
              </div>
            </div>
            <p>
              Taylor's Version refers to Taylor Swift's rerecording of her first
              six albums (
              <span style={{ fontStyle: "italic" }}>Taylor Swift</span>,
              Fearless, Speak Now, Red, 1989, and{" "}
              <span style={{ fontStyle: "italic" }}>reputation</span>) after the
              master recordings of the six original (stolen) albums were sold to
              Scooter Braun without Taylor's consent. This meant that Scooter
              was in full control over the albums, which Taylor was unhappy
              about. After all her failed attempts at negotiation with Scooter
              to regain her rights over her masters, she ultimately decided to
              rerecord and rerelease the six albums under{" "}
              <span className="nowrap">
                <strong>Taylor's Version</strong>.
              </span>{" "}
              Therefore, if you see a Taylor Swift song from any of the first
              six albums with Taylor's Version in parentheses next to the title,
              it means Taylor{" "}
              <span className="nowrap">
                <strong>fully owns</strong>
              </span>{" "}
              that song.
            </p>
          </div>
          <p>
            As of the {getCurrentDateFormatted()}, Taylor Swift has yet to
            release the Taylor's Version of{" "}
            <span style={{ fontStyle: "italic" }}>Taylor Swift</span> (first and
            debut album) and{" "}
            <span style={{ fontStyle: "italic" }}>reputation</span> (sixth
            album).
          </p>
        </div>
      </div>
      <div className="eras-btns-list text-center">
        <h1>
          Freely explore the magical eras of{" "}
          <span className="nowrap">Taylor Swift's</span> music.
        </h1>
        <div className="eras-btns-grid">
          {eras.slice(1).map((era, index) => (
            <div
              key={index}
              className="eras-btn-container"
              onClick={() => handleButtonClick(era)}
            >
              <Button
                bgcolor="white"
                color="black"
                // dest={`#${formatEraId(era)}`}
                dest="#"
                isWebsite={false}
              >
                {era}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Terminologies;
