import React, { useState } from "react";
import {
  Button,
  TextField,
  Stack,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  Container,
  Box,
} from "@mui/material";
import { CommitteeDesignations } from "./CommitteeDesignation";
import TitleBar from "../../../pages/Shared/TitleBar/TitleBar";
//import useAuth from "./../../Hooks/useAuth";

const AddCommittee = () => {
  // const { token } = useAuth();
  const [userInfo, setUserInfo] = useState({
    email: "",
    designation: "",
  });
  const onChangeValue = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };
  const handleAdminSubmit = (e) => {
    const designation = {
      email: userInfo.email,
      designation: userInfo.designation.split(",")[1],
      designationId: userInfo.designation[0],
    };
    console.log(designation);
    //   fetch("https://calm-escarpment-64359.herokuapp.com/designation", {
    //     method: "PUT",
    //     headers: {
    //       authorization: `Bearer ${token}`,
    //       "content-type": "application/json",
    //     },
    //     body: JSON.stringify(designation),
    //   })
    //     .then((res) => res.json())
    //     .then((data) => {
    //       if (data.modifiedCount) {
    //         SweetAlert.success("Designation Add Successfully !!!");
    //       }
    //     });
    e.preventDefault();
  };
  return (
    <div>
      <Container>
        <TitleBar titleText="Add Punormiloni Committee"></TitleBar>
        <Box sx={{ maxWidth: "50%", margin: " auto" }}>
          <form onSubmit={handleAdminSubmit}>
            <Stack spacing={3} sx={{ width: "75%", mx: "auto" }}>
              <TextField
                label="Email"
                type="email"
                name="email"
                onChange={onChangeValue}
                variant="standard"
                fullWidth
                value={userInfo.email}
                placeholder="email"
                required
              />
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Select Designation
                </InputLabel>
                <Select
                  labelId="demo-simple-select-required-label"
                  id="demo-simple-select-required"
                  type="text"
                  name="designation *"
                  onChange={onChangeValue}
                  value={userInfo.designation}
                  label="Designation *"
                  placeholder="designation *"
                  required
                >
                  {CommitteeDesignations.map((d, i) => (
                    <MenuItem key={i} value={{ d, rank: i + 1 }}>
                      {" "}
                      {d[1]}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <Button type="submit" variant="contained">
                Make Committee
              </Button>
            </Stack>
          </form>
        </Box>
      </Container>
    </div>
  );
};

export default AddCommittee;
