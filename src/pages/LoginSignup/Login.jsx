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
} from "@mui/material";
import { useForm } from "react-hook-form";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import SweetAlert from "../../Component/SweetAlert/SweetAlert";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "./../../Hooks/useAuth";
import ResetPassword from "../../Component/ResetPassword/ResetPassword";
import LoginIcon from "./LoginIcon/LoginIcon";

export default function LoginForm() {
  const { loginUser } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    if (validateCaptcha(data.captcha) == true) {
      loginUser(email, password, location, navigate);
      return;
    } else {
      SweetAlert.error("error", "Invalid CAPTCHA! input Right Captcha");
    }
  };

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  return (
    <Container
      sx={{
        my: 3,
        width: "50%",
      }}
      data-aos="flip-up"
      data-aos-duration="1500"
    >
      <Paper elevation={3} sx={{ overflow: "hidden", borderRadius: "12px" }}>
        <Box sx={{ p: 4 }}>
          <Typography variant="h5" fontWeight="bold" textAlign="center">
            Login
          </Typography>

          <form onSubmit={handleSubmit(onSubmit)}>
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
              Login
            </Button>
          </form>
          <Stack
            direction={{ xs: "row", sm: "row" }}
            sx={{ justifyContent: "space-between", alignItems: "center" }}
          >
            <Box sx={{ my: 3 }}>
              <Button>
                <Link to="/Signup">New User? click hare</Link>
              </Button>
            </Box>
            <Box sx={{ my: 3 }}>
              <Button onClick={handleClickOpen}>Forgot Password ?</Button>
            </Box>
          </Stack>
          <LoginIcon />
          <ResetPassword
            handleClickOpen={handleClickOpen}
            handleClose={handleClose}
            open={open}
          />
        </Box>
      </Paper>
    </Container>
  );
}
