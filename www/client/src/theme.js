import { createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
    palette: {
        secondary: {
            main: green[600]
        }
    }
});

export default theme;