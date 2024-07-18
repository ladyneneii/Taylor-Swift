import Button from "../../shared/Button";
import "./styles.css";
import Hero from "@/assets/hero-eras-tour.jpeg";
// import Hero from "@/assets/hero-eras-tour-cropped.jpeg";

type Props = {};

const Home = (props: Props) => {
  return (
    <section id="home" className="home__container">
      <img src={Hero} className="home__hero" alt="taylor-swift-eras-tour" />
      <div className="home__text-container">
        <h1>
          Venture on a journey with{" "}
          <span className="taylor-swift">Taylor Swift</span> through the
          different eras of her music!
        </h1>
        <div className="home__start-btn-container">
          <Button bgcolor="white" color="black">START</Button>
        </div>
      </div>
    </section>
  );
};

export default Home;
