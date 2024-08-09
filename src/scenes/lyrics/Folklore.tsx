import { whitish } from "@/shared/types";
import "./styles.css";
import TitleAuthor from "@/shared/TitleAuthor";


const Folklore = () => {
  return (
    <div className="intro__container folklore-grid">
      <div className="ts1">
        <h1>I didn't have it in myself to go with grace...</h1>
        <h1>'Cause when I'd fight, you used to tell me I was brave</h1>
        <h1>And if I'm dead to you, why are you at the wake?</h1>
        <h1>Cursing my name, wishing I stayed</h1>
        <h1>Look at how my tears ricochet...</h1>
        <h1>And I can go anywhere I want</h1>
        <h1>Anywhere I want, just not home...</h1>

        <TitleAuthor
          textAlign="start"
          color={whitish}
          fontSize="2rem"
          titleAuthor="my tears ricochet, Taylor Swift (2020)"
        />
      </div>
      <div className="ts2">
        <h1>You drew stars around my scars</h1>
        <h1>But now I'm bleeding...</h1>
        <h1>'Cause I knew you</h1>
        <h1>'Steppin' on the last train</h1>
        <h1>Marked me like a bloodstain, I...</h1>
        <h1>I knew you</h1>
        <h1>Tried to change the ending</h1>
        <h1>Peter losing Wendy, I...</h1>
        <h1>I knew you</h1>
        <h1>Leavin' like a father</h1>
        <h1>Running like water, I...</h1>
        <h1>And when you are young, they assume you know nothing...</h1>
        <h1>But I knew you'd linger like a tattoo kiss</h1>
        <h1>I knew you'd haunt all of my what-ifs</h1>
        <h1>The smell of smoke would hang around this long</h1>
        <h1>'Cause I knew everything when I was young</h1>
        <h1>I knew I'd curse you for the longest time</h1>
        <h1>Chasin' shadows in the grocery line</h1>
        <h1>I knew you'd miss me once the thrill expired</h1>
        <h1>And you'd be standin' in my front porch light</h1>
        <h1>And I knew you'd come back to me...</h1>
        <TitleAuthor
          textAlign="start"
          color={whitish}
          fontSize="1.3rem"
          titleAuthor="cardigan, Taylor Swift (2020)"
        />
      </div>
      <div className="ts3">
        <h1>I think I've seen this film before...</h1>
        <h1>And I didn't like the ending...</h1>
        <h1>You're not my homeland anymore...</h1>
        <h1>So what am I defending now?</h1>
        <h1>You were my town</h1>
        <h1>Now I'm in exile, seein' you out...</h1>
        <h1>I think I've seen this film before...</h1>
        <TitleAuthor
          textAlign="start"
          color={whitish}
          fontSize="1.3rem"
          titleAuthor="exile (feat. Bon Iver), Taylor Swift (2020)"
        />
      </div>
      <div className="ts4">
        <h1>And you wanna scream</h1>
        <h1>Don't call me "kid"!</h1>
        <h1>Don't call me "baby"!</h1>
        <h1>Look at this godforsaken mess that you made me</h1>
        <h1>You showed me colors you know I can't see with anyone else...</h1>
        <h1>Don't call me "kid"...</h1>
        <h1>Don't call me "baby"...</h1>
        <h1>Look at this idiotic fool that you made me</h1>
        <h1>
          You taught me a secret language I can't speak with anyone else...
        </h1>
        <h1>And you know damn well</h1>
        <h1>For you, I would ruin myself</h1>
        <h1>A million little times...</h1>
        <TitleAuthor
          textAlign="start"
          color={whitish}
          fontSize="1.3rem"
          titleAuthor="illicit affairs, Taylor Swift (2020)"
        />
      </div>
      <div className="ts5">
        <h1>Remember when I pulled up and said, "Get in the car"</h1>
        <h1>And then canceled my plans just in case you'd call?</h1>
        <h1>
          Back when I was livin' for the hope of it all, for the hope of it all
        </h1>
        <h1>"Meet me behind the mall"...</h1>

        <TitleAuthor
          textAlign="start"
          color={whitish}
          fontSize="2rem"
          titleAuthor="august, Taylor Swift (2020)"
        />
      </div>
    </div>
  );
};

export default Folklore;
