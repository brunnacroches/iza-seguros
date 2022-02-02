import React, { createContext, useState, useContext} from 'react';

import dark from '../styles/themes/dark';
import light from '../styles/themes/light';
import orange from '../styles/themes/orange';

interface IThemeContext {
  toggleTheme(): void;
  theme: ITheme;
}

interface ITheme {
  title: string;
  colors: {

    menu: string;
    header: string;
    content: string;

    footer: string;
    botton: string;

    ativo: string;
    inativo: string;
    brow: string;

    black: string;
    input: string;
    clear: string;
    text: string;

    primary: string;
    secondary:string;
    tertiary: string;

    purple: string;
    white: string;

    orange: string;
    green: string;
    violet: string;

    gray: string;


    info: string;
    success: string;
    warning: string;

    body2: string;
    body1: string;
  },
}

const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

const ThemeProvider: React.FC = ({ children }) => {
    const [theme, setTheme] = useState<ITheme>(orange);

    const toggleTheme = () => {
      if(theme.title === 'orange'){
        setTheme(dark);
      }else{
        setTheme(orange);
     }
    }

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  )
};

function useTheme(): IThemeContext {
  const context = useContext(ThemeContext);

  return context;
}

export { ThemeProvider, useTheme };