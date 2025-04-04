import TitleBar from "../../pages/Shared/TitleBar/TitleBar";
import { Container } from "@mui/material";
import punormiloniPdf from "../../assets/punormiloni2017.pdf";
import React, { useEffect, useRef } from "react";
import PDFObject from "pdfobject";

function PdfViewerComponent() {
  const pdfRef = useRef(null);

  useEffect(() => {
    if (punormiloniPdf) {
      PDFObject.embed(punormiloniPdf, pdfRef.current, { height: "100vh" });
    }
  }, [punormiloniPdf]);
  return (
    <Container>
      <TitleBar titleText="Our Alumni Souvenir of 2017"></TitleBar>
      <div ref={pdfRef} style={{ width: "100%", height: "100vh" }} />
    </Container>
  );
}

export default PdfViewerComponent;
