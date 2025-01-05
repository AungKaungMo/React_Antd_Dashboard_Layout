import React, { createContext, useContext, useEffect, useState } from 'react';
import { Current_Theme, Mode, Theme } from '../types/theme';
// import { themes } from '../constants/theme';
import { COLOR_THEMES, LIGHT_MODE, DARK_MODE } from '../constants/colors';

interface ThemeContextProps {
  theme: Theme;
  mode: Mode;
  currentTheme: Current_Theme | undefined;
  setTheme: (theme: Theme) => void;
  setMode: (mode: Mode) => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    return (localStorage.getItem('theme') as Theme) || 'blue';
  });
  const [mode, setMode] = useState<Mode>(() => {
    return (localStorage.getItem('mode') as Mode) || 'light';
  })
  const [currentTheme, setCurrentTheme] = useState<Current_Theme>()

  useEffect(() => {
    // const root = document.documentElement;

    // Remove previous theme classes
    // themes.forEach((theme) => theme && root.classList.remove(theme, `${theme}-dark`));

    // Add the new theme class
    // if (mode === 'dark') {
    //   root.classList.add(`${theme}-dark`);
    // } else {
    //   root.classList.add(theme);
    // }

    localStorage.setItem('theme', theme);
    localStorage.setItem('mode', mode);


    if (theme && mode) {
      const themeData = COLOR_THEMES[theme];
      const modeData = mode === 'dark' ? DARK_MODE : LIGHT_MODE;

      const combinedTheme = {
        ...themeData,
        ...modeData,
      };
      setCurrentTheme(combinedTheme);

      // console.log(currentTheme, 'current themes')
    }
  }, [theme, mode]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme ,mode, setMode, currentTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextProps => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within a ThemeProvider');
  return context;
};
