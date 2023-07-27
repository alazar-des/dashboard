import React from 'react'
import Tabs from "../../components/UI/Tabs";
import Produced from "./Produced"
import CementBag from "./CementBag"

function RecycleProducts() {
  const tabs = [
    { label: "Row Material", body: <Produced /> },
    { label: "Cement Bag", body: <CementBag /> },
  ];

  return (
    <div className="main-container">
      <Tabs tabs={tabs} />
    </div>
  );
}

export default RecycleProducts