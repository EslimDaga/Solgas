import { colors } from "@material-ui/core";

const white = "#FFFFFF";
const black = "#000000";

export default {
  black,
  white,
  primary: {
    light: '#ffb333',
    main: '#ffa000',
    dark: '#b27000',
    contrastText: '#fff',
  },
  secondary: {
    light: '#4f5289',
    main: '#23276c',
    dark: '#181b4b',
    contrastText: '#000',
  },
  text: {
    primary: colors.blueGrey[900],
    secondary: colors.blueGrey[600],
    link: colors.blue[600],
  },
  background: {
    default: "#F4F6F8",
    paper: white,
  },
  icon: colors.blueGrey[600],
  divider: colors.grey[200],
};
