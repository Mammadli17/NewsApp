import { baseColors } from './colors';

export const LightTheme = {
  isDark: false,
  colors: {
    background: baseColors.backgroundLight,
    text: baseColors.textLight,
    primary: baseColors.primary,
    secondary: baseColors.secondary,
  },
};

export const DarkTheme = {
  isDark: true,
  colors: {
    background: baseColors.backgroundDark,
    text: baseColors.textDark,
    primary: baseColors.primary,
    secondary: baseColors.secondary,
  },
};

export type ThemeType = typeof LightTheme;
