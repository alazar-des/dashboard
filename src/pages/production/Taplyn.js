import React, { Fragment } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import CollapsableRow from "../../components/TableUI/deepCollapsibleRow";
import EnhancedTable from "../../components/TableUI/EnhancedTableHead";

const headCells = [
  {
    id: "date",
    numeric: false,
    disablePadding: false,
    label: "Date",
  },
  {
    id: "totalConsumed",
    numeric: true,
    disablePadding: false,
    label: "Total Row Material Consumed (Kg)",
  },
  {
    id: "waste",
    numeric: true,
    disablePadding: false,
    label: "Waste (Kg)",
  },
  {
    id: "wastePersentage",
    numeric: true,
    disablePadding: false,
    label: "Waste in %",
  },
  {
    id: "itemsProduced",
    numeric: false,
    disablePadding: false,
    label: "Items Produced",
  },
  {
    id: "downTime",
    numeric: true,
    disablePadding: false,
    label: "Remark (Down Time)",
  },
];

function createData(date, shiftA, shiftB) {
  const totalConsumedA = Object.values(shiftA.rowMaterialConsumed).reduce(
    (acc, crnt) => acc + crnt,
    0
  );

  const totalConsumedB = Object.values(shiftB.rowMaterialConsumed).reduce(
    (acc, crnt) => acc + crnt,
    0
  );

  const downTimeA = shiftA.remark.reduce((acc, crnt) => acc + crnt.downTime, 0);
  const downTimeB = shiftB.remark.reduce((acc, crnt) => acc + crnt.downTime, 0);

  const totalConsumed = totalConsumedA + totalConsumedB;
  const waste = shiftA.waste + shiftB.waste;
  const itemsProduceds = [
    ...shiftA.itemsProduced,
    ...shiftB.itemsProduced.filter((i) => !shiftA.itemsProduced.includes(i)),
  ];
  const itemsProduced = itemsProduceds.join(", ");
  const downTime = downTimeA + downTimeB;

  const rowMaterialsA = Object.keys(shiftA.rowMaterialConsumed);
  const rowMaterialsB = Object.keys(shiftB.rowMaterialConsumed);

  const rowMaterialUsed = [
    ...rowMaterialsA,
    [...rowMaterialsB.filter((rm) => !rowMaterialsA.includes(rm))],
  ];

  return {
    date,
    totalConsumed,
    waste,
    wastePersentage: ((waste / totalConsumed) * 100).toFixed(2),
    itemsProduced,
    downTime: `0:${downTime}`,
    rowMaterialConsumptionDetail: [
      ...rowMaterialUsed.map((rm, index) => {
        return {
          "Row Material": rm,
          "Shift A": shiftA.rowMaterialConsumed[rm]
            ? shiftA.rowMaterialConsumed[rm]
            : "-",
          "Shift B": shiftB.rowMaterialConsumed[rm]
            ? shiftB.rowMaterialConsumed[rm]
            : "-",
          "Shift A ": index === 0 ? shiftA.itemsProduced.join(", ") : null,
          "Shift B ": index === 0 ? shiftB.itemsProduced.join(", ") : null,
        };
      }),
      {
        "Row Material": "Total",
        "Shift A": totalConsumedA,
        "Shift B": totalConsumedB,
      },
      {
        "Row Material": "Waste",
        "Shift A": shiftA.waste,
        "Shift B": shiftB.waste,
      },
      {
        "Row Material": "Waste %",
        "Shift A": ((shiftA.waste / totalConsumedA) * 100).toFixed(2),
        "Shift B": ((shiftB.waste / totalConsumedB) * 100).toFixed(2),
      },
    ],
    remark: [shiftA.remark, shiftB.remark],
  };
}

const shiftA = {
  rowMaterialConsumed: {
    PP: 375,
    FILER: 200,
    BROWN: 10,
    RECYCLE: 1125,
    FILM: 12.4,
  },
  waste: 107.9,
  itemsProduced: ["Oromia", "Brawn"],
  remark: [
    {
      stoppingTime: "3:30",
      startingTime: "3:40",
      downTime: 10,
      reason: "Die dirtiness",
      inputDetail: {
        product: "Oromia",
        speed: 250,
        dinner: 470,
        PP: 15,
        Filler: 10,
        Recycle: 75,
      },
    },
    {
      stoppingTime: "7:40",
      startingTime: "7:50",
      downTime: 10,
      reason: "Die dirtiness",
      inputDetail: {
        product: "Brown",
        speed: 260,
        dinner: 470,
        PP: 25,
        Filler: 10,
        Recycle: 75,
      },
    },
  ],
};

const shiftB = {
  rowMaterialConsumed: {
    PP: 475,
    FILER: 156,
    RED: 4,
    RECYCLE: 900,
    FILM: 19.4,
  },
  waste: 10.1,
  itemsProduced: ["Oromia", "Red", "Swing Tap"],
  remark: [
    {
      stoppingTime: "3:00",
      startingTime: "3:10",
      downTime: 10,
      reason: "Raw material dirtiness",
      inputDetail: {
        product: "Oromia",
        speed: 250,
        dinner: 470,
        PP: 15,
        Filler: 10,
        Recycle: 75,
      },
    },
    {
      stoppingTime: "7:00",
      startingTime: "7:40",
      downTime: 40,
      reason: "Molten plastic mud come out through filter side",
      inputDetail: {
        product: "Red",
        speed: 260,
        dinner: 470,
        PP: 25,
        Filler: 3,
        Recycle: 75,
      },
    },
  ],
};

const rows = [
  createData("7/10/2014", shiftA, shiftB),
  createData("8/10/2014", shiftA, shiftB),
  createData("9/10/2014", shiftA, shiftB),
  createData("10/10/2014", shiftA, shiftB),
  createData("11/10/2014", shiftA, shiftB),
  createData("12/10/2014", shiftA, shiftB),
  createData("13/10/2014", shiftA, shiftB),
  createData("14/10/2014", shiftA, shiftB),
  createData("15/10/2014", shiftA, shiftB),
  createData("16/10/2014", shiftA, shiftB),
  createData("17/10/2014", shiftA, shiftB),
];

function renderRow(row, headCells) {
  return (
    <>
      <CollapsableRow row={row} headCells={headCells} />
    </>
  );
}

export default function Taplyn() {
  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <EnhancedTable
          rows={rows}
          headCells={headCells}
          renderRow={renderRow}
        />
      </Paper>
    </Box>
  );
}
