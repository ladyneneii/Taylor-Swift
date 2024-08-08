import { useState, useEffect, useRef } from "react";
import "./styles.css";
import Eras_Tour_Logo from "@/assets/the-eras-tour-logo.png";
import Eras_Tour_Logo_Black from "@/assets/the-eras-tour-logo-black.png";
import { IoMenu, IoClose } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import useMediaQuery from "@/hooks/useMediaQuery";
import useOutsideClick from "@/hooks/useOutsideClick";
import {
  blackish,
  eras,
  erasColor,
  formatEraId,
  whitish,
} from "@/shared/types";
import { Track, allTracks } from "@/data/tracklists";

type Props = {
  selectedEra: string;
  setSelectedEra: (value: string) => void;
  setTaylorSwiftTrack: (value: Track) => void;
  setFearlessTVTrack: (value: Track) => void;
  setSpeakNowTVTrack: (value: Track) => void;
  setRedTVTrack: (value: Track) => void;
  set_1989TVTrack: (value: Track) => void;
  setReputationTrack: (value: Track) => void;
  setLoverTrack: (value: Track) => void;
  setFolkloreTrack: (value: Track) => void;
  setEvermoreTrack: (value: Track) => void;
  setMidnightsTrack: (value: Track) => void;
  setTtpdTrack: (value: Track) => void;
};

