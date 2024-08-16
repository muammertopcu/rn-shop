import React from 'react';
import {Container, EmptyText} from './EmptyCard.styles.ts';

const EmptyCard = ({label}: {label: string}) => {
  return (
    <Container>
      <EmptyText>{label}</EmptyText>
    </Container>
  );
};

export default EmptyCard;
