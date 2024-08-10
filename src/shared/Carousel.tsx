import { useEffect, useRef, useState } from "react";
import { blackish, CarouselProps } from "./types";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";
import Modal from "./Modal";
import { carouselEras } from "@/data/img-data";
import DOMPurify from "dompurify";

type Props = {
  bgColor: string;
  eraNumber: number;
};

const Carousel = ({ bgColor, eraNumber }: Props) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalImg, setModalImg] = useState("");
  const [imgNum, setImgNum] = useState(-1);
  const [carouselNum, setCarouselNum] = useState(-1)

  const updateArrows = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
    }
  };

  const scrollToLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -900, // Adjust the value to the desired scroll amount
        behavior: "smooth",
      });
    }
  };

  const scrollToRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: 900, // Adjust the value to the desired scroll amount
        behavior: "smooth",
      });
    }
  };

  const handleImgClick = (imgPath: string, imgNum: number, carouselNum: number) => {
    setShowModal(true);
    setImgNum(imgNum)
    setCarouselNum(carouselNum)
    setModalImg(imgPath);
  };

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.addEventListener("scroll", updateArrows);
      updateArrows(); // initial check
    }

    return () => {
      if (carouselRef.current) {
        carouselRef.current.removeEventListener("scroll", updateArrows);
      }
    };
  }, []);

  useEffect(() => {
    if (showModal) {
      document.body.classList.add("modal-open");
    } else {
      // Delay the removal of the class
      const timeoutId = setTimeout(() => {
        document.body.classList.remove("modal-open");
      }, 600); // Delay in milliseconds (adjust as needed)

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [showModal]);

  return (
    <>
      {showModal && (
        <Modal
          setShowModal={setShowModal}
          imgPath={modalImg}
          imgNum={imgNum}
          carouselNum={carouselNum}
        />
      )}
      <div className="carousel__container" style={{ backgroundColor: bgColor }}>
        <div className="left-arrow" onClick={scrollToLeft}>
          {canScrollLeft && <BiSolidLeftArrow size={25} />}
        </div>
        <div ref={carouselRef} className="images-wrapper">
          {carouselEras[eraNumber - 1].map(
            ({ imgPath, description }: CarouselProps, index) => {
              let sanitizedDesc = "";
              if (description) {
                sanitizedDesc = DOMPurify.sanitize(description);
              }
              return (
                <div key={index}>
                  <img
                    className={`img-border-${
                      bgColor === blackish ? "white" : "black"
                    }`}
                    onClick={() => handleImgClick(imgPath, index, eraNumber - 1)}
                    src={imgPath}
                    alt={description}
                  />
                  {description && (
                    <h1 dangerouslySetInnerHTML={{ __html: sanitizedDesc }} />
                  )}
                </div>
              );
            }
          )}
        </div>
        <div className="right-arrow" onClick={scrollToRight}>
          {canScrollRight && <BiSolidRightArrow size={25} />}
        </div>
      </div>
    </>
  );
};

export default Carousel;
