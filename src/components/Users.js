import * as React from "react";
import Box from "@mui/material/Box";
import {
  DataGrid,
  GridActionsCellItem,
  GridToolbarQuickFilter,
} from "@mui/x-data-grid";
import Link from "@mui/material/Link";
import { Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import SecurityRoundedIcon from "@mui/icons-material/SecurityRounded";
import AdminPanelSettingsRoundedIcon from "@mui/icons-material/AdminPanelSettingsRounded";
import ManageAccountsRoundedIcon from "@mui/icons-material/ManageAccountsRounded";
import SupervisorAccountRoundedIcon from "@mui/icons-material/SupervisorAccountRounded";
import PermContactCalendarRoundedIcon from "@mui/icons-material/PermContactCalendarRounded";
import BuildCircleRoundedIcon from "@mui/icons-material/BuildCircleRounded";
import ConstructionRoundedIcon from "@mui/icons-material/ConstructionRounded";
import RotateRightRoundedIcon from "@mui/icons-material/RotateRightRounded";

const rows = [
  {
    id: 1,
    name: "Bisrat Tadesse",
    phone: "+251911226327",
    email: "bisrat.tadesse@arjoma.com",
    address: "Bole Wereda 09",
    role: "admin",
  },
  {
    id: 2,
    name: "Sisay Keba",
    phone: "+251913218307",
    email: "keba.sisay@gmail.com",
    address: "Bole Wereda 09",
    role: "manager",
  },
  {
    id: 3,
    name: "Shelley Harris",
    phone: "+251911226327",
    email: "bisrat.tadesse@arjoma.com",
    address: "Bole Wereda 09",
    role: "store",
  },
  {
    id: 4,
    name: "Isabelle Hafsa",
    phone: "+251911226327",
    email: "bisrat.tadesse@arjoma.com",
    address: "Bole Wereda 09",
    role: "spare store",
  },
  {
    id: 5,
    name: "Veronica Noah",
    phone: "+251911226327",
    email: "bisrat.tadesse@arjoma.com",
    address: "Bole Wereda 09",
    role: "recycle",
  },
  {
    id: 6,
    name: "Hana Ted",
    phone: "+251911226327",
    email: "bisrat.tadesse@arjoma.com",
    address: "Bole Wereda 09",
    role: "technician",
  },
];

function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}

const userAvator = (name) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "12px",
      }}
    >
      <Avatar {...stringAvatar(name)} />
      <Link
          href={`/users/${name}`}
          underline="hover"
          sx={{
            color: "#344050",
          }}
        >
          {name}
        </Link>
    </Box>
  );
};

const roleIcons = {
  admin: <AdminPanelSettingsRoundedIcon />,
  manager: <ManageAccountsRoundedIcon />,
  technician: <BuildCircleRoundedIcon />,
  store: <PermContactCalendarRoundedIcon />,
  "spare store": <ConstructionRoundedIcon />,
  recycle: <RotateRightRoundedIcon />,
};

function QuickSearchToolbar(theme) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <GridToolbarQuickFilter />
      <Link
        sx={{
          display: "inline-flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#5e6e82",
          fontSize: "13px",
          padding: "4px 12px",
          fontWeight: 500,
          cursor: "pointer",
          textDecoration: "none",
          border: "none",
          backgroundImage:
            "linear-gradient(rgb(255, 255, 255), rgb(244, 245, 247))",
          boxShadow:
            "rgba(67, 90, 111, 0.14) 0px 0px 0px 1px inset, rgba(67, 90, 111, 0.06) 0px -1px 1px 0px inset",
        }}
      >
        <AddRoundedIcon sx={{ mr: 1 }} />
        Add User
      </Link>
    </Box>
  );
}

export default function Users() {
  const columns = [
    {
      field: "name",
      headerName: "Name",
      width: 180,
      renderCell: (cellValues) => (
        userAvator(cellValues.value)
      ),
    },
    {
      field: "phone",
      headerName: "Phone",
      width: 130,
    },
    {
      field: "email",
      headerName: "Email",
      width: 170,
    },
    {
      field: "address",
      headerName: "Address",
      width: 200,
    },
    {
      field: "role",
      headerName: "Role",
      width: 120,
      renderCell: (cellValues) => (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "12px",
            color: "#344050",
          }}
        >
          {roleIcons[cellValues.value]}
          {cellValues.value}
        </Box>
      ),
    },
    {
      field: "actions",
      type: "actions",
      width: 30,
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
    <Box
      sx={{
        width: 1,
        border: "none",
        backgroundImage:
          "linear-gradient(rgb(255, 255, 255), rgb(244, 245, 247))",
        boxShadow:
          "rgba(67, 90, 111, 0.14) 0px 0px 0px 1px inset, rgba(67, 90, 111, 0.06) 0px -1px 1px 0px inset",
        padding: "20px 20px 30px 20px",
        marginTop: "16px",
        backgroundColor: "#fff",
      }}
    >
      <Typography variant="h6" mb={1} color="#344050">
        Users
      </Typography>
      <DataGrid
        autoHeight
        rows={rows}
        columns={columns}
        disableColumnFilter
        disableColumnSelector
        disableDensitySelector
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
    </Box>
  );
}
