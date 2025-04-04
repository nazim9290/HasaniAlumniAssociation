import axios from "axios";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
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
  Container,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import { teacherDesignations } from "./TeacherDesignation";
import { apiBaseUrl } from "../../../Utility/Constants";
import SweetAlert from "../../../Component/SweetAlert/SweetAlert";

const AddTeacher = () => {
  const [url, setUrl] = useState("");
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
      section: data.section,
      place: data.place,
      blood: data.blood,
      designation: data.designation,
    };

    axios
      .post(`${apiBaseUrl}/addTeacher`, userData)
      .then((res) => {
        if (res.data.insertedId) {
          // Show success message
          SweetAlert.success("Success", "Form submitted successfully!");
        }
        reset();
        setTimeout(() => navigate("/OurTeachers"), 2000);
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div>
      <Container>
        <Box>
          <Box>
            <h4 style={{ textAlign: "center" }}>
              Fill in the input information in English
            </h4>
            <form
              onSubmit={handleSubmit(onSubmit)}
              encType="multipart/form-data"
            >
              {/* Full Name */}
              <Box className="divLayout">
                <TextField
                  {...register("fullName", { required: true })}
                  label="Teacher Name"
                  variant="outlined"
                  fullWidth
                  error={!!errors.fullName}
                  helperText={errors.fullName && "Name is required"}
                />
                <Tooltip title="আপনার সম্পূর্ণ নাম লিখুন।">
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

              {/* Madrasha Section */}
              <Box className="divLayout">
                <FormControl fullWidth error={!!errors.section}>
                  <InputLabel>Madrasah Section</InputLabel>
                  <Controller
                    name="section"
                    control={control}
                    defaultValue=""
                    rules={{ required: "Madrasah Section is required" }}
                    render={({ field }) => (
                      <Select {...field}>
                        <MenuItem value="dakhil">Dakhil Section</MenuItem>
                        <MenuItem value="bording">
                          Bording and Hefz Section
                        </MenuItem>
                      </Select>
                    )}
                  />
                  {errors.section && (
                    <FormHelperText>{errors.section.message}</FormHelperText>
                  )}
                </FormControl>
                <Tooltip title="আপনার section সিলেক্ট করুন। ">
                  <IconButton>
                    <InfoIcon />
                  </IconButton>
                </Tooltip>
              </Box>

              {/* designation */}
              <Box className="divLayout">
                <FormControl fullWidth error={!!errors.designation}>
                  <InputLabel>Designation</InputLabel>
                  <Controller
                    name="designation"
                    control={control}
                    defaultValue=""
                    rules={{ required: "Designation is required" }}
                    render={({ field }) => (
                      <Select {...field}>
                        {teacherDesignations.map((designation, i) => (
                          <MenuItem key={i} value={i}>
                            {designation}
                          </MenuItem>
                        ))}
                      </Select>
                    )}
                  />
                  {errors.designation && (
                    <FormHelperText>
                      {errors.designation.message}
                    </FormHelperText>
                  )}
                </FormControl>
                <Tooltip title="">
                  <IconButton>
                    <InfoIcon />
                  </IconButton>
                </Tooltip>
              </Box>

              {/* Status */}
              <Box className="divLayout">
                <FormControl fullWidth error={!!errors.status}>
                  <InputLabel>Active Status</InputLabel>
                  <Controller
                    name="status"
                    control={control}
                    defaultValue=""
                    rules={{ required: "Active Status is required" }}
                    render={({ field }) => (
                      <Select {...field}>
                        <MenuItem value="active">Active Teacher</MenuItem>
                        <MenuItem value="former">Former Teacher</MenuItem>
                      </Select>
                    )}
                  />
                  {errors.status && (
                    <FormHelperText>{errors.status.message}</FormHelperText>
                  )}
                </FormControl>
                <Tooltip title="আপনার স্ট্যাটাস সিলেক্ট করুন। ">
                  <IconButton>
                    <InfoIcon />
                  </IconButton>
                </Tooltip>
              </Box>

              {/* place */}
              <Box className="divLayout">
                <TextField
                  {...register("place")}
                  label="if you former teacher then write your present working place with designation"
                  variant="outlined"
                  fullWidth
                />
                <Tooltip title="">
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
        </Box>
      </Container>
    </div>
  );
};

export default AddTeacher;
