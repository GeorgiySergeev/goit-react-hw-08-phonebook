import styled from '@emotion/styled';

const Title = styled.h2`
  position: absolute;
  bottom: -250px;
  right: 0px;

  font-size: 32px;
  text-align: right;
  /* color: rgb(47, 46, 45); */
  z-index: 1;

  @media screen and (min-width: 1280px) {
    width: 868px;
    font-size: 62px;
  }
`;

const TitleSecond = ({ text }) => {
  return <Title>{text}</Title>;
};

export default TitleSecond;
