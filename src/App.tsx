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
import { eras } from "./shared/types";

const App = () => {
  const [selectedEra, setSelectedEra] = useState("Home");

  const erasBgColor = [
    "black",
    "linear-gradient(to bottom, #000000 0%, #203e24 10%, #18a5bf 100%)",
  ];

  


  return (
    <div className="app">
      <section style={{ backgroundColor: erasBgColor[eras.indexOf("Home")] }}>
        <Navbar selectedEra={selectedEra} setSelectedEra={setSelectedEra} />
        <Home />
      </section>
      <EraContainer bgcolor={erasBgColor[eras.indexOf("Home")]}>
        <Terminologies />
      </EraContainer>
      <EraContainer
        bgcolor={erasBgColor[eras.indexOf("Taylor Swift")]}
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
