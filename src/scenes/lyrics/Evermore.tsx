import { whitish } from "@/shared/types";
import "./styles.css";
import TitleAuthor from "@/shared/TitleAuthor";

const Evermore = () => {
  return (
    <div className="intro__container redTV-grid text-center" style={{color: "black"}}>
      <h1>Your Midas touch on the Chevy door</h1>
      <h1>November flush and your flannel cure</h1>
      <h1>"This dorm was once a madhouse"</h1>
      <h1>I made a joke, "Well, it's made for me"</h1>
      <h1>How evergreen, our group of friends</h1>
      <h1>Don't think we'll say that word again</h1>
      <h1>And soon they'll have the nerve to deck the halls</h1>
      <h1>That we once walked through</h1>
      <h1>One for the money, two for the show</h1>
      <h1>I never was ready, so I watch you go.</h1>
      <h1>Sometimes you just don't know the answer</h1>
      <h1>'Til someone's on their knees and asks you</h1>
      <h1>She would've made such a lovely bride</h1>
      <h1>What a shame she's fucked in the head, " they said</h1>
      <h1>But you'll find the real thing instead</h1>
      <h1>She'll patch up your tapestry that I shred...</h1>

      <TitleAuthor
        textAlign="center"
        color={whitish}
        fontSize="1.5rem"
        titleAuthor="champagne problems, Taylor Swift (2020)"
      />
    </div>
  );
};

export default Evermore;
