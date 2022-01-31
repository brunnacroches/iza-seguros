
// SOBRESCREVER TIPOS DE ARQUIVOS
// vamos ter uma tipagem que vai estar disponível para a aplicação inteira

// criando uma tipagem especial
import 'styled-components';

// criando a interface 'DefaultTheme'
declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

      colors: {
        menu: string; 
        header: string; 
        content: string; 

        textmenu: string; 
        textcontent: string; 
        texthearder: string; 

        backfooter: string; 
  
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
      }
    };
}
  