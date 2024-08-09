import { blackish } from "@/shared/types";
import "./styles.css";
import TitleAuthor from "@/shared/TitleAuthor";

const TaylorSwift = () => {
  return (
    <div className="intro__container taylorswift-grid">
      <div className="ts1">
        <h1>He's the reason for the teardrops on my guitar...</h1>
        <h1>The only thing that keeps me wishing on a wishing star...</h1>
        <h1>He's the song in the car I keep singing, don't know why I do...</h1>

        <TitleAuthor
          textAlign="start"
          color={blackish}
          fontSize="2rem"
          titleAuthor="Teardrops On My Guitar, Taylor Swift (2009)"
        />
      </div>
      <div className="ts2">
        <h1>'Cause our song is the slamming screen door</h1>
        <h1>Sneakin' out late, tapping on his window</h1>
        <h1>When we're on the phone, and he talks real slow</h1>
        <h1>'Cause it's late, and his mama don't know</h1>
        <TitleAuthor
          textAlign="start"
          color={blackish}
          fontSize="1.3rem"
          titleAuthor="Our Song, Taylor Swift (2009)"
        />
      </div>
      <div className="ts3">
        <h1>I hate that stupid old pickup truck you never let me drive</h1>
        <h1>You're a redneck heartbreak who's really bad at lying</h1>
        <h1>So watch me strike a match on all my wasted time</h1>
        <h1>As far as I'm concerned, you're just another picture to burn</h1>
        <TitleAuthor
          textAlign="start"
          color={blackish}
          fontSize="1.3rem"
          titleAuthor="Picture To Burn, Taylor Swift (2009)"
        />
      </div>
    </div>
  );
};

export default TaylorSwift;
