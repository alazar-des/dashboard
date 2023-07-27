import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import EnhancedTable from "../../components/TableUI/EnhancedTableHead";
import CollapsibleRowWithTable from "../../components/TableUI/CollapsibleRowWithTable";
import { Typography } from "@mui/material";

const headCells = [
  {
    id: "date",
    numeric: false,
    disablePadding: false,
    label: "Date",
  },
  {
    id: "totalDownTime",
    numeric: false,
    disablePadding: false,
    label: "Down Time",
  },
];

const createData = (remarks) => {
  return remarks.map((rk) => {
    const totalDownTimeA = rk.remark.shiftA.reduce(
      (acc, curr) => curr.downTime + acc,
      0
    );
    const totalDownTimeB = rk.remark.shiftB.reduce(
      (acc, curr) => curr.downTime + acc,
      0
    );
    const totalDownTime = totalDownTimeA + totalDownTimeB;
    return {
      date: rk.date,
      totalDownTime,
      remarkDetail: rk.remark,
    };
  });
};

const remarks = [
  {
    date: "1/4/2014",
    remark: {
      shiftA: [
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
      shiftB: [
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
    },
  },
  {
    date: "1/4/2014",
    remark: {
      shiftA: [
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
      shiftB: [
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
    },
  },
  {
    date: "1/4/2014",
    remark: {
      shiftA: [
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
      shiftB: [
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
    },
  },
  {
    date: "1/4/2014",
    remark: {
      shiftA: [
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
      shiftB: [
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
    },
  },
  {
    date: "1/4/2014",
    remark: {
      shiftA: [
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
      shiftB: [
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
    },
  },
  {
    date: "1/4/2014",
    remark: {
      shiftA: [
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
      shiftB: [
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
    },
  },
  {
    date: "1/4/2014",
    remark: {
      shiftA: [
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
      shiftB: [
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
    },
  },
  {
    date: "1/4/2014",
    remark: {
      shiftA: [
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
      shiftB: [
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
    },
  },
];

const rows = createData(remarks);

function renderRow(row, headCells) {
  return <CollapsibleRowWithTable row={row} headCells={headCells} />;
}

function Remark() {
  return (
    <Box sx={{ width: "100%" }}>
      <Typography variant="h5">Remarks</Typography>
      <Paper sx={{ width: "100%", my: 2 }}>
        <EnhancedTable
          rows={rows}
          headCells={headCells}
          renderRow={renderRow}
        />
      </Paper>
    </Box>
  );
}

export default Remark;
