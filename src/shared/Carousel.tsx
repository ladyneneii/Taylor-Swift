import React, { useEffect, useRef, useState } from "react";
import { blackish, CarouselProps } from "./types";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";
import Modal from "./Modal";
import { carouselEras } from "@/data/img-data";

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

  const handleImgClick = (imgPath: string) => {
    setShowModal(true);
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

  return (
    <>
      {showModal && (
        <Modal
          setShowModal={setShowModal}
          imgPath={modalImg}
          closeBgColor={bgColor}
        />
      )}
      <div className="carousel__container" style={{ backgroundColor: bgColor }}>
        <div className="left-arrow" onClick={scrollToLeft}>
          {canScrollLeft && <BiSolidLeftArrow size={25} />}
        </div>
        <div ref={carouselRef} className="images-wrapper">
          {carouselEras[eraNumber - 1].map(({ imgPath, description }: CarouselProps, index) => (
            <div key={index}>
              <img
                className={`img-border-${
                  bgColor === blackish ? "white" : "black"
                }`}
                onClick={() => handleImgClick(imgPath)}
                src={imgPath}
                alt={description}
              />
              {description && (
                <h1 dangerouslySetInnerHTML={{ __html: description }} />
              )}
            </div>
          ))}
        </div>
        <div className="right-arrow" onClick={scrollToRight}>
          {canScrollRight && <BiSolidRightArrow size={25} />}
        </div>
      </div>
    </>
  );
};

export default Carousel;
