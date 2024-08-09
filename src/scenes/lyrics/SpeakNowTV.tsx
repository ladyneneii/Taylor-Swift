import { blackish } from "@/shared/types";
import "./styles.css";
import TitleAuthor from "@/shared/TitleAuthor";

const SpeakNowTV = () => {
  return (
    <div className="intro__container taylorswift-grid">
      <div className="ts1">
        <h1>This night is sparkling, don't you let it go</h1>
        <h1>I'm wonderstruck, blushing all the way home</h1>
        <h1>I'll spend forever wondering if you knew</h1>
        <h1>This night is flawless, don't you let it go</h1>
        <h1>I'm wonderstruck, dancing around all alone</h1>
        <h1>I'll spend forever wondering if you knew</h1>
        <h1>I was enchanted to meet you...</h1>

        <TitleAuthor
          textAlign="start"
          color={blackish}
          fontSize="2rem"
          titleAuthor="Enchanted (Taylor's Version), Taylor Swift (2023)"
        />
      </div>
      <div className="ts2">
        <h1>Long live the walls we crashed through</h1>
        <h1>I had the time of my life with you</h1>
        <h1>Long, long live the walls we crashed through</h1>
        <h1>How the kingdom lights shined just for me and you</h1>
        <h1>And I was screaming, "Long live all the magic we made"</h1>
        <h1>And bring on all the pretenders, I'm not afraid</h1>
        <h1>Singing long live all the mountains we moved</h1>
        <h1>I had the time of my life fighting dragons with you</h1>
        <h1>And long, long live the look on your face</h1>
        <h1>And bring on all the pretenders</h1>
        <h1>One day, we will be remembered...</h1>
        <TitleAuthor
          textAlign="start"
          color={blackish}
          fontSize="1.3rem"
          titleAuthor="Long Live (Taylor's Version), Taylor Swift (2023)"
        />
      </div>
      <div className="ts3">
        <h1>I miss your tan skin, your sweet smile</h1>
        <h1>So good to me, so right</h1>
        <h1>And how you held me in your arms that September night</h1>
        <h1>The first time you ever saw me cry</h1>
        <h1>Maybe this is wishful thinkin'</h1>
        <h1>Probably mindless dreamin'</h1>
        <h1>But if we loved again, I swear I'd love you right</h1>
        <TitleAuthor
          textAlign="start"
          color={blackish}
          fontSize="1.3rem"
          titleAuthor="Back To December (Taylor's Version), Taylor Swift (2023)"
        />
      </div>
    </div>
  );
};

export default SpeakNowTV;
