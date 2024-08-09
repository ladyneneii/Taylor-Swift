import { whitish } from "@/shared/types";
import "./styles.css";
import TitleAuthor from "@/shared/TitleAuthor";

const Lover = () => {
  return (
    <div
      className="intro__container taylorswift-grid"
      style={{ color: "black" }}
    >
      <div className="ts1">
        <h1>What's it like to brag about raking in dollars</h1>
        <h1>And getting bitches and models?</h1>
        <h1>And it's all good if you're bad</h1>
        <h1>And it's okay if you're mad</h1>
        <h1>If I was out flashin' my dollars</h1>
        <h1>I'd be a bitch, not a baller</h1>
        <h1>They'd paint me out to be bad</h1>
        <h1>So it's okay that I'm mad</h1>
        <h1>I'm so sick of running as fast as I can...</h1>
        <h1>Wonderin' if I'd get there quicker if I was a man...</h1>

        <TitleAuthor
          textAlign="start"
          color={whitish}
          fontSize="2rem"
          titleAuthor="The Man, Taylor Swift (2020)"
        />
      </div>
      <div className="ts2">
        <h1>Ladies and gentlemen, will you please stand?</h1>
        <h1>With every guitar string scar on my hand</h1>
        <h1>I take this magnetic force of a man to be my lover</h1>
        <h1>My heart's been borrowed and yours has been blue</h1>
        <h1>All's well that ends well to end up with you</h1>
        <h1>Swear to be overdramatic and true to my lover</h1>
        <h1>And you'll save all your dirtiest jokes for me</h1>
        <h1>And at every table, I'll save you a seat, lover...</h1>
        <TitleAuthor
          textAlign="start"
          color={whitish}
          fontSize="1.3rem"
          titleAuthor="Lover, Taylor Swift (2020)"
        />
      </div>
      <div className="ts3">
        <h1>I'm New York City...</h1>
        <h1>You're the West Village...</h1>
        <h1>But we might just get away with it</h1>
        <h1>Religion's in your lips</h1>
        <h1>Even if it's a false god</h1>
        <h1>We'd still worship</h1>
        <h1>We might just get away with it</h1>
        <h1>The altar is my hips</h1>
        <h1>Even if it's a false god</h1>
        <h1>We'd still worship this love...</h1>
        <TitleAuthor
          textAlign="start"
          color={whitish}
          fontSize="1.3rem"
          titleAuthor="False God, Taylor Swift (2020)"
        />
      </div>
    </div>
  );
};

export default Lover;
