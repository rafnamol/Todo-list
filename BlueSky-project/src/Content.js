import React, { useState , useEffect, useContext} from 'react';
import ToDoContext from './context';
import { makeStyles } from '@material-ui/styles';
import {Button, Grid, Table, TableBody, TableCell, TableRow
  ,FormControl, Paper,FormHelperText, Dialog,FormControlLabel, Switch,TextField,IconButton } from '@material-ui/core';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import CancelIcon from '@material-ui/icons/Cancel';
import EditIcon from '@material-ui/icons/Edit';

import Autocomplete from '@material-ui/lab/Autocomplete';

const useStyles = makeStyles(theme => ({
  paper: {
    width: 1000,
    textAlign: 'center',
    borderRadius: '10pt 10pt 4pt 4pt' 
 },
  header:{
    backgroundColor: '#ffffff',
    boxShadow: '0px 3px 6px #00000029',
    padding: '20px 24px 15px',
    fontWeight: '600', 
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: '10px 10px 0px 0px'
  },
  // grids:{
  //   lineHeight: 2
  // },
  helperText:{
    marginTop:"-62px"
  },
  button: {
    minWidth: "150px",
    fontWeight: 600,
    border: 2,
    boxShadow: '0px 3px 6px #00000029',
    borderRadius: '6px',
    margin: "21px"
  },
}));

const Content =  () => {
  const {todoContext, state} = useContext(ToDoContext)
  useEffect( () => {
    fetch("api/todos", {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }})
      .then((response) => response.json())
      .then((json) => todoContext.listTodo(json.todos))
  }, [])

  useEffect( () => {
    fetch("api/users", {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }})
      .then((response) => response.json())
      .then((json) => todoContext.listUser(json.users))
  }, [])


  console.log("users", state.userFcontext)
  const classes = useStyles();   
  


  const lsp = Object.values(state.todosFcontext);
  console.log("list",lsp)
return (
<div>
<Grid>
  <Paper className={classes.paper}> 
    <div className={classes.header}>
          <span>List</span>
    </div>
    <Grid container spacing={2} style={{ margin: "25px"}}>
       <Grid item xs={3}>
        <FormControl>
            <Autocomplete
                id="project-field"
                value={lsp}
                // freeSolo
                options={lsp.map((todo,key) => todo.name)}
                renderInput={(params) => (
                  <TextField {...params} 
                      label="Project Name" 
                      variant="outlined"
                      fullWidth
                      size= "small" />
                )}
              />
        </FormControl>
        </Grid>
        <Grid item xs={3}>
            <Autocomplete
                    id="project-field"
                    value={lsp}
                    // freeSolo
                    options={state.userFcontext.map((user,key) => user.firstName + user.lastName ) }
                    renderInput={(params) => (
                      <TextField {...params} 
                          label="User" 
                          variant="outlined"
                          fullWidth
                          size= "small" />
                    )}
                  />
                          {/* <FormHelperText className={classes.helperText}>User</FormHelperText> */}
        </Grid>
        <Grid item xs={3}>
                    <FormControlLabel
                                value="completed"
                                size= "small"
                                control={<Switch color="primary" />}
                                />
                    <FormHelperText className={classes.helperText}>Completed</FormHelperText>      
                    </Grid>
    </Grid>
    <Paper style={{margin:"85px 25px 22px", border: "1px solid black"}}>
        <Table>
            <TableBody>

                    <TableRow >
                      <TableCell>Name </TableCell>
                      <TableCell>User</TableCell>
                      <TableCell>completed</TableCell>
                    </TableRow>
                
            </TableBody>
          </Table>
    

    </Paper>
    <Grid  container
                direction="row"
                justify="flex-end"
                alignItems="flex-end">
            <Button
                className={classes.button}
                variant="contained"
                color="primary"
                // onClick={handleClickOpen}
            >
                Add Task
            </Button>
          </Grid>
  </Paper>  
  </Grid>
</div>
);
}
export default Content;