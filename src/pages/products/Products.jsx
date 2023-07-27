import React from "react";
import { useState } from "react";
import { Typography, Grid, Container } from "@mui/material";
import BasicTable from "../../components/TableUI/BasicTable";
import Link from "@mui/material/Link";
import PieChart from "../../components/Charts/PieChart";
import SellIcon from "@mui/icons-material/Sell";
import DateRangePicker from "../../components/FormUI/DateRangePicker/index";
import Select from "../../components/FormUI/Select/Select";
import ActionLink from "../../components/UI/ActionLink";

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
    id: 1,
    productName: "Brown 72*120 B/G 90gm",
    quantityInStock: 21596,
    currentOrder: 65230,
    totalProduced: 985200,
    productionStartDate: new Date("3/5/2019"),
    lastProductionDate: new Date("1/5/2023"),
  },
  {
    id: 2,
    productName: "Brown 72*120 90gm",
    quantityInStock: 21596,
    currentOrder: 65230,
    totalProduced: 985200,
    productionStartDate: new Date("3/5/2019"),
    lastProductionDate: new Date("2/3/2023"),
  },
  {
    id: 3,
    productName: "Oromiya 72*120 B/G 90gm",
    quantityInStock: 21596,
    currentOrder: 65230,
    totalProduced: 985200,
    productionStartDate: new Date("3/5/2019"),
    lastProductionDate: new Date("3/8/2023"),
  },
  {
    id: 4,
    productName: "Oromiya 72 x 120 90 G",
    quantityInStock: 21596,
    currentOrder: 65230,
    totalProduced: 985200,
    productionStartDate: new Date("3/5/2019"),
    lastProductionDate: new Date("3/8/2023"),
  },
  {
    id: 5,
    productName: "Oromiya 72 x 150 90gm",
    quantityInStock: 41596,
    currentOrder: 55230,
    totalProduced: 56200,
    productionStartDate: new Date("3/5/2019"),
    lastProductionDate: new Date("3/8/2023"),
  },
  {
    id: 6,
    productName: "Oromiya 72 x 150",
    quantityInStock: 41596,
    currentOrder: 55230,
    totalProduced: 56200,
    productionStartDate: new Date("3/5/2019"),
    lastProductionDate: new Date("3/8/2023"),
  },
];

const products = [
  "Brown 72*120 B/G 90gm",
  "Oromiya 72 x 120 90 G",
  "Oromiya 72*120 B/G 90gm",
  "Brown 72*120 90gm",
];

function Products() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [product, setProduct] = useState("");
  
  const columns = [
    {
      field: "productName",
      headerName: "Product Name",
      width: 180,
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
      field: "quantityInStock",
      headerName: "Quantity In Stock",
      type: "number",
      width: 110,
    },
    {
      field: "currentOrder",
      headerName: "Current Order",
      type: "number",
      width: 130,
    },
    {
      field: "totalProduced",
      headerName: "Total Produced",
      type: "number",
      width: 130,
    },
    {
      field: "productionStartDate",
      headerName: "Production Start Date",
      type: "date",
      width: 130,
    },
    {
      field: "lastProductionDate",
      headerName: "Last Production Date",
      type: "date",
      width: 130,
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
      <Typography variant="h5" mb={2} color="#344050">
        Products
      </Typography>

      <Grid container mb={4}>
        <Grid item xs={12} sm={5}>
          <ActionLink path="/products/new" text="Add Product"/>
        </Grid>
        <Grid item xs={12} sm={7}>
          <Grid container spacing={1}>
            <Grid item xs={4}>
              <Select
                name="productType"
                label="Product Type"
                options={products}
                state={[product, setProduct]}
              />
            </Grid>
            <Grid item xs={8}>
              <DateRangePicker
                startDateState={[startDate, setStartDate]}
                endDateState={[endDate, setEndDate]}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid container sapcing={8} mb={8}>
        <Grid item justifySelf="center" sm={6} sx={{ height: 320 }}>
          <Container
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
          </Container>
          <Typography
            sx={{ color: "#425a70", fontSize: "13px", textAlign: "center" }}
          >{`${producedData[1].value} Total saled`}</Typography>
          <PieChart data={producedData} config={chartConfig} />
        </Grid>
        <Grid item sm={6} sx={{ height: 320 }}>
          <Container
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
          </Container>
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

export default Products;
