import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    background: {
      default: '#07282D',
    },
    primary: {
      contrastText: '#ffffff',
      main: '#03212C'
    },
    text: {
      primary: '#172b4d',
      secondary: '#6b778c'
    }
  }
});

export default theme;
