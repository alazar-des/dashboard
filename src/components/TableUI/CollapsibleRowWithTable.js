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

export default function Row(props) {
  const { row, headCells } = props;
  const [open, setOpen] = React.useState(false);

  const remarkDetailKeys =
    row.remarkDetail.shiftA[0].length !== 0
      ? Object.keys(row.remarkDetail.shiftA[0])
      : [];

  const renderRemarkShift = (shift, remarks) => {
    return (
      <React.Fragment>
        <Typography variant="h6" gutterBottom component="div">
          {shift}
        </Typography>
        <Table
          size="small"
          aria-label="remarks"
          sx={{ backgroundColor: "#f5f8fb" }}
        >
          <TableHead>
            <TableRow>
              {remarkDetailKeys.map((key) => (
                <TableCell sx={{ fontSize: "12px", color: "#425a70" }}>
                  {key}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {remarks.map((rmk) => (
              <TableRow key={rmk.id}>
                {console.log(rmk.inputDetail)}
                {remarkDetailKeys.map((key) => {
                  return (
                    <TableCell
                      style={{
                        fontSize: "12px",
                        color: "#425a70",
                      }}
                    >
                      {key !== "inputDetail" ? (
                        rmk[key]
                      ) : (
                        <Table size="small" sx={{ borderBottom: "none"}}>
                          {Object.keys(rmk.inputDetail).map((k) => (
                            <TableRow key={rmk.id}>
                              <TableCell
                                style={{
                                  fontSize: "12px",
                                  color: "#425a70",
                                }}
                              >{k}</TableCell>
                              <TableCell
                                style={{
                                  fontSize: "12px",
                                  color: "#425a70",
                                }}
                              >{rmk.inputDetail[k]}</TableCell>
                            </TableRow>
                          ))}
                        </Table>
                      )}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </React.Fragment>
    );
  };

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
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Grid container spacing={4}>
                <Grid item xl={6} lg={12}>
                  {renderRemarkShift("Shift A", row.remarkDetail.shiftA)}
                </Grid>
                <Grid item xl={6} lg={12}>
                  {renderRemarkShift("Shift B", row.remarkDetail.shiftB)}
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
