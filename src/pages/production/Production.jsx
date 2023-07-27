import React from "react";
import Tabs from "../../components/UI/Tabs";
import Loom from "./Loom";
import Roll from "./Roll";
import Taplyn from "./Taplyn";
import Recycle from "./Recycle";
import Statics from "./Statics";
import ProductionCharts from "./productionChart"

function Production() {
  const tabs = [
    { label: "LOOM", body: <Loom /> },
    { label: "ROLL", body: <Roll /> },
    { label: "TAP LYN", body: <Taplyn /> },
    { label: "Recycle", body: <Recycle /> },
  ];

  return (
    <div className="main-container">
      <Statics />
      <ProductionCharts />
      <Tabs tabs={tabs} />
    </div>
  );
}

export default Production;
