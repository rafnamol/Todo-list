// import React from 'react';
import React, { useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/styles';
import { TextField, FormControl, colors,FormHelperText, Grid, List, ListItem, Paper, Button, Switch} from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const useStyles = makeStyles(theme => ({ 
paper: {
    width:'500px',
    textAlign: 'center',
    borderRadius: '10pt 10pt 4pt 4pt' 
 },
header:{
    backgroundColor: '#ffffff',
    boxShadow: '0px 3px 6px #00000029',
    padding: '20px 24px 15px',
    // border: '1px solid #eeeeee',
    fontWeight: '600', 
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: '10px 10px 0px 0px'
  },
grids:{
    padding: '0px 7px 0px 0',
    lineHeight: 2
  },
button: {
    minWidth: "150px",
    fontWeight: 600,
    border: 2,
    boxShadow: '0px 3px 6px #00000029',
    borderRadius: '6px',
    margin: "33px"
  },
helperText:{
    marginTop:"-65px"
  },  
selectForm: {
    width: '100%'
  },
gridField: {
    margin: '15px',
  },
  
}));

const AddTask = ({todos, setTodos, handleClose} ) => {
  // const [addTasks, setAddTasks] = useState([])
  // const [ taskInput, setTaskInput ] = useState('');
  const [inputText, setInputText] = useState("");
  const classes = useStyles();
  
  // const addTask = (taskInput ) => {
  //   let copy = [...taskList];
  //   copy = [...copy, { id: taskList.length + 1, task: taskInput, complete: false }];
  //   setAddTasks(copy);
  // }


  useEffect(() => {
    fetch(
      ("api/todo/create"),
    {
      method: 'POST',
    }
    )
      .then((response) => response.json())
  //     .then((json) => setAddTasks(json))
  }, [])

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     //  addTask(taskInput);
//     setTaskInput("");
// }

const inputTextHandler = (e) => {
   console.log(e.target.value)
   setInputText(e.target.value);
};

const submitTodoHandler = (e) => {
  e.preventDefault();
  setTodos([
      ...todos,
      {text: inputText, completed: false, id: Math.random() * 1000}
  ]);
  setInputText(" ");
  handleClose();
}

  return (
    <Grid> 
      <Paper  className={classes.paper}>
      <div className={classes.header}>
            <span>Add Task</span>
            </div>
          <List>
            <ListItem>
                <Grid container >
                    <Grid item xs={12} className={classes.gridField}>
                        <FormControl className={classes.selectForm}>
                          <TextField id="outlined-basic"
                            size="small" 
                             value={inputText}
                            onChange={inputTextHandler}
                            variant="outlined" />
                        </FormControl>
                        <FormHelperText className={classes.helperText}>Project Name</FormHelperText>
                    </Grid>                
                </Grid> 
            </ListItem>
            <ListItem> 
            {/* <Grid item xs={12} md={6} className={classes.gridField} style={{marginTop:"77px"}}>
                  <FormControl className={classes.selectForm}>
                  <TextField
                        id="user"
                        select
                        size="small"
                        labelPlacement="top"
                        variant="outlined"
                        SelectProps={{
                            native: true,
                        }}
                        > */}
                        {/* {user.map((option) => (
                            <option key={option.value} value={option.value}>
                            </option>
                        ))} */}
                    {/* </TextField>
                  </FormControl>
                  <FormHelperText className={classes.helperText}>User</FormHelperText>
            </Grid> */}
            <Grid item xs={3} style={{marginTop:"90px"}}>
                    <FormControlLabel
                                value="completed"
                                size= "small"
                                control={<Switch color="primary" />}
                                />
                    <FormHelperText className={classes.helperText}>Completed</FormHelperText>      
                    </Grid>
            </ListItem>
          </List> 
          <div>
              <Button
                  className={classes.button}
                  variant="contained"
                  color="primary"
                  onClick={submitTodoHandler}
              >
                  Save
              </Button>
          </div>
          {/* {todos.map((todo) => <div>{todo.text}</div>

          )} */}
      </Paper>
    </Grid>  
  );
};
export default AddTask;
