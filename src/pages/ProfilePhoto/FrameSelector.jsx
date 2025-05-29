import React from "react";
import "./ProfilePhoto.css";

const frames = [
  "/images/frame1.png",
  "/images/frame6.png",
  "/images/frame7.png",
  "/images/frame8.png",
  "/images/frame9.png",
];

const FrameSelector = ({ onSelectFrame, selected }) => (
  <div className="frame-selector">
    {frames.map((src, i) => (
      <img
        key={i}
        src={src}
        className={
          selected === src ? "frame-thumbnail selected" : "frame-thumbnail"
        }
        alt={`frame ${i}`}
        onClick={() => onSelectFrame(src)}
      />
    ))}
  </div>
);

export default FrameSelector;
