import React from "react";
import TitleBar from "../../Shared/TitleBar/TitleBar";
import PdfViewerComponent from "../../../Component/PdfViewerComponent/PdfViewerComponent";

export default function MadrasahInfo() {
  return (
    <div>
      <TitleBar titleText={"About Madrasah"}></TitleBar>
      <PdfViewerComponent></PdfViewerComponent>
    </div>
  );
}
