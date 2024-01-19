import styled from '@emotion/styled';

export const Img = styled.img`
  position: absolute;
  width: 400px;
  opacity: 0.4;
  top: 200px;
  right: 30px;
  pointer-events: none;

  @media screen and (min-width: 1280px) {
    width: 700px;
    top: 300px;
    right: -330px;
  }
`;
