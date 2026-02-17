import React, { createContext, useState, useContext, useEffect } from 'react';

const ThemeContext = createContext();

export const THEMES = {
  LIGHT: 'light',
  DARK: 'dark',
  PROFESSIONAL: 'professional'
};

const themeConfigs = {
  light: {
    name: 'Light',
    background: 'bg-amber-50',
    text: 'text-amber-900',
    textMuted: 'text-amber-700',
    cardBg: 'bg-white/80 backdrop-blur-md',
    cardBorder: 'border-amber-200',
    navBg: 'bg-transparent',
    heroBg: 'bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50',
    sectionBg: 'bg-amber-50',
    sectionAltBg: 'bg-orange-50/50',
    buttonPrimary: 'bg-gradient-to-r from-amber-600 to-orange-500 text-white hover:from-amber-700 hover:to-orange-600 shadow-md',
    buttonSecondary: 'bg-white/80 backdrop-blur-sm text-amber-900 border-2 border-amber-200 hover:bg-amber-100',
    accentGradient: 'from-amber-600 to-orange-500',
    accentText: 'text-amber-600',
    footerBg: 'bg-amber-100',
    fontClass: 'font-sans',
    headingFont: 'font-serif',
  },
  dark: {
    name: 'Dark',
    background: 'bg-stone-900',
    text: 'text-stone-100',
    textMuted: 'text-stone-400',
    cardBg: 'bg-stone-800/80 backdrop-blur-md',
    cardBorder: 'border-stone-700',
    navBg: 'bg-transparent',
    heroBg: 'bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900',
    sectionBg: 'bg-stone-900',
    sectionAltBg: 'bg-stone-800/50',
    buttonPrimary: 'bg-gradient-to-r from-amber-600 to-orange-500 text-white hover:from-amber-700 hover:to-orange-600 shadow-lg',
    buttonSecondary: 'bg-stone-700/80 backdrop-blur-sm text-stone-100 border border-stone-600 hover:bg-stone-600',
    accentGradient: 'from-amber-500 to-orange-400',
    accentText: 'text-amber-400',
    footerBg: 'bg-stone-950',
    fontClass: 'font-sans',
    headingFont: 'font-serif',
  },
  professional: {
    name: 'Professional',
    background: 'bg-stone-50',
    text: 'text-stone-900',
    textMuted: 'text-stone-600',
    cardBg: 'bg-white/80 backdrop-blur-md',
    cardBorder: 'border-stone-300',
    navBg: 'bg-transparent',
    heroBg: 'bg-gradient-to-br from-stone-100 via-amber-50 to-stone-50',
    sectionBg: 'bg-white',
    sectionAltBg: 'bg-amber-50/30',
    buttonPrimary: 'bg-gradient-to-r from-amber-700 to-stone-600 text-white hover:from-amber-800 hover:to-stone-700 shadow-md',
    buttonSecondary: 'bg-white/80 backdrop-blur-sm text-stone-900 border-2 border-stone-300 hover:bg-stone-100',
    accentGradient: 'from-amber-700 to-stone-600',
    accentText: 'text-amber-700',
    footerBg: 'bg-stone-100',
    fontClass: 'font-sans',
    headingFont: 'font-serif',
  }
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('portfolio-theme');
    return saved || THEMES.LIGHT;
  });

  useEffect(() => {
    localStorage.setItem('portfolio-theme', theme);

    // Update document class for Tailwind dark mode
    const root = document.documentElement;
    root.classList.remove('dark');
    if (theme === THEMES.DARK) {
      root.classList.add('dark');
    }
  }, [theme]);

  const currentTheme = themeConfigs[theme];

  return (
    <ThemeContext.Provider value={{ theme, setTheme, currentTheme }}>
      <div className={`${currentTheme.fontClass} ${currentTheme.background}`}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export default ThemeContext;
