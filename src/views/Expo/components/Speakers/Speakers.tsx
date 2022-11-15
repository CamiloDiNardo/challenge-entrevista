import React from "react";
import {alpha, useTheme} from "@mui/material/styles";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import ListItemText from "@mui/material/ListItemText";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

const mock = [
  {
    name: "Chary Smith",
    title: "SEO at Comoti",
    avatar: "https://assets.maccarianagency.com/avatars/img3.jpg",
  },
  {
    name: "Clara Bertoletti",
    title: "Junior Designer",
    avatar: "https://assets.maccarianagency.com/avatars/img4.jpg",
  },
  {
    name: "Jhon Anderson",
    title: "Senior Frontend Developer",
    avatar: "https://assets.maccarianagency.com/avatars/img5.jpg",
  },
  {
    name: "Chary Smith",
    title: "SEO at Comoti",
    avatar: "https://assets.maccarianagency.com/avatars/img6.jpg",
  },
];

const Speakers = (): JSX.Element => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: "relative",
        "&::after": {
          position: "absolute",
          content: '""',
          width: "30%",
          height: "50%",
          zIndex: 1,
          top: 0,
          right: 0,
          backgroundSize: "18px 18px",
          backgroundImage: `radial-gradient(${alpha(
            theme.palette.primary.dark,
            0.4
          )} 20%, transparent 20%)`,
          opacity: 0.2,
        },
      }}
    >
      <Box zIndex={2} position={"relative"}>
        <Box marginBottom={4}>
          <Typography
            variant={"h4"}
            gutterBottom
            align={"center"}
            sx={{fontWeight: 700}}
          >
            Asesoria{" "}
            <Typography color="primary" variant="inherit" component="span">
              Contable
            </Typography>
          </Typography>
          <Typography
            variant={"h6"}
            component={"p"}
            color={"text.primary"}
            align={"center"}
            data-aos="fade-up"
          >
            Brindamos oportunamente el cálculo y registro de las actividades
            financieras de las empresas, otorgando:
            <br />
          </Typography>
          <Typography
            marginTop={5}
            variant={"h6"}
            component={"p"}
            color={"text.secondary"}
            align={"center"}
            data-aos="fade-up"
          >
            <b>Contabilidad general y contabilidad electrónica</b>
            <Box>
              <b>Elaboración y manejo de nóminas</b>
            </Box>
            <Box>
              <b>Depuración de cuentas contables</b>
            </Box>
            <Box>
              <b>Actualización de contabilidad </b>
            </Box>
          </Typography>

          <Box marginTop={10} display={"flex"} justifyContent={"center"}></Box>
        </Box>
        <Grid container spacing={2}>
          {mock.map((item, i) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              key={i}
              data-aos={"fade-up"}
              data-aos-delay={i * 100}
              data-aos-offset={100}
              data-aos-duration={600}
            >
              <Box component={Card} boxShadow={0} bgcolor={"transparent"}>
                <Box
                  component={CardMedia}
                  borderRadius={2}
                  width={1}
                  height={1}
                  minHeight={320}
                  image={item.avatar}
                />
                <CardContent>
                  <ListItemText
                    primary={item.name}
                    secondary={item.title}
                    primaryTypographyProps={{fontWeight: 700}}
                  />
                  <Box marginTop={1}>
                    <IconButton
                      aria-label="facebook"
                      size={"small"}
                      color={"primary"}
                    >
                      <FacebookIcon />
                    </IconButton>
                    <IconButton
                      aria-label="twitter"
                      size={"small"}
                      color={"primary"}
                    >
                      <TwitterIcon />
                    </IconButton>
                  </Box>
                </CardContent>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Speakers;
