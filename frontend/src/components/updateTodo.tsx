import { Box, Button, Stack, TextField, List, ListItem } from "@mui/material";
import React, { useState } from "react";

type UpdateTodoProps = {
  id: string;
  fetchTodos: () => void;
};

const UpdateTodos = ({ id, fetchTodos }: UpdateTodoProps) => {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("");

  const updateTodos = async () => {
    try {
      const response = await fetch("http://localhost:8080/todo", {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: id, title: title, priority: priority }),
      });

      if (response.ok) {
        console.log("Success", response);
        // Snackbar success
      } else {
        console.warn("No success");
        // Snackbar
      }
    } catch (error) {
      console.warn(error);
    }
  };

  const handleUpdate = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("try update");
    updateTodos();
    console.log("updated");
    setTimeout(fetchTodos, 100);
  };
  //probably should make a function to handle the priority buttons. and make them change on click. oops.
  return (

      <form onSubmit={handleUpdate}>
        <Stack>
          <TextField
            label="Task name"
            onChange={(event) => setTitle(event.target.value)}
          />
          <List>
            <ListItem>
              <Button onClick={(event) => setPriority("1")}>1</Button>
            </ListItem>
            <ListItem>
              <Button onClick={(event) => setPriority("2")}>2</Button>
            </ListItem>
            <ListItem>
              <Button onClick={(event) => setPriority("3")}>3</Button>
            </ListItem>
          </List>
          <Button type="submit">Update</Button>
        </Stack>
      </form>
  );
};

export default UpdateTodos;