import { NavLink } from "react-router-dom";
import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import MenuOpenRoundedIcon from "@mui/icons-material/MenuOpenRounded";


import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { Fragment } from "react";

import SideMenu from "../SideMenu/SideMenu"

import useMediaQuery from "@mui/material/useMediaQuery";
import { useState } from "react";

function Navbar() {
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <SideMenu />
    </Box>
  );

  const matches = useMediaQuery((theme) => theme.breakpoints.up("md"));

  let collapsed = false;
  const toggleSidebar = () => {
    const sidebar = document.querySelector(".sidebar");
    const main = document.querySelector(".main");
    const wrapper = document.querySelector(".wrapper");
    sidebar.classList.toggle("collapse");
    main.classList.toggle("collapse");
    wrapper.classList.toggle("collapse");
  };

  const showDropdown = () => {
    const dropdownContainer = document.querySelector(".dropdown-container");
    dropdownContainer.classList.toggle("show");
  };

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="top">
          {matches ? (
            collapsed ? (
              <MenuOpenRoundedIcon
                onClick={toggleSidebar}
                className="toggle-icon open-menu-icon"
              />
            ) : (
              <MenuRoundedIcon
                onClick={toggleSidebar}
                className="toggle-icon"
              />
            )
          ) : (
            <Fragment key="left">
              <MenuRoundedIcon onClick={toggleDrawer("left", true)} />
              <SwipeableDrawer
                anchor="left"
                open={state["left"]}
                onClose={toggleDrawer("left", false)}
                onOpen={toggleDrawer("left", true)}
              >
                {list("left")}
              </SwipeableDrawer>
            </Fragment>
          )}
          <NavLink to="/" className="link">
            <span className="logo"></span>
            <span className="link-name name">Admin</span>
          </NavLink>
        </div>
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon />
        </div>
        <div className="items">
          <div className="item">
            <DarkModeOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <NotificationsNoneOutlinedIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className="icon" />
            <div className="counter">2</div>
          </div>
          <div className="profile-container">
            <div className="item" onClick={showDropdown}>
              <span className="avatar">AD</span>
              <ArrowDropDownRoundedIcon className="icon" />
              <div className="dropdown-container">
                <div className="username">Alazar Desta</div>
                <div className="dropdown">
                  <LogoutRoundedIcon className="icon" />
                  <span>Logout</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
