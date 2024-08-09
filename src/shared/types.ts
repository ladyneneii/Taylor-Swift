// SHARED VARIABLES AND FUNCTIONS

export const formatEraId = (currEra: string) => {
  return currEra.toLowerCase().replace(/\s+/g, "");
};

export const createTrackId = (track: string) => {
  let result = track.toLowerCase();

  result = result.replace(/\s+/g, "-");

  result = result.replace(/[^a-z0-9-]/g, "");

  return `track-${result}`;
};

export const eras = [
  "Home",
  "Taylor Swift",
  // "Fearless",
  // "Speak Now",
  // "Red",
  // "1989",
  // "Reputation",
  // "Lover",
  // "Folklore",
  // "Evermore",
  // "Midnights",
  // "TTPD",
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



export const blackish = "rgba(0, 0, 0, 0.5)";
export const whitish = "rgba(255, 255, 255, 0.5)";
export const blackish2 = "rgba(76, 75, 75, 0.667)";
export const whitish2 = "rgba(255, 255, 255, 0.7)";

export interface CarouselProps {
  imgPath: string;
  description?: string;
}
