import React from 'react';
import {Icon} from '@components';
import {Container, Label} from './Button.styles.ts';
import type {ButtonProps} from './Button.types.ts';

const Button = ({label, onPress, icon, ...props}: ButtonProps) => {
  return (
    <Container testID={'button-container'} onPress={onPress} {...props}>
      {icon && <Icon name={icon} />}
      <Label>{label}</Label>
    </Container>
  );
};

export default Button;
