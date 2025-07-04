import { useState, useEffect, useRef } from "react";
import "./styles.css";
import Eras_Tour_Logo from "@/assets/the-eras-tour-logo.png";
import Eras_Tour_Logo_Black from "@/assets/the-eras-tour-logo-black.png";
import { IoMenu, IoClose } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import useMediaQuery from "@/hooks/useMediaQuery";
import useOutsideClick from "@/hooks/useOutsideClick";
import {
  eras,
  erasColor,
  formatEraId,
  // formatEraId,
} from "@/shared/types";
import { Track, allTracks } from "@/data/tracklists";

type Props = {
  selectedEra: string;
  setSelectedEra: (value: string) => void;
  setShowSkipToTracks: (value: boolean) => void;
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
  setShowSkipToTracks,
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
  const isAboveLargeScreens = useMediaQuery("(min-width: 1180px)");
  const isSmall = useMediaQuery("(max-width: 1050px) and (min-width: 551px)");
  const isTablet = useMediaQuery("(max-width: 750px)");
  const isPhone = useMediaQuery("(max-width: 550px)");
  const [textColor, setTextcolor] = useState(
    erasColor[eras.indexOf(selectedEra)]
  );
  const [expandSearch, setExpandSearch] = useState(false);
  const [search, setSearch] = useState("");
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const searchRef = useRef(null);
  const searchInputRef = useRef<HTMLInputElement | null>(null);
  const sidebarRef = useRef(null);
  useOutsideClick({ ref: searchRef, setVisibility: setShowSearchResults });
  useOutsideClick({ ref: sidebarRef, setVisibility: setShowSidebar });
  const [focusedIndex, setFocusedIndex] = useState(-1); // No item is focused initially
  const resultsRef = useRef<HTMLDivElement | null>(null);

  const borderColor = (era: string) => {
    if (selectedEra !== era) return "";
    else return `selectedEra ${textColor}`;
  };

  const handleLinkClick = (era: string) => {
    if (isTablet) setShowSidebar(false);
    setSelectedEra(era);

    /// Temporarily disable smooth scrolling
    document.documentElement.style.scrollBehavior = "auto";

    // Scroll to the top of the page without smooth scrolling
    window.scrollTo({ top: 0 });

    // Restore smooth scrolling after the operation
    setTimeout(() => {
      document.documentElement.style.scrollBehavior = "";
    }, 0);
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
    setSelectedEra(eras[albumNumber + 1]);
    const offset = 300;

    // Set the album track state
    setAlbumTrackState(idx, url, title, length, albumNumber);

    // Delay the position calculation until after the DOM has updated
    setTimeout(() => {
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        setShowSkipToTracks(false);
        setSearch(title);
        setShowSearchResults(false);
        searchInputRef.current?.blur();

        // Ensure that the position is calculated after rendering and layout updates
        requestAnimationFrame(() => {
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        });
      }
    }, 550); // Delay to allow the DOM to update before getting the position
  };

  const handleFocus = () => {
    setShowSearchResults(true);
  };

  const normalizeString = (str: string) => {
    return str
      .toLowerCase() // Convert to lowercase
      .trim() // Remove leading and trailing spaces
      .replace(/\s+/g, " ") // Replace multiple spaces with a single space
      .replace(/[^a-zA-Z0-9 ]/g, ""); // Remove punctuation
  };

  const filteredTracks = allTracks.filter(({ title }) =>
    normalizeString(title).includes(normalizeString(search))
  );

  const handleKeyDown = (event: any) => {
    switch (event.key) {
      case "ArrowDown":
        setFocusedIndex((prevIndex) => {
          // const newIndex = Math.min(prevIndex + 1, filteredTracks.length - 1);
          const newIndex = (prevIndex + 1) % filteredTracks.length;
          scrollToIndex(newIndex);
          return newIndex;
        });
        event.preventDefault();
        break;
      case "ArrowUp":
        setFocusedIndex((prevIndex) => {
          // const newIndex = Math.max(prevIndex - 1, 0);
          const newIndex =
            prevIndex - 1 < 0 ? filteredTracks.length - 1 : prevIndex - 1;
          scrollToIndex(newIndex);
          return newIndex;
        });
        event.preventDefault();
        break;
      case "Enter":
        if (focusedIndex >= 0) {
          const selectedTrack = filteredTracks[focusedIndex];

          handleAnchorClick(
            event,
            selectedTrack.trackId,
            selectedTrack.idx,
            selectedTrack.url,
            selectedTrack.title,
            selectedTrack.length,
            selectedTrack.albumNumber
          );
        }
        event.preventDefault();
        break;

      default:
        // Do not prevent default for other keys to allow typing
        break;
    }
  };

  const scrollToIndex = (index: number) => {
    if (resultsRef.current) {
      const focusedItem = resultsRef.current.children[index];
      if (focusedItem) {
        focusedItem.scrollIntoView({
          behavior: "smooth", // Smooth scroll
          block: "nearest", // Scroll to the nearest edge
        });
      }
    }
  };

  useEffect(() => {
    const handleDocumentKeyDown = (event: any) => {
      if (showSearchResults) {
        handleKeyDown(event);
      }
    };

    if (showSearchResults) {
      document.addEventListener("keydown", handleDocumentKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleDocumentKeyDown);
    };
  }, [filteredTracks, showSearchResults, focusedIndex]);

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

    // console.log(isPhone, isSmall);
  }, [isAboveLargeScreens, isPhone, isSmall]);

  useEffect(() => {
    setTextcolor(erasColor[eras.indexOf(selectedEra)]);
    borderColor(selectedEra);
    // console.log(selectedEra);
  }, [selectedEra]);

  return (
    <nav
      style={{
        color: textColor,
      }}
    >
      <div
        className="nav__parent-container"
        style={{
          backgroundColor: textColor === "white" ? "black" : "white",
        }}
      >
        <div className="nav__container">
          {!expandSearch && (
            <div className="nav__logo">
              <a
                href="#home"
                onClick={() => handleLinkClick("Home")}
              >
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
                backgroundColor: textColor === "white" ? "#333333" : "#e0e0e0",
                minWidth: !isAboveLargeScreens ? 0 : "15rem",
              }}
              onClick={isPhone ? handleExpandSearch : undefined}
            >
              <div className="nav__search-icon">
                <CiSearch size={30} />
              </div>
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Search songs..."
                style={{
                  color: textColor === "white" ? "white" : "black",
                  fontSize: "1.2rem",
                }}
                onChange={(e) => handleSearchChange(e.target.value)}
                onFocus={handleFocus}
                value={search}
                // onKeyDown={handleInputKeyDown}
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
                  <div ref={resultsRef} className="nav__tracklist" tabIndex={0}>
                    {filteredTracks.map(
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
                      ) => {
                        return (
                          <a
                            style={{ color: textColor }}
                            key={index}
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
                            onMouseEnter={() => setFocusedIndex(index)}
                          >
                            <div
                              className={`nav__album-track`}
                              style={{
                                backgroundColor:
                                  focusedIndex === index &&
                                  textColor === "white"
                                    ? "rgba(45, 45, 45, 0.9)"
                                    : focusedIndex === index &&
                                      textColor === "black"
                                    ? "rgba(210, 210, 210, 0.9)"
                                    : "",
                              }}
                            >
                              <img src={albumPath} alt={albumPath} />
                              <p>{title}</p>
                            </div>
                          </a>
                        );
                      }
                    )}
                  </div>

                  <div style={{ height: "2rem" }}></div>
                </div>
              )}
            </div>

            <div className="nav__eras-container-overflow">
              {isAboveLargeScreens ? (
                eras.map((era, index) => (
                  <div className="nav__eras-link" key={index}>
                    <a
                      href={`#${formatEraId(eras[index])}`}
                      onClick={() => handleLinkClick(era)}
                      style={{ color: textColor }}
                      className={borderColor(era)}
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
      </div>

      {/* SIDEBAR */}
      <div
        className={`nav__container-sm ${
          showSidebar ? "slide-in" : "slide-out"
        }`}
        style={{
          backgroundColor: textColor === "white" ? "black" : "white",
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
                href={`#${formatEraId(eras[index])}`}
                onClick={() => handleLinkClick(era)}
                style={{ color: textColor }}
                className={borderColor(era)}
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
