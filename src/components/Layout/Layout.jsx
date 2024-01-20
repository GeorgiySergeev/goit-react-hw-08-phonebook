import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { MainContainer } from './Layout.styled';
import { Header } from '../Header/Header';
import Footer from 'components/Footer/Footer';

const Layout = () => {
  return (
    <>
      <MainContainer className="main">
        <Header text={'PHONE'} span={'BOOK.app'}></Header>

        <Suspense>
          <Outlet></Outlet>
        </Suspense>
      </MainContainer>
      <Footer></Footer>
    </>
  );
};

export default Layout;
