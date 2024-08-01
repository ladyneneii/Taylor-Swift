import { trackListsArr } from "@/data/tracklists";
import React, { useEffect, useState } from "react";

type Props = {
  textColor: string;
  eraNumber: number;
};

const Tracks = ({ textColor, eraNumber }: Props) => {
  const {
    trackList,
    vaultTrackList,
    vaultDesc,
    bonusTrackList,
    bonusDesc,
    defaultTrackIndex,
  } = trackListsArr[eraNumber - 1];

  const [videoURL, setVideoURL] = useState(
    "https://www.youtube.com/embed/xKCek6_dB0M?si=NzXexXBrnBfXaJFt&amp;start=70"
  );
  const [track, setTrack] = useState(trackList[defaultTrackIndex].title);
  const [squaresToMoveDown, setSquaresToMoveDown] = useState<number[]>([]);
  const [squaresToMoveDownOnce, setSquaresToMoveDownOnce] = useState<number[]>(
    []
  );
  const [squaresToMoveRight, setSquaresToMoveRight] = useState<number[]>([]);

  const handleClickTrack = (
    index: number,
    url: string,
    title: string,
    length: number
  ) => {
    setVideoURL(url);
    setTrack(title);

    setSquaresToMoveDown(() => {
      const newSquares = [];

      for (let i = index + 4; i < length; i += 4) {
        newSquares.push(i);
      }

      return newSquares;
    });

    // if the square is not on the very right edge
    if ((index + 1) % 4 !== 0) {
      setSquaresToMoveRight(() => {
        let i = index + 1;
        const newSquares = [];
        const cols = 4;

        for (; i <= index + 5; i += 4) {
          newSquares.push(i);
          for (let j = i + 1; j % cols !== 0; ++j) {
            newSquares.push(j);
          }
        }

        setSquaresToMoveDownOnce(() => {
          const newSquares = [];

          for (; i < length; i += 4) {
            newSquares.push(i);
          }

          return newSquares;
        });

        return newSquares;
      });
    } else {
      setSquaresToMoveDownOnce([])
      setSquaresToMoveRight([]);
    }
  };

  const vaultTrackNumber = trackList.length + 1;
  const bonusTrackNumber =
    trackList.length + (vaultTrackList ? vaultTrackList.length : 0) + 1;

  // console.log(squaresToMoveDown);
  // if (squaresToMoveRight) console.log(squaresToMoveRight);

  useEffect(() => {
    handleClickTrack(
      defaultTrackIndex,
      trackList[defaultTrackIndex].url,
      trackList[defaultTrackIndex].title,
      trackList.length
    );
  }, []);

  return (
    <div className="tracks__container">
      {/* <h1>Select the songs you want to listen to!</h1> */}

      <div className="tracklist-h2">
        <div>
          <h2>Album Tracks</h2>
        </div>
        <div className="tracklist">
          {trackList.map(({ title, url }, index) => {
            const width = 290;
            const height = 120;
            const cols = 4;
            let left = 0;
            let top = 0;

            left = (index % cols) * width;
            top = Math.floor(index / cols) * height;

            return (
              <div
                key={index}
                className={`track-info-square ${
                  title === track ? "expand" : ""
                }`}
                style={{
                  left: squaresToMoveRight.includes(index) ? left + 290 : left,
                  top: squaresToMoveDown.includes(index)
                    ? top + 240
                    : squaresToMoveDownOnce.includes(index)
                    ? top + 120
                    : top,
                }}
              >
                <div
                  className="track-info"
                  onClick={() =>
                    handleClickTrack(index, url, title, trackList.length)
                  }
                >
                  {index}. {title}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* <div className="tracklist-h2">
        <div>
          <h2>Album Tracks</h2>
        </div>
        <div className="tracklist">
          {trackList.map(({ title, url }, index) => (
            <div
              key={index}
              className={`track-info ${title === track ? "expand" : ""}`}
              onClick={() => handleClickTrack(url, title)}
            >
              {title}
            </div>
          ))}
        </div>
      </div> */}

      {/* <div className="album-vault">
       
        <div className="tracklist-h2">
          <h2>Album Tracks</h2>
          <div className="tracklist">
            {trackList.map(({ title, url }, index) => (
              <div
                key={index}
                className={`track-info ${title === track ? "selected" : ""}`}
                onClick={() => handleClickTrack(url, title)}
              >
                <p>
                  {index + 1}. {title}
                </p>
              </div>
            ))}
          </div>
        </div>

      
        {vaultTrackList && (
          <div className="tracklist-h2">
            <h2>Vault Tracks</h2>
            <div className="tracklist">
              {vaultTrackList.map(({ title, url }, index) => (
                <div
                  key={index}
                  className={`track-info ${title === track ? "selected" : ""}`}
                  onClick={() => handleClickTrack(url, title)}
                >
                  <p>
                    {index + 1}. {title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="iframe-bonus">
        <iframe
          width="560"
          height="315"
          src={videoURL}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        {bonusTrackList && (
          <div className="tracklist-h2 ">
            <h2>Bonus Track{bonusTrackList.length > 1 && "s"}</h2>
            <div className="bonus-tracklist">
              {bonusTrackList.map(({ title, url }, index) => (
                <div
                  key={index}
                  className={`track-info ${title === track ? "selected" : ""}`}
                  onClick={() => handleClickTrack(url, title)}
                >
                  <p>
                    {index + 1}. {title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div> */}
    </div>
  );
};

export default Tracks;
