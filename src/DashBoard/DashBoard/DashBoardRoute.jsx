import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CreateIcon from "@mui/icons-material/Create";
import EventNoteIcon from "@mui/icons-material/EventNote";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from "@mui/icons-material/Logout";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import React from "react";
import { NavLink } from "react-router-dom";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import ListItemButton from "@mui/material/ListItemButton";
import Diversity3Icon from "@mui/icons-material/Diversity3";

const DashBoardRoute = () => {
  // const { logout, user, admin } = useAuth();
  const icons = [
    <HomeIcon />,
    <AccountCircleIcon />,
    <ContactPageIcon />,
    <CreateIcon />,
    <LogoutIcon />,
  ];
  const route = ["Home", "Profile", "My Info", "Blog Write", "Log Out"];
  const adminicons = [
    <SupervisorAccountIcon />,
    <EventNoteIcon />,
    <Diversity3Icon />,
    <GroupAddIcon />,
  ];
  const adminRoute = [
    "Make Admin",
    "Add Event",
    " Add Committee",
    "Add Teacher",
  ];
  return (
    <div>
      {/* for all user  */}

      <List>
        {["Home", "", "MyInfo", "BlogWrite", "Logout"].map((text, index) => (
          <Box key={index}>
            <NavLink to={text} sx={{ textDecoration: "none" }}>
              <ListItemButton>
                {" "}
                <ListItemIcon>{icons[index]}</ListItemIcon>
                <ListItemText primary={route[index]} />
              </ListItemButton>
            </NavLink>
          </Box>
        ))}
      </List>

      {/* for admin only  */}

      <List>
        {["MakeAdmin", "addEvent", "addCommittee", "addTeacher"].map(
          (text, index) => (
            <Box key={index}>
              <NavLink to={text}>
                <ListItem button>
                  {" "}
                  <ListItemIcon>{adminicons[index]}</ListItemIcon>
                  <ListItemText primary={adminRoute[index]} />
                </ListItem>
              </NavLink>
            </Box>
          )
        )}
      </List>
    </div>
  );
};

export default DashBoardRoute;
