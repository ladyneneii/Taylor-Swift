import React, { useEffect, useRef, useState } from "react";
import { CarouselProps } from "./types";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";
import Modal from "./Modal";

type Props = {
  bgcolor?: string;
  color?: string;
  pictures: Array<CarouselProps>;
};

const Carousel = ({ bgcolor, color, pictures }: Props) => {
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

  console.log(modalImg, showModal);

  return (
    <>
      {showModal && <Modal setShowModal={setShowModal} imgPath={modalImg} />}
      <div
        className="carousel__container"
        style={{ backgroundColor: bgcolor || "white", color: color || "black" }}
      >
        <div className="left-arrow" onClick={scrollToLeft}>
          {canScrollLeft && <BiSolidLeftArrow size={25} />}
        </div>
        <div ref={carouselRef} className="images-wrapper">
          {pictures?.map(({ imgPath, description }: CarouselProps, index) => (
            <div key={index}>
              <img
                onClick={() => handleImgClick(imgPath)}
                src={imgPath}
                alt={description}
              />
              {/* <h1>{description}</h1> */}
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
