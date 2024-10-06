// Цель: Разработать компонент TodoList для управления задачами: добавление, отображение, и удаление задач.

// Компоненты:
// Используйте TextField для ввода новой задачи.
// Добавьте Button для добавления задачи в список.
// Для каждой задачи в списке используйте Card или ListItem из Material UI. Внутри каждого элемента списка разместите текст задачи и IconButton с иконкой удаления (например, DeleteIcon).

// Логика:
// При нажатии на кнопку добавления, новая задача должна добавляться в список.
// Рядом с каждой задачей должна быть кнопка для её удаления.

// import React, { useState } from "react";
// import {
//   TextField,
//   List,
//   ListItemText,
//   listItemSecondaryAction,
//   ListItem,
//   IconButton,
//   Button,
//   Card,
  
// } from "@mui/material";
// import DeleteIcon from "@mui/icons-material/Delete";

// const TodoList = () => {
//   const [taskList, setTaskList] = useState([]);
//   const [inputTask, setInputTask] = useState();

//   const handleAddTask = () => {
//     if (inputTask.trim() === "") return;
//     setTaskList([...taskList, inputTask]);
//     setInputTask("");
//   };

//   const handleDeleteTask = (index) => {
//     const newTasks = taskList.filter((_, i) => i !== index);
//     setTaskList(newTasks);
//   };

//   return (
//     <div>
//       <TextField
//         label="Новая задача"
//         variant="outlined"
//         value={inputTask}
//         onChange={(e) => setInputTask(e.target.value)}
//       />
//       <Button variant="contained" color="primary" onChange={handleAddTask}>
//         Добавить
//       </Button>
//       {/* <List>
//         {taskList.map((task, index) => (
//           <ListItem key={index}>
//             <ListItemText primary={task} />
//             <ListItemSecondaryAction>
//             <IconButton
//               edge="end"
//               aria-label="delete"
//               onClick={() => handleDeleteTask(index)}
//             >
//               <DeleteIcon />
//             </IconButton>
//             </ListItemSecondaryAction>
//           </ListItem>
//         ))}
//       </List> */}
//       {taskList.map((task, index) => (
//         <Card rey = {index}>
//             <ListItem>
//                 <ListItemText primary={task} />
//                 <listItemSecondaryAction>
//                     <IconButton onClick={() => handleDeleteTask(index)}>
//                         <DeleteIcon />
                        
//                     </IconButton>
//                 </listItemSecondaryAction>
//             </ListItem>
//         </Card>
//       ))}
//     </div>
//   );
// };

// export default TodoList;

import React, { useState } from "react";
import {
  TextField,
  Button,
  Card,
  CardContent,
  IconButton,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <TextField
        value={newTask}
        onChange={handleInputChange}
        label="Новая задача"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <Button onClick={handleAddTask} variant="contained" color="primary">
        Добавить задачу
      </Button>
      {tasks.map((task, index) => (
        <Card key={index} variant="outlined" style={{ marginTop: "1rem" }}>
          <CardContent>
            <Typography>{task}</Typography>
            <IconButton
              onClick={() => handleDeleteTask(index)}
              aria-label="delete"
            >
              <DeleteIcon />
            </IconButton>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default TodoList;