import "./styles.css";
import Hero from "@/assets/hero-eras-tour.jpeg";

type Props = {};

const Home = (props: Props) => {
  return (
    <section className="home__container">
      <img src={Hero} className="home__hero" alt="taylor-swift-eras-tour" />
      <div className="home__overlay"></div>
      <div className="home__text-video-container">
        <div className="home__text-container">
          <h1>
            Venture on a magical journey through the different eras of{" "}
            <span className="nowrap">
              <span className="taylor-swift">Taylor Swift</span>'s
            </span>{" "}
            music!
          </h1>
        </div>
        <div className="home__video-container">
          <div>
            <iframe
              src="https://www.youtube.com/embed/KudedLV0tP0?si=LMRpAUCSma9fBpNG"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
            <p>THE ERAS TOUR CONCERT FILM TRAILER</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
