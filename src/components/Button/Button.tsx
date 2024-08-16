import React from 'react';
import {Icon} from '@components';
import {Container, Label} from './Button.styles.ts';
import type {ButtonProps} from './Button.types.ts';

const Button = ({label, onPress, ...props}: ButtonProps) => {
  return (
    <Container testID={'button-container'} onPress={onPress} {...props}>
      <Icon name={'bag'} />
      <Label>{label}</Label>
    </Container>
  );
};

export default Button;
