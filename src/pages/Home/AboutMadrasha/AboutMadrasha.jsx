import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import "./AboutMadrasha.css";

export default function AboutMadrasha() {
  return (
    <Box
      className="about-section"
      data-aos="fade-right"
    >
      <Box sx={{ m: 4 }}>
        <h1>About madrash</h1>
        <Container>
          <p>
            &#9755; <strong>১৯৯০</strong> সালে হাজী মাদবর আলী সাহেবের সুযোগ্য ৩ জন রহমদিল সন্তান মরহুম হাজী হাচান উদ্দীন,মরহুম হাজী চাঁন মিয়া, মরহুম হাজী ইউনুস আলী এবং তাদের দানবীর সমাজ সেবক, শিক্ষানুরাগী সন্তানগন এই মাদ্রাসা প্রতিষ্ঠার পরিকল্পনা গ্রহন করেন৷ পরিকল্পনা মোতাবেক ১৯৯০ সালের জানুয়ারী মাসে মাদ্রাসার ভিত্তিপ্রস্তর স্থাপন করেন৷ সেই থেকেই শুরু এই হাজী মাদবর আলী হাচানিয়া দাখিল মাদ্রাসা ৷
          </p>
          <Button size="large" variant="contained">
            <Link to="/About">More About Us</Link>
          </Button>
        </Container>
      </Box>
    </Box>
  )
}
