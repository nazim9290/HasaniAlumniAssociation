import React, { useState } from "react";
import FrameSelector from "./FrameSelector";
import ImageUploader from "./ImageUploader";
import PreviewCanvas from "./PreviewCanvas";
import DownloadButton from "./DownloadButton";
import "./ProfilePhoto.css";
import TitleBar from "../Shared/TitleBar/TitleBar";
import { Paper, Box } from "@mui/material";

export default function ProfilePhoto() {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [selectedFrame, setSelectedFrame] = useState(null);

  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Paper
        elevation={3}
        sx={{
          overflow: "hidden",
          borderRadius: "20px",
          width: { xs: "100%", md: "50%" },
          p: 5,
        }}
      >
        <div className="profile-photo">
          <TitleBar titleText="Create Frame for your profile"></TitleBar>

          <ImageUploader onImageUpload={setUploadedImage} />

          <h2>Choose Your Frame 👇</h2>

          <FrameSelector
            onSelectFrame={setSelectedFrame}
            selected={selectedFrame}
          />

          <h3>Preview Your Image 👇</h3>
          <PreviewCanvas image={uploadedImage} frame={selectedFrame} />
          <div>
            <DownloadButton image={uploadedImage} frame={selectedFrame} />
          </div>
          <div>
            <div className="event-info">
              <h2>
                <span className="highlight">
                  "একসাথে আবার, স্মৃতির আঙিনায়"
                </span>
              </h2>

              <p className="subtitle">
                হাজী মাদবর আলী হাচানিয়া দাখিল মাদরাসার গৌরবময় ৩৫ বছর পূর্তি
                উদযাপন উপলক্ষে প্রাক্তন শিক্ষার্থীদের পূনর্মিলনী - ২০২৬ ইং
                <br />
                আয়োজক ঃ হাজী মাদবর আলী হাচানিয়া দাখিল মাদ্রাসা অ্যালামনাই
                অ্যাসোসিয়েশন 🎉 <br />
                <strong>📸 ফটো কার্ড ফ্রেম তৈরি করে আপনিও যোগ দিন।</strong>
              </p>

              <p className="hashtags">
                #HMAHDM #2ndHMDM_ReUnion #HasaniaAlumni
              </p>

              <ul className="instruction-list">
                <li>ফটো কার্ড তৈরি করতে আপনার পছন্দসই ছবি যোগ করুন।</li>
                <li>আপনার পছন্দের ফ্রেম সিলেক্ট করুন।</li>
                <li>
                  লাইভ প্রিভিউতে আপনার সংযুক্ত ছবি সহ ফটোকার্ড দেখতে পারবেন।
                </li>
                <li>
                  এরপর ডাউনলোড এ ক্লিক করে ডাউনলোড সম্পন্ন করুন। এটি সবার জন্য
                  উন্মুক্ত।
                </li>
              </ul>

              <p className="credit">
                পৃষ্ঠপোষকতায়,{" "}
                <strong>Guideline IT Sister concern of NDP Commerce Ltd</strong>{" "}
                | <strong>MD NAZIM UDDIN</strong>
                <br />
                ধন্যবাদ!
              </p>
            </div>
            <p className="subtitle">
              <strong>ধন্যবাদান্তে</strong>
              <br />
              আহবায়ক <br />
              হাজী মোঃ জাকির হোসাইন
              <br />
              <br />
              সদস্য সচিব
              <br />
              মোঃ নাজিম উদ্দিন
            </p>
          </div>
        </div>
      </Paper>
    </Box>
  );
}
