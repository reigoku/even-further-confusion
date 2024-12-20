import { Box, List, ListItem, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import SubmitCat from "./SubmitCat";
import UpdateCat from "./updateCat";
import DeleteCat from "./deleteCat";

type Cat = {
  id: string;
  name: string;
  createdAt: number;
  updatedAt: number | null;
  deleted: boolean;
};

const Cats = () => {
  const [cats, setCats] = useState<Cat[]>([]);

  const fetchCats = async () => {
    const response = await fetch("http://localhost:8080/cats");
    const data = await response.json();

    setCats(data);
  };

  useEffect(() => {
    fetchCats();
  }, []);

  return (
    <Box>
      <Typography variant="h3">Cats</Typography>
      <List>
          {cats.map((cat) => (
            <ListItem key={cat.id}>
              <Box sx={{ p: 1, border: '1px solid grey' }}>
                <h2>{JSON.stringify(cat.name)}</h2>
                <p id = "id">{JSON.stringify(cat.id)}</p>
                <UpdateCat id={cat.id} fetchCats = {fetchCats} />
                <DeleteCat id={cat.id} fetchCats = {fetchCats} />
              </Box>
            </ListItem>
          ))}
      </List>
      <SubmitCat fetchCats={fetchCats} />
    </Box>
  );
};

export default Cats;
