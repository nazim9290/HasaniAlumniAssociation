import AddIcCallRoundedIcon from "@mui/icons-material/AddIcCallRounded";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/logo.png";
import "./NavBar.css";
import useAuth from "../../../Hooks/useAuth";
import { Button } from "@mui/material";

const settings = ["Dashboard"];

export default function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [subMenuAnchorEl, setSubMenuAnchorEl] = React.useState(null); //Organization Submenu anchor
  const [amSubMenuAnchorEl, setAmSubMenuAnchorEl] = React.useState(null); //About Madrasah Submenu anchor
  const { user, logout } = useAuth();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  // Open the submenu organization
  const handleOrgSubMenuClick = (event) => {
    setSubMenuAnchorEl(event.currentTarget);
  };

  // Close the submenu organization
  const handleOrgCloseSubMenu = () => {
    setSubMenuAnchorEl(null);
  };

  // Open the submenu Madrasah
  const handleAmSubMenuClick = (event) => {
    setAmSubMenuAnchorEl(event.currentTarget);
  };

  // Close the submenu Madrasah
  const handleAmCloseSubMenu = () => {
    setAmSubMenuAnchorEl(null);
  };
  return (
    <div className="navbar">
      <hr />
      <div className="title-name">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box sx={{ flexGrow: 1 }}>
            <small>❀๑▬▬๑﷽๑▬▬๑❀ </small>
            <br />
            <small className="bangla-text">
              হাজী মাদবর আলী হাচানিয়া দাখিল মাদ্রাসা অ্যালামনাই অ্যাসোসিয়েশন
            </small>
          </Box>
          <a href="tel:01984467364">
            <AddIcCallRoundedIcon sx={{ mr: 1 }} color="primary" />
          </a>
          <a
            href="https://www.facebook.com/groups/hasania.alumni.association/"
            target="_blank"
          >
            <FacebookOutlinedIcon color="primary" />
          </a>
        </Box>
        <span></span>
      </div>
      <AppBar
        position="static"
        className="app-bar"
        title={<img src={logo} alt="" />}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              className="logo"
              variant="div"
              noWrap
              component="div"
              color="inherit"
              sx={{
                mr: 10,
                ml: 10,
                mt: -3,
                display: { xs: "none", md: "flex" },
              }}
            >
              <img src={logo} alt="madrasha logo" width="50" />
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                className="menu-item"
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <MenuItem onClick={handleCloseNavMenu}>
                  <Link onClick={handleCloseNavMenu} to="/Home">
                    Home
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleOrgSubMenuClick}>
                  Organization &#x2193;
                </MenuItem>
                <MenuItem onClick={handleAmSubMenuClick}>
                  About Madrasah &#x2193;
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Link onClick={handleCloseNavMenu} to="/AlumniMembers">
                    Alumni Members
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Link onClick={handleCloseNavMenu} to="/Events">
                    Events
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Link onClick={handleCloseNavMenu} to="/Registration">
                    Membership
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Link onClick={handleCloseNavMenu} to="/Blogs">
                    Blogs
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Link onClick={handleCloseNavMenu} to="/Notice">
                    Notice
                  </Link>
                </MenuItem>
              </Menu>
            </Box>

            {/* responsive screen size */}

            <Typography
              variant="h6"
              className="res-logo"
              noWrap
              component="div"
              sx={{ flexGrow: 0, mr: 15, display: { xs: "flex", md: "none" } }}
            >
              <img src={logo} alt="" width="60" />
            </Typography>
            <Box
              className="top-menu"
              textAlign="center"
              sx={{
                flexGrow: "1",
                mx: "10",
                display: {
                  xs: "none",
                  md: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Link onClick={handleCloseNavMenu} to="/Home">
                  Home
                </Link>
              </MenuItem>
              <MenuItem onClick={handleOrgSubMenuClick}>
                Organization &#x2193;
              </MenuItem>
              <MenuItem onClick={handleAmSubMenuClick}>
                About Madrasah &#x2193;
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Link onClick={handleCloseNavMenu} to="/AlumniMembers">
                  Alumni Members
                </Link>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Link onClick={handleCloseNavMenu} to="/Events">
                  Events
                </Link>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Link onClick={handleCloseNavMenu} to="/Registration">
                  Membership
                </Link>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Link onClick={handleCloseNavMenu} to="/Blogs">
                  Blogs
                </Link>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Link onClick={handleCloseNavMenu} to="/Notice">
                  Notice
                </Link>
              </MenuItem>
            </Box>
            {/* Submenu under "Organization" */}
            <Menu
              anchorEl={subMenuAnchorEl}
              open={Boolean(subMenuAnchorEl)}
              onClose={handleOrgCloseSubMenu}
            >
              <MenuItem onClick={handleOrgCloseSubMenu}>
                <Link to="/aboutUs">About Us</Link>
              </MenuItem>
              <MenuItem onClick={handleOrgCloseSubMenu}>
                <Link to="/history">Our History</Link>
              </MenuItem>
              <MenuItem onClick={handleOrgCloseSubMenu}>
                <Link to="/ConveningCommittee">Convening Committee</Link>
              </MenuItem>
              <MenuItem onClick={handleOrgCloseSubMenu}>
                <Link to="/Constitution">Constitution</Link>
              </MenuItem>
            </Menu>

            {/* Submenu under "About Madrasah" */}
            <Menu
              anchorEl={amSubMenuAnchorEl}
              open={Boolean(amSubMenuAnchorEl)}
              onClose={handleAmCloseSubMenu}
            >
              <MenuItem onClick={handleAmCloseSubMenu}>
                <Link to="/madrasahInfo">Madrasah Info</Link>
              </MenuItem>
              <MenuItem onClick={handleAmCloseSubMenu}>
                <Link to="/OurTeachers">Madrasah Teacher</Link>
              </MenuItem>
              <MenuItem onClick={handleAmCloseSubMenu}>
                <Link to="/ManagingCommittee">Managing Committee</Link>
              </MenuItem>
            </Menu>

            {/* {dashboard login} */}
            {user?.email ? (
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open Members Portal">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar sx={{ width: 50, height: 50 }}>
                      {user.photoURL === null ? (
                        `${user.displayName.split(" ")[0][0]}${
                          user.displayName.split(" ")[1][0]
                        }`
                      ) : (
                        <img src={user?.photoURL} alt="" width="50px" />
                      )}
                    </Avatar>
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem
                      className="menu-item"
                      key={setting}
                      onClose={handleCloseUserMenu}
                    >
                      <NavLink onClose={handleCloseUserMenu} to={`/${setting}`}>
                        {setting}
                      </NavLink>
                    </MenuItem>
                  ))}
                  <MenuItem
                    className="menu-item"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    onClick={logout}
                  >
                    Logout
                  </MenuItem>
                </Menu>
              </Box>
            ) : (
              <NavLink to="/login">Members Portal</NavLink>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
