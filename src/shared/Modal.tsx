import { useEffect, useRef, useState } from "react";
import useOutsideClick from "@/hooks/useOutsideClick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { carouselEras } from "@/data/img-data";

type Props = {
  setShowModal: (value: boolean) => void;
  imgPath: string;
  imgNum: number;
  carouselNum: number;
};

const Modal = ({ setShowModal, imgPath, imgNum, carouselNum }: Props) => {
  const imgRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  useOutsideClick({
    ref: imgRef,
    refLeft: leftRef,
    refRight: rightRef,
    setVisibility: setShowModal,
  });
  const [image, setImage] = useState(imgPath);
  const [currImgNum, setCurrImgNum] = useState(imgNum);

  const handleClickLeft = () => {
    setCurrImgNum(
      currImgNum === 0 ? carouselEras[carouselNum].length - 1 : currImgNum - 1
    );
    setShowModal(true);
  };

  const handleClickRight = () => {
    setCurrImgNum((currImgNum + 1) % carouselEras[carouselNum].length);
    setShowModal(true);
  };

  useEffect(() => {
    setImage(carouselEras[carouselNum][currImgNum].imgPath);
  }, [currImgNum, carouselNum]);



  return (
    <div className="modal__overlay">
      <div className="modal__container" onClick={(e) => e.stopPropagation()}>
        <div className="modal__close-btn" onClick={() => setShowModal(false)}>
          <IoClose color="white" size={50} />
        </div>
        <div
          ref={leftRef}
          className="modal__left-btn"
          onClick={handleClickLeft}
        >
          <FaChevronLeft color="white" size={40} />
        </div>
        <div
          ref={rightRef}
          className="modal__right-btn"
          onClick={handleClickRight}
        >
          <FaChevronRight color="white" size={40} />
        </div>
        <div className="img-container">
          <a href={image} target="_blank">
            <img
              ref={imgRef}
              src={image}
              alt={image}
              className="no-select no-outline"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Modal;
