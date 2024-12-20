import { Box, Button, Stack, TextField } from "@mui/material";
import React, { useState } from "react";
import { idText } from "typescript";

type UpdateCatProps = {
  id: string;
  fetchCats: () => void;
};

const UpdateCat = ({id, fetchCats }: UpdateCatProps) => {
  const [name, setName] = useState("");

  const updateCat = async () => {
    try {
      const response = await fetch("http://localhost:8080/cats", {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: id, name: name }),
      });
      if (response.ok) {
        console.log("Success", response);
        // Snackbar success
      } else {
        console.warn("No success", response);
        // Snackbar
      }
    } catch (error) {
      console.warn(error);
    }
  };

  const handleUpdate = (event: React.FormEvent) => {
    event.preventDefault();
    updateCat();
    setTimeout(fetchCats, 100);
  };

  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <form onSubmit={handleUpdate}>
        <Stack>
          <TextField
            label="Cat name"
            onChange={(event) => setName(event.target.value)}
          />
          <Button type="submit">Update</Button>
        </Stack>
      </form>
    </Box>
  );
};
export default UpdateCat;