import React from 'react';

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