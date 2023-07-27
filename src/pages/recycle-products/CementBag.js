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
    field: "supplier",
    headerName: "Supplier",
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
  { id: 1, date: "25/08/14", supplier: "Asefa", quantity: 20500 },
  { id: 2, date: "25/08/14", supplier: "Adugna", quantity: 18865 },
  { id: 3, date: "26/08/14", supplier: "Asefa", quantity: 19104 },
  { id: 4, date: "26/08/14", supplier: "Asefa", quantity: 24948 },
  { id: 5, date: "26/08/14", supplier: "Asefa", quantity: 21090 },
  { id: 6, date: "26/08/14", supplier: "Asefa", quantity: 13500 },
  { id: 7, date: "27/08/14", supplier: "Asefa", quantity: 21800 },
  { id: 8, date: "29/08/14", supplier: "Asefa", quantity: 18132 },
  { id: 9, date: "29/08/14", supplier: "Asefa", quantity: 27000 },
  { id: 10, date: "1/9/2014", supplier: "Asefa", quantity: 16608 },
  { id: 11, date: "2/9/2014", supplier: "Asefa", quantity: 29500 },
  { id: 12, date: "2/9/2014", supplier: "Asefa", quantity: 21700 },
  { id: 13, date: "2/9/2014", supplier: "Asefa", quantity: 23600 },
  { id: 14, date: "3/9/2014", supplier: "Asefa", quantity: 21900 },
  { id: 15, date: "3/9/2014", supplier: "Asefa", quantity: 16464 },
  { id: 16, date: "3/9/2014", supplier: "Asefa", quantity: 20622 },
  { id: 17, date: "4/9/2014", supplier: "Asefa", quantity: 20100 },
  { id: 18, date: "4/9/2014", supplier: "Adugna", quantity: 30513 },
  { id: 19, date: "5/9/2014", supplier: "Asefa", quantity: 8985 },
];

const tableConfig = {
  autoHeight: true,
};

function Recycle() {
  return <BasicTable rows={rows} columns={columns} config={tableConfig} />;
}

export default Recycle;
