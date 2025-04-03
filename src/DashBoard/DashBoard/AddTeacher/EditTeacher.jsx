import axios from "axios";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
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

const EditTeacher = () => {
  const { teacherId } = useParams();
  console.log(teacherId);
  const [teacher, setTeacher] = useState({});
  const [url, setUrl] = useState("");
  const navigate = useNavigate();
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: teacher });

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
      picture: url || teacher.picture,
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
      .put(`${apiBaseUrl}/updateTeacher/${teacherId}`, userData)
      .then((res) => {
        if (res.data.modifiedCount) {
          SweetAlert.success(
            "Success",
            "Teacher details updated successfully!"
          );
        }
        reset();
        setTimeout(() => navigate("/OurTeachers"), 2000);
      })
      .catch((error) => console.error("Error:", error));
  };

  useEffect(() => {
    fetch(`${apiBaseUrl}/teacher/${teacherId}`)
      .then((res) => res.json())
      .then((data) => {
        setTeacher(data);
        reset(data); // Populate form with existing teacher data
      });
  }, [teacherId, reset]);

  return (
    <div>
      <Container>
        <Box>
          <Box component="form" noValidate autoComplete="off">
            <h4 style={{ textAlign: "center" }}>
              Update Teacher Information (Fill in the input information in
              English)
            </h4>
            <form
              onSubmit={handleSubmit(onSubmit)}
              encType="multipart/form-data"
            >
              {/* Full Name */}
              <Box>
                <InputLabel>Name :</InputLabel>
                <Box className="divLayout">
                  <TextField
                    {...register("fullName", { required: true })}
                    defaultValue={teacher?.fullName || ""}
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
              </Box>

              {/* Profile Picture */}
              <Box>
                <InputLabel sx={{ color: "red" }}>
                  Upload Profile Picture (Max 1MB, 600px x 600px, JPEG/JPG/PNG)
                </InputLabel>

                <Box className="divLayout">
                  <Box>
                    <input
                      type="file"
                      {...register("image")}
                      onChange={processFile}
                    />
                    <img
                      src={teacher.picture}
                      alt=""
                      height={100}
                      width={100}
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
              </Box>

              {/* Phone Number */}
              <Box>
                <InputLabel>Phone :</InputLabel>
                <Box className="divLayout">
                  <TextField
                    {...register("phone", { required: true })}
                    defaultValue={teacher.phone}
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
              </Box>

              {/* Email */}
              <Box>
                <InputLabel>Email :</InputLabel>
                <Box className="divLayout">
                  <TextField
                    {...register("email", { required: true })}
                    defaultValue={teacher.email}
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
              </Box>

              {/* Gender */}
              <Box>
                <InputLabel>Gender :</InputLabel>
                <Box className="divLayout">
                  <FormControl fullWidth error={!!errors.gender}>
                    <Controller
                      name="gender"
                      defaultValue={teacher?.gender || ""}
                      control={control}
                      rules={{ required: "Gender is required" }}
                      render={({ field }) => (
                        <Select {...field} value={field.value || ""}>
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
              </Box>

              {/* Madrasha Section */}
              <Box>
                <InputLabel>Madrasah Section :</InputLabel>
                <Box className="divLayout">
                  <FormControl fullWidth error={!!errors.section}>
                    <Controller
                      name="section"
                      control={control}
                      defaultValue={teacher?.section || ""}
                      rules={{ required: "Madrasah Section is required" }}
                      render={({ field }) => (
                        <Select {...field} value={field.value || ""}>
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
              </Box>

              {/* designation */}
              <Box>
                <InputLabel>Select Designation :</InputLabel>
                <Box className="divLayout">
                  <FormControl fullWidth error={!!errors.designation}>
                    <Controller
                      name="designation"
                      control={control}
                      defaultValue={teacher?.designation || ""}
                      rules={{ required: "Designation is required" }}
                      render={({ field }) => (
                        <Select {...field} value={field.value || ""}>
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
              </Box>

              {/* Status */}
              <Box>
                <InputLabel>Active Status :</InputLabel>
                <Box className="divLayout">
                  <FormControl fullWidth error={!!errors.status}>
                    <Controller
                      name="status"
                      control={control}
                      defaultValue={teacher?.status || ""}
                      rules={{ required: "Active Status is required" }}
                      render={({ field }) => (
                        <Select {...field} value={field.value || ""}>
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
              </Box>

              {/* place */}
              <Box>
                <InputLabel>
                  if you former teacher then write your present working place
                  with designation :
                </InputLabel>
                <Box className="divLayout">
                  <TextField
                    {...register("place")}
                    defaultValue={teacher?.place || ""}
                    variant="outlined"
                    fullWidth
                  />
                  <Tooltip title="">
                    <IconButton>
                      <InfoIcon />
                    </IconButton>
                  </Tooltip>
                </Box>
              </Box>

              {/* Blood Group */}
              <Box>
                <InputLabel>Blood Group</InputLabel>
                <Box className="divLayout">
                  <FormControl fullWidth>
                    <Controller
                      name="blood"
                      control={control}
                      defaultValue={teacher?.blood || ""}
                      rules={{ required: "Active Status is required" }}
                      render={({ field }) => (
                        <Select {...field} value={field.value || ""}>
                          {[
                            "A+",
                            "A-",
                            "B+",
                            "B-",
                            "AB+",
                            "AB-",
                            "O+",
                            "O-",
                          ].map((group, i) => (
                            <MenuItem key={i} value={group}>
                              {group}
                            </MenuItem>
                          ))}
                        </Select>
                      )}
                    />
                  </FormControl>
                  <Tooltip title="আপনার রক্তের গ্রুপ সিলেক্ট করুন। যদি রক্তের গ্রুপ জানা না থাকে কোন কিছু সিলেক্ট করা লাগবে না। ">
                    <IconButton>
                      <InfoIcon />
                    </IconButton>
                  </Tooltip>
                </Box>
              </Box>

              {/* Current address */}
              <Box>
                <InputLabel>Current City you live in</InputLabel>
                <Box className="divLayout">
                  <TextField
                    {...register("presentAddress")}
                    defaultValue={teacher?.presentAddress || ""}
                    variant="outlined"
                    fullWidth
                  />
                  <Tooltip title="বর্তমান ঠিকানা লিখুন। সম্পূর্ণ ঠিকানা লিখুন। যোগাযোগ করতে সহজ হবে। ">
                    <IconButton>
                      <InfoIcon />
                    </IconButton>
                  </Tooltip>
                </Box>
              </Box>

              {/* permanent address */}
              <Box>
                <InputLabel>permanent Address</InputLabel>
                <Box className="divLayout">
                  <TextField
                    {...register("permanentAddress")}
                    defaultValue={teacher?.permanentAddress || ""}
                    variant="outlined"
                    fullWidth
                  />
                  <Tooltip title="স্থায়ী ঠিকানা লিখুন। ">
                    <IconButton>
                      <InfoIcon />
                    </IconButton>
                  </Tooltip>
                </Box>
              </Box>
              {/* facebook Url */}
              <Box>
                <InputLabel>facebook profile Link</InputLabel>
                <Box className="divLayout">
                  <TextField
                    {...register("facebookUrl")}
                    defaultValue={teacher?.facebookUrl || ""}
                    variant="outlined"
                    fullWidth
                  />
                  <Tooltip title="আপনার ফেসবুক প্রফাইলের লিংক দিন। ফেসবুকে নিজ প্রফাইলে থ্রি ডটে ক্লিক করার পর কপি লিংক থেকে কপি করে এখানে পেস্ট করুন। ">
                    <IconButton>
                      <InfoIcon />
                    </IconButton>
                  </Tooltip>
                </Box>
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

export default EditTeacher;
