import { useState } from "react";
import Navbar from "./scenes/navbar";
import "./index.css";
import Home from "./scenes/home";
import EraContainer from "./shared/EraContainer";
import { eras, erasColor } from "./shared/types";

const App = () => {
  const [selectedEra, setSelectedEra] = useState("Home");

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
    // "linear-gradient(to bottom, 	#550101 10%, 	#351c75 100%)",
    "linear-gradient(to bottom, 	#351c75 10%, 	#550101 100%)",
    // "linear-gradient(to bottom, 	#231e1a 10%, 	#a79e8f 100%)",
    "linear-gradient(to bottom, 	#231e1a 10%, 	#a79e8f 100%)",
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
        eraTitle="Home"
        textColor={erasColor[eras.indexOf("Home")]}
        bgcolor={erasBgColor[eras.indexOf("Home")]}
      />

      {eras.slice(1).map((era, index) => (
        <EraContainer
          key={index + 1}
          eraNumber={index + 1}
          eraTitle={era}
          textColor={erasColor[index + 1]}
          bgcolor={erasBgColor[index + 1]}
        />
      ))}
    </div>
  );
};

export default App;
