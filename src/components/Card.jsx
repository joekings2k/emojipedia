import React from "react";
import "./card.css"


const emjojiName = {
  fontSize: "26px",
  color: "#0EBEBE",
  marginBottom: "12px",
  fontFamily: "'Raleway', sans-serif",
  fontWeight:"600",
  
};

function Card(props) {
  return (
    <div>
      <dl>
        <dt>
          <span style={{ fontSize: "50px", marginBottom: "12px" }}>{props.emoji}</span>
          <span style={emjojiName}>{props.emojiName}</span>
        </dt>
        <dd
          style={{
            textAlign: "center",
            fontSize: "15px",
            fontFamily: "'Raleway', sans-serif",
            marginBottom:"10px"
          }}
        >
          {props.description}
        </dd>
      </dl>
    </div>
  );
}

export default Card;
