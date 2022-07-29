import React from "react";
import {
  Header,
  ProfileBox,
  ProfileContent,
  ProfileHeader,
  ProfileWrapper,
  Badge,
} from "./style";
import {
  Avatar,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { InputFile, LabelFile } from "../../components/ModalCard/style";
import PhotoCameraOutlinedIcon from "@mui/icons-material/PhotoCameraOutlined";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { TabPanel } from "../../utils";

const Profile = () => {
  const [value, setValue] = React.useState(0);
  const [lang, setLang] = React.useState("");
  const handleChange = (event) => {
    setLang(event.target.value);
  };
  const handleChangeTab = (event,newValue) => {
    setValue(newValue);
  };
  return (
    <div className="section">
      <ProfileBox>
        <Header />
        <ProfileWrapper>
          <ProfileHeader className="shadow">
            <div>
              <Badge>
                <InputFile
                  type="file"
                  id="user_img"
                  name="img"
                  accept="image/*"
                />
                <LabelFile className="upload_btn" htmlFor="user_img">
                  <PhotoCameraOutlinedIcon />
                </LabelFile>
              </Badge>
              <Avatar
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
                sx={{ width: 100, height: 100 }}
              />
            </div>
            <div>
              <Typography variant="h6" fontWeight={"bold"}>
                {"username"}
              </Typography>
              <Typography variant="body1" gutterBottom>
                role
              </Typography>
            </div>
          </ProfileHeader>
          <ProfileContent className="shadow">
            <Box sx={{ width: "100%" }}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={value}
                  onChange={handleChangeTab}
                  aria-label="basic tabs example"
                >
                  <Tab label="Account" />
                  <Tab label="Security" />
                </Tabs>
              </Box>
              <TabPanel value={value} index={0}>
                <form
                  noValidate
                  autoComplete="off"
                  //  onSubmit={handleSubmit}
                >
                  <Grid spacing={2} container>
                    <Grid item sm="12" md="6">
                      <TextField
                        // onChange={(e) => setEmail(e.target.value)}
                        className="field"
                        label="Full name"
                        variant="outlined"
                        color="primary"
                        type="text"
                        name="fullname"
                        size="small"
                        fullWidth
                      />
                    </Grid>
                    <Grid item sm="12" md="6">
                      <TextField
                        className="field"
                        label="Phone"
                        variant="outlined"
                        color="primary"
                        type="number"
                        name="phone"
                        size="small"
                        fullWidth
                      />
                    </Grid>
                    <Grid item sm="12" md="6" marginTop={2}>
                      <TextField
                        className="field"
                        label="Address"
                        variant="outlined"
                        color="primary"
                        type="text"
                        name="address"
                        size="small"
                        fullWidth
                      />
                    </Grid>
                    <Grid item sm="12" md="6" marginTop={2}>
                      <TextField
                        className="field"
                        label="City"
                        variant="outlined"
                        color="primary"
                        type="text"
                        name="city"
                        size="small"
                        fullWidth
                      />
                    </Grid>
                    <Grid item sm="12" md="6" marginTop={2}>
                      <TextField
                        className="field"
                        label="Zip code"
                        variant="outlined"
                        color="primary"
                        type="text"
                        name="zipcode"
                        size="small"
                        fullWidth
                      />
                    </Grid>
                    <Grid item sm="12" md="6" marginTop={2}>
                      <FormControl fullWidth>
                        <InputLabel id="lang">Language</InputLabel>
                        <Select
                          labelId="lang"
                          id="lang-select"
                          value={lang}
                          label="Language"
                          onChange={handleChange}
                          size="small"
                          name="lang"
                        >
                          <MenuItem value={"uz"}>UZ</MenuItem>
                          <MenuItem value={"eng"}>ENG</MenuItem>
                          <MenuItem value={"ru"}>RU</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item sm="12" md="6" marginTop={2}>
                      <FormControl fullWidth>
                        <InputLabel id="curr">Currency</InputLabel>
                        <Select
                          labelId="curr"
                          id="curr-select"
                          value={lang}
                          label="Currency"
                          onChange={handleChange}
                          size="small"
                          name="currency"
                        >
                          <MenuItem value={"uzs"}>UZS</MenuItem>
                          <MenuItem value={"usd"}>USD $</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                  </Grid>
                  <button
                    className="btn btn-orange"
                    style={{ marginTop: "32px" }}
                  >
                    Save
                  </button>
                </form>
              </TabPanel>
              <TabPanel value={value} index={1}>
                <form
                  noValidate
                  autoComplete="off"
                  //  onSubmit={handleSubmit}
                >
                  <Grid spacing={2} container>
                    <Grid item sm="12" md="6">
                      <TextField
                        // onChange={(e) => setEmail(e.target.value)}
                        className="field"
                        label="Email"
                        variant="outlined"
                        color="primary"
                        type="email"
                        name="email"
                        size="small"
                        fullWidth
                      />
                    </Grid>
                    <Grid item sm="12" md="6">
                      <TextField
                        className="field"
                        label="Password"
                        variant="outlined"
                        color="primary"
                        type="password"
                        name="password"
                        size="small"
                        fullWidth
                      />
                    </Grid>
                  </Grid>
                  <button
                    className="btn btn-orange"
                    style={{ marginTop: "32px" }}
                  >
                    Save
                  </button>
                </form>
              </TabPanel>
            </Box>
          </ProfileContent>
        </ProfileWrapper>
      </ProfileBox>
    </div>
  );
};

export default Profile;
