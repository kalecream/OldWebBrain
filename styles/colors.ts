interface ColorStrings {
  primary: string;
  secondary: string;
  lightShade: string;
  darkShade: string;
  lightAccent: string;
  darkAccent: string;
  textShadow: string;
  info: string;
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
  primary: '#3EB489',
  secondary: '#2b694d',
  lightShade: '#f4f0f5',
  lightAccent: '#8cb6bb',
  darkShade: '#34373e',
  darkAccent: '#8f8182',
  textShadow: '0 0 1px #fff',
  info: '#fd4778',
  success: '#09b335',
  error: '#f7c808',
  warning: '#f90344',
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