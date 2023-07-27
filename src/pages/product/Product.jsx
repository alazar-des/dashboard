import React from "react";
import { useState } from "react";
import { Typography, Grid, Box } from "@mui/material";
import BasicTable from "../../components/TableUI/BasicTable";
import Link from "@mui/material/Link";
import PieChart from "../../components/Charts/PieChart";
import SellIcon from "@mui/icons-material/Sell";
import DateRangePicker from "../../components/FormUI/DateRangePicker/index";
import Select from "../../components/UI/Select";

const producedData = [
  {
    id: "Total Production",
    label: "Total Production",
    value: 1283500,
    color: "#7CCDA7",
  },
  {
    id: "Saled",
    label: "Total Sale",
    value: 1254600,
    color: "#47B881",
  },
];

const stockData = [
  {
    id: "Current Order",
    label: "Current Order",
    value: 124600,
    color: "#9C8DDE",
  },
  {
    id: "Instock",
    label: "Instock",
    value: 65210,
    color: "#7266B1",
  },
];

const rows = [
  {
    id: "30520fa6-d93b-11ed",
    date: new Date("3/5/2019"),
    actionType: "Produced",
    quantity: 65230,
    user: "Hana Ted",
    role: "Production Manager",
    customer: "",
  },
  {
    id: "920a07e0-d93a-11ed",
    date: new Date("3/5/2021"),
    actionType: "Sale",
    quantity: 65230,
    user: "Shelley Harris",
    role: "Store",
    customer: "Miftah",
  },
  {
    id: "23885096-d93b-11ed",
    date: new Date("3/5/2019"),
    actionType: "Produced",
    quantity: 65230,
    user: "Hana Ted",
    role: "Production Manager",
    customer: "",
  },
  {
    id: "4f05f07e-d93c-11ed",
    date: new Date("4/8/2021"),
    actionType: "Sale",
    quantity: 34850,
    user: "Shelley Harris",
    role: "Store",
    customer: "Bahiru",
  },
  {
    id: "108e5cd8-d93b-11ed",
    date: new Date("3/5/2019"),
    actionType: "Produced",
    quantity: 65230,
    user: "Hana Ted",
    role: "Production Manager",
    customer: "",
  },
  {
    id: "108e5cd8-d93b-11ed",
    date: new Date("3/5/2019"),
    actionType: "Produced",
    quantity: 65230,
    user: "Hana Ted",
    role: "Production Manager",
    customer: "",
  },
  {
    id: "648f4102-d93c-11ed",
    date: new Date("4/8/2021"),
    actionType: "Sale",
    quantity: 34850,
    user: "Shelley Harris",
    role: "Store",
    customer: "Fana(Hassen)",
  },
  {
    id: "108e5cd8-d93b-11ed",
    date: new Date("3/5/2019"),
    actionType: "Produced",
    quantity: 65230,
    user: "Hana Ted",
    role: "Production Manager",
    customer: "",
  },
  {
    id: "920a07e0-d93a-11ed",
    date: new Date("4/8/2021"),
    actionType: "Sale",
    quantity: 34850,
    user: "Shelley Harris",
    role: "Store",
    customer: "Bahiru",
  },
  {
    id: "7b3215ec-d93c-11ed",
    date: new Date("4/8/2021"),
    actionType: "Sale",
    quantity: 98850,
    user: "Shelley Harris",
    role: "Store",
    customer: "Siraj",
  },
  {
    id: "108e5cd8-d93b-11ed",
    date: new Date("3/5/2019"),
    actionType: "Produced",
    quantity: 65230,
    user: "Hana Ted",
    role: "Production Manager",
    customer: "",
  },
  {
    id: "d3a336d4-d93c-11ed",
    date: new Date("3/5/2019"),
    actionType: "Produced",
    quantity: 65230,
    user: "Hana Ted",
    role: "Production Manager",
    customer: "",
  },
  {
    id: "ca6c2f58-d93c-11ed",
    date: new Date("3/5/2019"),
    actionType: "Produced",
    quantity: 65230,
    user: "Hana Ted",
    role: "Production Manager",
    customer: "",
  },
  {
    id: "c1e34f92-d93c-11ed",
    date: new Date("4/8/2021"),
    actionType: "Sale",
    quantity: 34850,
    user: "Shelley Harris",
    role: "Store",
    customer: "Fana(Hassen)",
  },
  {
    id: "bc79d634-d93c-11ed",
    date: new Date("3/5/2019"),
    actionType: "Produced",
    quantity: 65230,
    user: "Hana Ted",
    role: "Production Manager",
    customer: "",
  },
  {
    id: "b3d33b74-d93c-11ed",
    date: new Date("4/8/2021"),
    actionType: "Sale",
    quantity: 34850,
    user: "Shelley Harris",
    role: "Store",
    customer: "Bahiru",
  },
  {
    id: "ae5f2d74-d93c-11ed",
    date: new Date("4/8/2021"),
    actionType: "Sale",
    quantity: 98850,
    user: "Shelley Harris",
    role: "Store",
    customer: "Siraj",
  },
  {
    id: "a9d45bda-d93c-11ed",
    date: new Date("3/5/2019"),
    actionType: "Produced",
    quantity: 65230,
    user: "Hana Ted",
    role: "Production Manager",
    customer: "",
  },
  {
    id: "9fbee7b4-d93c-11ed",
    date: new Date("3/5/2019"),
    actionType: "Produced",
    quantity: 65230,
    user: "Hana Ted",
    role: "Production Manager",
    customer: "",
  },
  {
    id: "9a19c004-d93c-11ed",
    date: new Date("3/5/2019"),
    actionType: "Produced",
    quantity: 65230,
    user: "Hana Ted",
    role: "Production Manager",
    customer: "",
  },
];

