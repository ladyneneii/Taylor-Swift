import React, { useState } from "react";
import "./styles.css";
import Title from "@/shared/Title";
import DebutAlbum from "@/assets/album-taylor-swift.webp";

type Props = {};

const TaylorSwift = (props: Props) => {
  const debutTrackList = [
    {
      title: "Tim McGraw",
      url: "https://www.youtube.com/embed/GkD20ajVxnY?si=TxQd87ou4i5kqOVC",
    },
    {
      title: "Picture To Burn",
      url: "https://www.youtube.com/embed/yCMqcFAigRg?si=5W2COhQJq-PSX1Bb",
    },
    {
      title: "Teardrops On My Guitar",
      url: "https://www.youtube.com/embed/xKCek6_dB0M?si=em7kfmEv0M8DJQqr",
    },
    {
      title: "A Place In This World",
      url: "https://www.youtube.com/embed/pYFqLzFoHo0?si=uI_1_urUZu3k2FBU",
    },
    {
      title: "Cold As You",
      url: "https://www.youtube.com/embed/SoXPvCcFibo?si=uNuKZqiRHq3Chvuf",
    },
    {
      title: "The Outside",
      url: "https://www.youtube.com/embed/L4hOi4KvRY0?si=jG4UGcDRPeigXBvy",
    },
    {
      title: "Tied Together With A Smile",
      url: "https://www.youtube.com/embed/aCVHGH5sO0c?si=mqQEVh08WqepHwHO",
    },
    {
      title: "Stay Beautiful",
      url: "https://www.youtube.com/embed/6BOPfGQLUH8?si=tQtVGzm0mWS-BlGM",
    },
    {
      title: "Should've Said No",
      url: "https://www.youtube.com/embed/dUisZV--Nbs?si=zuLaXsJQRanAheMP",
    },
    {
      title: "Mary's Song (Oh My My My)",
      url: "https://www.youtube.com/embed/iVfVuptgjeU?si=Wyx1D9rQeEiVbQe_",
    },
    {
      title: "Our Song",
      url: "https://www.youtube.com/embed/Jb2stN7kH28?si=Hs64qpwl3wBKSF2p",
    },
    {
      title: "I'm Only Me When I'm With You (2008, Deluxe)",
      url: "https://www.youtube.com/embed/AlTfYj7q5gQ?si=mE_zYr3BBkC2ETIV",
    },
    {
      title: "Invisible (2008, Deluxe)",
      url: "https://www.youtube.com/embed/8OOKMt0Rz1k?si=BxTg1vPVMhozJx-B",
    },
    {
      title: "A Perfectly Good Heart (2008, Deluxe)",
      url: "https://www.youtube.com/embed/vv85ZAvrVDU?si=w-usFgg-I3rbuvgy",
    },
    {
      title: "Teardrops on My Guitar Pop Version (2008)",
      url: "https://www.youtube.com/embed/rX2wtAomWVo?si=bnKnqowQQ5GD4t3u",
    },
    {
      title: "I Heart ? (Best Buy Digital Download)",
      url: "https://www.youtube.com/embed/rmMUttmS8kY?si=YREr9OlpZGqWkFu6",
    },
  ];

  const [videoURL, setVideoURL] = useState(
    "https://www.youtube.com/embed/xKCek6_dB0M?si=JdEpxMepaEwgWSNa&amp;start=74"
  );

  return (
    <div id="taylorswift" className="container">
      <Title>Taylor Swift</Title>
      <div className="tracks-album-container">
        <div className="tracks-container">
          {debutTrackList.map(({ title, url }, index) => (
            <div key={index} className="track-info">
              <div className="track-number">{index + 1}</div>
              <div className="track">{title}</div>
            </div>
          ))}
        </div>
        <div className="album-container">
          <img src={DebutAlbum} alt="taylor-swift-album" />
        </div>
      </div>
    </div>
  );
};

export default TaylorSwift;
