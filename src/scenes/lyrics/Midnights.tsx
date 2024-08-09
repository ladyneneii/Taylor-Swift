import { blackish } from "@/shared/types";
import "./styles.css";
import TitleAuthor from "@/shared/TitleAuthor";

const Midnights = () => {
  return (
    <div className="intro__container taylorswift-grid">
      <div className="ts1">
        <h1>The burgundy on my T-shirt when you splashed your wine into me</h1>
        <h1>And how the blood rushed into my cheeks, so scarlet, it was...</h1>
        <h1>
          The mark you saw on my collarbone, the rust that grew between
          telephones
        </h1>
        <h1>The lips I used to call home, so scarlet, it was maroon...</h1>

        <TitleAuthor
          textAlign="start"
          color={blackish}
          fontSize="2rem"
          titleAuthor="Maroon, Taylor Swift (2022)"
        />
      </div>
      <div className="ts2">
        <h1>From sprinkler splashes to fireplace ashes</h1>
        <h1>I gave my blood, sweat, and tears for this</h1>
        <h1>I hosted parties and starved my body</h1>
        <h1>Like I'd be saved by a perfect kiss</h1>
        <h1>The jokes weren't funny, I took the money</h1>
        <h1>My friends from home don't know what to say</h1>
        <h1>I looked around in a blood-soaked gown</h1>
        <h1>And I saw something they can't take away</h1>

        <TitleAuthor
          textAlign="start"
          color={blackish}
          fontSize="1.3rem"
          titleAuthor="You're On Your Own, Kid, Taylor Swift (2022)"
        />
      </div>
      <div className="ts3">
        <h1>If clarity's in death, then why won't this die?</h1>
        <h1>Years of tearing down our banners, you and I</h1>
        <h1>Living for the thrill of hitting you where it hurts</h1>
        <h1>Give me back my girlhood, it was mine first...</h1>
        <TitleAuthor
          textAlign="start"
          color={blackish}
          fontSize="1.3rem"
          titleAuthor="Would'v, Could've, Should've, Taylor Swift (2022)"
        />
      </div>
    </div>
  );
};

export default Midnights;
