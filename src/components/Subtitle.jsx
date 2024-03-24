import React from 'react';
import { Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const Subtitle = ({ label, ...muiProps }) => {
  const theme = useTheme();
  return (
    <Typography
      sx={{
        borderBottom: 1,
        borderColor: 'GrayText',
        color: theme.palette.primary.main,
        pb: '6px',
      }}
      {...muiProps}
    >
      {label}
    </Typography>
  );
};

export default Subtitle;
