import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from "react";

import Layout from "./components/Layout/Layout";

import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Users from "./pages/users/Users";
import User from "./pages/user/User";
import NewUser from "./pages/new-user/NewUser";
import Products from "./pages/products/Products";
import Product from "./pages/product/Product";
import NewProduct from "./pages/new-product/NewProduct";
import Orders from "./pages/orders/Orders";
import Order from "./pages/order/Order";
import NewOrder from "./pages/new-order/NewOrder";
import RowMaterials from "./pages/row-materials/RowMaterials";
import RawMaterial from "./pages/row-material/RowMaterial";
import NewRawMaterial from "./pages/new-rowmaterial/NewRowMaterial";
import Spares from "./pages/spares/Spares";
import Spare from "./pages/spare/Spare";
import NewSpare from "./pages/new-spare/NewSpare";
import Remarks from "./pages/remarks/Remarks";
import Remark from "./pages/remark/Remark";
import NewRemark from "./pages/new-remark/NewRemark";
import RecycleProducts from "./pages/recycle-products/RecycleProducts";
import RecycleProduct from "./pages/recycle-product/RecycleProduct";
import NewRecycleProduct from "./pages/new-recylce-product/NewRecycleProduct";
import MonthlyProduction from "./pages/production/Production";
import DailyProduction from "./pages/daily-production/DailyProduction";
import NewProduction from "./pages/new-production/NewProduction";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    secondary: {
      main: "#d27519",
      light: "#ea9b4c",
      dark: "#996513",
    },
    text: {
      primary: "#4d5969",
      secondary: "#5e6e82",
    },
    background: {
      default: "#fff",
    },
  },
  shape: {
    borderRaduis: 6,
  },
  shadows: {
    0: "none",
    1: "rgba(65, 69, 88, 0.1) 0px 1px 2px 0px, rgba(0, 0, 0, 0.07) 0px 1px 2px 0px",
    2: "rgba(65, 69, 88, 0.1) 0px 3px 6px 0px, rgba(0, 0, 0, 0.07) 0px 1.5px 3px 0px",
    3: "rgba(65, 69, 88, 0.1) 0px 5px 10px 0px, rgba(0, 0, 0, 0.07) 0px 2px 4px 0px",
    4: "rgba(65, 69, 88, 0.1) 0px 7px 14px 0px, rgba(0, 0, 0, 0.07) 0px 3px 6px 0px",
    5: "rgba(65, 69, 88, 0.1) 0px 1px 2px 0px, rgba(0, 0, 0, 0.07) 0px 1px 2px 0px",
    6: "rgba(65, 69, 88, 0.1) 0px 3px 6px 0px, rgba(0, 0, 0, 0.07) 0px 1.5px 3px 0px",
    7: "rgba(65, 69, 88, 0.1) 0px 5px 10px 0px, rgba(0, 0, 0, 0.07) 0px 2px 4px 0px",
    8: "rgba(65, 69, 88, 0.1) 0px 7px 14px 0px, rgba(0, 0, 0, 0.07) 0px 3px 6px 0px",
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
    h6: {
      fontSize: "1rem",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="login" element={<Login />} />
              <Route path="users">
                <Route index element={<Users />} />
                <Route path=":id" element={<User />} />
                <Route path="new" element={<NewUser />} />
              </Route>
              <Route path="products">
                <Route index element={<Products />} />
                <Route path=":id" element={<Product />} />
                <Route path="new" element={<NewProduct />} />
              </Route>
              <Route path="rowmaterails">
                <Route index element={<RowMaterials />} />
                <Route path=":id" element={<RawMaterial />} />
                <Route path="new" element={<NewRawMaterial />} />
              </Route>
              <Route path="spares">
                <Route index element={<Spares />} />
                <Route path=":id" element={<Spare />} />
                <Route path="new" element={<NewSpare />} />
              </Route>
              <Route path="production">
                <Route index element={<MonthlyProduction />} />
                <Route path=":id" element={<DailyProduction />} />
                <Route path="new" element={<NewProduction />} />
              </Route>
              <Route path="remarks">
                <Route index element={<Remarks />} />
                <Route path=":id" element={<Remark />} />
                <Route path="new" element={<NewRemark />} />
              </Route>
              <Route path="recycle">
                <Route index element={<RecycleProducts />} />
                <Route path=":id" element={<RecycleProduct />} />
                <Route path="new" element={<NewRecycleProduct />} />
              </Route>
              <Route path="orders">
                <Route index element={<Orders />} />
                <Route index element={<Orders />} />
                <Route path=":id" element={<Order />} />
                <Route path="new" element={<NewOrder />} />
              </Route>
            </Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
