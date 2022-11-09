import styled from '@emotion/styled';
import { ButtonStyledProps } from './types';

const StyledButton = styled.button<ButtonStyledProps>`
  background-color: ${props => props.theme.colors[props.variant || 'primary']};
  padding: 10px;
  border: none;
  border-radius: 15px;
  min-width: 100px;
  font-size: 15px;
`;

export default StyledButton;
