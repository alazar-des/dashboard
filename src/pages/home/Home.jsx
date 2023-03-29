import React from "react";
import "./home.scss";
import StockCard from "../../components/StockCard/StockCard";
import VerticalScrollTable from "../../components/VerticalScrollTable";
import RowMaterialStock from "../../components/RowMaterialStock";
import Users from "../../components/Users";
import ProductionStatics from "../../components/ProductionStatics";
import Overview from "../../components/Overview";
import ProductStockStatus from "../../components/ProductStockStatus";

function Home() {
  return (
    <div className="main-container">
      <Overview />
      <ProductStockStatus />
      <VerticalScrollTable />
      <ProductionStatics />
      <RowMaterialStock />
      <Users />
    </div>
  );
}

export default Home;
