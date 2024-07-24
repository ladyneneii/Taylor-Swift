import { useState, useEffect, useRef } from "react";
import "./styles.css";
import Eras_Tour_Logo from "@/assets/the-eras-tour-logo.png";
import Eras_Tour_Logo_Black from "@/assets/the-eras-tour-logo-black.png";
import { IoMenu, IoClose } from "react-icons/io5";
import useMediaQuery from "@/hooks/useMediaQuery";
import useOutsideClick from "@/hooks/useOutsideClick";
import { eras, erasColor } from "@/shared/types";

type Props = {
  selectedEra: string;
  setSelectedEra: (value: string) => void;
};

const Navbar = ({ selectedEra, setSelectedEra }: Props) => {
  const isAboveLargeScreens = useMediaQuery("(min-width: 1400px)");
  const [showSidebar, setShowSidebar] = useState(false);
  const sidebarRef = useRef(null);
  useOutsideClick({ ref: sidebarRef, setVisibility: setShowSidebar });

  console.log(selectedEra);

  const textColor = erasColor[eras.indexOf(selectedEra)];

  const borderColor = (era: string) => {
    if (selectedEra !== era) return "";
    else return `selectedEra ${textColor}`;
  };

  const formatEraId = (currEra: string) => {
    return currEra.toLowerCase().replace(/\s+/g, "");
  };

  useEffect(() => {
    if (isAboveLargeScreens) {
      setShowSidebar(false);
    }
  }, [isAboveLargeScreens]);

  return (
    <nav style={{ color: textColor }}>
      <div
        className="nav__parent-container"
        style={{
          backgroundColor:
            textColor === "white"
              ? "rgba(0, 0, 0, 0.5)"
              : "rgba(255, 255, 255, 0.5)",
        }}
      >
        <div className="nav__container">
          <div className="nav__logo">
            <a href="#home">
              <img
                src={
                  textColor === "white" ? Eras_Tour_Logo : Eras_Tour_Logo_Black
                }
                width={150}
                alt="debut-logo"
                className="nav__logo"
              />
            </a>
          </div>
          <div className="nav__eras-container">
            {isAboveLargeScreens ? (
              eras.map((era, index) => (
                <div className="nav__eras-link" key={index}>
                  <a
                    href={`#${formatEraId(era)}`}
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
                onClick={() => setShowSidebar(true)}
              />
            )}
          </div>
        </div>
      </div>

      {/* SIDEBAR */}
      <div
        className={`nav__container-sm ${
          showSidebar ? "slide-in" : "slide-out"
        }`}
        style={{
          backgroundColor:
            textColor === "white"
              ? "rgba(0, 0, 0, 0.5)"
              : "rgba(255, 255, 255, 0.5)",
        }}
        ref={sidebarRef}
      >
        <div className="nav__container-sm-closebtn-container">
          <IoClose
            size={50}
            onClick={() => setShowSidebar(false)}
            className="nav__container-sm-close"
          />
        </div>
        <div className="nav__container-sm-eras-container">
          {eras.map((era, index) => (
            <div key={index} className="nav__eras-link">
              <a
                href={`#${formatEraId(era)}`}
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
