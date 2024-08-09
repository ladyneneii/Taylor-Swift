import "./styles.css";
import Taymother from "@/assets/taymother.jpg";
import Nene from "@/assets/nene.jpg";
import Button from "@/shared/Button";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

type Props = {
  bgcolor: string;
};

const Footer = ({ bgcolor }: Props) => {
  const color = bgcolor === "black" ? "white" : "black";
  return (
    <div
      className="footer__container"
      style={{ backgroundColor: bgcolor, color }}
    >
      <div className="contact-list">
        <div className="contact-us">
          <div className="img-container">
            <img src={Taymother} alt={Taymother} />
          </div>
          <div className="links-container">
            <h2>
              Visit Taylor Swift's{" "}
              <span className="nowrap">Official Website and Store!</span>
            </h2>
            <div className="buttons-container">
              <Button
                bgcolor={color}
                color={bgcolor}
                dest="https://www.taylorswift.com/"
                isWebsite={true}
              >
                WEBSITE
              </Button>
              <Button
                bgcolor={color}
                color={bgcolor}
                dest="https://store.taylorswift.com/"
                isWebsite={true}
              >
                STORE
              </Button>
            </div>
          </div>
        </div>
        <div className="contact-us">
          <div className="img-container">
            <img src={Nene} alt={Nene} />
          </div>
          <div className="links-container">
            <h2>
              Website created by <span className="nowrap">a huge Swiftie!</span>
            </h2>
            <h2>Contact me through:</h2>
            <div className="socials-container">
              <div className="social-icon">
                <a
                  href="https://www.linkedin.com/in/ernest-curativo/"
                  target="_blank"
                >
                  <FaLinkedin size={30} color={color} />
                </a>
              </div>
              <div className="social-icon">
                <a href="mailto:ernestcurativo@gmail.com" target="_blank">
                  <MdEmail size={30} color={color} />
                </a>
              </div>
              <div className="social-icon">
                <a href="https://github.com/ladyneneii" target="_blank">
                  <FaGithub size={30} color={color} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-message">
        <p>
          &copy; {new Date().getFullYear()} Ernest Joseph S. Curativo.{" "}
          <span className="nowrap">All rights reserved.</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
