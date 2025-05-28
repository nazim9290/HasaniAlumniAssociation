import React, { useEffect } from "react";
import {
  Container,
  TextField,
  Button,
  Grid2 as Grid,
  Typography,
  Paper,
  Box,
  Stack,
  CircularProgress,
} from "@mui/material";
import { useForm } from "react-hook-form";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { NavLink, useNavigate } from "react-router-dom";
import LoginIcon from "./LoginIcon/LoginIcon";
import useAuth from "../../Hooks/useAuth";
import SweetAlert from "../../Component/SweetAlert/SweetAlert";

export default function SignForm() {
  const navigate = useNavigate();
  const { user, registerUser, isLoading, authError } = useAuth();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    const userName = data.userName;
    const email = data.email;
    const password = data.password;
    const confirmPassword = data.confirmPassword;
    const captcha = data.captcha;

    if (password !== confirmPassword) {
      SweetAlert.error("Invalid CAPTCHA! input Right Captcha");
      return;
    } else if (validateCaptcha(captcha) !== true) {
      SweetAlert.error("Invalid CAPTCHA! input Right Captcha");
      return;
    } else {
      registerUser(email, password, userName, navigate);
    }
  };

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  return (
    <Container
      sx={{
        my: 3,
        width: { xs: "100vw", md: "50vw" },
      }}
      data-aos="flip-down"
      data-aos-duration="1500"
    >
      <Paper elevation={3} sx={{ overflow: "hidden", borderRadius: "20px" }}>
        <Box sx={{ p: 4 }}>
          <Typography variant="h5" fontWeight="bold" textAlign="center">
            Sign Up
          </Typography>

          <form onSubmit={handleSubmit(onSubmit)}>
            {/* user name */}
            <TextField
              fullWidth
              label="Your Name"
              variant="outlined"
              margin="normal"
              {...register("userName", {
                required: "Name is required",
              })}
              error={!!errors.userName}
              helperText={errors.userName?.message}
            />
            {/* Email Field */}
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              margin="normal"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Invalid email format",
                },
              })}
              error={!!errors.email}
              helperText={errors.email?.message}
            />

            {/* Password Field */}
            <TextField
              fullWidth
              label="Password"
              type="password"
              variant="outlined"
              margin="normal"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              error={!!errors.password}
              helperText={errors.password?.message}
            />
            {/* Confirm Password Field */}
            <TextField
              fullWidth
              label="Confirm Password"
              type="password"
              variant="outlined"
              margin="normal"
              {...register("confirmPassword", {
                required: "Confirm Password is required",
                validate: (value) =>
                  value === watch("password") || "Passwords do not match",
              })}
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword?.message}
            />

            {/* reCAPTCHA */}
            <Box sx={{ mt: 2, mb: 2 }}>
              <LoadCanvasTemplate />
            </Box>
            <TextField
              fullWidth
              label="captcha input"
              type="password"
              variant="outlined"
              margin="normal"
              {...register("captcha", {
                required: "Captcha is required",
              })}
              error={!!errors.captcha}
              helperText={errors.captcha?.message}
            />

            {/* Login Button */}
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 2 }}
            >
              Sign Up
            </Button>
          </form>
          <Stack
            direction={{ xs: "row", sm: "row" }}
            sx={{ justifyContent: "space-between", alignItems: "center" }}
          >
            <Box sx={{ my: 3 }}>
              <NavLink to="/login">
                <Button variant="text">Already Registered? Please Login</Button>
              </NavLink>
            </Box>
          </Stack>
          {/* <LoginIcon /> */}
        </Box>
        {isLoading && <CircularProgress />}
        {user?.email &&
          SweetAlert.success("success", "User Created successfully!")}
        {authError && SweetAlert.success("success", `${authError}`)}
      </Paper>
    </Container>
  );
}
