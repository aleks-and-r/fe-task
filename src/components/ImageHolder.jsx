import { Box } from '@mui/material';
import React, { useState } from 'react';
import packageImg from '../../resources/icons/package.svg';

const ImageHolder = ({ width, handleClick, image }) => {
  const [url, setUrl] = useState(image);
  const styles = {
    padding: '1rem',
    border: '1px solid',
    borderColor: 'lightGrey',
    mb: '1rem',
    width: width,
    cursor: 'pointer',
  };

  const onImageClick = () => {
    handleClick(image);
  };

  const onError = () => setUrl(packageImg);

  return (
    <Box onClick={onImageClick} sx={styles}>
      <img src={url ? url : packageImg} onError={onError} width="100%" />
    </Box>
  );
};

export default ImageHolder;
