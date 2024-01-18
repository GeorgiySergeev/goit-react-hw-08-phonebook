import styled, { keyframes } from 'styled-components';
import { PiArrowBendRightUpThin } from 'react-icons/pi';

const bounceAnimation = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }

  40% {
    transform: translateY(-10px);
  }

  60% {
    transform: translateY(-5px);
  }
`;
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    height: auto;
  }
  to {
    opacity: 0;
    height: 0;
    /* overflow: hidden; */
  }
`;

export const TooltipContainer = styled.div`
  font-size: 12px;
  position: absolute;
  top: 65px;
  right: 45px;
  color: #fff;
  padding: 8px;
  border-radius: 45px;
  /* background-color: #333; */
  opacity: 0.5;
  opacity: ${props => (props.visible ? '1' : '0')};
  animation: ${props => (props.visible ? fadeIn : fadeOut)} 3s ease-in-out;
  pointer-events: ${props => (props.visible ? 'auto' : 'none')};
`;

export const StyledArrow = styled(PiArrowBendRightUpThin)`
  width: 45px;
  height: 35px;
  animation: ${bounceAnimation} 1s infinite;
`;
