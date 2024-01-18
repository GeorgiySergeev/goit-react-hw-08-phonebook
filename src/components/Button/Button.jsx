import { StyledButton } from './Button.styled';

const Button = ({ eventHandler, text }) => {
  return <StyledButton onClick={() => eventHandler()}>{text}</StyledButton>;
};

export default Button;
