import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import {useTheme} from "@mui/material/styles";

const Footer = (): JSX.Element => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}></Grid>
      <Grid item xs={12}>
        <Typography align={"center"} variant={"h3"} color={"primary"}>
          CYRA
        </Typography>
        <Typography
          align={"center"}
          variant={"subtitle2"}
          color="text.secondary"
        >
          mas valor a tu negocio
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
