import {Box} from "@mui/material";
import React, { useEffect } from "react";

const Cleanup = () => {
    const clickEvent = (event:any) => {
        console.log({x: event.x, y: event.y})
    };
    useEffect(() => {
    document.addEventListener("click", clickEvent);
    return () => document.removeEventListener("click", clickEvent);
}, []);
    return <Box>Click</Box>;
};

export default Cleanup;