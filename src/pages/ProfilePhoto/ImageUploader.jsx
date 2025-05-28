import React from "react";
import "./ProfilePhoto.css";

const ImageUploader = ({ onImageUpload }) => {
  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) onImageUpload(URL.createObjectURL(file));
  };

  return (
    <div class="file-upload-wrapper">
      <input type="file" accept="image/*" onChange={handleUpload} />
    </div>
  );
};

export default ImageUploader;
