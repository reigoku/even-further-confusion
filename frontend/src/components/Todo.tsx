import { Box, List, ListItem, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import SubmitTodo from "./submitTodo";

type Todo = {
    id: string;
    title: string;
    priority: string;
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
            <ListItem key={todo.id}>{JSON.stringify(todo)}</ListItem>
          ))}
        </List>
        <SubmitTodo fetchTodos={fetchTodos} />
      </Box>
    );
  };
  
  export default Todos;