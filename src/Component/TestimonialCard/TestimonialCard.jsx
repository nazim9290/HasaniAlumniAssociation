import React from "react";
import { Card, CardContent, Typography, Avatar, Box } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

const TestimonialCard = ({ name, designation, testimonial, image }) => {
  return (
    <Card sx={{ maxWidth: 400, p: 2, boxShadow: 3, borderRadius: 3 }}>
      <CardContent>
        {/* User Info */}
        <Box display="flex" alignItems="center" mb={2}>
          <Avatar src={image} sx={{ width: 60, height: 60, mr: 2 }} />
          <div>
            <Typography variant="h6" fontWeight="bold">
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {designation}
            </Typography>
          </div>
        </Box>

        {/* Testimonial Text */}
        <Typography variant="body1" color="text.primary" sx={{ mb: 2 }}>
          "{testimonial}"
        </Typography>

        {/* Star Ratings */}
        <Box display="flex" color="gold">
          {[...Array(5)].map((_, i) => (
            <StarIcon key={i} />
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
