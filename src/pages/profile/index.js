import React, { useRef, useState } from "react";
import {
  Header,
  ProfileBox,
  ProfileContent,
  ProfileHeader,
  ProfileWrapper,
  Badge,
  ImgWrapper,
  ImgCircle,
} from "./style";
import {
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
import { TabPanel, defImg } from "../../utils";
import { ChangeAuthRequest, UpdateUserRequest } from "../../api/request";
import { Toast } from "../../utils/toastify";

const Profile = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [value, setValue] = useState(0);
  const [lang, setLang] = useState(user.lang);
  const [currency, setCurrency] = useState(user?.currency);
  const imgTag = useRef("");
  const [img, setImg] = useState("");
  const handleLangChange = (event) => {
    setLang(event.target.value);
  };
  const handleCurrChange = (event) => {
    setCurrency(event.target.value);
  };
  const handleChangeTab = (event, newValue) => {
    setValue(newValue);
  };
  const [userUpdate, setUserUpdate] = useState({
    name: "",
    phone: `${user.phone}`,
    address: ``,
    city: "",
    zip: `${user.zip}`,
  });
  const [changeAuth, setchangeAuth] = useState({
    email: `${user.email}`,
    password: "",
  });
  const inputUpdateHandler = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setUserUpdate({ ...userUpdate, [name]: value });
  };
  const inputChangeHandler = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setchangeAuth({ ...changeAuth, [name]: value });
  };
  const imgHandler = (e) => {
    e.preventDefault();
    let file = e.target.files[0];
    let reader = new FileReader();
    reader.onloadend = async function () {
      imgTag.current.src = reader.result;
    };
    if (file) {
      reader.readAsDataURL(file);
    } else {
      imgTag.src = "";
    }
    setImg(file);
  };

  const changeAuthFormHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await ChangeAuthRequest(user._id, changeAuth);
      Toast.fire({
        icon: "success",
        title: "Successfully updated",
      });
    } catch (error) {
      console.log(error);
    }
  };
  const UpdateUserFormHandler = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      for (const key in userUpdate) {
        formData.append(key, userUpdate[key]);
      }
      formData.append("oldImg", user.img);
      formData.append("img", img);
      formData.append("lang", lang);
      formData.append("currency", currency);
      const response = await UpdateUserRequest(user._id, formData);
      localStorage.setItem("user", JSON.stringify(response));
      Toast.fire({
        icon: "success",
        title: "Successfully updated",
      });
    } catch (error) {
      Toast.fire({
        icon: "error",
        title: `${error}`,
      });
    }
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
                  onChange={imgHandler}
                />
                <LabelFile className="upload_btn" htmlFor="user_img">
                  <PhotoCameraOutlinedIcon />
                </LabelFile>
              </Badge>
              <ImgWrapper>
                <ImgCircle src={user?.img || defImg} ref={imgTag} />
              </ImgWrapper>
            </div>
            <div>
              <Typography variant="body1">
                {(user.name || user.email).toLowerCase()}
              </Typography>
              <Typography variant="body2" gutterBottom>
                {user.type.toLowerCase()}
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
                  onSubmit={UpdateUserFormHandler}
                >
                  <Grid spacing={2} container>
                    <Grid item sm={12} md={6}>
                      <TextField
                        className="field"
                        label="Full name"
                        variant="outlined"
                        color="primary"
                        type="text"
                        name="name"
                        size="small"
                        onChange={inputUpdateHandler}
                        fullWidth
                        defaultValue={user?.name}
                      />
                    </Grid>
                    <Grid item sm={12} md={6}>
                      <TextField
                        className="field"
                        label="Phone"
                        variant="outlined"
                        color="primary"
                        type="number"
                        name="phone"
                        size="small"
                        defaultValue={user.phone}
                        fullWidth
                        onChange={inputUpdateHandler}
                      />
                    </Grid>
                    <Grid item sm={12} md={6} marginTop={2}>
                      <TextField
                        className="field"
                        label="Address"
                        variant="outlined"
                        color="primary"
                        type="text"
                        name="address"
                        size="small"
                        fullWidth
                        onChange={inputUpdateHandler}
                        defaultValue={user?.address}
                      />
                    </Grid>
                    <Grid item sm={12} md={6} marginTop={2}>
                      <TextField
                        className="field"
                        label="City"
                        variant="outlined"
                        color="primary"
                        type="text"
                        name="city"
                        size="small"
                        fullWidth
                        onChange={inputUpdateHandler}
                        defaultValue={user?.city}
                      />
                    </Grid>
                    <Grid item sm={12} md={6} marginTop={2}>
                      <TextField
                        className="field"
                        label="Zip code"
                        variant="outlined"
                        color="primary"
                        type="text"
                        name="zip"
                        size="small"
                        defaultValue={user.zip}
                        fullWidth
                        onChange={inputUpdateHandler}
                      />
                    </Grid>
                    <Grid item sm={12} md={6} marginTop={2}>
                      <FormControl fullWidth>
                        <InputLabel id="lang">Language</InputLabel>
                        <Select
                          labelId="lang"
                          id="lang-select"
                          value={lang}
                          label="Language"
                          onChange={handleLangChange}
                          size="small"
                          name="lang"
                          defaultValue={user?.lang}
                        >
                          <MenuItem value="uz">UZ</MenuItem>
                          <MenuItem value="eng">ENG</MenuItem>
                          <MenuItem value="ru">RU</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item sm={12} md={6} marginTop={2}>
                      <FormControl fullWidth>
                        <InputLabel id="curr">Currency</InputLabel>
                        <Select
                          labelId="curr"
                          id="curr-select"
                          value={currency}
                          label="Currency"
                          onChange={handleCurrChange}
                          size="small"
                          name="currency"
                          defaultValue={user.currency}
                        >
                          <MenuItem value="uzs">UZS</MenuItem>
                          <MenuItem value="usd">USD $</MenuItem>
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
                  onSubmit={changeAuthFormHandler}
                >
                  <Grid spacing={2} container>
                    <Grid item sm={12} md={6}>
                      <TextField
                        className="field"
                        label="Email"
                        variant="outlined"
                        color="primary"
                        type="email"
                        name="email"
                        defaultValue={user.email}
                        onChange={inputChangeHandler}
                        size="small"
                        fullWidth
                      />
                    </Grid>
                    <Grid item sm={12} md={6}>
                      <TextField
                        className="field"
                        label="Password"
                        variant="outlined"
                        color="primary"
                        type="password"
                        name="password"
                        size="small"
                        onChange={inputChangeHandler}
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
