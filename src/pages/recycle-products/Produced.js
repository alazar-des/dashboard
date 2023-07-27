import React from "react";
import BasicTable from "../../components/TableUI/BasicTable";

const columns = [
  {
    field: "date",
    headerName: "Date",
    flex: 1,
    minWidth: 100,
  },
  {
    field: "quantity",
    headerName: "Quantity (Kg)",
    flex: 1,
    minWidth: 80,
  },
];

const rows = [
  {
    id: 1,
    date: "1/9/2014",
    quantity: 4479.9,
  },
  {
    id: 2,
    date: "2/9/2014",
    quantity: 1542.8,
  },
  {
    id: 3,
    date: "3/9/2014",
    quantity: 1285.4,
  },
  {
    id: 4,
    date: "4/9/2014",
    quantity: 4479.9,
  },
  {
    id: 5,
    date: "5/9/2014",
    quantity: 2576.7,
  },
  {
    id: 6,
    date: "6/9/2014",
    quantity: 2370.7,
  },
  {
    id: 7,
    date: "7/9/2014",
    quantity: 2229.6,
  },
  {
    id: 8,
    date: "8/9/2014",
    quantity: 2230.1,
  },
  {
    id: 9,
    date: "9/9/2014",
    quantity: 4929.8,
  },
  {
    id: 10,
    date: "10/9/2014",
    quantity: 1674.2,
  },
  {
    id: 11,
    date: "11/9/2014",
    quantity: 4475.5,
  },
  {
    id: 12,
    date: "12/9/2014",
    quantity: 2234.3,
  },
];

const tableConfig = {
  autoHeight: true,
  
};

function Recycle() {
  return <BasicTable rows={rows} columns={columns} config={tableConfig} />;
}

export default Recycle;
