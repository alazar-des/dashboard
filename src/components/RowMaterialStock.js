import React from "react";
import Link from "@mui/material/Link";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import clsx from "clsx";
import { Typography } from "@mui/material";
import Card from "./Card";

const rows = [
  {
    id: 1,
    type: "PP",
    quantity: 5596,
    catagory: "PP",
    unit: "KG",
    status: "Available",
  },
  {
    id: 2,
    type: "daplast green",
    quantity: 89,
    catagory: "PP",
    unit: "KG",
    status: "Low",
  },
  {
    id: 3,
    type: "daplast BLACK",
    quantity: 276,
    catagory: "PP",
    unit: "KG",
    status: "Available",
  },
  {
    id: 4,
    type: "sataindra red",
    quantity: 112,
    catagory: "PP",
    unit: "KG",
    status: "Available",
  },
  {
    id: 5,
    type: "sataindra blue",
    quantity: 35,
    catagory: "PP",
    unit: "KG",
    status: "Low",
  },
  {
    id: 6,
    type: "daplast ORANGE",
    quantity: 31,
    catagory: "PP",
    unit: "KG",
    status: "Low",
  },
  {
    id: 7,
    type: "Filler",
    quantity: 241,
    catagory: "PP",
    unit: "KG",
    status: "Available",
  },
  {
    id: 8,
    type: "Brown M.B",
    quantity: 50,
    catagory: "PP",
    unit: "KG",
    status: "Available",
  },
  {
    id: 9,
    type: "White M/B",
    quantity: 0,
    catagory: "PP",
    unit: "KG",
    status: "Out of stock",
  },
  {
    id: 10,
    type: "Tinner",
    quantity: 205,
    catagory: "Chemical",
    unit: "Liter",
    status: "Available",
  },
  {
    id: 11,
    type: "Green ink",
    quantity: 10,
    catagory: "Chemical",
    unit: "barrel",
    status: "Available",
  },
  {
    id: 12,
    type: "Black ink",
    quantity: 2,
    catagory: "Chemical",
    unit: "barrel",
    status: "Low",
  },
  {
    id: 13,
    type: "Red ink",
    quantity: 7,
    catagory: "Chemical",
    unit: "barrel",
    status: "Available",
  },
  {
    id: 14,
    type: "Blue dark ink",
    quantity: 10,
    catagory: "Chemical",
    unit: "barrel",
    status: "Available",
  },
  {
    id: 15,
    type: "Blue light ink",
    quantity: 9,
    catagory: "Chemical",
    unit: "barrel",
    status: "Available",
  },
  {
    id: 16,
    type: "yellow",
    quantity: 0,
    catagory: "Chemical",
    unit: "barrel",
    status: "Out of stock",
  },
  {
    id: 17,
    type: "oil",
    quantity: 416,
    catagory: "Chemical",
    unit: "Litter",
    status: "Available",
  },
];

function RowMaterialStock() {
  const columns = [
    {
      field: "type",
      headerName: "Item",
      width: 150,
      renderCell: (cellValues) => (
        <Link
          href={`/users/${cellValues.value}`}
          color="primary"
          underline="hover"
        >
          {cellValues.value}
        </Link>
      ),
    },
    {
      field: "catagory",
      headerName: "Type",
      width: 130,
    },
    {
      field: "quantity",
      headerName: "Quantity",
      type: "number",
      width: 110,
    },
    {
      field: "unit",
      headerName: "Unit",
      width: 130,
    },
    {
      field: "status",
      headerName: "Status",
      width: 130,
      cellClassName: (params) => {
        if (params.value == null) {
          return "status";
        }
        return clsx("status", {
          outofstock: params.value === "Out of stock",
          low: params.value === "Low",
          available: params.value === "Available",
        });
      },
    },
  ];

  return (
    <Card style={{ height: 400, paddingBotttom: "40px" }}>
      <Typography variant="h6" mb={1} color="#344050">
        Row Material Stock Status
      </Typography>
      <DataGrid
        rows={rows}
        columns={columns}
        disableColumnFilter
        disableColumnSelector
        disableDensitySelector
        slots={{ toolbar: GridToolbar }}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 100,
            },
          },
        }}
        pageSizeOptions={[100]}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        sx={{
          fontSize: "13px",
          textTransform: "capitalize",
          border: "none",
        }}
      />
    </Card>
  );
}

export default RowMaterialStock;
