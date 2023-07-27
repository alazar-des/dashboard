import React from "react";
import { useState } from "react";
import { Typography, Box } from "@mui/material";
import BasicTable from "../../components/TableUI/BasicTable";
import Link from "@mui/material/Link";
import DateRangePicker from "../../components/FormUI/DateRangePicker/index";
import Select from "../../components/UI/Select";
import clsx from "clsx";

const rows = [
  {
    id: "30520fa6-d93b-11ed",
    date: new Date("3/5/2019"),
    actionType: "Consumed",
    quantity: 65230,
    user: "Hana Ted",
    role: "Production Manager",
    supplier: "",
  },
  {
    id: "920a07e0-d93a-11ed",
    date: new Date("3/5/2021"),
    actionType: "Consumed",
    quantity: 65230,
    user: "Shelley Harris",
    role: "Store",
    supplier: "",
    invoiceNumber: ""
  },
  {
    id: "23885096-d93b-11ed",
    date: new Date("3/5/2019"),
    actionType: "Recycled",
    quantity: 65230,
    user: "Hana Ted",
    role: "Production Manager",
    supplier: "",
  },
  {
    id: "4f05f07e-d93c-11ed",
    date: new Date("4/8/2021"),
    actionType: "Supplied",
    quantity: 34850,
    user: "Shelley Harris",
    role: "Store",
    supplier: "Bahiru",
    invoiceNumber: 482552
  },
  {
    id: "108e5cd8-d93b-11ed",
    date: new Date("3/5/2019"),
    actionType: "Consumed",
    quantity: 65230,
    user: "Hana Ted",
    role: "Production Manager",
    supplier: "",
  },
  {
    id: "108e5cd8-d93b-11ed",
    date: new Date("3/5/2019"),
    actionType: "Recycled",
    quantity: 65230,
    user: "Hana Ted",
    role: "Production Manager",
    supplier: "",
  },
  {
    id: "648f4102-d93c-11ed",
    date: new Date("4/8/2021"),
    actionType: "Recycled",
    quantity: 34850,
    user: "Shelley Harris",
    role: "Store",
    supplier: "",
    invoiceNumber: ""
  },
  {
    id: "108e5cd8-d93b-11ed",
    date: new Date("3/5/2019"),
    actionType: "Consumed",
    quantity: 65230,
    user: "Hana Ted",
    role: "Production Manager",
    supplier: "",
  },
  {
    id: "920a07e0-d93a-11ed",
    date: new Date("4/8/2021"),
    actionType: "Consumed",
    quantity: 34850,
    user: "Shelley Harris",
    role: "Store",
    supplier: "",
    invoiceNumber: ""
  },
  {
    id: "7b3215ec-d93c-11ed",
    date: new Date("4/8/2021"),
    actionType: "Consumed",
    quantity: 98850,
    user: "Shelley Harris",
    role: "Store",
    supplier: "",
    invoiceNumber: ""
  },
  {
    id: "108e5cd8-d93b-11ed",
    date: new Date("3/5/2019"),
    actionType: "Consumed",
    quantity: 65230,
    user: "Hana Ted",
    role: "Production Manager",
    supplier: "",
  },
  {
    id: "d3a336d4-d93c-11ed",
    date: new Date("3/5/2019"),
    actionType: "Recycled",
    quantity: 65230,
    user: "Hana Ted",
    role: "Production Manager",
    supplier: "",
  },
  {
    id: "ca6c2f58-d93c-11ed",
    date: new Date("3/5/2019"),
    actionType: "Consumed",
    quantity: 65230,
    user: "Hana Ted",
    role: "Production Manager",
    supplier: "",
  },
  {
    id: "c1e34f92-d93c-11ed",
    date: new Date("4/8/2021"),
    actionType: "Recycled",
    quantity: 34850,
    user: "Shelley Harris",
    role: "Store",
    supplier: "",
    invoiceNumber: ""
  },
  {
    id: "bc79d634-d93c-11ed",
    date: new Date("3/5/2019"),
    actionType: "Recycled",
    quantity: 65230,
    user: "Hana Ted",
    role: "Production Manager",
    supplier: "",
  },
  {
    id: "b3d33b74-d93c-11ed",
    date: new Date("4/8/2021"),
    actionType: "Supplied",
    quantity: 34850,
    user: "Shelley Harris",
    role: "Store",
    supplier: "Bahiru",
    invoiceNumber: 951357
  },
  {
    id: "ae5f2d74-d93c-11ed",
    date: new Date("4/8/2021"),
    actionType: "Supplied",
    quantity: 98850,
    user: "Shelley Harris",
    role: "Store",
    supplier: "Siraj",
    invoiceNumber: 852456
  },
  {
    id: "a9d45bda-d93c-11ed",
    date: new Date("3/5/2019"),
    actionType: "Consumed",
    quantity: 65230,
    user: "Hana Ted",
    role: "Production Manager",
    supplier: "",
  },
  {
    id: "9fbee7b4-d93c-11ed",
    date: new Date("3/5/2019"),
    actionType: "Recycled",
    quantity: 65230,
    user: "Hana Ted",
    role: "Production Manager",
    supplier: "",
  },
  {
    id: "9a19c004-d93c-11ed",
    date: new Date("3/5/2019"),
    actionType: "Recycled",
    quantity: 65230,
    user: "Hana Ted",
    role: "Production Manager",
    supplier: "",
  },
];

