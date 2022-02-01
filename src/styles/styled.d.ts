import 'styled-components';
// CRINADO UMA TIPAGEM UMA INTERFACE
declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
      colors: {

        primary: string;
        secondary: string;
        tertiary: string;
  
        purple: string;
        white: string;
        brow: string;
  
        orange: string;
        green: string;
        violet: string;
  
        black: string;
        info: string;
        success: string;
        warning: string;
        
        gray: string;
        clear: string;
        body1: string;
        body2: string;
      },
    };
}