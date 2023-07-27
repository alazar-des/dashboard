import React from "react";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import Link from "@mui/material/Link";

function ActionLink({ text, path }) {
  return (
    <Link
      href={path}
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
        backgroundImage: "linear-gradient(rgb(7, 136, 222), rgb(17, 106, 184))",
        boxShadow:
          "rgba(67, 90, 111, 0.3) 0px 0px 0px 1px inset, rgba(67, 90, 111, 0.06) 0px -1px 1px 0px inset",
        "&:hover": {
          backgroundImage:
            "linear-gradient(rgb(6, 121, 197), rgb(15, 93, 161))",
        },
      }}
    >
      <AddRoundedIcon sx={{ mr: 1 }} />
      {text}
    </Link>
  );
}

export default ActionLink;
