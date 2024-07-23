import React, { useRef } from "react";
import useOutsideClick from "@/hooks/useOutsideClick";

type Props = {
  setShowModal: (value: boolean) => void;
  imgPath: string;
  closeBgColor: string;
};

const Modal = ({ setShowModal, imgPath, closeBgColor }: Props) => {
  const imgRef = useRef(null);
  useOutsideClick({ ref: imgRef, setVisibility: setShowModal });

  return (
    <div className="modal__container">
      <div className="img-container">
        <p
          onClick={() => setShowModal(false)}
          style={{
            backgroundColor: closeBgColor,
            color: closeBgColor === "black" ? "white" : "black",
          }}
        >
          Close
        </p>
        <img ref={imgRef} src={imgPath} alt={imgPath} />
      </div>
    </div>
  );
};

export default Modal;
