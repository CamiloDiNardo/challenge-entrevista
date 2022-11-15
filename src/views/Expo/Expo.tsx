import React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Main from "layouts/Main";
import Container from "components/Container";
import {
  About,
  Advantages,
  Contact,
  Description,
  PromoNumbers,
  Partners,
  Speakers,
  VideoSection,
  Task,
  Hero,
} from "./components";
import {TaskProvider} from "./components/Context/useTaskContext";
/* Cuando hago un cambio, el TaskProvider tiene que volver 
a actualizarse y no lo hace automaticamente sino que hay
que borrarlo y volverlo a poner sino no funciona y te dice
que el error es del localstorage, como lo soluciono?*/
const Expo = (): JSX.Element => {
  return (
    <Main colorInvert={true}>
      <Hero />
      <Box bgcolor={"primary.main"}>
        <Container>
          <Description />
        </Container>
      </Box>
      <Container>
        <PromoNumbers />
      </Container>
      <Divider />
      <Container>
        <Advantages />
      </Container>
      <Box bgcolor={"alternate.main"}>
        <Container>
          <VideoSection />
        </Container>
      </Box>
      <Container>
        <Speakers />
      </Container>
      <Divider />
      <About />
      <Box bgcolor={"primary.main"}>
        <Container paddingX={"0 !important"} maxWidth={1}>
          <Partners />
        </Container>
      </Box>
      <Container>
        <Contact />
      </Container>
      <Container>
        <TaskProvider>
          <Task
            Hero1="Cyra"
            Hero2="Mas valor a tu negocio"
            Hero3="Somos una firma de "
            Hero3B="contadores públicos y abogados,"
            Hero3C="con"
            Hero4="más de 1O años de experiencia en las áreas contable y legal."
            Hero5="Trabajamos para brindar a cada uno de nuestros clientes"
            Hero6="estrategias y soluciones "
            Hero6B="adecuadas a su empresa y negocio."
            Hero7="Servicios"
            Hero8="Legales"
            Adv1="QUE NOS HACE"
            Adv2="DIFERENTES?"
            Adv3="Contestación de escritos fiscales y administrativos ante autoridades"
            Adv3B="competentes"
            Adv4="Juicios de amparo contra inconstitucionalidad de leyes o actos de"
            Adv4B="autoridades"
            Adv5="Gestión de trámites para cumplimiento de obligaciones fiscales y
            aclaración"
            Adv5B="de la situación fiscal"
            Speakers1="Asesoria"
            Speakers2="Contable"
            Speakers3="Brindamos oportunamente el cálculo y registro de las actividades financieras de las empresas, otorgando:"
            Speakers4="Contabilidad general y contabilidad electrónica"
            Speakers5="Elaboración y manejo de nóminas"
            Speakers6="Depuración de cuentas contables"
            Speakers7="Actualización de contabilidad"
          />
        </TaskProvider>
      </Container>
    </Main>
  );
};

export default Expo;
