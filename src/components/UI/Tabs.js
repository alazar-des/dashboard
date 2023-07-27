import * as React from "react";
import { styled } from "@mui/material/styles";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import Box from "@mui/material/Box";

const StyledTabs = styled(Tabs)({
  margin: "32px 0",
  "& .MuiTabs-indicator": {
    display: "none",
  },
  "& button:hover": {
    backgroundColor: "rgba(67, 90, 111, 0.06)",
  },
  "& button:focus": {
    boxShadow: "rgba(16, 112, 202, 0.3) 0px 0px 0px 2px",
  },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    fontSize: "12px",
    textTransform: "uppercase",
    width: "140px",
    padding: "0px 8px",
    margin: theme.spacing(1),
    textAlign: "center",
    color: "rgb(66, 90, 112);",
    backgroundColor: "#fff",
    borderRadius: "3px 3px 0px 0px",
    minHeight: "28px",
    fontWeight: 500,
    "&.Mui-selected": {
      backgroundColor: "rgba(16, 112, 202, 0.09)",
      color: "rgb(16, 112, 202)",
    },
    "&.Mui-focusVisible": {
      backgroundColor: "#d1eaff",
    },
  })
);

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function CustomizedTabs({ tabs }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box>
        <StyledTabs
          value={value}
          onChange={handleChange}
          aria-label="production"
        >
          {tabs.map((tab, index) => (
            <StyledTab label={tab.label} {...a11yProps(index)}/>
          ))}
        </StyledTabs>
        {tabs.map((tab, index) => (
          <TabPanel value={value} index={index}>
            {tab.body}
          </TabPanel>
        ))}
        <Box sx={{ p: 3 }} />
      </Box>
    </Box>
  );
}
