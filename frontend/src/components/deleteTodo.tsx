import { Box, Button, Stack, TextField } from "@mui/material";
import React, { useState } from "react";

type DeleteTodoProps = {
    id: string;
    fetchTodos: () => void;
}
const DeleteTodos = ({id , fetchTodos }: DeleteTodoProps) => {
    //const [id, setId] = useState("");
  
    const deleteTodos = async () => {
      try {
        const response = await fetch("http://localhost:8080/todo", {
          method: "DELETE",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id }),
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
  
    const handleDelete = (event: React.FormEvent) => {
      event.preventDefault();
      console.log("try delete");
      deleteTodos();
      console.log("deleted");
      //setTimeout(fetchTodos, 100);
    };
return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
          <Button variant="outlined" color="error" onClick={handleDelete}>Delete</Button>
    </Box>
  );
};

export default DeleteTodos;