import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import EnhancedTable from "../../components/TableUI/EnhancedTableHead";
import CollapsableRow from "../../components/TableUI/CollapsibleRow"

const headCells = [
  {
    id: "date",
    numeric: false,
    disablePadding: true,
    label: "Date",
  },
  {
    id: "items",
    numeric: false,
    disablePadding: false,
    label: "Items",
  },
  {
    id: "dailyProduction",
    numeric: true,
    disablePadding: false,
    label: "Daily Production",
  },
  {
    id: "dailyWaste",
    numeric: true,
    disablePadding: false,
    label: "Daily Waste",
  },
  {
    id: "efficiency",
    numeric: true,
    disablePadding: false,
    label: "Efficiency (%)",
  },
];

function createData(date, items, dailyProduction, dailyWaste) {
  return {
    date,
    items,
    dailyProduction,
    dailyWaste,
    efficiency: (
      (dailyProduction / (dailyProduction + dailyWaste)) *
      100
    ).toFixed(2),
    details: [
      {
        item: "Oromia (120*70)",
        shiftA: 17185,
        shiftB: 7254,
        total: 24439,
      },
      {
        item: "Brown (72*120)",
        shiftA: 3078,
        shiftB: 2312,
        total: 5390,
      },
      {
        item: "Waste",
        shiftA: 54,
        shiftB: 20,
        total: 74,
      },
    ],
  };
}

const rows = [
  createData("1/10/2023", "Oromia (120 *70), Brown (120*70)", 29845, 74),
  createData("2/10/2023", "Oromia (120 *70), Brown (120*70)", 45562, 149),
  createData("3/10/2023", "Oromia (120 *70), Brown (120*70)", 53649, 125),
  createData("4/10/2023", "Oromia (120 *70), Brown (120*70)", 47069, 137),
  createData("5/10/2023", "Oromia (120 *70), Brown (120*70)", 249632, 111),
  createData("1/10/2023", "Oromia (120 *70), Brown (120*70)", 29845, 74),
  createData("2/10/2023", "Oromia (120 *70), Brown (120*70)", 45562, 149),
  createData("3/10/2023", "Oromia (120 *70), Brown (120*70)", 53649, 125),
  createData("4/10/2023", "Oromia (120 *70), Brown (120*70)", 47069, 137),
  createData("5/10/2023", "Oromia (120 *70), Brown (120*70)", 249632, 111),
];

function renderRow (row, headCells) {
  return <CollapsableRow row={row} headCells={headCells} />;
};

function Loom() {
  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <EnhancedTable rows={rows} headCells={headCells}  renderRow={renderRow}/>
      </Paper>
    </Box>
  );
}

export default Loom;