const actionTypes = ["Supplied", "Recycle", "Consumed"];

const users = [
  "Bisrat Tadesse",
  "Sisay Keba",
  "Shelley Harris",
  "Isabelle Hafsa",
  "Veronica Noah",
  "Hana Ted",
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

const suppliers = ["Miftah", "Fana(Hassen)", "Bahiru", "Siraj"];

function RowMaterial() {
  const [rowMaterial, setRowMaterial] = useState("");
  const [action, setAction] = useState("");
  const [user, setUser] = useState("");
  const [supplier, setSupplier] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const columns = [
    {
      field: "id",
      headerName: "ID",
      minWidth: 160,
      flex: 1,
      renderCell: (cellValues) => (
        <Link
          href={`/products/${cellValues.value}`}
          color="primary"
          underline="hover"
        >
          {cellValues.value}
        </Link>
      ),
    },
    {
      field: "date",
      headerName: "Date",
      type: "date",
      minWidth: 100,
      flex: 1,
    },
    {
      field: "actionType",
      headerName: "Action",
      minWidth: 110,
      flex: 1,
      cellClassName: (params) => {
        if (params.value == null) {
          return "";
        }

        return clsx("super-app", {
          recycled: params.value === "Recycled",
          supplied: params.value === "Supplied",
          consumed: params.value === "Consumed",
        });
      },
    },
    {
      field: "quantity",
      headerName: "Quantity",
      minWidth: 70,
    },
    {
      field: "invoiceNumber",
      headerName: "Invoice Number",
      minWidth: 120,
      flex: 1,
    },
    {
      field: "user",
      headerName: "User",
      minWidth: 100,
      flex: 1,
    },
    {
      field: "role",
      headerName: "Role",
      minWidth: 130,
      flex: 1,
    },
    {
      field: "supplier",
      headerName: "Supplier",
      minWidth: 120,
      flex: 1,
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
          name="rowMaterial"
          label="Row Material"
          options={rowMaterials}
          state={[rowMaterial, setRowMaterial]}
        />
        <Select
          name="actionType"
          label="Action"
          options={actionTypes}
          state={[action, setAction]}
        />
        <Select
          name="user"
          label="User"
          options={users}
          state={[user, setUser]}
        />
        <Select
          name="supplier"
          label="Supplier"
          options={suppliers}
          state={[supplier, setSupplier]}
        />
      </Box>
      <Typography variant="h5" mb={2} mt={4} color="#344050">
        Row Material Name
      </Typography>

      <Box
        mb={4}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <DateRangePicker
          startDateState={[startDate, setStartDate]}
          endDateState={[endDate, setEndDate]}
        />
      </Box>

      <Box
        sx={{
          "& .super-app.recycled": {
            "& .MuiDataGrid-cellContent": {
              backgroundColor: "#BDE5F8",
              color: "#00529B",
              fontWeight: 500,
              borderRadius: "3px",
              width: "96px",
              textAlign: "center",
              fontSize: "12px"
            }
          },
          "& .super-app.consumed": {
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
          "& .super-app.supplied": {
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
        }}
      >
        <BasicTable rows={rows} columns={columns} config={tableConfig} />
      </Box>
    </div>
  );
}

export default RowMaterial;
