import React from 'react';
import Box from '@mui/material/Box';
import Subtitle from './Subtitle';
import { useTheme } from '@mui/material/styles';

const InfoCard = ({ title, children }) => {
  const theme = useTheme();
  return (
    <Box
      bgcolor={theme.palette.background.paper}
      sx={{ width: '48%', padding: '12px' }}
    >
      <Subtitle variant="h6" label={title} />
      {children}
    </Box>
  );
};

export default InfoCard;
