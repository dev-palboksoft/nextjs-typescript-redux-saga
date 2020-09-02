import { createMuiTheme } from '@material-ui/core/styles';
import { red, grey } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#42a5f5',
      main: '#2196f3',
      dark: '#1e88e5',
      contrastText: '#ffffff',
    },
    secondary: {
      light: grey[700],
      main: grey[800],
      dark: grey[900],
      contrastText: '#ffffff',
    },
    error: {
      light: red[500],
      main: red[600],
      dark: red[600],
      contrastText: '#ffffff',
    },
    background: {
      default: '#fff',
    },
  },
  // typography: {
  //   fontFamily: '',
  // }
});

export default theme;
