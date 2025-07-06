import React, { createContext, useContext, useEffect, useState } from 'react';
import { Appearance } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { DarkTheme, LightTheme, ThemeType } from '../design/theme';

type ThemeMode = 'light' | 'dark' | 'system';

interface ThemeContextProps {
  theme: ThemeType;
  mode: ThemeMode;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps>({
  theme: LightTheme,
  mode: 'light',
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mode, setMode] = useState<ThemeMode>('system');
  const [theme, setTheme] = useState<ThemeType>(LightTheme);

  const loadTheme = async () => {
    const saved = await AsyncStorage.getItem('APP_THEME_MODE');
    const currentMode: ThemeMode = saved as ThemeMode || 'system';
    applyTheme(currentMode);
  };

  const applyTheme = (mode: ThemeMode) => {
    let colorScheme = mode === 'system' ? Appearance.getColorScheme() : mode;
    setMode(mode);
    setTheme(colorScheme === 'dark' ? DarkTheme : LightTheme);
    AsyncStorage.setItem('APP_THEME_MODE', mode);
  };

  const toggleTheme = () => {
    const newMode: ThemeMode = mode === 'light' ? 'dark' : 'light';
    applyTheme(newMode);
  };

  useEffect(() => {
    loadTheme();
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, mode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
