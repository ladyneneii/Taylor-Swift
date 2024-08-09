import { whitish } from "@/shared/types";
import "./styles.css";
import TitleAuthor from "@/shared/TitleAuthor";

const _1989TV = () => {
  return (
    <div
      className="intro__container fearlessTV-grid"
      style={{ color: "black" }}
    >
      <div className="fearlessTV" style={{ justifyContent: "start" }}>
        <div>
          <h1>The rain came pouring down</h1>
          <h1>When I was drownin', that's when I could finally breathe</h1>
          <h1>And by mornin'</h1>
          <h1>Gone was any trace of you, I think I am finally clean</h1>
        </div>
        <TitleAuthor
          textAlign="start"
          color={whitish}
          fontSize="1.5rem"
          titleAuthor="Clean (Taylor's Version), Taylor Swift (2023)"
        />
      </div>
      <div className="fearlessTV">
        <div>
          <h1>But if I’m all dressed up</h1>
          <h1>They might as well be lookin' at us</h1>
          <h1>And if they call me a slut</h1>
          <h1>You know it might be worth it for once</h1>
          <h1>And if I'm gonna be drunk</h1>
          <h1>I might as well be drunk in love</h1>
        </div>
        <TitleAuthor
          textAlign="start"
          color={whitish}
          fontSize="1.5rem"
          titleAuthor={`"Slut!" (Taylor's Version) (From The Vault), Taylor Swift (2023)`}
        />
      </div>
    </div>
  );
};

export default _1989TV;
