import { Box } from "@mui/material";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";
import "./AlumniStudent.css";
import axios from "axios";
import { apiBaseUrl } from "../../../Utility/Constants";
import Pagination from '@mui/material/Pagination';

import malePicture from "../../../assets/malePic.png"
import femalePic from "../../../assets/female.jpg";
import Loading from "../../../Component/Loading/Loading";

const AlumniStudent = ({ member }) => {
  const ProfilePicture = member?.picture
    ? member.picture
    : member?.gender == "male"
    ? malePicture
    : member.gender == "female"
    ? femalePic
    : malePicture;
  return (
    <Card sx={{ height: "100%" }}>
      <CardMedia
        component="img"
        image={ProfilePicture}
        title={member?.fullName}
        sx={{ objectFit: "contain" }}
        height="200"
      />

      <CardContent sx={{ textAlign: "center" }}>
        <Typography gutterBottom variant="body1" component="div">
          {member?.fullName}
        </Typography>
        {member?.status ? (
          <Typography variant="body2" color="text.secondary">
            {member?.status} at {member?.place}
          </Typography>
        ) : (
          <Typography variant="body2" color="text.secondary">
            {member?.place}
          </Typography>
        )}
        <Typography variant="body2" color="text.secondary">
          Dakhil Year - {member?.examYear}
        </Typography>
        {/* <Typography variant="body2" color="text.secondary">
                                    <a href={`mailto:${member.examYear}`}>{member.email}</a>
                                </Typography> */}
        <Typography variant="body2" color="text.secondary">
          Blood Group - {member?.blood}
        </Typography>
      </CardContent>

      <Box className="team-social-icons">
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={1}
        >
          <a href={`mailto:${member?.email}`}>
            <i class="fas fa-envelope"></i>
          </a>
          <a href={`tel:${member?.phone}`}>
            <i className="fas fa-phone-square-alt"></i>
          </a>
          <a href={member?.facebookUrl} target="_blank">
            <i className="fab fa-twitter"></i>
          </a>
          <a href={member?.facebookUrl} target="_blank">
            <i className="fab fa-facebook"></i>
          </a>
          <a href={member?.facebookUrl} target="_blank">
            <i className="fab fa-linkedin"></i>
          </a>
        </Stack>
      </Box>
    </Card>
  );
};

const MembersList = ({ searchValue, selectedValue }) => {
  const [members, setMembers] = useState([]);
  useEffect(() => {
    axios
      .get(`${apiBaseUrl}/allMembers`)
      .then(function (response) {
        // handle success
        setMembers(response.data);
        // console.log(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, []);
  return (
    <div>
      {members.length ? "" : <Loading></Loading>}
      <Container maxWidth="xl" sx={{ my: 5 }}>
        <Grid
          container
          spacing={{ xs: 0.5, md: 2 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {members.map((member, index) => (
            <Grid
              key={index}
              size={{ xs: 6, sm: 6, md: 3 }}
              direction="row"
              sx={{
                justifyContent: "center",
                alignItems: "center",
                mt: 2,
              }}
            >
              <AlumniStudent member={member}></AlumniStudent>
            </Grid>
          ))}
        </Grid>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
          sx={{ mt: 5 }}
        >
          <Pagination count={10} variant="outlined" shape="rounded" />
        </Stack>
      </Container>
    </div>
  );
};
export default MembersList;