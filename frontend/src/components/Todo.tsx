import { Box, List, ListItem, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import SubmitTodo from "./submitTodo";
import DeleteTodo from "./deleteTodo";
import UpdateTodo from "./updateTodo";

type Todo = {
    id: string;
    title: string;
    priority: number;
    createdAt: number;
    updatedAt: number | null;
    deleted: boolean;
  };

  const Todos = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
  
    const fetchTodos = async () => {
      const response = await fetch("http://localhost:8080/todo");
      const data = await response.json();
  
      setTodos(data);
    };
  
    useEffect(() => {
      fetchTodos();
    }, []);
  
    return (
      <Box>
        <Typography variant="h3">Todo list</Typography>
        <List>
          {todos.map((todo) => (
            <ListItem key={todo.id}>
              <Box sx={{ p: 1, border: '1px solid grey' }}>
                <h2>{JSON.stringify(todo.title)}</h2>
                <p> Priority: {JSON.stringify(todo.priority)}</p>
                <p id = "id">{JSON.stringify(todo.id)}</p>
                <UpdateTodo id={todo.id} fetchTodos = {fetchTodos} />
                <DeleteTodo id={todo.id} fetchTodos = {fetchTodos} />
              </Box>
            </ListItem>
          ))}
        </List>
        <SubmitTodo fetchTodos={fetchTodos} />
      </Box>
    );
  };
  
  export default Todos;