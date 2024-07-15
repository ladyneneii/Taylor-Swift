import { useState, useEffect, useRef } from "react";
import "./styles.css";
import Eras_Tour_Logo from "@/assets/the-eras-tour-logo.png";
import Debut_Logo from "@/assets/debut-logo.png";
import { IoMenu, IoClose } from "react-icons/io5";
import useMediaQuery from "@/hooks/useMediaQuery";
import useOutsideClick from "@/hooks/useOutsideClick";

type Props = {
  selectedEra: string;
  setSelectedEra: (value: string) => void;
};

const Navbar = ({ selectedEra, setSelectedEra }: Props) => {
  const isAboveLargeScreens = useMediaQuery("(min-width: 1320px)");
  const [showSidebar, setShowSidebar] = useState(false);
  const sidebarRef = useRef(null);
  useOutsideClick({ ref: sidebarRef, setVisibility: setShowSidebar });

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
    "white",
    "white",
    "black",
    "white",
    "white",
    "black",
    "white",
    "black",
    "black",
    "black",
    "white",
    "black",
  ];

  const textColor = erasColor[eras.indexOf(selectedEra)];
  // const backgroundColor = textColor === "white" ? "black" : "white";
  const borderColor = (era: string) => {
    if (selectedEra !== era) return "";
    else return `selectedEra ${textColor}`;
  };

  useEffect(() => {
    if (isAboveLargeScreens) {
      setShowSidebar(false);
    }
  }, [isAboveLargeScreens]);

  console.log(selectedEra);

  return (
    <nav
    // style={{ backgroundColor: backgroundColor }}
    >
      <div className="nav__container">
        <div className="nav__logo">
          <img
            src={Eras_Tour_Logo}
            width={150}
            alt="debut-logo"
            className="nav__logo"
          />
        </div>
        <div className="nav__eras-container">
          {isAboveLargeScreens ? (
            eras.map((era, index) => (
              <div className="nav__eras-link" key={index}>
                <a
                  href={`#${era}`}
                  style={{ color: textColor }}
                  className={borderColor(era)}
                  onClick={() => setSelectedEra(era)}
                >
                  {era}
                </a>
              </div>
            ))
          ) : (
            <IoMenu
              size={50}
              className="nav__hamburger"
              style={{ color: textColor }}
              onClick={() => setShowSidebar(true)}
            />
          )}
        </div>
      </div>

      {/* SIDEBAR */}
      <div
        className={`nav__container-sm ${
          showSidebar ? "slide-in" : "slide-out"
        }`}
        // style={{ backgroundColor: backgroundColor }}
        ref={sidebarRef}
      >
        <div className="nav__container-sm-closebtn-container">
          <IoClose
            size={50}
            style={{ color: textColor }}
            onClick={() => setShowSidebar(false)}
            className="nav__container-sm-close"
          />
        </div>
        <div className="nav__container-sm-eras-container">
          {eras.map((era, index) => (
            <div key={index} className="nav__eras-link">
              <a
                href={`#${era}`}
                style={{ color: textColor }}
                className={borderColor(era)}
                onClick={() => setSelectedEra(era)}
              >
                {era}
              </a>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
