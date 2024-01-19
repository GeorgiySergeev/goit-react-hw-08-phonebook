import styled from '@emotion/styled';
import { IoIosArrowForward } from 'react-icons/io';

export const LinkContainer = styled.div`
  display: flex;
  align-items: end;
  font-size: 30px;
  @media screen and (min-width: 1280px) {
    font-size: 62px;
  }

  transition: transform 0.3s ease-in-out; // Изменено на 0.3s
  :hover {
    transform: translateX(10px);
  }
`;

export const StyledArrow = styled(IoIosArrowForward)`
  animation: moveRightLeft 2s infinite;

  @keyframes moveRightLeft {
    0% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(20px);
    }
    100% {
      transform: translateX(0);
    }
  }
`;
