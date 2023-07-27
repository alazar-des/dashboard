import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import {
  DataGrid,
  GridActionsCellItem,
  GridToolbarQuickFilter,
} from "@mui/x-data-grid";
import Link from "@mui/material/Link";
import { Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import Card from "../../components/Card";
import Select from "../../components/UI/Select";

const products = [
  "Brown 72*120 B/G 90gm",
  "Oromiya 72 x 120 90 G",
  "Oromiya 72*120 B/G 90gm",
  "Brown 72*120 90gm",
];

const statusList = ["Delivered", "Pending", "Overdue", "Canceled"];

const rows = [
  {
    id: 1,
    customer: "Miftah",
    product: "Brown 72*120 B/G 90gm",
    quantity: 27000,
    dueDate: "2/25/2023",
  },
  {
    id: 2,
    customer: "Fana(Hassen)",
    product: "Oromiya 72 x 120 90 G",
    quantity: 32000,
    dueDate: "2/25/2023",
  },
  {
    id: 3,
    customer: "Bahiru",
    product: "Oromiya 72 x 120 90 G",
    quantity: 25000,
    dueDate: "3/05/2023",
  },
  {
    id: 4,
    customer: "Bahiru",
    product: "Brown 72*120 90gm",
    quantity: 19000,
    dueDate: "1/15/2023",
  },
  {
    id: 5,
    customer: "Siraj",
    product: "Brown 72*120 B/G 90gm",
    quantity: 36000,
    dueDate: "2/02/2023",
  },
  {
    id: 6,
    customer: "Siraj",
    product: "Brown 72*120 B/G 90gm",
    quantity: 28000,
    dueDate: "4/21/2023",
  },
  {
    id: 7,
    customer: "Miftah",
    product: "Brown 72*120 B/G 90gm",
    quantity: 17000,
    dueDate: "2/13/2023",
  },
  {
    id: 8,
    customer: "Miftah",
    product: "Oromiya 72 x 120 90gm B/G",
    quantity: 19000,
    dueDate: "4/09/2023",
  },
  {
    id: 9,
    customer: "Bahiru",
    product: "Brown 72*120 90gm",
    quantity: 50000,
    dueDate: "1/05/2023",
  },
  {
    id: 10,
    customer: "Miftah",
    product: "Brown 72*120 B/G 90gm",
    quantity: 28000,
    dueDate: "2/25/2023",
  },
  {
    id: 11,
    customer: "Fana(Hassen)",
    product: "Oromiya 72 x 120 90gm B/G",
    quantity: 75000,
    dueDate: "12/12/2022",
  },
];

function QuickSearchToolbar(theme) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "16px",
      }}
    >
      <GridToolbarQuickFilter />
      <Link
        sx={{
          display: "inline-flex",
          justifyContent: "center",
          alignItems: "center",
          //color: "#5e6e82",
          fontSize: "13px",
          padding: "4px 12px",
          fontWeight: 500,
          cursor: "pointer",
          textDecoration: "none",
          border: "none",
          borderRadius: "3px",
          color: "white",
          backgroundColor: "white",
          backgroundImage:
            "linear-gradient(rgb(7, 136, 222), rgb(17, 106, 184))",
          boxShadow:
            "rgba(67, 90, 111, 0.3) 0px 0px 0px 1px inset, rgba(67, 90, 111, 0.06) 0px -1px 1px 0px inset",
          "&:hover": {
            backgroundImage:
              "linear-gradient(rgb(6, 121, 197), rgb(15, 93, 161))",
          },
        }}
      >
        <AddRoundedIcon sx={{ mr: 1 }} />
        Add Order
      </Link>
    </Box>
  );
}

function Orders() {
  const [productType, setProductType] = useState("");
  const [stat, setStat] = useState("");

  const columns = [
    {
      field: "customer",
      headerName: "Customer",
      minWidth: 100,
      flex: 1,
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
      field: "product",
      headerName: "Product",
      minWidth: 130,
      flex: 1,
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
      field: "quantity",
      headerName: "Quantity",
      minWidth: 90,
      flex: 1,
    },
    {
      field: "dueDate",
      headerName: "Due Date",
      minWidth: 90,
      flex: 1,
    },
    {
      field: "actions",
      type: "actions",
      minWidth: 90,
      flex: 1,
      getActions: () => [
        <GridActionsCellItem
          icon={<EditIcon />}
          label="Edit"
          showInMenu
          sx={{ fontSize: "12px" }}
        />,
        <GridActionsCellItem
          icon={<DeleteIcon />}
          label="Delete"
          showInMenu
          sx={{ fontSize: "12px" }}
        />,
      ],
    },
  ];
  return (
    <React.Fragment>
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
          label="Product Type"
          options={products}
          state={[productType, setProductType]}
        />
        <Select
          name="status"
          label="Status"
          options={statusList}
          state={[stat, setStat]}
        />
      </Box>
      <Card>
        <Typography variant="h6" mb={1} color="#344050">
          Active Orders
        </Typography>
        <DataGrid
          rows={rows}
          columns={columns}
          disableColumnFilter
          disableColumnSelector
          disableDensitySelector
          autoHeight
          slots={{ toolbar: QuickSearchToolbar }}
          checkboxSelection
          disableRowSelectionOnClick
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
            border: "none",
            "&.MuiDataGrid-root .MuiDataGrid-columnHeader:focus, &.MuiDataGrid-root .MuiDataGrid-cell:focus":
              {
                outline: "none",
              },
            "& .MuiSvgIcon-root": { fontSize: 21 },
          }}
        />
      </Card>
    </React.Fragment>
  );
}

export default Orders;
