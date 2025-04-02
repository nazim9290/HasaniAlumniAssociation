import { Button, ButtonGroup, Container, Stack } from "@mui/material";
import { Link } from "react-router-dom";

export default function TopBarNavigation({ t1 = "All", t2 = "Add" }) {
  return (
    <Container>
      <Stack
        direction="row"
        spacing={2}
        sx={{
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <Link to={`/dashboard/addTeacher`}>{t1}</Link>
        <Link to={`/dashboard/addTeacher/add`}>{t2}</Link>
      </Stack>
    </Container>
  );
}
