import React, { useRef } from "react";
import useOutsideClick from "@/hooks/useOutsideClick";

type Props = {
  setShowModal: (value: boolean) => void;
  imgPath: string;
};

const Modal = ({ setShowModal, imgPath }: Props) => {
  const imgRef = useRef(null);
  useOutsideClick({ ref: imgRef, setVisibility: setShowModal });

  return (
    <div className="modal__container">
      <div className="img-container">
        <p onClick={() => setShowModal(false)}>Close</p>
        <img ref={imgRef} src={imgPath} alt={imgPath} />
      </div>
    </div>
  );
};

export default Modal;
