import { deepPurple, red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: deepPurple[500],
    },
    secondary: {
      main: deepPurple[200],
    },
    background: {
      default: deepPurple[50],
    },
    // background: {
    //   main: deepPurple[50],
    // },
    error: {
      main: red.A400,
    },
  },
});
