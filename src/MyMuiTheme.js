import { createMuiTheme } from '@material-ui/core/styles';
import { blue, red, yellow, purple } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: red,
    error: yellow,
  }
});

export default theme;