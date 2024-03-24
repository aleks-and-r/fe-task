import React, { useState } from 'react';
import Magnifier from 'react-magnifier';
import ImageHolder from './ImageHolder';
import { Box, Stack } from '@mui/material';

const ImageSwitcher = ({ images }) => {
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <Box
      sx={{ display: 'flex', width: '60%', justifyContent: 'space-between' }}
    >
      <Stack sx={{ display: 'flex', flexDirection: 'column', width: '20%' }}>
        {images.map((image, idx) => (
          <ImageHolder
            key={idx}
            image={image}
            handleClick={setMainImage}
            // width="10vw"
          />
        ))}
      </Stack>
      <Box
        // maxWidth={'22rem'}
        // maxHeight={'22rem'}
        // height={'100%'}
        width="75%"
        sx={{
          position: 'relative',
          border: '1px solid',
          borderColor: 'lightGrey',
          boxSizing: 'content-box',
          ml: 3,
          pb: '75%',
          overflow: 'hidden',
        }}
      >
        <Magnifier
          src={mainImage}
          width={'100%'}
          height={'auto'}
          className="magnifier"
        />
      </Box>
    </Box>
  );
};

export default ImageSwitcher;
