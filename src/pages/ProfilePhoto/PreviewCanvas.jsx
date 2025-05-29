import React, { useEffect, useRef } from "react";

const PreviewCanvas = ({ image, frame }) => {
  const previewRef = useRef(null);
  const exportRef = useRef(null);

  useEffect(() => {
    if (!image || !frame) return;

    const PREVIEW_SIZE = 400;
    const EXPORT_SIZE = 640;

    const previewCanvas = previewRef.current;
    const exportCanvas = exportRef.current;
    const previewCtx = previewCanvas.getContext("2d");
    const exportCtx = exportCanvas.getContext("2d");

    const baseImage = new Image();
    const frameImage = new Image();
    let loaded = 0;

    const tryDrawBoth = () => {
      loaded++;
      if (loaded === 2) {
        // Draw preview
        previewCtx.clearRect(0, 0, PREVIEW_SIZE, PREVIEW_SIZE);
        previewCtx.drawImage(baseImage, 0, 0, PREVIEW_SIZE, PREVIEW_SIZE);
        previewCtx.drawImage(frameImage, 0, 0, PREVIEW_SIZE, PREVIEW_SIZE);

        // Draw export
        exportCtx.clearRect(0, 0, EXPORT_SIZE, EXPORT_SIZE);
        exportCtx.drawImage(baseImage, 0, 0, EXPORT_SIZE, EXPORT_SIZE);
        exportCtx.drawImage(frameImage, 0, 0, EXPORT_SIZE, EXPORT_SIZE);
      }
    };

    baseImage.onload = tryDrawBoth;
    frameImage.onload = tryDrawBoth;
    baseImage.crossOrigin = "anonymous";
    frameImage.crossOrigin = "anonymous";

    baseImage.src = image;
    frameImage.src = frame;
  }, [image, frame]);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <canvas
          ref={previewRef}
          width={400}
          height={400}
          className="preview-canvas"
        />
        {/* Hidden canvas for export */}
        <canvas
          ref={exportRef}
          width={640}
          height={640}
          style={{ display: "none" }}
          id="exportCanvas"
        />
      </div>
    </>
  );
};

export default PreviewCanvas;
