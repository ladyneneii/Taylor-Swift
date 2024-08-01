import { trackListsArr } from "@/data/tracklists";
import useMediaQuery from "@/hooks/useMediaQuery";
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

  const is2XLarge = useMediaQuery("(min-width: 2000px)");
  const isXLarge = useMediaQuery("(max-width: 2000px)");
  const isLarge = useMediaQuery("(max-width: 1650px)");
  const isMedium = useMediaQuery("(max-width: 1350px)");

  const [cols, setCols] = useState(4);
  const width = 300;
  const height = 100;
  const tracklistHeight = 850;
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

      for (let i = index + cols; i < length; i += cols) {
        newSquares.push(i);
      }

      return newSquares;
    });

    // if the square is not on the very right edge
    if ((index + 1) % cols !== 0) {
      setSquaresToMoveRight(() => {
        let i = index + 1;
        const newSquares = [];

        for (; i <= index + cols + 1; i += cols) {
          newSquares.push(i);
          for (let j = i + 1; j % cols !== 0; ++j) {
            newSquares.push(j);
          }
        }

        setSquaresToMoveDownOnce(() => {
          const newSquares = [];

          for (; i < length; i += cols) {
            newSquares.push(i);
          }

          return newSquares;
        });

        return newSquares;
      });
    } else {
      setSquaresToMoveDownOnce([]);
      setSquaresToMoveRight([]);
    }
  };

  const vaultTrackNumber = trackList.length + 1;
  const bonusTrackNumber =
    trackList.length + (vaultTrackList ? vaultTrackList.length : 0) + 1;

  useEffect(() => {
    if (is2XLarge) setCols(5)
    if (isXLarge) setCols(4);
    if (isLarge) setCols(3);
    if (isMedium) setCols(2);

    handleClickTrack(
      defaultTrackIndex,
      trackList[defaultTrackIndex].url,
      trackList[defaultTrackIndex].title,
      trackList.length
    );

    console.log(cols);
  }, [cols, is2XLarge, isXLarge, isLarge, isMedium]);

  // useEffect(() => {
  //   console.log(squaresToMoveDown);
  //   if (squaresToMoveDownOnce) console.log(squaresToMoveDownOnce);
  //   if (squaresToMoveRight) console.log(squaresToMoveRight);
  // }, [squaresToMoveDown, squaresToMoveDownOnce, squaresToMoveRight]);

  return (
    <div className="tracks__container">
      {/* <h1>Select the songs you want to listen to!</h1> */}

      <div className="tracklist-h2">
        <div>
          <h2>Album Tracks</h2>
        </div>
        <div className="tracklist" style={{ height: `${tracklistHeight}px` }}>
          {trackList.map(({ title, url }, index) => {
            let left = 0;
            let top = 0;

            left = (index % cols) * width;
            top = Math.floor(index / cols) * height;

            return (
              <div
                key={index}
                className="track-info-square"
                style={{
                  width: title === track ? width * 2 : width,
                  height: title === track ? height * 4 : height,
                  left: squaresToMoveRight.includes(index)
                    ? left + width
                    : left,
                  top: squaresToMoveDown.includes(index)
                    ? top + height * 3
                    : squaresToMoveDownOnce.includes(index)
                    ? top + height * 2
                    : top,
                }}
              >
                <div
                  className={`track-info ${title === track ? "expand" : ""}`}
                  onClick={() =>
                    handleClickTrack(index, url, title, trackList.length)
                  }
                >
                  <div className="track-number-title">
                    <div className="track-number">{index}.</div>
                    <div className="track-title">{title}</div>
                  </div>
                  <div
                    className={`track-iframe ${
                      title === track ? "expand" : ""
                    }`}
                  >
                    {title === track && (
                      <iframe
                        src={videoURL}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      ></iframe>
                    )}
                  </div>
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
