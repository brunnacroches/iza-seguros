import 'styled-components';
// CRINADO UMA TIPAGEM UMA INTERFACE
declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
      colors: {

        menu:string;
        header: string;
        content: string;

        footer:string;
        botton: string;

        ativo: string;
        inativo: string;
        brow: string;

        black: string;
        input: string;
        clear: string;
        text: string;

        primary: string;
        secondary: string;
        tertiary: string;
  
        purple: string;
        white: string;
  
        orange: string;
        green: string;
        violet: string;
  
        info: string;
        success: string;
        warning: string;
        
        gray: string;
        body1: string;
        body2: string;
      },
    };
}