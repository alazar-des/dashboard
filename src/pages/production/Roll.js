import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import EnhancedTable from "../../components/TableUI/EnhancedTableHead";
import CollapsableRow from "../../components/TableUI/CollapsibleRow";

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
    id: "shiftA",
    numeric: true,
    disablePadding: false,
    label: "Shift A",
  },
  {
    id: "shiftB",
    numeric: true,
    disablePadding: false,
    label: "Shift B",
  },
  {
    id: "total",
    numeric: true,
    disablePadding: false,
    label: "Total",
  },
];

function createData(date, items, detail) {
  const shiftA = detail.reduce(
    (accumulator, current) => accumulator + current.shiftA,
    0
  );
  const shiftB = detail.reduce(
    (accumulator, current) => accumulator + current.shiftB,
    0
  );
  return {
    date,
    items,
    shiftA,
    shiftB,
    total: shiftA + shiftB,
    details: detail.map((det) => {
      return {
        item: det.item,
        shiftA: det.shiftA,
        shiftB: det.shiftB,
        total: det.shiftA + det.shiftB,
      };
    }),
  };
}

const rows = [
  createData("1/10/2023", "Oromia (120 *70), Brown (120*70)", [
    {
      item: "Oromia (120*70)",
      shiftA: 1625,
      shiftB: 1377,
    },
    {
      item: "Brown (72*120)",
      shiftA: 467,
      shiftB: 430,
    },
  ]),
  createData("2/10/2023", "Oromia (120 *70), Brown (120*70)", [
    {
      item: "Oromia (120*70)",
      shiftA: 1807,
      shiftB: 196,
    },
    {
      item: "Brown (72*120)",
      shiftA: 473,
      shiftB: 303,
    },
  ]),
  createData("3/10/2023", "Oromia (120 *70), Brown (120*70)", [
    {
      item: "Oromia (120*70)",
      shiftA: 1408,
      shiftB: 486,
    },
    {
      item: "Brown (72*120)",
      shiftA: 455,
      shiftB: 176,
    },
  ]),
  createData("4/10/2023", "Oromia (120 *70), Brown (120*70)", [
    {
      item: "Oromia (120*70)",
      shiftA: 789,
      shiftB: 913,
    },
    {
      item: "Brown (72*120)",
      shiftA: 787,
      shiftB: 433,
    },
  ]),
  createData("5/10/2023", "Oromia (120 *70), Brown (120*70)", [
    {
      item: "Oromia (120*70)",
      shiftA: 1034,
      shiftB: 741,
    },
    {
      item: "Brown (72*120)",
      shiftA: 591,
      shiftB: 675,
    },
  ]),
  createData("1/10/2023", "Oromia (120 *70), Brown (120*70)", [
    {
      item: "Oromia (120*70)",
      shiftA: 1149,
      shiftB: 1231,
    },
    {
      item: "Brown (72*120)",
      shiftA: 380,
      shiftB: 477,
    },
  ]),
  createData("2/10/2023", "Oromia (120 *70), Brown (120*70)", [
    {
      item: "Oromia (120*70)",
      shiftA: 1276,
      shiftB: 357,
    },
    {
      item: "Brown (72*120)",
      shiftA: 126,
      shiftB: 264,
    },
  ]),
  createData("3/10/2023", "Oromia (120 *70), Brown (120*70)", [
    {
      item: "Oromia (120*70)",
      shiftA: 1348,
      shiftB: 830,
    },
    {
      item: "Brown (72*120)",
      shiftA: 314,
      shiftB: 74,
    },
  ]),
  createData("4/10/2023", "Oromia (120 *70), Brown (120*70)", [
    {
      item: "Oromia (120*70)",
      shiftA: 1428,
      shiftB: 953,
    },
    {
      item: "Brown (72*120)",
      shiftA: 301,
      shiftB: 85,
    },
  ]),
  createData("5/10/2023", "Oromia (120 *70), Brown (120*70)", [
    {
      item: "Oromia (120*70)",
      shiftA: 1479,
      shiftB: 1461,
    },
    {
      item: "Brown (72*120)",
      shiftA: 239,
      shiftB: 212,
    },
  ]),
];

function renderRow (row, headCells) {
  return <CollapsableRow row={row} headCells={headCells} />;
};

function Roll() {
  return (
    <Box sx={{ width: "100%"}}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <EnhancedTable rows={rows} headCells={headCells} renderRow={renderRow}/>
      </Paper>
    </Box>
  );
}

export default Roll;
