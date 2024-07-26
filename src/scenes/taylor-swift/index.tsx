import React, { useState } from "react";
import "./styles.css";
import Title from "@/shared/Title";
import DebutAlbum from "@/assets/album-taylor-swift.webp";
import { debutTrackList, fearlessTVTrackList, Tracks } from "@/data/tracklists";
import { blackish, whitish } from "@/shared/types";
import { IoIosMusicalNotes, IoIosMusicalNote } from "react-icons/io";

type Props = {
  details: string;
  textColor: string;
  EraTitle: string;
  tracks: Tracks;
};

const TaylorSwift = ({ details, textColor, EraTitle, tracks }: Props) => {
  const formatEraId = (currEra: string) => {
    return currEra.toLowerCase().replace(/\s+/g, "");
  };

  const eraId = formatEraId(EraTitle);
  const [videoURL, setVideoURL] = useState(
    "https://www.youtube.com/embed/xKCek6_dB0M?si=NzXexXBrnBfXaJFt&amp;start=70"
  );
  const [track, setTrack] = useState("Teardrops On My Guitar");

  const { trackList, vaultTrackList, vaultDesc, bonusTrackList, bonusDesc } = tracks;

  console.log(trackList);

  const handleClickTrack = (url: string, title: string) => {
    setVideoURL(url);
    setTrack(title);
  };

  return (
    <div
      id={eraId}
      className="container"
      style={{
        fontWeight: textColor === "black" ? 500 : 100,
      }}
    >
      <Title details={details}>{EraTitle}</Title>
      <div className="tracks-album-container">
        {/* TRACKS CONTAINER */}
        <div className="tracks-title-container">
          {/* ALBUM */}
          <div className="album-tracks-h2">
            <div className="h2-instruction">
              <h2 style={{ fontWeight: textColor === "black" ? 800 : 500 }}>
                ALBUM TRACKS
              </h2>
              <p>(Select a song you want to listen to!)</p>
            </div>
            <div className="album-tracks-container">
              {trackList.map(({ title, url }, index) => (
                <div
                  key={index}
                  className="track-info"
                  style={{
                    backgroundColor:
                      title === track
                        ? "transparent"
                        : textColor === "black"
                        ? whitish
                        : blackish,
                  }}
                  onClick={() => handleClickTrack(url, title)}
                >
                  <div className="track-number">{index + 1}</div>
                  <div className="track">{title}</div>
                </div>
              ))}
            </div>
          </div>

          {/* VAULT */}
          {vaultTrackList && (
            <div className="album-tracks-h2">
              <div className="h2-instruction">
                <h2 style={{ fontWeight: textColor === "black" ? 800 : 500 }}>
                  VAULT TRACKS
                </h2>
                {vaultDesc && <p>({vaultDesc})</p>}
              </div>
              <div className="album-tracks-container">
                {vaultTrackList.map(({ title, url }, index) => (
                  <div
                    key={index}
                    className="track-info"
                    style={{
                      backgroundColor:
                        title === track
                          ? "transparent"
                          : textColor === "black"
                          ? whitish
                          : blackish,
                    }}
                    onClick={() => handleClickTrack(url, title)}
                  >
                    <div className="track-number">{index + 1}</div>
                    <div className="track">{title}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* BONUS */}
          {bonusTrackList && (
            <div className="bonus-track-h2">
              <h2 style={{ fontWeight: textColor === "black" ? 800 : 500 }}>
                BONUS TRACK
              </h2>
              <div className="bonus-track-desc">
                {bonusTrackList.map(({ title, url }, index) => (
                  <div
                    key={index}
                    className="track-info"
                    style={{
                      backgroundColor:
                        title === track
                          ? "transparent"
                          : textColor === "black"
                          ? whitish
                          : blackish,
                    }}
                    onClick={() => handleClickTrack(url, title)}
                  >
                    <div className="track-number">{index + 1}</div>
                    <div className="track">{title}</div>
                  </div>
                ))}
                {bonusDesc && (
                  <div className="bonus-desc">
                    <p>{bonusDesc}</p>
                  </div>
                )}
              </div>
            </div>
          )}
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
