import React, { useState , useEffect, useContext} from 'react';
import ToDoContext from './context';
import { makeStyles } from '@material-ui/styles';
import {Button, Grid, Typography, List, ListItem, Paper,FormHelperText, Dialog,FormControlLabel, Switch,TextField,IconButton } from '@material-ui/core';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import CancelIcon from '@material-ui/icons/Cancel';
import EditIcon from '@material-ui/icons/Edit';

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

  const lsp = Object.values(state.todosFcontext);
return (
<div>
<Grid item xs={3}>
                    <TextField
                                id="standard-select-currency-native"
                                select
                                fullWidth
                                size= "small"
                                labelPlacement="top"
                                variant="outlined"
                                SelectProps={{
                                    native: true,
                                }}
                                >
                                {lsp.map((todo,key) => (
                                    <div key={key} value={todo.name}>
                                    </div>
                                ))}
                            </TextField>
                            <FormHelperText >User</FormHelperText>
                    </Grid>
</div>
);
}
export default Content;