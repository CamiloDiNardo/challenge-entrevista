/* eslint-disable @typescript-eslint/no-redeclare */
import React, {useState} from "react";
import {useTaskContext} from "../Context/useTaskContext";
import {useTheme} from "@mui/material/styles";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Typography,
} from "@mui/material";

export interface Task {
  id: number;
  isComplete: boolean;
  title: string;
}
export interface Textos {
  Hero1: string;
  Hero2: string;
  Hero3: string;
  Hero3B: string;
  Hero3C: string;
  Hero4: string;
  Hero5: string;
  Hero6: string;
  Hero6B: string;
  Hero7: string;
  Hero8: string;
  Adv1: string;
  Adv2: string;
  Adv3: string;
  Adv3B: string;
  Adv4: string;
  Adv4B: string;
  Adv5: string;
  Adv5B: string;
  Speakers1: string;
  Speakers2: string;
  Speakers3: string;
  Speakers4: string;
  Speakers5: string;
  Speakers6: string;
  Speakers7: string;
}
export function Task({
  Hero1,
  Hero2,
  Hero3,
  Hero3B,
  Hero3C,
  Hero4,
  Hero5,
  Hero6,
  Hero6B,
  Hero7,
  Hero8,
  Adv1,
  Adv2,
  Adv3,
  Adv3B,
  Adv4,
  Adv4B,
  Adv5,
  Adv5B,
  Speakers1,
  Speakers2,
  Speakers3,
  Speakers4,
  Speakers5,
  Speakers6,
  Speakers7,
}: Textos) {
  const {task, addTask, removeTask} = useTaskContext();
  const [taskTitle, setTaskTitle] = useState("");

  const theme = useTheme();
  function onCreateNewTask() {
    if (taskTitle === "") {
      return prompt("no se puede dejar en blanco");
    }
    var id = Math.random();
    var isComplete = false;
    var title = taskTitle;

    addTask(id, isComplete, title);
    setTaskTitle("");
  }
  function handleDeleteTask(taskId: number) {
    removeTask(taskId);
  }
  console.log(task);
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{minWidth: 650}} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">
                <Typography
                  variant="h3"
                  gutterBottom
                  sx={{
                    fontWeight: 900,
                    textAlign: "center",
                  }}
                >
                  Crud Tabla con Localstorage y Typescript
                </Typography>
                <input
                  type="text"
                  placeholder="Escribe Una Texto"
                  value={taskTitle}
                  onChange={(e) => setTaskTitle(e.target.value)}
                />
                <Button
                  type="submit"
                  onClick={onCreateNewTask}
                  variant="contained"
                >
                  Add
                </Button>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                <Typography
                  variant="h3"
                  gutterBottom
                  sx={{
                    fontWeight: 900,
                    color: theme.palette.primary.light,
                    textAlign: "center",
                  }}
                >
                  {Hero1}
                </Typography>
                <Typography
                  variant="h3"
                  gutterBottom
                  sx={{
                    fontWeight: 900,
                    textAlign: "center",
                  }}
                >
                  {Hero2}
                </Typography>
                <Typography
                  variant="h6"
                  component="p"
                  color="text.primary"
                  align="center"
                  sx={{
                    fontWeight: 500,
                  }}
                >
                  {Hero3}
                  <b>{Hero3B}</b>
                  <b>{Hero3C} </b>
                </Typography>
                <Typography
                  variant="h6"
                  component="p"
                  color="text.primary"
                  align="center"
                  sx={{
                    fontWeight: 500,
                  }}
                >
                  {Hero4}
                </Typography>

                <Typography
                  variant="h6"
                  component="p"
                  color="text.primary"
                  align="center"
                  sx={{
                    fontWeight: 500,
                  }}
                >
                  {Hero5}
                </Typography>
                <Typography
                  variant="h6"
                  component="p"
                  color="text.primary"
                  align="center"
                  sx={{
                    fontWeight: 500,
                  }}
                >
                  {Hero6}
                  <b>{Hero6B}</b>
                </Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">
                <Typography
                  variant="h4"
                  align={"center"}
                  data-aos={"fade-up"}
                  gutterBottom
                  sx={{
                    fontWeight: 700,
                  }}
                >
                  {Hero7}{" "}
                  <Typography
                    color="primary"
                    variant="inherit"
                    component="span"
                  >
                    {Hero8}
                  </Typography>
                </Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">
                <Typography
                  variant="h4"
                  color={theme.palette.common.black}
                  sx={{fontWeight: 700}}
                >
                  {Adv1}{" "}
                  <Typography
                    color="primary"
                    variant="inherit"
                    component="span"
                  >
                    {Adv2}
                  </Typography>
                  <Typography component="p">{Adv3}</Typography>
                  <Typography component="p">{Adv3B}</Typography>
                  <Typography component="p">{Adv4}</Typography>
                  <Typography component="p">{Adv4B}</Typography>
                  <Typography component="p">{Adv5}</Typography>
                  <Typography component="p">{Adv5B}</Typography>
                </Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">
                <Typography
                  variant={"h4"}
                  gutterBottom
                  align={"center"}
                  sx={{fontWeight: 700}}
                >
                  {Speakers1}{" "}
                  <Typography
                    color="primary"
                    variant="inherit"
                    component="span"
                  >
                    {Speakers2}
                  </Typography>
                </Typography>
                <Typography
                  variant={"h6"}
                  component={"p"}
                  color={"text.primary"}
                  align={"center"}
                  data-aos="fade-up"
                >
                  {Speakers3}
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
                  <b>{Speakers4}</b>
                  <Box>
                    <b>{Speakers5}</b>
                  </Box>
                  <Box>
                    <b>{Speakers6}</b>
                  </Box>
                  <Box>
                    <b>{Speakers7}</b>
                  </Box>
                </Typography>
              </TableCell>
            </TableRow>
            {task &&
              task.map((task) => (
                <TableRow
                  key={task.id}
                  sx={{"&:last-child td, &:last-child th": {border: 0}}}
                >
                  <TableCell component="th" scope="column" align="center">
                    {task.title}
                  </TableCell>
                  <Button
                    type="submit"
                    onClick={(e) => handleDeleteTask(task.id)}
                    variant="contained"
                  >
                    Delete
                  </Button>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default Task;
