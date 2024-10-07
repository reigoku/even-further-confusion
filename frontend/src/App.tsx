
import "./App.css";
import Cats from "./components/Cats";
import Todos from "./components/Todo";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import { purple } from '@mui/material/colors';
import { CssBaseline } from "@mui/material";

const outerTheme = createTheme({
  palette: {
    mode: 'dark', //the best theme.
    primary: {
      main: '#3fb5a4',
    },
  },
});


function App() {
  return (
    <>
      <ThemeProvider theme={outerTheme}>
        <CssBaseline />
        <Cats />
        <Todos />
      </ThemeProvider>
    </>
  );
}

export default App;