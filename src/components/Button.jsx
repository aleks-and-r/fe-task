import React from 'react';
import { Button as MuiButton } from '@mui/material';

const Button = ({ buttonLabel, icon, onClick, ...muiProps }) => {
  return (
    <MuiButton onClick={onClick} startIcon={icon} {...muiProps}>
      {buttonLabel}
    </MuiButton>
  );
};

export default Button;
