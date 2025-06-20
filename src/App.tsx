import { useEffect, useState } from "react";
import Navbar from "./scenes/navbar";
import "./index.css";
import Home from "./scenes/home";
import EraContainer from "./shared/EraContainer";
import { eras, erasColor } from "./shared/types";
import { Track, trackListId, trackListsArr } from "./data/tracklists";
import TaylorSwift from "./scenes/lyrics/TaylorSwift";
import FearlessTV from "./scenes/lyrics/FearlessTV";
import SpeakNowTV from "./scenes/lyrics/SpeakNowTV";
import RedTV from "./scenes/lyrics/RedTV";
import _1989TV from "./scenes/lyrics/_1989TV";
import Reputation from "./scenes/lyrics/Reputation";
import Lover from "./scenes/lyrics/Lover";
import Folklore from "./scenes/lyrics/Folklore";
import Evermore from "./scenes/lyrics/Evermore";
import Midnights from "./scenes/lyrics/Midnights";
import TTPD from "./scenes/lyrics/TTPD";
import Footer from "./scenes/footer";
import Button from "./shared/Button";

const App = () => {
  const [selectedEra, setSelectedEra] = useState("Home");
  const [showSkipToTracks, setShowSkipToTracks] = useState(
    selectedEra !== "Home"
  );
  const currEraNum = eras.indexOf(selectedEra);

  const defaultTrackValues = (eraNumber: number) => {
    const { defaultTrackIndex, trackListLength, trackList } =
      trackListsArr[eraNumber];
    const { defaultUrl, url, title } = trackList[defaultTrackIndex];

    return {
      trackIndex: defaultTrackIndex,
      url: defaultUrl ?? url,
      title,
      trackAlbumLength: trackListLength,
    };
  };

  const [taylorSwiftTrack, setTaylorSwiftTrack] = useState<Track>(
    defaultTrackValues(0)
  );
  const [fearlessTVTrack, setFearlessTVTrack] = useState<Track>(
    defaultTrackValues(1)
  );
  const [speakNowTVTrack, setSpeakNowTVTrack] = useState<Track>(
    defaultTrackValues(2)
  );
  const [redTVTrack, setRedTVTrack] = useState<Track>(defaultTrackValues(3));
  const [_1989TVTrack, set_1989TVTrack] = useState<Track>(
    defaultTrackValues(4)
  );
  const [reputationTrack, setReputationTrack] = useState<Track>(
    defaultTrackValues(5)
  );
  const [loverTrack, setLoverTrack] = useState<Track>(defaultTrackValues(6));
  const [folkloreTrack, setFolkloreTrack] = useState<Track>(
    defaultTrackValues(7)
  );
  const [evermoreTrack, setEvermoreTrack] = useState<Track>(
    defaultTrackValues(8)
  );
  const [midnightsTrack, setMidnightsTrack] = useState<Track>(
    defaultTrackValues(9)
  );
  const [ttpdTrack, setTtpdTrack] = useState<Track>(defaultTrackValues(10));

  const returnTrack = (eraNumber: number) => {
    switch (eraNumber) {
      case 0:
        return taylorSwiftTrack;
      case 1:
        return fearlessTVTrack;
      case 2:
        return speakNowTVTrack;
      case 3:
        return redTVTrack;
      case 4:
        return _1989TVTrack;
      case 5:
        return reputationTrack;
      case 6:
        return loverTrack;
      case 7:
        return folkloreTrack;
      case 8:
        return evermoreTrack;
      case 9:
        return midnightsTrack;
      case 10:
        return ttpdTrack;
      default:
        return taylorSwiftTrack;
    }
  };

  const returnSetTrack = (eraNumber: number) => {
    switch (eraNumber) {
      case 0:
        return setTaylorSwiftTrack;
      case 1:
        return setFearlessTVTrack;
      case 2:
        return setSpeakNowTVTrack;
      case 3:
        return setRedTVTrack;
      case 4:
        return set_1989TVTrack;
      case 5:
        return setReputationTrack;
      case 6:
        return setLoverTrack;
      case 7:
        return setFolkloreTrack;
      case 8:
        return setEvermoreTrack;
      case 9:
        return setMidnightsTrack;
      case 10:
        return setTtpdTrack;
      default:
        return setTaylorSwiftTrack;
    }
  };

  const erasBgColor = [
    "#000000",
    "linear-gradient(to bottom, #203e24 10%, #18a5bf 100%)",
    "linear-gradient(to bottom, #462f1b 10%, #ddc477 100%)",
    "linear-gradient(to bottom, #52316b 10%, #db7ca5 100%)",
    "linear-gradient(to bottom, #9c1b15 10%, 	#b99982 100%)",
    "linear-gradient(to bottom, 	#94a9bb 10%, 	#5b86ae 100%)",
    "linear-gradient(to bottom, 	#222222 10%, 	#eeeeee 100%)",
    "linear-gradient(to bottom, 	#fdcdcd 10%, 	#cec0fc 100%)",
    "linear-gradient(to bottom, 	#cccccc 10%, 	#929292 100%)",
    "linear-gradient(to bottom, 	#efd3b6 10%, 	#4f2424 100%)",
    "linear-gradient(to bottom, 	#550101 10%, 	#351c75 100%)",
    "linear-gradient(to bottom, 	#231e1a 10%, 	#a79e8f 100%)",
  ];

  const lyricsIntro = [
    <TaylorSwift />,
    <FearlessTV />,
    <SpeakNowTV />,
    <RedTV />,
    <_1989TV />,
    <Reputation />,
    <Lover />,
    <Folklore />,
    <Evermore />,
    <Midnights />,
    <TTPD />,
  ];

  const scrollbarStyles = `
    ::-webkit-scrollbar {
      width: 10px;
      height: 10px;
    }

    ::-webkit-scrollbar-track {
      background: ${erasColor[currEraNum] === "white" ? "#242427" : "#f0f0f0"};
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 100px;
      background: ${erasColor[currEraNum] === "white" ? "#48494e" : "#c0c0c0"};
    }
  `;

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSkipToTracks(selectedEra !== "Home");
    }, 10);

    return () => clearTimeout(timer);
  }, [selectedEra]);

  return (
    <div className="app">
      <style>{scrollbarStyles}</style>
      <section
        style={{
          backgroundColor: erasBgColor[eras.indexOf("Home")],
          color: erasColor[eras.indexOf("Home")],
        }}
      >
        <Navbar
          selectedEra={selectedEra}
          setSelectedEra={setSelectedEra}
          setShowSkipToTracks={setShowSkipToTracks}
          setTaylorSwiftTrack={setTaylorSwiftTrack}
          setFearlessTVTrack={setFearlessTVTrack}
          setSpeakNowTVTrack={setSpeakNowTVTrack}
          setRedTVTrack={setRedTVTrack}
          set_1989TVTrack={set_1989TVTrack}
          setReputationTrack={setReputationTrack}
          setLoverTrack={setLoverTrack}
          setFolkloreTrack={setFolkloreTrack}
          setEvermoreTrack={setEvermoreTrack}
          setMidnightsTrack={setMidnightsTrack}
          setTtpdTrack={setTtpdTrack}
        />
        {selectedEra === "Home" && <Home setSelectedEra={setSelectedEra} />}
      </section>

      {/* {eras.slice(1).map((era, index) => (
        <div key={index} style={{ background: erasBgColor[index + 1] }}>
          <>
            {lyricsIntro[index]}
            <EraContainer
              eraNumber={index + 1}
              eraTitle={era}
              textColor={erasColor[index + 1]}
              track={returnTrack(index)}
              setSelectedEra={setSelectedEra}
              setTrack={returnSetTrack(index)}
            />
          </>
        </div>
      ))} */}

      <div style={{ background: erasBgColor[currEraNum] }}>
        <>
          {lyricsIntro[currEraNum - 1]}
          <EraContainer
            eraNumber={currEraNum}
            eraTitle={selectedEra}
            textColor={erasColor[currEraNum]}
            track={returnTrack(currEraNum - 1)}
            setSelectedEra={setSelectedEra}
            setTrack={returnSetTrack(currEraNum - 1)}
            setShowSkipToTracks={setShowSkipToTracks}
          />
        </>
      </div>

      <Footer
        bgcolor={erasColor[currEraNum] === "white" ? "black" : "white"}
      ></Footer>

      {showSkipToTracks && (
        <div className="skipToTracks">
          <Button
            bgcolor={erasColor[currEraNum]}
            color={erasColor[currEraNum] === "black" ? "white" : "black"}
            dest={`#${trackListId[currEraNum - 1]}`}
            isWebsite={false}
          >
            Go to Tracks?
          </Button>
        </div>
      )}
    </div>
  );
};

export default App;
