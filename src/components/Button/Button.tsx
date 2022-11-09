import React from 'react';
import { ButtonProps } from './types';
import StyledButton from './StyledButton';

function Button(props: ButtonProps) {
  const { variant = 'primary', children, ...rest } = props;

  return (
    <StyledButton variant={variant} {...rest}>
      {children}
    </StyledButton>
  );
}

export default Button;
