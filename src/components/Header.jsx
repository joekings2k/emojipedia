import React from "react";

const headerStyle = {
  textAlign: "center",
  color: "white",
  fontFamily: "'Unbounded', cursive",
  fontSize: "40px",
  backgroundColor: "#77E7F8",
  padding:"15px"
};

function Header() {
  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center" ,marginTop:"50px"}}>
      <h1 style={headerStyle}>Emojipedia</h1>
    </div>
  );
}

export default Header;
