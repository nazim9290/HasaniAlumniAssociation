import React from "react";

const DownloadButton = ({ image, frame }) => {
  const handleDownload = () => {
    const canvas = document.getElementById("exportCanvas");
    if (!canvas) return;

    const link = document.createElement("a");
    link.download = "framed-profile.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  return (
    <button
      className="download-btn"
      onClick={handleDownload}
      disabled={!image || !frame}
    >
      Download Image
    </button>
  );
};

export default DownloadButton;
