import React from "react";
import { Link } from "react-router-dom";
import "./card.scss";

import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";

function Card() {
  return (
    <div className="container">
      <div className="card">
        <h6 className="name">Total Stock</h6>
        <p className="quantity stock">43,594</p>
        <Link className="link">
          See all <KeyboardArrowRightRoundedIcon className="icon" />
        </Link>
      </div>
      <div className="card">
        <h6 className="name">Total Order</h6>
        <p className="quantity order">25,984</p>
        <Link className="link">
          See all <KeyboardArrowRightRoundedIcon className="icon" />
        </Link>
      </div>
      <div className="card">
        <h6 className="name">Average Daily Production </h6>
        <p className="quantity production">13,720</p>
        <Link className="link">
          Statistics <KeyboardArrowRightRoundedIcon className="icon" />
        </Link>
      </div>
    </div>
  );
}

export default Card;
