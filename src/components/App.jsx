import React from "react";
import Card from "./Card";
import Header from "./Header";
import emojis from "../emojipedia";

const cardPlace= {
  display:"grid",
  gridTemplateColumns:"auto auto auto",
  justifyItems:"center"


}

function App() {
  return (
    <div>
      <Header />
      <div style={cardPlace}>
        {emojis.map((emoji) => {
          return (
            <Card
              emoji={emoji.emoji}
              emojiName={emoji.name}
              description={emoji.meaning}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
