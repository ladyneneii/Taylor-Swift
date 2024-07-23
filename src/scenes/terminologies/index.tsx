import React from "react";
import "./styles.css";
import Title from "@/shared/Title";
import FearlessTV from "@/assets/fearless-logo.png";
import SpeakNowTV from "@/assets/speak-now-logo.png";
import RedTV from "@/assets/red-logo.png";
import NineteenEightyNineTV from "@/assets/1989-logo.png";

const Terminologies = () => {
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

  return (
    <div id="terms" className="terms__container">
      <Title>
        Some Terminologies Before <span className="nowrap">We Start</span>
      </Title>
      <div className="terms__eras-tv-container">
        <div className="terms__eras-container">
          <h1>What is the Eras Tour?</h1>
          <div className="terms__eras-vid-container">
            <p>
              The Eras Tour is Taylor Swift's sixth concert and worldwide tour,
              starting in March 2023 and ending in December 2024. She divides
              the setlist of the 3-hour concert into her first 11 albums or eras
              (10 eras at first before the release of the 11th album last April
              2024), each having its dedicated set excluding the first album. The setlist is already
              predetermined, except for the songs in the acoustic set, where she
              plays any songs from any of her 11 albums on a guitar or piano, hence so famously called the "surprise songs." <br />
              <p>
                On the 13th of October, 2023, Taylor Swift released a film
                version of the Eras Tour with some songs excluded due to the
                film's length.
              </p>
            </p>
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
              six albums (Taylor Swift, Fearless, Speak Now, Red, 1989, and
              Reputation) after the master recordings of the six original
              (stolen) albums were sold to Scooter Braun without Taylor's
              consent. This meant that Scooter was in full control over the
              albums, which Taylor was unhappy about. After all her failed
              attempts at negotiation with Scooter to regain her rights over her
              masters, she ultimately decided to rerecord and rerelease the six
              albums under{" "}
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
            release the Taylor's Version of Taylor Swift (first and debut album)
            and Reputation (sixth album).
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terminologies;
