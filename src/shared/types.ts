// SHARED VARIABLES

export const eras = [
  "Home",
  "Taylor Swift",
  "Fearless",
  "Speak Now",
  "Red",
  "1989",
  "Reputation",
  "Lover",
  "Folklore",
  "Evermore",
  "Midnights",
  "TTPD",
];

export const erasColor = [
  "white", // textColor for Home
  "white",
  "white",
  "white",
  "white",
  "black",
  "white",
  "black",
  "black",
  "black",
  "white",
  "white",
];

export const blackish = "rgba(0, 0, 0, 0.5)"
export const whitish = "rgba(255, 255, 255, 0.5)"

export interface CarouselProps {
  imgPath: string;
  description?: string;
}
