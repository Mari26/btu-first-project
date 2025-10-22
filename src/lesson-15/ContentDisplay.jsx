import React from 'react';
// 1. იმპორტის მისამართი შეიცვალა
import { useTheme } from '../hooks/useTheme';

const ContentDisplay = () => {
  const { theme } = useTheme();

  return (
    <p style={{ marginTop: '30px' }}>
      ახლანდელი აქტიური თემაა: <strong>{theme}</strong>
    </p>
  );
};

export default ContentDisplay;