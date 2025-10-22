import React from 'react';
import { useTheme } from '../hooks/useTheme';

const ThemeTogglerButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} style={{ padding: '10px', fontSize: '16px' }}>
      {theme === 'light' ? 'გადასვლა Dark რეჟიმზე' : 'გადასვლა Light რეჟიმზე'}
    </button>
  );
};

export default ThemeTogglerButton;