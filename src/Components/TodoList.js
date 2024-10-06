// Цель: Разработать компонент TodoList для управления задачами: добавление, отображение, и удаление задач.

// Компоненты:
// Используйте TextField для ввода новой задачи.
// Добавьте Button для добавления задачи в список.
// Для каждой задачи в списке используйте Card или ListItem из Material UI. Внутри каждого элемента списка разместите текст задачи и IconButton с иконкой удаления (например, DeleteIcon).

// Логика:
// При нажатии на кнопку добавления, новая задача должна добавляться в список.
// Рядом с каждой задачей должна быть кнопка для её удаления.



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