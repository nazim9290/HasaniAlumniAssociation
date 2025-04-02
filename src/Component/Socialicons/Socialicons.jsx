import { Box, Stack } from "@mui/material";
import React from "react";

export default function Socialicons({ data }) {
  return (
    <div>
      <Box className="team-social-icons">
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={1}
        >
          <a href={`mailto:${data?.email}`}>
            <i className="fas fa-envelope"></i>
          </a>
          <a href={`tel:${data?.phone}`}>
            <i className="fas fa-phone-square-alt"></i>
          </a>
          <a href={data?.facebookUrl} target="_blank">
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              data?.presentAddress
            )}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-address-card"></i>
          </a>
          <a href={data?.fullName} target="_blank">
            <i className="fa fa-info-circle"></i>
          </a>
        </Stack>
      </Box>
    </div>
  );
}
