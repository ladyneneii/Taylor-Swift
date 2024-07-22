import React from "react";
import "./styles.css";
import Carousel from "./Carousel";
import { CarouselProps } from "./types";

type Props = {
  bgcolor: string;
  children: React.ReactNode;
  pictures?: Array<CarouselProps>;
  carouselBgColor?: string;
};

const EraContainer = ({
  bgcolor,
  children,
  pictures,
  carouselBgColor,
}: Props) => {
  return (
    <section className="era-container" style={{ background: bgcolor }}>
      <div className="era-container-padding">{children}</div>
      {pictures && (
        <Carousel
          bgcolor={carouselBgColor}
          color={carouselBgColor === "black" ? "white" : "black"}
          pictures={pictures}
        />
      )}
    </section>
  );
};

export default EraContainer;
