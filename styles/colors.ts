interface ColorStrings {
  primary: string;
  lightShade: string;
  darkShade: string;
  lightAccent: string;
  darkAccent: string;
  textShadow: string;
  success: string;
  error: string;
  warning: string;

  neutral: {
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  }
}

export const Colors:ColorStrings = {
  primary: '#979e93',
  lightShade: '#f7f7f5',
  lightAccent: '#9b9884',
  darkShade: '#2b3245',
  darkAccent: '#8f8182',
  textShadow: '0 0 1px #fff',
  success: '#63aa64',
  error: '#e09a2c',
  warning: '#f44336',
  neutral : {
    100: '#f7f7f5',
    200: '#eaeaea',
    300: '#dcdcdc',
    400: '#c8c8c8',
    500: '#979e93',
    600: '#8f8182',
    700: '#6c6c6c',
    800: '#5a5a5a',
    900: '#2b3245',
  },
};