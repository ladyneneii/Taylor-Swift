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
  const isSmall = useMediaQuery("(max-width: 1050px)");
  const isLTablet = useMediaQuery("(min-width: 750px)");
  const isXTablet = useMediaQuery("(max-width: 650px)");
  const isPhone = useMediaQuery("(max-width: 550px)");
  const isSPhone = useMediaQuery("(max-width: 450px)");

  const [cols, setCols] = useState(4);
  const [width, setWidth] = useState(300);
  const [height, setHeight] = useState(100);
  const trackIframeDimensions = {
    width: 0,
    height: 0,
  };
  const [trackIframeDimensionsExpand, setTrackIframeDimensionsExpand] =
    useState({
      width: "540px",
      height: "303.75px",
    });

  const tracklistHeight = 850;
  const [videoURL, setVideoURL] = useState(
    "https://www.youtube.com/embed/xKCek6_dB0M?si=NzXexXBrnBfXaJFt&amp;start=70"
  );
  const [track, setTrack] = useState(trackList[defaultTrackIndex].title);
  const [squaresToMoveDown, setSquaresToMoveDown] = useState<number[]>([]);
  const [squaresToMoveDownOnce, setSquaresToMoveDownOnce] = useState<number[]>(
    []
  );
  const [squaresToMoveDownThrice, setSquaresToMoveDownThrice] = useState<
    number[]
  >([]);
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

      if (isPhone) {
        for (let i = index + 1; i < length; i += cols) {
          newSquares.push(i);
        }
      }

      if (isSmall && !isPhone) {
        setSquaresToMoveDownThrice(() => {
          const newSquares = [];
          for (let i = index + 1; i < length; i += cols) {
            newSquares.push(i);
          }

          // if the square is on the very right edge
          if ((index + 1) % cols === 0) {
            newSquares.push(index - 1);
          }

          return newSquares;
        });
      }

      return newSquares;
    });

    // if the square is not on the very right edge
    if (!isSmall && (index + 1) % cols !== 0) {
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
      // empty the arrays if they are not utilized
      setSquaresToMoveDownOnce([]);
      setSquaresToMoveRight([]);
    }

    if (!isSmall || isPhone) {
      // do not empty the array if it is isSmall because the array is used in the media query, but empty the array if it is isPhone because the array is not used in that media query
      setSquaresToMoveDownThrice([]);
    }
  };

  const vaultTrackNumber = trackList.length + 1;
  const bonusTrackNumber =
    trackList.length + (vaultTrackList ? vaultTrackList.length : 0) + 1;

  useEffect(() => {
    if (is2XLarge) setCols(5);
    if (isXLarge) setCols(4);
    if (isLarge) setCols(3);
    if (isMedium) setCols(2);
    if (isPhone) setCols(1)

    handleClickTrack(
      defaultTrackIndex,
      trackList[defaultTrackIndex].url,
      trackList[defaultTrackIndex].title,
      trackList.length
    );

    console.log(cols);
  }, [cols, isSmall, is2XLarge, isXLarge, isLarge, isMedium, isPhone]);

  useEffect(() => {
    if (isLTablet) {
      setWidth(300);
      setHeight(100);
      setTrackIframeDimensionsExpand({ width: "540px", height: "303.75px" });
    }
    // if (isTablet) {
    //   setWidth(280);
    //   setHeight(90);
    //   setTrackIframeDimensionsExpand({ width: "500px", height: "253.13px" });
    // }
    if (isXTablet) {
      setWidth(260);
      setHeight(83);
      setTrackIframeDimensionsExpand({ width: "500px", height: "253.13px" });
    }
    if (isPhone) {
      setWidth(400); // expanded width is now the same as the rest of the widths instead of multiplied by 2
      setHeight(72);
      setTrackIframeDimensionsExpand({ width: "390px", height: "219.38px" });
    }
    if (isSPhone) {
      setWidth(155);
      setHeight(60);
      setTrackIframeDimensionsExpand({ width: "300px", height: "168.75px" });
    }
  }, [isLTablet, isXTablet, isPhone, isSPhone]);

  // useEffect(() => {
  //   console.log(`move down: ${squaresToMoveDown}`);
  //   if (squaresToMoveDownOnce)
  //     console.log(`move down once: ${squaresToMoveDownOnce}`);
  //   if (squaresToMoveRight) console.log(`move to right: ${squaresToMoveRight}`);
  //   if (squaresToMoveDownThrice)
  //     console.log(`move down thrice: ${squaresToMoveDownThrice}`);
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
            // left = (index % 1) * width;
            // top = Math.floor(index / 1) * height;

            return (
              <div
                key={index}
                className="track-info-square"
                style={{
                  width: isPhone ? width : title === track ? width * 2 : width,
                  height: title === track
                    ? height * 4
                    : height,
                  left: squaresToMoveRight.includes(index)
                    ? left + width
                    : isSmall && !isPhone && title === track && (index + 1) % 2 === 0
                    ? left - width // expand to the left if isSmall and the square is on the very right edge
                    : left,
                  top: squaresToMoveDownThrice.includes(index)
                    ? top + height * 4
                    : squaresToMoveDown.includes(index)
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
                    style={
                      title === track
                        ? trackIframeDimensionsExpand
                        : trackIframeDimensions
                    }
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
