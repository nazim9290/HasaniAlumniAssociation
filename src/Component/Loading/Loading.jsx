import * as React from "react";
import Button from "@mui/material/Button";
import SaveIcon from "@mui/icons-material/Save";
import Stack from "@mui/material/Stack";

export default function Loading() {
  return (
    <Stack sx={{ width: "50%", mx: "auto", my: 20 }}>
      <Button
        loading
        loadingPosition="start"
        startIcon={<SaveIcon />}
        variant="outlined"
      >
        L O A D I N G .....
      </Button>
    </Stack>
  );
}
