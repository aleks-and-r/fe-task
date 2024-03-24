import React from 'react';
import filledStar from '../../resources/icons/star-filled.svg';
import star from '../../resources/icons/star.svg';
import StarFilled from '../icons/StarFilled';
import StarEmpty from '../icons/Star';

const Star = ({ filled }) => {
  if (filled) {
    return <StarFilled color="yellow" width="25px" />;
  } else {
    return <StarEmpty width="25px" />;
  }
};

const StarRating = ({ rating }) => {
  const filledStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < filledStars) {
      stars.push(<Star key={i} filled />);
    } else if (i === filledStars && hasHalfStar) {
      stars.push(<Star key={i} filled />);
    } else {
      stars.push(<Star key={i} />);
    }
  }

  return <div>{stars}</div>;
};

export default StarRating;
