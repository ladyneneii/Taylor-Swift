import React, { useState } from "react";
import Navbar from "./scenes/navbar";
import "./index.css";
import Home from "./scenes/home";
import EraContainer from "./shared/EraContainer";
import Terminologies from "./scenes/terminologies";
import TaylorSwift from "./scenes/taylor-swift";
import Carousel from "./shared/Carousel";
import { CarouselProps } from "./shared/types";
import { debutCarousel } from "./data/img-data";
import { debutLyrics } from "./data/lyrics";

const App = () => {
  const [selectedEra, setSelectedEra] = useState("Home");
  const eras = [
    "Home",
    "Taylor Swift",
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
    "linear-gradient(to bottom, #000000 0%, #203e24 10%, #18a5bf 100%)",
  ];

  const backgoundColor = erasColor[eras.indexOf(selectedEra)];


  return (
    <div className="app">
      <section style={{ backgroundColor: erasColor[eras.indexOf("Home")] }}>
        <Navbar selectedEra={selectedEra} setSelectedEra={setSelectedEra} />
        <Home />
      </section>
      <EraContainer bgcolor={erasColor[eras.indexOf("Home")]}>
        <Terminologies />
      </EraContainer>
      <EraContainer
        bgcolor={erasColor[eras.indexOf("Taylor Swift")]}
        pictures={debutCarousel}
        carouselBgColor="black"
        lyrics={debutLyrics}
      >
        <TaylorSwift />
      </EraContainer>
    </div>
  );
};

export default App;
