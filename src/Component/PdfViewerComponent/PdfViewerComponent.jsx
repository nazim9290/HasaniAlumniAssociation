import PDFViewer from "pdf-viewer-reactjs";
import TitleBar from "../../pages/Shared/TitleBar/TitleBar";
import { Container } from "@mui/material";
import punormiloniPdf from "../../assets/punormiloni2017.pdf";

function PdfViewerComponent() {
  return (
    <Container>
      <TitleBar titleText="Our Alumni Souvenir of 2017"></TitleBar>
      <PDFViewer
        document={{
          url: { punormiloniPdf },
        }}
      />
    </Container>
  );
}

export default PdfViewerComponent;
