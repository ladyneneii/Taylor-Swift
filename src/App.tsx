import React, { useState } from "react";
import Navbar from "./scenes/navbar";
import "./index.css";
import Home from "./scenes/home";
import Terminologies from "./scenes/terminologies";

const App = () => {
  const [selectedEra, setSelectedEra] = useState("Home");
  const eras = [
    "Home",
    "Debut",
    "Fearless",
    "Speak Now",
    "Red",
    "1989",
    "Reputation",
    "Lover",
    "Folklore",
    "Evermore",
    "Midnights",
    "TTPD",
  ];

  const erasColor = [
    "black",
    // "linear-gradient(180deg, #203e24 0%, #18a5bf 100%)",
    // "linear-gradient(180deg, #203e24 0%, #18a5bf 100%)",
    "green",
    "yellow",
  ];

  const backgoundColor = erasColor[eras.indexOf(selectedEra)];

  return (
    <div className="app" style={{ background: backgoundColor }}>
      <Navbar selectedEra={selectedEra} setSelectedEra={setSelectedEra} />
      <Home />
      {/* <Terminologies /> */}
    </div>
  );
};

export default App;
