import { createMuiTheme } from '@material-ui/core/styles';

export const normalPalette = {
  //Usage like this:    theme.palette.primary.main
  primary:        { main:       "#6d1b7b",
                    light:      "#9c27b0" },
  secondary:      { main:       "#ba68c8" },
  background:     { paper:      "#EEEEEE",
                    default:    "#F8F8F8" },
  buttonX:        { main:       "#F44336" },
  customButton:   { hoverText:  "#337AA5" },
  hover:          { main:       "#330000" },
  accent:         { main:       "#D12B27" },
};

export const redPalette = {
  primary:        { main:       "#FF3333",
                    light:      "#FF6666" },
  secondary:      { main:       "#FF8888" },
  background:     { paper:      "#FFBBBB",
                    default:    "#F2AEB8"},
  buttonX:        { main:       "#F44336" },
  customButton:   { hoverText:  "#FF2222" },
  hover:          { main:       "#FF9AD5" },
  accent:         { main:       "#AC3939" },
};

const currentPalette = normalPalette;  //  normalPalette | redPalette

const theme = createMuiTheme({
  palette: {
    // Usage like this in code:    theme.palette.primary.main
    primary:        { main:       currentPalette.primary.main,},
    /* light:     "#FF0000", // Not OK for general background, how? */
    secondary:      { main:       currentPalette.secondary.main, },
    background:     { paper:      currentPalette.background.paper,
                      default:    currentPalette.background.default },
    buttonX:        { main:       currentPalette.buttonX.main, },
    customButton:   { hoverText:  currentPalette.customButton.hoverText, },
    hover:          { main:       currentPalette.hover.main, },
    accent:         { main:       currentPalette.accent.main, },

  },
  typography: {
    useNextVariants: true,
    fontFamily: 'Muli',
    fontWeightLight: 300,
    fontWeightRegular: 300,
    fontWeightMedium: 500,
    button: {
      textTransform: 'capitalize'
    },
  },
  overrides:{
    //Buttons style
    MuiButton:{
      //Outlined button primary
      outlinedPrimary:{
        borderColor: currentPalette.primary.main,
          '&:hover': {
            backgroundColor: currentPalette.primary.main,
            color: currentPalette.secondary.main,
          },

      },
      //Contained button primary
      containedPrimary: {
        boxShadow:"none",
        '&:hover': {
          backgroundColor: currentPalette.secondary.main,
          border:1,
          borderStyle:'solid',
          borderColor: currentPalette.primary.main,
          color: currentPalette.primary.main,
        },
      }
    },
    //TextFields
    MuiFormControl: {
      // Warning says style outlined doesn't exist, so I commented this out:
      /*
      outlined:{
        borderColor: currentPalette.primary.main,
      },
      */
    },
    MuiInputBase: {
      root: {
        color: currentPalette.primary.main,
        fontSize: '0.8rem',
      },

    },
    MuiFormLabel: {
      root:{
        color: currentPalette.primary.main,
        fontSize: '0.8rem',
      },
    },
    MuiMenuItem: {
      root: {
        color: currentPalette.primary.main,
      },
    },
  },

});

export default theme;