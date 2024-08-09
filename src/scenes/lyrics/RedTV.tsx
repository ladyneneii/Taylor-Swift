import { blackish } from "@/shared/types";
import "./styles.css";
import TitleAuthor from "@/shared/TitleAuthor";

const RedTV = () => {
  return (
    <div className="intro__container redTV-grid text-center">
      <h1>Well, maybe we got lost in translation</h1>
      <h1>Maybe I asked for too much</h1>
      <h1>But maybe this thing was a masterpiece 'til you tore it all up</h1>
      <h1>Running scared, I was there</h1>
      <h1>I remember it all too well</h1>
      <h1>And you call me up again just to break me like a promise</h1>
      <h1>So casually cruel in the name of being honest...</h1>
      <h1>I'm a crumpled up piece of paper lying here</h1>
      <h1>'Cause I remember it all, all, all...</h1>

      <TitleAuthor
        textAlign="center"
        color={blackish}
        fontSize="1.5rem"
        titleAuthor="All Too Well (10 Minute Version) (Taylor's Version) (From The Vault), Taylor Swift (2021)"
      />
    </div>
  );
};

export default RedTV;
