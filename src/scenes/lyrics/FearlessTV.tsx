import { blackish } from "@/shared/types";
import "./styles.css";
import TitleAuthor from "@/shared/TitleAuthor";


const FearlessTV = () => {
  return (
    <div className="intro__container fearlessTV-grid">
      <div className="fearlessTV">
        <div>
          <h1>'Cause I don't know how it gets better than this</h1>
          <h1>You take my hand and drag me head first</h1>
          <h1 className="normal-letterSpacing">FEARLESS</h1>
          <h1>And I don't know why</h1>
          <h1>But with you I'd dance in a storm</h1>
          <h1>In my best dress</h1>
          <h1 className="normal-letterSpacing">FEARLESS</h1>
        </div>
        <TitleAuthor
          textAlign="start"
          color={blackish}
          fontSize="1.5rem"
          titleAuthor="Fearless (Taylor's Version), Taylor Swift (2021)"
        />
      </div>
      <div className="fearlessTV">
        <div>
          <h1>I'm not a princess, this ain't a fairy tale...</h1>
          <h1>I'm not the one you'll sweep off her feet</h1>
          <h1>Lead her up the stairwell</h1>
          <h1>This ain't Hollywood, this is a small town</h1>
          <h1>I was a dreamer before you went and let me down...</h1>
          <h1>Now it's too late for you and your white horse</h1>
          <h1>To come around...</h1>
        </div>
        <TitleAuthor
          textAlign="start"
          color={blackish}
          fontSize="1.5rem"
          titleAuthor="White Horse (Taylor's Version), Taylor Swift (2021)"
        />
      </div>
      <div className="fearlessTV">
        <div>
          <h1>Romeo, take me somewhere we can be alone</h1>
          <h1>I'll be waiting, all there's left to do is run</h1>
          <h1>You'll be the prince and I'll be the princess</h1>
          <h1>It's a love story, baby, just say, "Yes"</h1>
          <h1>Romeo, save me, they're tryna tell me how to feel</h1>
          <h1>This love is difficult, but it's real</h1>
          <h1>Don't be afraid, we'll make it out of this mess</h1>
          <h1>It's a love story, baby, just say, "Yes"</h1>
        </div>
        <TitleAuthor
          textAlign="start"
          color={blackish}
          fontSize="1.5rem"
          titleAuthor="Love Story (Taylor's Version), Taylor Swift (2021)"
        />
      </div>
      <div className="fearlessTV">
        <div>
          <h1>I miss screaming and fighting and kissing in the rain</h1>
          <h1>It's 2 a.m. and I'm cursing your name</h1>
          <h1>I'm so in love that I acted insane</h1>
          <h1>And that's the way I loved you</h1>
          <h1>Breaking down and coming undone</h1>
          <h1>It's a roller coaster kind of rush</h1>
          <h1>And I never knew I could feel that much</h1>
          <h1>And that's the way I loved you</h1>
        </div>
        <TitleAuthor
          textAlign="start"
          color={blackish}
          fontSize="1.5rem"
          titleAuthor="The Way I Loved You (Taylor's Version), Taylor Swift (2021)"
        />
      </div>
    </div>
  );
};

export default FearlessTV;
