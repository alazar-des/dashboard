import React from "react";
import { useState } from "react";
import { Typography, Box } from "@mui/material";
import BasicTable from "../../components/TableUI/BasicTable";
import Link from "@mui/material/Link";
import Select from "../../components/UI/Select";
import clsx from "clsx";

const rows = [
  {
    id: 1,
    name: "PP",
    quantity: 5596,
    catagory: "PP",
    unit: "KG",
    status: "Available",
  },
  {
    id: 2,
    name: "daplast green",
    quantity: 89,
    catagory: "PP",
    unit: "KG",
    status: "Low",
  },
  {
    id: 3,
    name: "daplast BLACK",
    quantity: 276,
    catagory: "PP",
    unit: "KG",
    status: "Available",
  },
  {
    id: 4,
    name: "sataindra red",
    quantity: 112,
    catagory: "PP",
    unit: "KG",
    status: "Available",
  },
  {
    id: 5,
    name: "sataindra blue",
    quantity: 35,
    catagory: "PP",
    unit: "KG",
    status: "Low",
  },
  {
    id: 6,
    name: "daplast orange",
    quantity: 31,
    catagory: "PP",
    unit: "KG",
    status: "Low",
  },
  {
    id: 7,
    name: "Filler",
    quantity: 241,
    catagory: "PP",
    unit: "KG",
    status: "Available",
  },
  {
    id: 8,
    name: "Brown M.B",
    quantity: 50,
    catagory: "PP",
    unit: "KG",
    status: "Available",
  },
  {
    id: 9,
    name: "White M/B",
    quantity: 0,
    catagory: "PP",
    unit: "KG",
    status: "Out of stock",
  },
  {
    id: 10,
    name: "Tinner",
    quantity: 205,
    catagory: "Chemical",
    unit: "Liter",
    status: "Available",
  },
  {
    id: 11,
    name: "Green ink",
    quantity: 10,
    catagory: "Chemical",
    unit: "barrel",
    status: "Available",
  },
  {
    id: 12,
    name: "Black ink",
    quantity: 2,
    catagory: "Chemical",
    unit: "barrel",
    status: "Low",
  },
  {
    id: 13,
    name: "Red ink",
    quantity: 7,
    catagory: "Chemical",
    unit: "barrel",
    status: "Available",
  },
  {
    id: 14,
    name: "Blue dark ink",
    quantity: 10,
    catagory: "Chemical",
    unit: "barrel",
    status: "Available",
  },
  {
    id: 15,
    name: "Blue light ink",
    quantity: 9,
    catagory: "Chemical",
    unit: "barrel",
    status: "Available",
  },
  {
    id: 16,
    name: "yellow",
    quantity: 0,
    catagory: "Chemical",
    unit: "barrel",
    status: "Out of stock",
  },
  {
    id: 17,
    name: "oil",
    quantity: 416,
    catagory: "Chemical",
    unit: "Litter",
    status: "Available",
  },
];

const rowMaterials = [
  "PP",
  "daplast green",
  "daplast BLACK",
  "sataindra red",
  "sataindra blue",
  "daplast orange",
  "Filler",
  "Brown M.B",
  "White M/B",
  "Tinner",
  "Green ink",
  "Black ink",
  "Red ink",
  "Blue dark ink",
  "Blue light ink",
  "yellow",
  "oil",
];

const types = ["PP", "Chemical"];

const statusList = ["Available", "Low", "Out of Stock"];

function RowMaterials() {
  const [rowMaterial, setRowMaterial] = useState("");
  const [type, setType] = useState("");
  const [stat, setStat] = useState("");

  const columns = [
    {
      field: "name",
      headerName: "Row Material",
      minWidth: 180,
      flex: 1,
      renderCell: (cellValues) => (
        <Link
          href={`/rowmaterials/${cellValues.value}`}
          color="primary"
          underline="hover"
        >
          {cellValues.value}
        </Link>
      ),
    },
    {
      field: "catagory",
      headerName: "Catagory",
      minWidth: 110,
      flex: 1,
    },
    {
      field: "quantity",
      headerName: "Quantity",
      minWidth: 80,
    },
    {
      field: "unit",
      headerName: "Measurment Unit",
      minWidth: 100,
      flex: 1,
    },
    {
      field: "status",
      headerName: "Status",
      minWidth: 110,
      flex: 1,
      cellClassName: (params) => {
        if (params.value == null) {
          return "";
        }

        return clsx("super-app", {
          available: params.value === "Available",
          low: params.value === "Low",
          outofstock: params.value === "Out of stock",
        });
      },
    },
  ];

  const tableConfig = {
    disableColumnFilter: true,
    disableDensitySelector: true,
    autoHeight: true,
  };

  return (
    <div className="main-container">
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          flexWrap: "wrap",
        }}
      >
        <Select
          name="rowmaterial"
          label="Row Material"
          options={rowMaterials}
          state={[rowMaterial, setRowMaterial]}
        />
        <Select
          name="catagory"
          label="Catagory"
          options={types}
          state={[type, setType]}
        />
        <Select
          name="status"
          label="Status"
          options={statusList}
          state={[stat, setStat]}
        />
      </Box>
      <Typography variant="h5" mb={2} mt={4} color="#344050">
        Row Materials
      </Typography>
      <Box
        sx={{
          "& .super-app.available": {
            "& .MuiDataGrid-cellContent": {
              backgroundColor: "#00783e",
              color: "#DFF2BF",
              fontWeight: 500,
              borderRadius: "3px",
              width: "96px",
              textAlign: "center",
              fontSize: "12px"
            }
          },
          "& .super-app.low": {
            "& .MuiDataGrid-cellContent": {
              backgroundColor: "#f7d154",
              color: "#7e6514",
              fontWeight: 500,
              borderRadius: "3px",
              width: "96px",
              textAlign: "center",
              fontSize: "12px"
            }
          },
          "& .super-app.outofstock": {
            "& .MuiDataGrid-cellContent": {
              backgroundColor: "#FFBABA",
              color: "#D8000C",
              fontWeight: 500,
              borderRadius: "3px",
              width: "96px",
              textAlign: "center",
              fontSize: "12px"
            }
          },
        }}
      >
        <BasicTable rows={rows} columns={columns} config={tableConfig} />
      </Box>
    </div>
  );
}

export default RowMaterials;
