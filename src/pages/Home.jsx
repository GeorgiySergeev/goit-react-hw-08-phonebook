import styled from '@emotion/styled';
import Img from '../components/PhoneImg/PhoneImg';
import GoToAppLink from 'components/GoToAppLink/GoToAppLink';
import TitleSecond from 'components/TitleSecond/TitleSecond';
import HeroTitle from 'components/TitleHero/HeroTitle';

const HomeContainer = styled.section`
  position: relative;
  color: white;
  font-size: 62;
  align-items: center;
  justify-content: space-between;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 80px;

  @media screen and (min-width: 1280px) {
    width: 868px;
    font-size: 82px;
    padding-top: 160px;
  }
`;

const Home = () => {
  return (
    <HomeContainer>
      <HeroTitle
        text={'ORGANIZE YOUR CONTACTS WITH THE PHONE BOOK APP'}
      ></HeroTitle>

      <GoToAppLink />

      <TitleSecond text="EASY. SIMPLE. FREE." />

      <Img />
    </HomeContainer>
  );
};

export default Home;
