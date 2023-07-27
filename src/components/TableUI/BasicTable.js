import * as React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

export default function BasicTable({ columns, rows, config }) {
  return (
    <DataGrid
      sx={{
        "&.MuiDataGrid-root--densityCompact .MuiDataGrid-cell": { py: "8px" },
        "&.MuiDataGrid-root--densityStandard .MuiDataGrid-cell": { py: "15px" },
        "&.MuiDataGrid-root--densityComfortable .MuiDataGrid-cell": {
          py: "22px",
        },
        fontSize: "13px",
        textTransform: "capitalize",
        border: "none",
      }}
      rows={rows}
      columns={columns}
      {...config}
      slots={{ toolbar: GridToolbar }}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 15,
          },
        },
      }}
      pageSizeOptions={[15, 30, 50, 100]}
    />
  );
}
