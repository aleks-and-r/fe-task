import React, { useRef, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import { useTheme } from '@mui/material/styles';
import CartIcon from '../icons/CartIcon';
import FavoriteIcon from '../icons/FavoriteIcon';
import { Box, Container } from '@mui/material';
import AddIcon from '../icons/PlusIcon';
import Button from './Button';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  badge: {
    animation: '$pop 0.9s ease-in-out forwards',
  },
  '@keyframes pop': {
    '0%': { transform: 'scale(0)' },
    '50%': { transform: 'scale(2)' },
    '100%': { transform: 'scale(1)' },
  },
}));

const Header = ({
  title,
  count,
  isAddToCartButtonVisible,
  handleHeaderAddToCart,
}) => {
  const theme = useTheme();
  const classes = useStyles();

  return (
    <AppBar position="sticky" sx={{ bgcolor: theme.palette.background.paper }}>
      <Container>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography
            noWrap
            variant="h5"
            sx={{ color: theme.palette.primary.main }}
          >
            {title}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              width: 'auto',
              justifyContent: 'space-between',
            }}
          >
            {!isAddToCartButtonVisible ? (
              <Button
                buttonLabel="Add to cart"
                icon={<AddIcon />} // Passing the Icon component as the icon
                onClick={handleHeaderAddToCart}
                color="primary"
                variant="contained"
                sx={{ whiteSpace: 'nowrap' }}
              />
            ) : null}

            <IconButton edge="end" color="inherit" aria-label="menu">
              <FavoriteIcon width="25px" fill={theme.palette.icon.secondary} />
            </IconButton>
            <Badge
              badgeContent={count}
              color="primary"
              classes={{ badge: classes.badge }}
            >
              <IconButton edge="end" aria-label="menu">
                <CartIcon width="25px" fill={theme.palette.icon.secondary} />
              </IconButton>
            </Badge>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
