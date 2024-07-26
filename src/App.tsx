import { useState } from "react";
import Navbar from "./scenes/navbar";
import "./index.css";
import Home from "./scenes/home";
import EraContainer from "./shared/EraContainer";
import Terminologies from "./scenes/terminologies";
import TaylorSwift from "./scenes/taylor-swift";
import { debutCarousel } from "./data/img-data";
import { quotes } from "./data/lyrics";
import { eras, erasColor } from "./shared/types";
import { details } from "./data/details";
import { trackListsArr } from "./data/tracklists";

const App = () => {
  const [selectedEra, setSelectedEra] = useState("Home");

  const erasBgColor = [
    "#000000",
    "linear-gradient(to bottom, #000000 0%, #203e24 10%, #18a5bf 100%)",
    "linear-gradient(to bottom, #18a5bf 0%, #ddc477 10%, 	#462f1b 100%)",
    "linear-gradient(to bottom, #462f1b  0%, #52316b 10%, #db7ca5 100%)",
    "linear-gradient(to bottom, #db7ca5  0%, #9c1b15 10%, 	#b99982 100%)",
    "linear-gradient(to bottom, #b99982  0%, 	#94a9bb 10%, 	#5b86ae 100%)",
    "linear-gradient(to bottom, #5b86ae  0%, 	#222222 10%, 	#eeeeee 100%)",
    "linear-gradient(to bottom, #eeeeee  0%, 	#fdcdcd 10%, 	#cec0fc 100%)",
    "linear-gradient(to bottom, #cec0fc  0%, 	#cccccc 10%, 	#929292 100%)",
    "linear-gradient(to bottom, #929292  0%, 	#efd3b6 10%, 	#4f2424 100%)",
    // "linear-gradient(to bottom, #4f2424  0%, 	#550101 10%, 	#351c75 100%)",
    "linear-gradient(to bottom, #4f2424  0%, 	#351c75 10%, 	#550101 100%)",
    // "linear-gradient(to bottom, #351c75  0%, 	#231e1a 10%, 	#a79e8f 100%)",
    "linear-gradient(to bottom, #550101  0%, 	#231e1a 10%, 	#a79e8f 100%)",
  ];

  return (
    <div className="app">
      <section
        style={{
          backgroundColor: erasBgColor[eras.indexOf("Home")],
          color: erasColor[eras.indexOf("Home")],
        }}
      >
        <Navbar selectedEra={selectedEra} setSelectedEra={setSelectedEra} />
        <Home />
      </section>

      {/* no need to set universal textColor for terminologies because in this section, there are two text colors */}
      <EraContainer
        eraNumber={0}
        textColor={erasColor[eras.indexOf("Home")]}
        bgcolor={erasBgColor[eras.indexOf("Home")]}
      >
        <Terminologies />
      </EraContainer>

      {eras.slice(1).map((era, index) => (
        <EraContainer
          key={index + 1}
          eraNumber={index + 1}
          textColor={erasColor[index + 1]}
          bgcolor={erasBgColor[index + 1]}
          pictures={debutCarousel}
          lyricsArr={quotes[index]}
        >
          <TaylorSwift details={details[index]} textColor={erasColor[index + 1]} EraTitle={era} tracks={trackListsArr[index]} />
        </EraContainer>
      ))}
    </div>
  );
};

export default App;