const actionTypes = ["production", "sale"];

const users = [
  "Bisrat Tadesse",
  "Sisay Keba",
  "Shelley Harris",
  "Isabelle Hafsa",
  "Veronica Noah",
  "Hana Ted",
];

const roles = [
  "Admin",
  "Production Manager",
  "Store",
  "Spare store",
  "Recycle",
  "Technician",
];

const products = [
  "Brown 72*120 B/G 90gm",
  "Oromiya 72 x 120 90 G",
  "Oromiya 72*120 B/G 90gm",
  "Brown 72*120 90gm",
];

const customers = ["Miftah", "Fana(Hassen)", "Bahiru", "Siraj"];

function Product() {
  const [product, setProduct] = useState("");
  const [action, setAction] = useState("");
  const [user, setUser] = useState("");
  const [role, setRole] = useState("");
  const [customer, setCustomer] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const columns = [
    {
      field: "id",
      headerName: "ID",
      minWidth: 180,
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
      minWidth: 110,
      flex: 1,
    },
    {
      field: "actionType",
      headerName: "Action",
      width: 130,
      flex: 1,
    },
    {
      field: "quantity",
      headerName: "Quantity",
      minWidth: 80,
    },
    {
      field: "user",
      headerName: "User",
      minWidth: 110,
      flex: 1,
    },
    {
      field: "role",
      headerName: "Role",
      minWidth: 150,
      flex: 1,
    },
    {
      field: "customer",
      headerName: "Customer",
      minWidth: 130,
      flex: 1,
    },
  ];

  const CenteredMetric = ({ dataWithArc, centerX, centerY }) => {
    const [total, partial] = dataWithArc;
    let percent = Math.floor((partial.value / total.value) * 100);
    return (
      <text
        x={centerX}
        y={centerY}
        textAnchor="middle"
        dominantBaseline="central"
        style={{
          fontSize: "26px",
          fontWeight: 500,
        }}
      >
        {`${percent} %`}
      </text>
    );
  };

  const tableConfig = {
    disableColumnFilter: true,
    disableDensitySelector: true,
    autoHeight: true,
  };
  const chartConfig = {
    padAngle: 0,
    cornerRadius: 0,
    innerRadius: 0.65,
    borderWidth: 0,
    enableArcLabels: false,
    enableArcLinkLabels: false,
    layers: ["arcs", CenteredMetric],
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
          name="productType"
          label="Product"
          options={products}
          state={[product, setProduct]}
        />
        <Select
          name="actionType"
          label="Action"
          options={actionTypes}
          state={[action, setAction]}
        />
        <Select
          name="role"
          label="Role"
          options={roles}
          state={[role, setRole]}
        />
        <Select
          name="user"
          label="User"
          options={users}
          state={[user, setUser]}
        />
        <Select
          name="customer"
          label="Customer"
          options={customers}
          state={[customer, setCustomer]}
        />
      </Box>
      <Typography variant="h5" mb={2} mt={4} color="#344050">
        Product Name
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

      <Grid container sapcing={8} mb={8}>
        <Grid item justifySelf="center" sm={6} sx={{ height: 320 }}>
          <Box
            sx={{
              display: "flex",
              gap: "12px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <SellIcon sx={{ color: "#47B881" }} />
            <Typography sx={{ color: "#000", fontSize: "24px" }}>
              {producedData[0].value}
            </Typography>
            <Typography sx={{ color: "#425a70", fontSize: "13px" }}>
              Total produced
            </Typography>
          </Box>
          <Typography
            sx={{ color: "#425a70", fontSize: "13px", textAlign: "center" }}
          >{`${producedData[1].value} Total saled`}</Typography>
          <PieChart data={producedData} config={chartConfig} />
        </Grid>
        <Grid item sm={6} sx={{ height: 320 }}>
          <Box
            sx={{
              display: "flex",
              gap: "12px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <SellIcon sx={{ color: "#7266B1" }} />
            <Typography sx={{ color: "#000", fontSize: "24px" }}>
              {stockData[0].value}
            </Typography>
            <Typography sx={{ color: "#425a70", fontSize: "13px" }}>
              Active Orders
            </Typography>
          </Box>
          <Typography
            sx={{ color: "#425a70", fontSize: "13px", textAlign: "center" }}
          >{`${stockData[1].value} Instock`}</Typography>
          <PieChart data={stockData} config={chartConfig} />
        </Grid>
      </Grid>
      <BasicTable rows={rows} columns={columns} config={tableConfig} />
    </div>
  );
}

export default Product;
