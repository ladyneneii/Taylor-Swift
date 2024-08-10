import { Track, trackListId, trackListsArr } from "@/data/tracklists";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useEffect, useState } from "react";
import { blackish, createTrackId, whitish } from "./types";
import DOMPurify from "dompurify";
import { motion } from "framer-motion";

type Props = {
  textColor: string;
  eraNumber: number;
  track: Track;
  setTrack: (value: Track) => void;
  setShowSkipToTracks: (value: boolean) => void;
};

const Tracks = ({
  textColor,
  eraNumber,
  track,
  setTrack,
  setShowSkipToTracks,
}: Props) => {
  const { trackList, vaultDesc, bonusDesc } = trackListsArr[eraNumber - 1];

  let sanitizedBonusDesc = "";
  if (bonusDesc) {
    sanitizedBonusDesc = DOMPurify.sanitize(bonusDesc);
  }

  const is2XLarge = useMediaQuery("(min-width: 2000px)");
  const isXLarge = useMediaQuery("(max-width: 2000px) and (min-width: 1651px)");
  const isLarge = useMediaQuery("(max-width: 1650px) and (min-width: 1351px)");
  const isMedium = useMediaQuery("(max-width: 1350px) and (min-width: 1051px)");
  const isSmall = useMediaQuery("(max-width: 1050px) and (min-width: 751px)");
  const isLTablet = useMediaQuery("(min-width: 751px)");
  const isXTablet = useMediaQuery("(max-width: 750px) and (min-width: 551px)");
  const isPhone = useMediaQuery("(max-width: 550px) and (min-width: 451px)");
  const isSPhone = useMediaQuery("(max-width: 450px) and (min-width: 351px)");
  const isXSPhone = useMediaQuery("(max-width: 350px) and (min-width: 0px)");

  const [debutRows, setDebutRows] = useState(0);
  const [fearlessRows, setFearlessRows] = useState(0);
  const [speakNowRows, setSpeakNowRows] = useState(0);
  const [redRows, setRedRows] = useState(0);
  const [nineteen89Rows, setNineteen89Rows] = useState(0);
  const [reputationRows, setReputationRows] = useState(0);
  const [loverRows, setLoverRows] = useState(0);
  const [folkloreRows, setFolkloreRows] = useState(0);
  const [evermoreRows, setEvermoreRows] = useState(0);
  const [midnightsRows, setMidnightsRows] = useState(0);
  const [ttpdRows, setTtpdRows] = useState(0);

  const [cols, setCols] = useState(4);
  const [width, setWidth] = useState(300);
  const height = 100;
  const [iframeLoaded, setIframeLoaded] = useState(true);
  const trackIframeDimensions = {
    width: 0,
    height: 0,
  };
  const [trackIframeDimensionsExpand, setTrackIframeDimensionsExpand] =
    useState({
      width: "540px",
      height: "303.75px",
    });
  const [squareHeightExpand, setSquareHeightExpand] = useState(height * 4);

  const [tracklistH2Height, setTracklistH2Height] = useState(0);
  const [tracklistHeight, setTracklistHeight] = useState(0);
  const [tracklistWidth, setTracklistWidth] = useState(width * 5);
  const [squaresToMoveDown, setSquaresToMoveDown] = useState<number[]>([]);
  const [squaresToMoveDownOnce, setSquaresToMoveDownOnce] = useState<number[]>(
    []
  );
  const [squaresToMoveDownThrice, setSquaresToMoveDownThrice] = useState<
    number[]
  >([]);
  const [squaresToMoveRight, setSquaresToMoveRight] = useState<number[]>([]);

  const handleClickTrack = () => {
    const { trackIndex, trackAlbumLength } = track;

    setShowSkipToTracks(false)

    setSquaresToMoveDown(() => {
      const newSquares = [];

      for (let i = trackIndex + cols; i < trackAlbumLength; i += cols) {
        newSquares.push(i);
      }

      if (isPhone) {
        for (let i = trackIndex + 1; i < trackAlbumLength; i += cols) {
          newSquares.push(i);
        }
      }

      // the time when there are no squares moving to the right aymore
      if (isSmall || isXTablet) {
        setSquaresToMoveDownThrice(() => {
          const newSquares = [];
          for (let i = trackIndex + 1; i < trackAlbumLength; i += cols) {
            newSquares.push(i);
          }

          // if the square is on the very right edge
          if ((trackIndex + 1) % cols === 0) {
            newSquares.push(trackIndex - 1);
          }

          return newSquares;
        });
      }

      return newSquares;
    });

    // if the square is not on the very right edge
    // no need to put the smaller screen sizes where cols = 1 in the condition because when cols = 1, the squares are treated as the ones on the very edge.
    if (!isSmall && !isXTablet && (trackIndex + 1) % cols !== 0) {
      setSquaresToMoveRight(() => {
        let i = trackIndex + 1;
        const newSquares = [];

        for (; i <= trackIndex + cols + 1; i += cols) {
          newSquares.push(i);
          for (let j = i + 1; j % cols !== 0; ++j) {
            newSquares.push(j);
          }
        }

        setSquaresToMoveDownOnce(() => {
          const newSquares = [];

          for (; i < trackAlbumLength; i += cols) {
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

    // this condition is opposite to the condition above that stores squares in the squaresToMoveDownThrice array
    if (!isSmall && !isXTablet) {
      // do not empty the array if it is isSmall because the array is used in the media query, but empty the array if it is isPhone because the array is not used in that media query
      setSquaresToMoveDownThrice([]);
    }
  };

  const albumRows = () => {
    switch (eraNumber) {
      case 1:
        return debutRows;
      case 2:
        return fearlessRows;
      case 3:
        return speakNowRows;
      case 4:
        return redRows;
      case 5:
        return nineteen89Rows;
      case 6:
        return reputationRows;
      case 7:
        return loverRows;
      case 8:
        return folkloreRows;
      case 9:
        return evermoreRows;
      case 10:
        return midnightsRows;
      case 11:
        return ttpdRows;
      default:
        return 0;
    }
  };

  // console.log(`tracks-${eraId}`);

  // const vaultTrackNumber = trackList.length + 1;
  // const bonusTrackNumber =
  //   trackList.length + (vaultTrackList ? vaultTrackList.length : 0) + 1;

  useEffect(() => {
    if (is2XLarge) {
      setTracklistWidth(width * 6);
      setCols(5);
      setDebutRows(7);
      setFearlessRows(9);
      setSpeakNowRows(8);
      setRedRows(9);
      setNineteen89Rows(8);
      setReputationRows(7);
      setLoverRows(8);
      setFolkloreRows(7);
      setEvermoreRows(8);
      setMidnightsRows(8);
      setTtpdRows(10);
    }
    if (isXLarge) {
      setTracklistWidth(width * 5);
      setCols(4);
      setDebutRows(8);
      setFearlessRows(10);
      setSpeakNowRows(9);
      setRedRows(11);
      setNineteen89Rows(9);
      setReputationRows(7);
      setLoverRows(9);
      setFolkloreRows(8);
      setEvermoreRows(10);
      setMidnightsRows(9);
      setTtpdRows(12);
    }
    if (isLarge) {
      setTracklistWidth(width * 4);
      setCols(3);
      setDebutRows(9);
      setFearlessRows(12);
      setSpeakNowRows(11);
      setRedRows(13);
      setNineteen89Rows(11);
      setReputationRows(9);
      setLoverRows(10);
      setFolkloreRows(10);
      setEvermoreRows(12);
      setMidnightsRows(11);
      setTtpdRows(15);
    }
    if (isMedium) {
      setTracklistWidth(width * 3);
      setCols(2);
      setDebutRows(12);
      setFearlessRows(17);
      setSpeakNowRows(14);
      setRedRows(18);
      setNineteen89Rows(15);
      setReputationRows(11);
      setLoverRows(14);
      setFolkloreRows(13);
      setEvermoreRows(16);
      setMidnightsRows(15);
      setTtpdRows(20);
    }
    if (isSmall) {
      // when there are no squares moving to the right anymore, but cols is still 2
      setTracklistWidth(width * 2);
      setCols(2);
      setDebutRows(13);
      setFearlessRows(18);
      setSpeakNowRows(15);
      setRedRows(19);
      setNineteen89Rows(16);
      setReputationRows(12);
      setLoverRows(15);
      setFolkloreRows(14);
      setEvermoreRows(17);
      setMidnightsRows(16);
      setTtpdRows(21);
    }
    // console.log(`isSmall: ${isSmall}`);
    setTracklistHeight(height * albumRows());
    setTracklistH2Height(tracklistHeight + height + 30);

    handleClickTrack();
  }, [
    track, // when this gets changed either by the setTrack in this component or the setTrack in Navbar, handleClickTrack() runs again
    cols,
    height,
    tracklistHeight,
    tracklistH2Height,
    width,
    is2XLarge,
    isXLarge,
    isLarge,
    isMedium,
    isSmall,
    tracklistHeight,
    debutRows,
    fearlessRows,
    speakNowRows,
    redRows,
    nineteen89Rows,
    reputationRows,
    loverRows,
    folkloreRows,
    evermoreRows,
    midnightsRows,
    ttpdRows,
  ]);

  useEffect(() => {
    // change the dimensions here; changing the initial values won't do anything because this if block below overrides the new values
    if (isLTablet) {
      // set the squares and iframes to their max dimensions
      setWidth(300);
      setTrackIframeDimensionsExpand({ width: "540px", height: "303.75px" });
      setSquareHeightExpand(height * 4);
    }
    if (isXTablet) {
      setCols(2);
      setWidth(260);
      setTrackIframeDimensionsExpand({ width: "500px", height: "253.13px" });
      // the time when square height is greatly bigger than the iframe height, so a custom height should be set
      setSquareHeightExpand(330);
      setTracklistWidth(width * 2);
      setDebutRows(13);
      setFearlessRows(18);
      setSpeakNowRows(15);
      setRedRows(19);
      setNineteen89Rows(16);
      setReputationRows(12);
      setLoverRows(15);
      setFolkloreRows(14);
      setEvermoreRows(17);
      setMidnightsRows(16);
      setTtpdRows(21);
      setTracklistH2Height(tracklistHeight + height - 70);
    }
    if (isPhone) {
      setCols(1);
      setWidth(400); // expanded width is now the same as the rest of the widths instead of multiplied by 2
      setTrackIframeDimensionsExpand({ width: "390px", height: "219.38px" });
      setSquareHeightExpand(290);
      setTracklistWidth(width);
      setDebutRows(19);
      setFearlessRows(29);
      setSpeakNowRows(24);
      setRedRows(32);
      setNineteen89Rows(25);
      setReputationRows(18);
      setLoverRows(23);
      setFolkloreRows(21);
      setEvermoreRows(27);
      setMidnightsRows(26);
      setTtpdRows(36);
      setTracklistH2Height(tracklistHeight + height - 10);
    }
    if (isSPhone) {
      setCols(1);
      setWidth(310);
      setTrackIframeDimensionsExpand({ width: "300px", height: "168.75px" });
      setSquareHeightExpand(240);
      setTracklistWidth(width);
      setDebutRows(19);
      setFearlessRows(29);
      setSpeakNowRows(24);
      setRedRows(32);
      setNineteen89Rows(25);
      setReputationRows(18);
      setLoverRows(23);
      setFolkloreRows(21);
      setEvermoreRows(27);
      setMidnightsRows(26);
      setTtpdRows(36);
      setTracklistH2Height(tracklistHeight + height - 70);
    }
    if (isXSPhone) {
      setCols(1);
      setWidth(270);
      setTrackIframeDimensionsExpand({ width: "260px", height: "146.25px" });
      setSquareHeightExpand(240);
      setTracklistWidth(width);
      setDebutRows(19);
      setFearlessRows(29);
      setSpeakNowRows(24);
      setRedRows(32);
      setNineteen89Rows(25);
      setReputationRows(18);
      setLoverRows(23);
      setFolkloreRows(21);
      setEvermoreRows(27);
      setMidnightsRows(26);
      setTtpdRows(36);
      setTracklistH2Height(tracklistHeight + height - 70);
    }
    // console.log(`isSPhone: ${isSPhone}`);
    // console.log(`isXTablet: ${isXTablet}`);
    setTracklistHeight(height * albumRows());
  }, [
    width,
    height,
    tracklistHeight,
    tracklistH2Height,
    cols,
    isLTablet,
    isXTablet,
    isPhone,
    isSPhone,
    isXSPhone,
    debutRows,
    fearlessRows,
    speakNowRows,
    redRows,
    nineteen89Rows,
    reputationRows,
    loverRows,
    folkloreRows,
    evermoreRows,
    midnightsRows,
    ttpdRows,
  ]);

  useEffect(() => {
    setIframeLoaded(false);
  }, []);

  // console.log(iframeLoaded);

  // useEffect(() => {
  //   console.log(`move down: ${squaresToMoveDown}`);
  //   if (squaresToMoveDownOnce)
  //     console.log(`move down once: ${squaresToMoveDownOnce}`);
  //   if (squaresToMoveRight) console.log(`move to right: ${squaresToMoveRight}`);
  //   if (squaresToMoveDownThrice)
  //     console.log(`move down thrice: ${squaresToMoveDownThrice}`);
  // }, [squaresToMoveDown, squaresToMoveDownOnce, squaresToMoveRight]);

  return (
    <motion.div
      id={trackListId[eraNumber - 1]}
      className="tracks__container"
      onViewportEnter={() => setShowSkipToTracks(false)}
      onViewportLeave={() => setShowSkipToTracks(true)}
    >
      <div className="tracklist-h2" style={{ height: tracklistH2Height }}>
        <div className="text-center">
          <h2 style={{ color: textColor === "black" ? "black" : "white" }}>
            Tracks
          </h2>
        </div>
        <div
          className="tracklist"
          style={{
            height: `${tracklistHeight}px`,
            width: `${tracklistWidth}px`,
          }}
        >
          {trackList.map(({ title, url }, index) => {
            let left = 0;
            let top = 0;

            left = (index % cols) * width;
            top = Math.floor(index / cols) * height;
            // left = (index % 1) * width;
            // top = Math.floor(index / 1) * height;

            // console.log(title);

            return (
              <div
                id={createTrackId(title)}
                key={index}
                className="track-info-square"
                style={{
                  width:
                    isPhone || isSPhone || isXSPhone
                      ? width
                      : title === track.title
                      ? width * 2
                      : width,
                  height: title === track.title ? squareHeightExpand : height,
                  left: squaresToMoveRight.includes(index)
                    ? left + width
                    : (isSmall || isXTablet) &&
                      !isPhone &&
                      title === track.title &&
                      (index + 1) % 2 === 0
                    ? left - width // expand to the left if isSmall and the square is on the very right edge
                    : left,
                  top:
                    squaresToMoveDownThrice.includes(index) && isXTablet
                      ? top + 330
                      : squaresToMoveDownThrice.includes(index)
                      ? top + height * 4
                      : squaresToMoveDown.includes(index) && isXTablet
                      ? top + 230
                      : squaresToMoveDown.includes(index) && isPhone
                      ? top + 190
                      : squaresToMoveDown.includes(index) && isSPhone
                      ? top + 140
                      : squaresToMoveDown.includes(index) && isXSPhone
                      ? top + 140
                      : squaresToMoveDown.includes(index)
                      ? top + height * 3
                      : squaresToMoveDownOnce.includes(index)
                      ? top + height * 2
                      : top,
                }}
              >
                <div
                  className={`track-info ${
                    title === track.title ? "expand" : ""
                  }`}
                  style={{
                    backgroundColor: textColor === "white" ? blackish : whitish,
                  }}
                  onClick={() =>
                    setTrack({
                      trackIndex: index,
                      url,
                      title,
                      trackAlbumLength: trackList.length,
                    })
                  }
                >
                  <div className="track-number-title">
                    <div
                      className={`track-number track-number-${
                        textColor === "white" ? "white" : "black"
                      }`}
                    >
                      {index + 1}.
                    </div>
                    <div className="track-title">
                      <p>{title}</p>
                    </div>
                  </div>
                  <div
                    className={`track-iframe ${
                      title === track.title ? "expand" : ""
                    }`}
                    style={
                      title === track.title
                        ? trackIframeDimensionsExpand
                        : trackIframeDimensions
                    }
                  >
                    {title === track.title && (
                      <>
                        {!iframeLoaded && (
                          <div className="loading">
                            <div className="loading-circle"></div>
                          </div>
                        )}
                        <iframe
                          src={track.url}
                          title="YouTube video player"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          referrerPolicy="strict-origin-when-cross-origin"
                          allowFullScreen
                          onLoad={() => setIframeLoaded(true)}
                          onPlay={() => setIframeLoaded(true)}
                        ></iframe>
                      </>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {(vaultDesc || bonusDesc) && (
        <div className="album-notes-container">
          <div
            className="album-notes"
            style={{
              maxWidth: vaultDesc && bonusDesc ? "none" : "1000px",
              color: eraNumber === 6 ? "black" : "",
            }}
          >
            {vaultDesc && <p style={{ marginBlockEnd: 0 }}>{vaultDesc}</p>}
            {bonusDesc && (
              <p
                style={{ marginBlockEnd: 0 }}
                dangerouslySetInnerHTML={{ __html: sanitizedBonusDesc }}
              ></p>
            )}
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Tracks;
