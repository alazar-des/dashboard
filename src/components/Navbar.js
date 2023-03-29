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
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { Fragment } from "react";

import Link from "@mui/material/Link";

import SideMenu from "../SideMenu/SideMenu";

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

  return (
    <Box
      className="navbar"
      sx={{
        height: "50px",
        borderBottom: "0.5px solid rgb(231, 228, 228)",
        display: "flex",
        alignItems: "center",
        fontSize: "16px",
        color: "#66788a",
      }}
    >
      <Box
        sx={{
          width: "100%",
          padding: "0 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            height: "50px",
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            marginRight: "2px",
            gap: "16px",
            padding: "0 21px",
          }}
        >
          {matches ? (
            collapsed ? (
              <MenuOpenRoundedIcon
                onClick={toggleSidebar}
                sx={{ color: "#66788a" }}
              />
            ) : (
              <MenuRoundedIcon
                onClick={toggleSidebar}
                sx={{ color: "#66788a" }}
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
          <Link
            href="#"
            sx={{
              display: "flex",
              fontSize: "16px",
              fontWeight: 600,
              color: "#27bcfd",
              textTransform: "uppercase",
            }}
          >
            <Box></Box>
            <Box>Admin</Box>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

export default Navbar;
