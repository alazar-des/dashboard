import * as React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./sidebar.scss";

import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import PeopleOutlineRoundedIcon from "@mui/icons-material/PeopleOutlineRounded";
import StoreIcon from "@mui/icons-material/Store";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import ProductionQuantityLimitsRoundedIcon from "@mui/icons-material/ProductionQuantityLimitsRounded";
import AnnouncementRoundedIcon from "@mui/icons-material/AnnouncementRounded";
import AutorenewRoundedIcon from "@mui/icons-material/AutorenewRounded";
import ConstructionRoundedIcon from "@mui/icons-material/ConstructionRounded";
import StrollerRoundedIcon from "@mui/icons-material/StrollerRounded";
import PendingActionsRoundedIcon from "@mui/icons-material/PendingActionsRounded";

function Sidebar() {

  return (
    <div className="sidebar">
      <div className="menu-bar">
        <ul className="nav-link">
          <p className="title">MAIN</p>
          <NavLink to="/" className="link" activeClassName="active">
            <li>
              <DashboardRoundedIcon className="icon" />
              <span className="link-name">Dashboard</span>
            </li>
          </NavLink>
          <p className="title">STORE</p>
          <NavLink to="/products" className="link" activeClassName="active">
            <li>
              <StoreIcon className="icon" />
              <span className="link-name">Products</span>
            </li>
          </NavLink>
          <NavLink to="/rowmaterails" className="link" activeClassName="active">
            <li>
              <StrollerRoundedIcon className="icon" />
              <span className="link-name">Row Material</span>
            </li>
          </NavLink>
          <NavLink to="/spares" className="link" activeClassName="active">
            <li>
              <ConstructionRoundedIcon className="icon" />
              <span className="link-name">Spare</span>
            </li>
          </NavLink>
          <p className="title">Report</p>
          <NavLink to="/production" className="link" activeClassName="active">
            <li>
              <ProductionQuantityLimitsRoundedIcon className="icon" />
              <span className="link-name">production</span>
            </li>
          </NavLink>
          <NavLink to="/remarks" className="link" activeClassName="active">
            <li>
              <AnnouncementRoundedIcon className="icon" />
              <span className="link-name">Remark</span>
            </li>
          </NavLink>
          <NavLink to="/recycle" className="link" activeClassName="active">
            <li>
              <AutorenewRoundedIcon className="icon" />
              <span className="link-name">recycle</span>
            </li>
          </NavLink>
          <p className="title">manage</p>
          <NavLink to="/orders" className="link" activeClassName="active">
            <li>
              <PendingActionsRoundedIcon className="icon" />
              <span className="link-name">orders</span>
            </li>
          </NavLink>
          <NavLink to="/users" className="link" activeClassName="active">
            <li>
              <PeopleOutlineRoundedIcon className="icon" />
              <span className="link-name">users</span>
            </li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
