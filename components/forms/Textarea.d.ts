import React from 'react';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  helper?: string;
  error?: string;
  rows?: number;
  fullWidth?: boolean;
}

export function Textarea(props: TextareaProps): JSX.Element;
