import Img from '../components/PhoneImg/PhoneImg';
import GoToAppLink from 'components/GoToAppLink/GoToAppLink';
import TitleSecond from 'components/TitleSecond/TitleSecond';
import HeroTitle from 'components/TitleHero/HeroTitle';

const Home = () => {
  const styles = {
    position: 'relative',
    color: 'white',
    fontSize: 42,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: '30px',
    paddingRight: '30px',
    paddingTop: '160px',
  };

  return (
    <div style={styles}>
      <HeroTitle
        text={'ORGANIZE YOUR CONTACTS WITH THE PHONE BOOK APP'}
      ></HeroTitle>
      <GoToAppLink />

      <TitleSecond text="EASY. SIMPLE. FREE." />

      <Img />
    </div>
  );
};

export default Home;
