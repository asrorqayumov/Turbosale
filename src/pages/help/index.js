import * as React from "react";
import { CallOutlined } from "@mui/icons-material";
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";

export default function Help() {
  return (
    <div className="section">
      <div>
        <Typography variant='h5' gutterBottom align='center'>Contact Us</Typography>
        <Typography variant='subtitle1' mb={3} gutterBottom align='center'>
        Get in touch and let us know how we can help
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6} sm={4} md={3}>
            <Card className="mediaCard">
              <CardMedia
                children={
                  <CallOutlined
                    style={{ fontSize: "45px" }}
                    sx={{ color: "#f96435" }}
                  />
                }
                component="icon"
                height="140"
              />
              <CardContent className="d-flex">
                <Typography gutterBottom variant="h5" component="div">
                  Call Us
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  +998912071575
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="large"
                  color="primary"
                  startIcon={<CallOutlined />}
                >
                  Call now
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={6} sm={4} md={3}>
            <Card className="mediaCard">
              <CardMedia
                children={
                  <SendOutlinedIcon
                    style={{ fontSize: "45px" }}
                    sx={{ color: "#f96435" }}
                  />
                }
                component="icon"
                height="140"
              />
              <CardContent className="d-flex">
                <Typography gutterBottom variant="h5" component="div">
                  Telegram
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  @DeveloperAsrorbek
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="large"
                  color="primary"
                  startIcon={<SendOutlinedIcon />}
                >
                  Telegram
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={6} sm={4} md={3}>
            <Card className="mediaCard">
              <CardMedia
                children={
                  <EmailOutlinedIcon
                    style={{ fontSize: "45px" }}
                    sx={{ color: "#f96435" }}
                  />
                }
                component="icon"
                height="140"
              />
              <CardContent className="d-flex">
                <Typography gutterBottom variant="h5" component="div">
                  Email
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  qayumovasror2003@gmail.com
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="large"
                  color="primary"
                  startIcon={<EmailOutlinedIcon />}
                >
                  email
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={6} sm={4} md={3}>
            <Card className="mediaCard">
              <CardMedia
                children={
                  <PlaceOutlinedIcon
                    style={{ fontSize: "45px" }}
                    sx={{ color: "#f96435" }}
                  />
                }
                component="icon"
                height="140"
              />
              <CardContent className="d-flex">
                <Typography gutterBottom variant="h5" component="div">
                  Address
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Uzbekistan, Jizzax
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="large"
                  color="primary"
                  startIcon={<PlaceOutlinedIcon />}
                >
                  Addres
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
