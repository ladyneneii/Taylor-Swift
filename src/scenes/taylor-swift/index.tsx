import React, { useState } from "react";
import "./styles.css";
import Title from "@/shared/Title";
import DebutAlbum from "@/assets/album-taylor-swift.webp";
import { debutTrackList } from "@/data/tracklists";

const TaylorSwift = () => {
  const [videoURL, setVideoURL] = useState(
    "https://www.youtube.com/embed/xKCek6_dB0M?si=NzXexXBrnBfXaJFt&amp;start=70"
  );
  const [track, setTrack] = useState("Teardrops On My Guitar");

  const handleClickTrack = (url: string, title: string) => {
    setVideoURL(url);
    setTrack(title);
  };

  return (
    <div id="taylorswift" className="container">
      <Title
        subtitle={`Taylor Swift's first album is called "Taylor Swift." It is also called the debut or self-titled album. As soon as the Taylor's version of this album releases, this section will be changed.`}
      >
        Taylor Swift
      </Title>
      <div className="tracks-album-container">
        {/* TRACKS CONTAINER */}
        <div className="tracks-title-container">
          {/* ALBUM */}
          <div className="album-tracks-h2">
            <h2>ALBUM TRACKS</h2>
            <div className="album-tracks-container">
              {debutTrackList.map(({ title, url }, index) => (
                <div
                  key={index}
                  className={`track-info ${
                    title === track ? "currently-playing" : ""
                  }`}
                  onClick={() => handleClickTrack(url, title)}
                >
                  <div className="track-number">{index + 1}</div>
                  <div className="track">{title}</div>
                </div>
              ))}
            </div>
          </div>

          {/* BONUS */}
          <div className="bonus-track-h2">
            <h2>BONUS TRACK</h2>
            <div className="bonus-track-desc">
              <div
                className={`track-info ${
                  "Crazier" === track ? "currently-playing" : ""
                }`}
                onClick={() =>
                  handleClickTrack(
                    "https://www.youtube.com/embed/B0p4Lv0t124?si=afSna_Jt3Wwj_usC&amp;start=96",
                    "Crazier"
                  )
                }
              >
                <div className="track-number">Bonus</div>
                <div className="track">Crazier</div>
              </div>
              <div className="bonus-desc">
                <p>
                  Taylor Swift wrote and sang Crazier for Hannah Montana: The
                  Movie and is actually not part of this album. However, we, the
                  Swifties, hope for this song to make it to the Taylor's
                  Version of this album as she recently sang this song at the
                  Eras Tour in June 2024.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ALBUM AND VID CONTAINER */}
        <div className="album-iframe-container">
          <img src={DebutAlbum} alt="taylor-swift-album" />
          <iframe
            width="560"
            height="315"
            src={videoURL}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default TaylorSwift;
