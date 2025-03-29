import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import "./Form.css";
import TitleBar from "../Shared/TitleBar/TitleBar";
import { apiBaseUrl } from "../../Utility/Constants";

const UserRegistration = () => {
  const [url, setUrl] = useState("");
  const [years, setYears] = useState([]);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const processFile = (e) => {
    var image = e.target.files[0];
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "alumni");
    data.append("cloud_name", "dpakfnqvn");
    fetch("https://api.cloudinary.com/v1_1/dpakfnqvn/image/upload", {
      method: "post",
      body: data,
    })
      .then((resp) => resp.json())
      .then((data) => {
        setUrl(data.url);
      })
      .catch((err) => console.log(err));
  };

  const onSubmit = (data) => {
    const userData = {
      picture: url,
      fullName: data.fullName,
      phone: data.phone,
      email: data.email,
      gender: data.gender,
      examYear: data.examYear,
      city: data.city,
      country: data.country,
      facebookUrl: data.facebookUrl,
      twitterUrl: data.twitterUrl,
      linkedinUrl: data.linkedinUrl,
      status: data.status,
      place: data.place,
      //position: data.position,
      blood: data.blood,
      comments: data.comments,
    };

    axios
      .post(`${apiBaseUrl}/xStudent`, userData)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Your Registration has been Successful",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        reset();
        setTimeout(() => {
          navigate("/");
        }, 2000);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    var yearList = [];
    const year = new Date().getFullYear() + 1;
    for (var i = 1990; i <= year; i++) {
      yearList.push(i);
    }
    setYears(yearList);
  }, []);
  return (
    <>
    <TitleBar titleText="Alumni Member Registration" />
      <div className="member-form watermark-container">
        <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
          <div className="container">
            <div>
              <label>
                Your Name <span className="required">*</span>
              </label>
              <input
                {...register("fullName", { required: true })}
                placeholder="Enter your full name"
              />
              {errors.fullName?.type === "required" && (
                <p className="errors">
                  {errors.fullName?.type === "required" &&
                    "First name is required"}
                </p>
              )}
            </div>

            <div>
              <label style={{color:"red",fontWeight:"400",fontSize:"12px"}}>
                Member Profile Picture (use image less than 1MB and Recommended
                Dimension 600px/600px, Recommended Image Type: JPEG/JPG/PNG )
                <span className="required">if you are a girl, use hijab</span>
              </label>
              <input
                type="file"
                {...register("image", { required: true })}
                onChange={processFile}
              />
            </div>
            <div>
              <label>
                Your Phone Number <span className="required">*</span>
              </label>
              <input
                {...register("phone", { required: true })}
                placeholder="Enter your Phone Number"
              />
              {errors.phone?.type === "required" && (
                <p className="errors">
                  {errors.phone?.type === "required" &&
                    "Phone Number is required"}
                </p>
              )}
            </div>
            <div>
              <label>
                Your Email <span className="required">*</span>
              </label>
              <input
                {...register("email", { required: true })}
                placeholder="Enter your Email"
              />
              {errors.email?.type === "required" && (
                <p className="errors">
                  {errors.email?.type === "required" && "Email is required"}
                </p>
              )}
            </div>
            <div>
              <label>Gender</label>
              <select {...register("gender")} placeholder="select gender">
                <option defaultValue>select gender</option>
                <option value="female">female</option>
                <option value="male">male</option>
              </select>
            </div>
            <div>
              <label htmlFor="">
                Select Your Dakhil Exam Year <span className="required">*</span>
              </label>
              <select
                type="number"
                {...register("examYear", { required: true })}
              >
                <option defaultValue>select year</option>
                {years.map((year, i) => (
                  <option key={i} value={year} defaultValue="select">
                    {year}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label>current Address</label>
              <input {...register(">currentAddress")} placeholder="gulshan, vatara,Dhaka-1212" />
            </div>
            <div>
              <label>permanent Address</label>
              <input
                {...register("permanentAddress")}
                placeholder="2626,gopalganj-1200"
              />
            </div>
            <div>
              <label>
                Facebook User URL <span className="required">if you have</span>
              </label>
              <input
                {...register("facebookUrl", { required: true })}
                placeholder="https://www.facebook.com/userName"
              />
            </div>
            <div>
              <label>
                Twitter User URL <span className="required">if you have</span>
              </label>
              <input
                {...register("twitter")}
                placeholder="https://www.twitter.com/userName"
              />
            </div>
            <div>
              <label>
                Linkedin User URL <span className="required">if you have</span>
              </label>
              <input
                {...register("linkedin")}
                placeholder="https://www.linkedin.com/{userName}"
              />
            </div>
            {/* <div>
              <label>Current Status</label>
              <select {...register("status")}>
                <option defaultValue>Select Current Status..</option>
                <option value="Job">Job</option>
                <option value="Enterpreneur">Enterpreneur</option>
                <option value="Job Scker">Job Sceker</option>
                <option value="Retired">Retired</option>
                <option value="Student">Student</option>
                <option value="House Wife">House Wife</option>
                <option value="Doctor">Doctor</option>
                <option value="Teacher">Teacher</option>
                <option value="other">Other</option>
              </select>
            </div> */}
             <div>
              <label>Blood Group</label>
              <select {...register("blood")}>
                <option defaultValue>Select Blood Group..</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
            </div>
          
            <div>
              <label>
                Title Of Your Position <span className="required"></span>
              </label>
              <input
                {...register("status")}
                placeholder="e.g Student/ manager/ owner/ teacher/ house wife/ job/ enterpreneur"
              />
            </div>
            <div>
              <label>
                Company or Institute name <span className="required">if you house wife no need to input</span>
              </label>
              <input
                {...register("place")}
                placeholder="e.g Dhaka College/ city bank/ Uttor badda Kamil Madrasha"
              />
              {errors.place?.type === "required" && (
                <p className="errors">
                  {errors.place?.type === "required" &&
                    "Work Place name is required"}
                </p>
              )}
            </div>
           
          </div>
          <div>
            <label>Comments / Questions:</label>
            <textarea style={{width:"100%"}} rows="5" {...register("comments")} />
          </div>
          <button style={{margin:"10px auto"}}>Submit</button>
        </form>
      </div>
    </>
  );
};

export default UserRegistration;