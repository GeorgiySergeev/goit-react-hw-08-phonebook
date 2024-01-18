import React from 'react';

export const ErrorPage = ({ text }) => {
  return (
    <div style={{ color: 'tomato' }}>
      ErrorPage! Upps, something gose wrong! Error message: {text}
    </div>
  );
};
