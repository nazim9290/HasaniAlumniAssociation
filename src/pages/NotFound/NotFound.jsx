import React from "react";
import gif from "../../assets/notFound.png";
export default function NotFound() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div>
        <h1 style={{ textAlign: "center" }}>Page Building....</h1>
        <img src={gif} alt="" height="300" />
      </div>
    </div>
  );
}
