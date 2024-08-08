import Button from "../../shared/Button";
import "./styles.css";
import Hero from "@/assets/hero-eras-tour.jpeg";
import { motion } from "framer-motion";

type Props = { setSelectedEra: (value: string) => void };

const Home = ({ setSelectedEra }: Props) => {
  return (
    <motion.div
      id="home"
      className="home__container"
      onViewportEnter={() => setSelectedEra("Home")}
    >
      <img src={Hero} className="home__hero" alt="taylor-swift-eras-tour" />
      <motion.div
        className="home__text-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <h1>
          Venture on a journey with{" "}
          <span className="taylor-swift">Taylor Swift</span> through the
          different eras of her music!
        </h1>
        <div className="home__start-btn-container">
          <Button bgcolor="white" color="black" section="terms">
            START
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Home;
