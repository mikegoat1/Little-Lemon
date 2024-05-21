import React from 'react';
import { HStack, Icon } from '@chakra-ui/react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const Rating = ({ rating, maxRating = 5 }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;
  const emptyStars = maxRating - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <HStack spacing={1}>
      {[...Array(fullStars)].map((_, index) => (
        <Icon as={FaStar} key={index} color="yellow.400" />
      ))}
      {hasHalfStar && <Icon as={FaStarHalfAlt} color="yellow.400" />}
      {[...Array(emptyStars)].map((_, index) => (
        <Icon as={FaRegStar} key={index} color="yellow.400" />
      ))}
    </HStack>
  );
};

export default Rating;
