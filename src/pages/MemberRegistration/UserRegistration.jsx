import axios from "axios";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { apiBaseUrl } from "../../Utility/Constants";
import {
  TextField,
  Tooltip,
  IconButton,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Button,
  Box,
  FormHelperText,
  Paper,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import TitleBar from "../Shared/TitleBar/TitleBar";
import "./Form.css";
import SweetAlert from "../../Component/SweetAlert/SweetAlert";

const UserRegistration = () => {
  const [url, setUrl] = useState("");
  const [years, setYears] = useState([]);
  const navigate = useNavigate();
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Image Upload
  const processFile = (e) => {
    const image = e.target.files[0];
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "alumni");
    data.append("cloud_name", "dpakfnqvn");

    fetch("https://api.cloudinary.com/v1_1/dpakfnqvn/image/upload", {
      method: "post",
      body: data,
    })
      .then((resp) => resp.json())
      .then((data) => setUrl(data.url))
      .catch((err) => console.log(err));
  };

  // Form Submission
  const onSubmit = async (data) => {
    const userData = {
      picture: url,
      fullName: data.fullName,
      phone: data.phone,
      email: data.email,
      gender: data.gender,
      examYear: data.examYear,
      presentAddress: data.presentAddress,
      permanentAddress: data.permanentAddress,
      facebookUrl: data.facebookUrl,
      status: data.status,
      place: data.place,
      blood: data.blood,
      comments: data.comments,
    };

    axios
      .post(`${apiBaseUrl}/xStudent`, userData)
      .then((res) => {
        if (res.data.insertedId) {
          // Show success message
          SweetAlert.success("Success", "Form submitted successfully!");
        }
        reset();
        setTimeout(() => navigate("/Member"), 2000);
      })
      .catch((error) => console.error("Error:", error));
  };

  useEffect(() => {
    const yearList = [];
    const year = new Date().getFullYear() + 1;
    for (let i = 1990; i <= year; i++) {
      yearList.push(i);
    }
    setYears(yearList);
  }, []);

  return (
    <>
      <TitleBar titleText="Alumni Member Registration" />

      <Box
        className="watermark-container"
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
          <Box>
            <h2 style={{ textAlign: "center", color: "blue" }}>
              Fill in the input information in English
            </h2>
            <form
              onSubmit={handleSubmit(onSubmit)}
              encType="multipart/form-data"
            >
              {/* Full Name */}
              <Box className="divLayout">
                <TextField
                  {...register("fullName", { required: true })}
                  label="Your Name"
                  variant="outlined"
                  fullWidth
                  error={!!errors.fullName}
                  helperText={errors.fullName && "Name is required"}
                />
                <Tooltip title="সার্টিফিকেট অনুযায়ী আপনার সম্পূর্ণ নাম লিখুন।">
                  <IconButton>
                    <InfoIcon />
                  </IconButton>
                </Tooltip>
              </Box>

              {/* Profile Picture */}
              <Box className="divLayout">
                <Box>
                  <InputLabel sx={{ color: "red", fontSize: "12px" }}>
                    Upload Profile Picture (Max 1MB, 600px x 600px,
                    JPEG/JPG/PNG)
                  </InputLabel>

                  <input
                    type="file"
                    {...register("image")}
                    onChange={processFile}
                  />
                </Box>
                <Tooltip
                  title="এমন ছবি আপলোড করুন যার সাইজ ১এমবির বেশি নয়। 
এবং ৬০০*৬০০ পিক্সেলের হয়। ছবি অবশ্যই JPEG/JPG/PNG ফরমেটের হতে হবে। 
বিঃদ্রঃ মেয়েদের জন্য ছবি বাধ্যতামুলক নয়।
"
                >
                  <IconButton>
                    <InfoIcon />
                  </IconButton>
                </Tooltip>
              </Box>

              {/* Phone Number */}
              <Box className="divLayout">
                <TextField
                  {...register("phone", { required: true })}
                  label="Phone Number"
                  variant="outlined"
                  fullWidth
                  error={!!errors.phone}
                  helperText={errors.phone && "Phone Number is required"}
                />
                <Tooltip title="মোবাইল নাম্বার টি লিখুন। প্রয়োজনে আপনার সাথে যোগাযোগ সহজতর হবে। ">
                  <IconButton>
                    <InfoIcon />
                  </IconButton>
                </Tooltip>
              </Box>

              {/* Email */}
              <Box className="divLayout">
                <TextField
                  {...register("email", { required: true })}
                  label="Email"
                  variant="outlined"
                  fullWidth
                  error={!!errors.email}
                  helperText={errors.email && "Email is required"}
                />
                <Tooltip title="ইমেল লিখুন। যেমন : example@gmail.com">
                  <IconButton>
                    <InfoIcon />
                  </IconButton>
                </Tooltip>
              </Box>

              {/* Gender */}
              <Box className="divLayout">
                <FormControl fullWidth error={!!errors.gender}>
                  <InputLabel>Gender</InputLabel>
                  <Controller
                    name="gender"
                    control={control}
                    defaultValue=""
                    rules={{ required: "Gender is required" }}
                    render={({ field }) => (
                      <Select {...field}>
                        <MenuItem value="male">Male</MenuItem>
                        <MenuItem value="female">Female</MenuItem>
                      </Select>
                    )}
                  />
                  {errors.gender && (
                    <FormHelperText>{errors.gender.message}</FormHelperText>
                  )}
                </FormControl>
                <Tooltip title="আপনার লিংগ সিলেক্ট করুন। ">
                  <IconButton>
                    <InfoIcon />
                  </IconButton>
                </Tooltip>
              </Box>

              {/* Exam Year */}
              <Box className="divLayout">
                <FormControl fullWidth error={!!errors.examYear}>
                  <InputLabel>Dakhil Exam Year</InputLabel>
                  <Controller
                    name="examYear"
                    control={control}
                    defaultValue=""
                    rules={{ required: "Dakhil Exam year is required" }}
                    render={({ field }) => (
                      <Select {...field}>
                        {years.map((year, i) => (
                          <MenuItem key={i} value={year}>
                            {year}
                          </MenuItem>
                        ))}
                      </Select>
                    )}
                  />
                  {errors.examYear && (
                    <FormHelperText>{errors.examYear.message}</FormHelperText>
                  )}
                </FormControl>
                <Tooltip
                  title="কত সালে দাখিল দিয়েছেন, তা সিলেক্ট করুন। 
যদি দাখিল দিয়ে না থাকেন তবে আপনার দাখিলের ব্যাচ সাল সিলেক্ট করুন।
"
                >
                  <IconButton>
                    <InfoIcon />
                  </IconButton>
                </Tooltip>
              </Box>

              {/* Blood Group */}
              <Box className="divLayout">
                <FormControl fullWidth>
                  <InputLabel>Blood Group</InputLabel>
                  <Select {...register("blood")} defaultValue="">
                    {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map(
                      (group, i) => (
                        <MenuItem key={i} value={group}>
                          {group}
                        </MenuItem>
                      )
                    )}
                  </Select>
                </FormControl>
                <Tooltip title="আপনার রক্তের গ্রুপ সিলেক্ট করুন। যদি রক্তের গ্রুপ জানা না থাকে কোন কিছু সিলেক্ট করা লাগবে না। ">
                  <IconButton>
                    <InfoIcon />
                  </IconButton>
                </Tooltip>
              </Box>

              {/* Current address */}
              <Box className="divLayout">
                <TextField
                  {...register("presentAddress")}
                  label="Current City you live in"
                  variant="outlined"
                  fullWidth
                />
                <Tooltip title="বর্তমান ঠিকানা লিখুন। সম্পূর্ণ ঠিকানা লিখুন। যোগাযোগ করতে সহজ হবে। ">
                  <IconButton>
                    <InfoIcon />
                  </IconButton>
                </Tooltip>
              </Box>

              {/* permanent address */}
              <Box className="divLayout">
                <TextField
                  {...register("permanentAddress")}
                  label="Permanent Address"
                  variant="outlined"
                  fullWidth
                />
                <Tooltip title="স্থায়ী ঠিকানা লিখুন। ">
                  <IconButton>
                    <InfoIcon />
                  </IconButton>
                </Tooltip>
              </Box>
              {/* facebook Url */}
              <Box className="divLayout">
                <TextField
                  {...register("facebookUrl")}
                  label="facebook profile Link"
                  variant="outlined"
                  fullWidth
                />
                <Tooltip title="আপনার ফেসবুক প্রফাইলের লিংক দিন। ফেসবুকে নিজ প্রফাইলে থ্রি ডটে ক্লিক করার পর কপি লিংক থেকে কপি করে এখানে পেস্ট করুন। ">
                  <IconButton>
                    <InfoIcon />
                  </IconButton>
                </Tooltip>
              </Box>

              {/* Status */}
              <Box className="divLayout">
                <TextField
                  {...register("status")}
                  label="Current Status (Student, Job, etc.)"
                  variant="outlined"
                  fullWidth
                />
                <Tooltip title="বর্তমানে কি পেশায় আছেন তা লিখুন। যেমন : ডাক্তার, ইঞ্জিনিয়ার, ছাত্র, শিক্ষক, গৃহিনী, উকিল, ম্যানেজার, CEO ইত্যাদি ">
                  <IconButton>
                    <InfoIcon />
                  </IconButton>
                </Tooltip>
              </Box>

              {/* place */}
              <Box className="divLayout">
                <TextField
                  {...register("place")}
                  label="Company or Institute name (Dhaka College, Uttor Badda Kamil Madrasha)"
                  variant="outlined"
                  fullWidth
                />
                <Tooltip title="আপনি যে পেশায় নিয়োজিত সে স্থানের নাম লিখুন। যেমন : শাহজাদপুর নজর মাহমুদ আলিম মাদ্রাসা, ইউনিলিভার, প্রান-আরএফএল, টোয়াটা জাপান">
                  <IconButton>
                    <InfoIcon />
                  </IconButton>
                </Tooltip>
              </Box>

              {/* Comments */}
              <Box className="divLayout">
                <TextField
                  {...register("comments")}
                  label="Comments / Questions"
                  variant="outlined"
                  multiline
                  rows={4}
                  fullWidth
                />
                <Tooltip title="হাজী মাদবর আলী হাচানিয়া দাখিল মাদ্রাসা অ্যালামনাই অ্যাসোসিয়েশন সম্পর্কে আপনার কোন মতামত থাকলে তা জানান। ">
                  <IconButton>
                    <InfoIcon />
                  </IconButton>
                </Tooltip>
              </Box>

              {/* Submit Button */}
              <Button
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
              >
                Submit
              </Button>
            </form>
          </Box>
        </Paper>
      </Box>
    </>
  );
};

export default UserRegistration;
