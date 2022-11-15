import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {useTheme} from "@mui/material/styles";

export const mock = [
  {
    title: "Etica",
  },
  {
    title: "Confianza",
  },
  {
    title: "Seguridad",
  },
  {
    title: "Confidencialidad",
  },
  {
    title: "Honestidad",
  },
];

const PromoNumbers = (): JSX.Element => {
  const theme = useTheme();
  return (
    <Box width={1} display={"flex"} justifyContent={"center"}>
      <Box paddingBottom={{xs: 1, md: 0}} display={"flex"} overflow={"auto"}>
        {mock.map((item, i) => (
          <Box
            key={i}
            display={"flex"}
            alignItems={"center"}
            flexDirection={"column"}
            flex={"0 0 auto"}
            marginX={2}
          >
            {" "}
            <Typography color={theme.palette.primary.light}>
              {item.title}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default PromoNumbers;
