import React from 'react';
import Alert from 'react-bootstrap/Alert';

export default function MessageBox({
  variant = 'info',
  children, // Corrected typo here
}: {
  variant?: string;
  children: React.ReactNode; // Corrected typo here
}) {
  return <Alert variant={variant || 'info'}>{children}</Alert>;
}
