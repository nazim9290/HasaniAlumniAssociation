import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import Socialicons from "../../Component/Socialicons/Socialicons";
import { teacherDesignations } from "../../DashBoard/DashBoard/AddTeacher/TeacherDesignation";

export default function Teachers({ teacher }) {
  return (
    <Card sx={{ height: "100%" }}>
      <CardMedia
        component="img"
        image={teacher?.picture}
        title={teacher?.fullName}
        sx={{ objectFit: "contain" }}
        height="200"
      />

      <CardContent sx={{ textAlign: "center" }}>
        <Typography gutterBottom variant="body1" component="div">
          {teacher?.fullName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {teacher?.status === "former"
            ? `সাবেক ${teacherDesignations[teacher?.designation] || "অজানা"}`
            : teacherDesignations[teacher?.designation] || "অজানা"}
        </Typography>
        {teacher?.status === "former" && teacher?.place && (
          <Typography variant="body1" color="text.secondary">
            {teacher?.place}
          </Typography>
        )}

        <Typography variant="body2" color="text.secondary">
          Blood Group : {teacher?.blood}
        </Typography>
      </CardContent>

      <Socialicons data={teacher}></Socialicons>
    </Card>
  );
}
