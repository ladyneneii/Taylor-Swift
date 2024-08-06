import React, { useEffect, useRef, useState } from "react";
import useOutsideClick from "@/hooks/useOutsideClick";
import { blackish } from "./types";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { carouselEras } from "@/data/img-data";

type Props = {
  setShowModal: (value: boolean) => void;
  imgPath: string;
  imgNum: number;
  carouselNum: number;
  closeBgColor: string;
};

const Modal = ({
  setShowModal,
  imgPath,
  imgNum,
  carouselNum,
  closeBgColor,
}: Props) => {
  const imgRef = useRef(null);
  useOutsideClick({ ref: imgRef, setVisibility: setShowModal });
  const [image, setImage] = useState(imgPath);
  const [currImgNum, setCurrImgNum] = useState(imgNum);

  const handleClickLeft = () => {
    setCurrImgNum(
      currImgNum === 0 ? carouselEras[carouselNum].length - 1 : currImgNum - 1
    );
  };

  const handleClickRight = () => {
    setCurrImgNum((currImgNum + 1) % carouselEras[carouselNum].length);
  };

  useEffect(() => {
    setImage(carouselEras[carouselNum][currImgNum].imgPath);
  }, [currImgNum, carouselNum]);

  return (
    <div className="modal__container">
      <div className="img-p-container">
        <div ref={imgRef} className="img-container">
        <p
          onClick={() => setShowModal(false)}
          style={{
            backgroundColor: closeBgColor,
            color: closeBgColor === blackish ? "white" : "black",
          }}
        >
          Close
        </p>
          <div className="modal__left-btn" onClick={handleClickLeft}>
            <FaChevronLeft color="white" size={30} />
          </div>
          <img src={image} alt={image} />
          <div className="modal__right-btn" onClick={handleClickRight}>
            <FaChevronRight color="white" size={30} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
