import { Avatar, Button, Stack, Typography } from "@mui/material";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const LoginIcon = () => {
  const { signInWithGoogleOrFacebook, googleProvider } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const handleGoogleSignIn = (provider) => {
    signInWithGoogleOrFacebook(provider, location, navigate);
  };

  return (
    <div>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 1, md: 2 }}
        sx={{ justifyContent: "center" }}
      >
        <Button
          variant="contained"
          onClick={() => handleGoogleSignIn(googleProvider)}
        >
          <Avatar src="https://i.ibb.co/JjDZnYF/download.png" />
          <Typography component="p" variant="p" color="white">
            Sign in with Google
          </Typography>
        </Button>
      </Stack>
    </div>
  );
};

export default LoginIcon;
