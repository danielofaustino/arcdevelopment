import { createMuiTheme } from '@material-ui/core/styles';

const arcBlue = "#163054"
const arcGreen = "#d4d045"

export default createMuiTheme({
  palette:{
    common:{
      blue: `${arcBlue}`,
      orange: `${arcGreen}`
    },
    primary:{
      main: `${arcBlue}`
    },
    secondary: {
      main: `${arcGreen}`
    },
  typography:{
    h3: {
      fontWeight: 300
    }
   }
  }
});