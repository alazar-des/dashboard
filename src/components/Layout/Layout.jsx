import * as React from "react";
import MUINavBar from "../MUINavBar";
import MobileDrawer from "../MobileDrawer";
import AppBar from "../AppBar";

import {
  ToggleMobileDrawerContext,
  CollapseDrawerContext,
} from "../../context/context";

import useMediaQuery from "@mui/material/useMediaQuery";

import "./layout.scss";

function Layout({ children }) {
  const [showMobileDrawer, setShowMobileDrawer] = React.useState(false);
  const [collapseDrawer, setCollapseDrawer] = React.useState(true);

  const mobileValue = {
    showMobileDrawer,
    setShowMobileDrawer,
  };

  const collapseValue = {
    collapseDrawer,
    setCollapseDrawer,
  };
  const matches = useMediaQuery((theme) => theme.breakpoints.up("md"));

  return (
    <CollapseDrawerContext.Provider value={collapseValue}>
      <ToggleMobileDrawerContext.Provider value={mobileValue}>
        <div className="layout">
          <div className="header">
            <MUINavBar />
          </div>
          <div className="body-container">
            {matches ? (
              <div className="side-bar">
                <AppBar />
              </div>
            ) : showMobileDrawer ? (
              <MobileDrawer />
            ) : null}
            <main className="main">{children}</main>
          </div>
        </div>
      </ToggleMobileDrawerContext.Provider>
    </CollapseDrawerContext.Provider>
  );
}

export default Layout;
