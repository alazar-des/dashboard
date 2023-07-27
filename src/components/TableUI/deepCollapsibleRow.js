import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Collapse from "@mui/material/Collapse";
import Grid from "@mui/material/Unstable_Grid2";
import CollapsableRow from "../../components/TableUI/CollapsibleRow";

export default function Row(props) {
  const { row, headCells } = props;
  const [open, setOpen] = React.useState(false);

  const renderRemark = () => {
    const remarkHead = [
      { id: "shift", label: "" },
      { id: "downTime", label: "Down Time" },
    ];
    const remark = [
      {
        shift: "Shift A",
        downTime: row.remark[0].downTime,
        details: row.remark[0].map((rk) => {
          return {
            ...rk,
            inputDetail: Object.keys(rk.inputDetail)
              .map((key) => `${key}: ${rk.inputDetail[key]}`)
              .join("\n"),
          };
        }),
      },
      {
        shift: "Shift B",
        downTime: row.remark[1].downTime,
        details: row.remark[1].map((rk) => {
          return {
            ...rk,
            inputDetail: Object.keys(rk.inputDetail)
              .map((key) => `${key}: ${rk.inputDetail[key]}`)
              .join("\t"),
          };
        }),
      },
    ];

    return (
      <Table size="small" sx={{ minWidth: "100%" }}>
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell
              sx={{ fontSize: "12px", color: "#425a70", fontWeight: 500 }}
            >
              Total Down Time
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {remark.map((r) => {
            return <CollapsableRow row={r} headCells={remarkHead} />;
          })}
        </TableBody>
      </Table>
    );
  };

  const detailKeys =
    row.rowMaterialConsumptionDetail.length !== 0
      ? Object.keys(row.rowMaterialConsumptionDetail[0])
      : [];
  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            fontSize="inherit"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        {headCells.map((hd) => (
          <TableCell
            align={hd.numeric ? "right" : "left"}
            style={{ fontSize: "12px", color: "#425a70" }}
          >
            {row[hd.id]}
          </TableCell>
        ))}
      </TableRow>
      <TableRow>
        <TableCell
          style={{ paddingBottom: 0, paddingTop: 0 }}
          colSpan={headCells.length + 1}
        >
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: "16px 0 16px 8px", flexGrow: 1 }}>
              <Grid container spacing={2}>
                <Grid item md={12} lg={6}>
                  <Typography variant="h6" gutterBottom component="div">
                    Row Material Usage
                  </Typography>
                  <Table
                    size="small"
                    aria-label="purchases"
                    sx={{ backgroundColor: "#f5f8fb" }}
                    flex
                  >
                    <TableHead>
                      <TableRow>
                        <TableCell />
                        <TableCell
                          colSpan={2}
                          align="center"
                          sx={{ fontSize: "12px", color: "#425a70" }}
                        >
                          Quantity (Kg)
                        </TableCell>
                        <TableCell
                          colSpan={2}
                          align="center"
                          sx={{ fontSize: "12px", color: "#425a70" }}
                        >
                          Production Type
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        {detailKeys.map((key) => (
                          <TableCell
                            sx={{ fontSize: "12px", color: "#425a70" }}
                          >
                            {key}
                          </TableCell>
                        ))}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {row.rowMaterialConsumptionDetail.map(
                        (detailRow, rowIndex) => (
                          <TableRow key={detailRow.id}>
                            {detailKeys.map((key, index) => {
                              const fw = index ? 400 : 500;
                              const productCell =
                                (index === 3 || index === 4) && rowIndex !== 0;
                              const rowSpan =
                                (index === 3 || index === 4) && rowIndex === 0
                                  ? row.rowMaterialConsumptionDetail.length
                                  : 1;
                              return !productCell ? (
                                <TableCell
                                  rowSpan={rowSpan}
                                  style={{
                                    fontSize: "12px",
                                    color: "#425a70",
                                    fontWeight: fw,
                                  }}
                                >
                                  {detailRow[key]}
                                </TableCell>
                              ) : null;
                            })}
                          </TableRow>
                        )
                      )}
                    </TableBody>
                  </Table>
                </Grid>
                <Grid item md={12} lg={6}>
                  <Typography variant="h6" gutterBottom component="div">
                    Remark
                  </Typography>
                  {renderRemark()}
                </Grid>
              </Grid>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      })
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};
