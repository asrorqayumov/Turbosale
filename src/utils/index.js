import { Typography } from "@mui/material";
import Box from "@mui/material/Box";

export function TabPanel(props) {
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
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export const user = JSON.parse(localStorage.getItem("user"));
export const defImg = "./user-img.png";
export const token = localStorage.getItem("token");
