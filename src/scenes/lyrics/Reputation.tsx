import { blackish } from "@/shared/types";
import "./styles.css";
import TitleAuthor from "@/shared/TitleAuthor";

const Reputation = () => {
 return (
   <div className="intro__container taylorswift-grid">
     <div className="ts1">
       <h1>If a man talks shit, then I owe him nothing.</h1>
       <h1>I don't regret it one bit, 'cause he had it coming.</h1>

       <TitleAuthor
         textAlign="start"
         color={blackish}
         fontSize="2rem"
         titleAuthor="I Did Something Bad, Taylor Swift (2018)"
       />
     </div>
     <div className="ts2">
       <h1>The world moves on, another day another drama, drama</h1>
       <h1>But not for me, not for me, all I think about is karma</h1>
       <h1>And then the world moves on, but one thing's for sure</h1>
       <h1>Maybe I got mine, but you'll all get yours</h1>
       <TitleAuthor
         textAlign="start"
         color={blackish}
         fontSize="1.3rem"
         titleAuthor="Look What You Made Me Do, Taylor Swift (2018)"
       />
     </div>
     <div className="ts3">
       <h1>Say my name and everything just stops</h1>
       <h1>I don't want you like a best friend</h1>
       <h1>Only bought this dress so you could take it off</h1>
       <h1>Take it off (ah, ha, ha, ha...)</h1>
       <h1>Carve your name into my bedpost</h1>
       <h1>'Cause I don't want you like a best friend</h1>
       <h1>Only bought this dress so you could take it off</h1>
       <h1>Take it off (ah, ha, ha, ha...)</h1>
       <TitleAuthor
         textAlign="start"
         color={blackish}
         fontSize="1.3rem"
         titleAuthor="Dress, Taylor Swift (2018)"
       />
     </div>
   </div>
 );
};

export default Reputation;