const Navbar = ({
  selectedEra,
  setSelectedEra,
  setTaylorSwiftTrack,
  setFearlessTVTrack,
  setSpeakNowTVTrack,
  setRedTVTrack,
  set_1989TVTrack,
  setReputationTrack,
  setLoverTrack,
  setFolkloreTrack,
  setEvermoreTrack,
  setMidnightsTrack,
  setTtpdTrack,
}: Props) => {
  const isAboveLargeScreens = useMediaQuery("(min-width: 1650px)");
  const isPhone = useMediaQuery("(max-width: 550px)");
  const [expandSearch, setExpandSearch] = useState(false);
  const [search, setSearch] = useState("");
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const searchRef = useRef(null);
  const searchInputRef = useRef<HTMLInputElement | null>(null);
  const sidebarRef = useRef(null);
  useOutsideClick({ ref: searchRef, setVisibility: setShowSearchResults });
  useOutsideClick({ ref: sidebarRef, setVisibility: setShowSidebar });

  // console.log(selectedEra);

  const textColor = erasColor[eras.indexOf(selectedEra)];

  const borderColor = (era: string) => {
    if (selectedEra !== era) return "";
    else return `selectedEra ${textColor}`;
  };

  const handleSearchChange = (input: string) => {
    setSearch(input);
  };

  const handleExpandSearch = () => {
    setExpandSearch(true);
    searchInputRef.current?.focus();
  };

  const setAlbumTrackState = (
    idx: number,
    url: string,
    title: string,
    length: number,
    albumNumber: number
  ) => {
    const trackValues = {
      trackIndex: idx,
      url: url,
      title: title,
      trackAlbumLength: length,
    };

    switch (albumNumber) {
      case 0:
        setTaylorSwiftTrack(trackValues);
        return;
      case 1:
        setFearlessTVTrack(trackValues);
        return;
      case 2:
        setSpeakNowTVTrack(trackValues);
        return;
      case 3:
        setRedTVTrack(trackValues);
        return;
      case 4:
        set_1989TVTrack(trackValues);
        return;
      case 5:
        setReputationTrack(trackValues);
        return;
      case 6:
        setLoverTrack(trackValues);
        return;
      case 7:
        setFolkloreTrack(trackValues);
        return;
      case 8:
        setEvermoreTrack(trackValues);
        return;
      case 9:
        setMidnightsTrack(trackValues);
        return;
      case 10:
        setTtpdTrack(trackValues);
        return;
      default:
        setTaylorSwiftTrack(trackValues);
        return;
    }
  };

  const handleAnchorClick = (
    e: any,
    targetId: string,
    idx: number,
    url: string,
    title: string,
    length: number,
    albumNumber: number
  ) => {
    e.preventDefault();
    e.stopPropagation(); // Stop the input field from regaining focus

    const targetElement = document.getElementById(targetId);
    const offset = 400; // Adjust this value to the height of your navbar

    if (targetElement) {
      setShowSearchResults(false);
      searchInputRef.current?.blur();
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      setAlbumTrackState(idx, url, title, length, albumNumber);

      // handleClickTrack(index, url, title, trackList.length);
    }
  };

  useEffect(() => {
    if (isAboveLargeScreens) {
      setShowSidebar(false);
    }
    if (!isPhone) {
      setExpandSearch(false);
    }
    if (isPhone) {
      setShowSearchResults(false);
    }
  }, [isAboveLargeScreens, isPhone]);

  // console.log(allTracks);
  // console.log(search);

  return (
    <nav
      style={{
        color: textColor,
      }}
    >
      <div
        className="nav__parent-container"
        style={{
          backgroundColor: textColor === "white" ? blackish : whitish,
        }}
      >
        <div className="nav__container">
          {!expandSearch && (
            <div className="nav__logo">
              <a href="#home">
                <img
                  src={
                    textColor === "white"
                      ? Eras_Tour_Logo
                      : Eras_Tour_Logo_Black
                  }
                  width={150}
                  alt="debut-logo"
                  className="nav__logo"
                />
              </a>
            </div>
          )}

          <div
            className={`nav__eras-container ${expandSearch ? "expand" : ""}`}
          >
            {/* SEARCH FIELD */}
            <div
              ref={searchRef}
              className={`nav__search-field ${isPhone ? "collapse" : ""} ${
                expandSearch ? "expand" : ""
              }`}
              style={{
                borderColor: textColor === "white" ? "white" : "black",
                backgroundColor:
                  textColor === "white"
                    ? "rgba(0, 0, 0, 0.9)"
                    : "rgba(255, 255, 255, 0.9)",
              }}
              onClick={isPhone ? handleExpandSearch : undefined}
            >
              <div className="nav__search-icon">
                <CiSearch size={20} />
              </div>
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Search songs..."
                style={{
                  color: textColor === "white" ? "white" : "black",
                }}
                onChange={(e) => handleSearchChange(e.target.value)}
                onFocus={() => setShowSearchResults(true)}
              />

              {showSearchResults && (
                <div
                  className="nav__search-results"
                  style={{
                    backgroundColor:
                      textColor === "white"
                        ? "rgba(0, 0, 0, 0.9)"
                        : "rgba(255, 255, 255, 0.9)",
                  }}
                >
                  <div style={{ height: "5.4rem" }}></div>
                  <div className="nav__tracklist">
                    {allTracks
                      .filter(({ title }) => {
                        const normalizedTitle = title
                          .toLowerCase()
                          .replace(/\s+/g, "");
                        const normalizedSearch = search
                          .toLowerCase()
                          .replace(/\s+/g, "");
                        return normalizedTitle.includes(normalizedSearch);
                      })
                      .map(
                        (
                          {
                            idx,
                            title,
                            trackId,
                            url,
                            length,
                            albumNumber,
                            albumPath,
                          },
                          index
                        ) => (
                          <a
                            style={{ color: textColor }}
                            key={index}
                            // href={`#${trackId}`}
                            onClick={(e) =>
                              handleAnchorClick(
                                e,
                                trackId,
                                idx,
                                url,
                                title,
                                length,
                                albumNumber
                              )
                            }
                          >
                            <div
                              className={`nav__album-track ${
                                textColor === "white" ? "dark" : "light"
                              }`}
                            >
                              <img src={albumPath} alt={albumPath} />
                              <p>{title}</p>
                            </div>
                          </a>
                        )
                      )}
                  </div>
                  <div style={{ height: "2rem" }}></div>
                </div>
              )}
            </div>

            {isAboveLargeScreens ? (
              eras.map((era, index) => (
                <div className="nav__eras-link" key={index}>
                  <a
                    href={`#${formatEraId(era)}`}
                    style={{ color: textColor }}
                    className={borderColor(era)}
                    onClick={() => setSelectedEra(era)}
                  >
                    {era === "Reputation"
                      ? "reputation"
                      : era === "Folklore"
                      ? "folklore"
                      : era === "Evermore"
                      ? "evermore"
                      : era}
                  </a>
                </div>
              ))
            ) : !expandSearch ? (
              <IoMenu
                size={50}
                className="nav__hamburger"
                onClick={() => setShowSidebar(true)}
              />
            ) : (
              <IoClose
                size={50}
                className="nav__hamburger"
                onClick={() => setExpandSearch(false)}
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
          backgroundColor: textColor === "white" ? blackish : whitish,
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
                {era === "Reputation"
                  ? "reputation"
                  : era === "Folklore"
                  ? "folklore"
                  : era === "Evermore"
                  ? "evermore"
                  : era}
              </a>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
