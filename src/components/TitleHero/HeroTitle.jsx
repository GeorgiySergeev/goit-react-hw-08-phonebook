import styled from '@emotion/styled';

const Title = styled.h1`
  text-align: left;
  width: 430px;
  font-size: 48px;
  margin-bottom: 30px;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    width: 868px;
    font-size: 82px;
  }
`;

const HeroTitle = ({ text }) => {
  return <Title>{text}</Title>;
};

export default HeroTitle;
