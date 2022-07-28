import * as React from "react";
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import RecentActorsIcon from "@mui/icons-material/RecentActors";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";

export default function Contact() {
  return (
    <div className="section_public">
      <div className="w-100">
        <Typography variant="h4" fontWeight="bold" gutterBottom align="center">
          Contact Us
        </Typography>
        <Typography variant="subtitle1" mb={3} gutterBottom align="center">
          We'd love to talk about how we can help you.
        </Typography>
        <Grid container spacing={10}>
          <Grid item sm={6} md={4}>
            <Card className="mediaCard">
              <CardMedia
                children={
                  <RecentActorsIcon
                    style={{ fontSize: "45px" }}
                    color="primary"
                  />
                }
                component="icon"
                height="140"
              />
              <CardContent className="d-flex">
                <Typography
                  gutterBottom
                  variant="h6"
                  fontWeight="bold"
                  component="div"
                >
                  Knowledgebase
                </Typography>
                <Typography
                  variant="body2"
                  align="center"
                  color="text.secondary"
                >
                  We're here to help with any questions or code.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="large" color="primary">
                  Contact Support
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item sm={6} md={4}>
            <Card className="mediaCard">
              <CardMedia
                children={
                  <LiveHelpIcon style={{ fontSize: "45px" }} color="primary" />
                }
                component="icon"
                height="140"
              />
              <CardContent className="d-flex">
                <Typography
                  gutterBottom
                  variant="h6"
                  fontWeight="bold"
                  component="div"
                >
                  FAQ
                </Typography>
                <Typography
                  variant="body2"
                  align="center"
                  color="text.secondary"
                >
                  Search our FAQ for answers to anything you might ask.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="large" color="primary">
                  Visit FAQ
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item sm={6} md={4}>
            <Card className="mediaCard">
              <CardMedia
                children={
                  <IntegrationInstructionsIcon
                    style={{ fontSize: "45px" }}
                    color="primary"
                  />
                }
                component="icon"
                height="140"
              />
              <CardContent className="d-flex">
                <Typography
                  gutterBottom
                  variant="h6"
                  fontWeight="bold"
                  component="div"
                >
                  Developer APIs
                </Typography>
                <Typography
                  variant="body2"
                  align="center"
                  color="text.secondary"
                >
                  Check out our development quickstart guide.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="large" color="primary">
                  Contact sales
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
