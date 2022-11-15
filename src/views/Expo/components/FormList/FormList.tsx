import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";

const FormList = (props) => {
  return (
    <Box padding={{xs: 3, sm: 6}} width={1} component={Card} boxShadow={1}>
      <form noValidate autoComplete="off">
        <Box display="flex" flexDirection={"column"}>
          <Box marginBottom={4}>
            <TextField
              sx={{height: 54}}
              label="Password"
              type="password"
              variant="outlined"
              color="primary"
              size="medium"
              name="password"
              fullWidth
              placeholder="Adicione uma nova tarefa"
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
            />
          </Box>
          <Box>
            <Button
              sx={{height: 54}}
              variant="contained"
              color="primary"
              size="medium"
              fullWidth
              type="submit"
              onClick={onCreateNewTask}
            >
              Agregar
            </Button>
          </Box>
        </Box>
      </form>
    </Box>
  );
};

FormList.propTypes = {};

export default FormList;
