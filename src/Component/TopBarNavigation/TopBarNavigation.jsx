import { Button, ButtonGroup, Container, Stack } from "@mui/material";
import { Link } from "react-router-dom";

export default function TopBarNavigation({ t1 = "All", t2 = "Add" }) {
  const location = window.location.href;
  const navigateUrl = location.split("/Dashboard/");
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
        <Link to={`/Dashboard/${navigateUrl[1]}`}>{t1}</Link>
        <Link to={`/Dashboard/${navigateUrl[1]}/add`}>{t2}</Link>
      </Stack>
    </Container>
  );
}
