import React from "react";
import "./stockCard.scss";

function StockCard() {
  return <div className="card-container">
    <div className="stock-card">
        <div className="item">
            <p className="item-name">Brown 72*120 B/G 90gm</p>
            <p className="quantity">14,000</p>
            <p className="order">Current Order: <span>9,620</span></p>
        </div>
        <div className="item">
            <p className="item-name">Oromiya 72 x 120 90 G</p>
            <p className="quantity">21,800</p>
            <p className="order">Current Order: <span>0</span></p>
        </div>
        <div className="item">
            <p className="item-name">Brown 72*120 90gm</p>
            <p className="quantity">10,500</p>
            <p className="order">Current Order: <span>17,620</span></p>
        </div>
        <div className="item">
            <p className="item-name">Oromiya 72*120 B/G 90gm</p>
            <p className="quantity">16,800</p>
            <p className="order">Current Order: <span>24,000</span></p>
        </div>
    </div>
  </div>;
}

export default StockCard;
