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
    background: 'bg-white',
    text: 'text-gray-900',
    textMuted: 'text-gray-600',
    cardBg: 'bg-white',
    cardBorder: 'border-gray-200',
    navBg: 'bg-white/80 backdrop-blur-md border-gray-200',
    heroBg: 'bg-gradient-to-br from-gray-50 to-gray-100',
    sectionBg: 'bg-white',
    sectionAltBg: 'bg-gray-50',
    buttonPrimary: 'bg-gray-900 text-white hover:bg-gray-800',
    buttonSecondary: 'bg-white text-gray-900 border border-gray-300 hover:bg-gray-50',
    accentGradient: 'from-cyan-500 to-purple-600',
    accentText: 'text-cyan-600',
    footerBg: 'bg-gray-50',
  },
  dark: {
    name: 'Dark',
    background: 'bg-gray-900',
    text: 'text-white',
    textMuted: 'text-gray-300',
    cardBg: 'bg-gray-800',
    cardBorder: 'border-gray-700',
    navBg: 'bg-gray-900/80 backdrop-blur-md border-gray-700',
    heroBg: 'bg-gradient-to-br from-gray-900 to-gray-800',
    sectionBg: 'bg-gray-900',
    sectionAltBg: 'bg-gray-800',
    buttonPrimary: 'bg-cyan-500 text-white hover:bg-cyan-600',
    buttonSecondary: 'bg-gray-700 text-white border border-gray-600 hover:bg-gray-600',
    accentGradient: 'from-cyan-400 to-purple-500',
    accentText: 'text-cyan-400',
    footerBg: 'bg-gray-800',
  },
  professional: {
    name: 'Professional',
    background: 'bg-slate-900',
    text: 'text-gray-100',
    textMuted: 'text-gray-300',
    cardBg: 'bg-slate-800',
    cardBorder: 'border-slate-700',
    navBg: 'bg-slate-900/90 backdrop-blur-md border-slate-700',
    heroBg: 'bg-gradient-to-br from-slate-900 to-slate-800',
    sectionBg: 'bg-slate-900',
    sectionAltBg: 'bg-slate-800',
    buttonPrimary: 'bg-blue-600 text-white hover:bg-blue-700',
    buttonSecondary: 'bg-slate-700 text-white border border-slate-600 hover:bg-slate-600',
    accentGradient: 'from-blue-500 to-indigo-600',
    accentText: 'text-blue-400',
    footerBg: 'bg-slate-800',
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
    root.classList.remove('dark', 'professional');
    if (theme === THEMES.DARK) {
      root.classList.add('dark');
    }
  }, [theme]);

  const currentTheme = themeConfigs[theme];

  return (
    <ThemeContext.Provider value={{ theme, setTheme, currentTheme }}>
      <div className={currentTheme.background}>
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
