import React from 'react';
import { Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import InfoCard from './InfoCard';

const PricingAndShipping = ({
  deliveryTime,
  minimumOrderQuantity,
  unit,
  shipping,
  priceBreaks,
  currency,
}) => {
  const theme = useTheme();

  const listItemStyle = {
    color: theme.palette.primary.secondary,
    m: 0,
    mr: '8px',
  };
  return (
    <InfoCard title={'PRICING AND SHIPPING'}>
      <Box sx={{ padding: '10px' }}>
        <List sx={{ listStyle: 'disc', pl: 2 }}>
          <ListItem sx={{ display: 'list-item', padding: 0 }}>
            <span style={{ display: 'inline-flex' }}>
              <ListItemText sx={listItemStyle} primary="Minimum order:" />
              <ListItemText
                sx={{ m: 0 }}
                primary={`${minimumOrderQuantity} ${unit}`}
              />
            </span>
          </ListItem>
          <ListItem sx={{ display: 'list-item', padding: 0 }}>
            <span style={{ display: 'inline-flex' }}>
              <ListItemText sx={listItemStyle} primary="Shipping: " />
              <ListItemText
                sx={{ m: 0 }}
                primary={` ${shipping} ${currency} `}
              />
            </span>
          </ListItem>
          <ListItem sx={{ display: 'list-item', padding: 0 }}>
            <span style={{ display: 'inline-flex' }}>
              <ListItemText sx={listItemStyle} primary="Delivery:" />
              <ListItemText sx={{ m: 0 }} primary={`${deliveryTime}`} />
            </span>
          </ListItem>
        </List>
        <Typography
          variant="subtitle1"
          sx={{ color: theme.palette.primary.secondary }}
        >
          Price breaks
        </Typography>
        <Box>
          {Object.entries(priceBreaks).map(([key, value]) => (
            <Typography variant="subtitle2" key={key}>
              ex {key} {unit} {value} {currency}/{unit}
            </Typography>
          ))}
        </Box>
      </Box>
    </InfoCard>
  );
};

export default PricingAndShipping;
