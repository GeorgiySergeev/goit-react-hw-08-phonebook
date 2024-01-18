import { Route, Routes } from 'react-router-dom';
import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';

import Layout from 'components/Layout/Layout';
import { ErrorPage } from 'pages/ErrorPage';
import { PrivatRoute, PrivatRouteAuth } from 'components/Route/PrivatRoute';

import { current } from '../../redux/auth/auth-operations';

const HomePage = lazy(() => import('../../pages/Home'));
const RegisterPage = lazy(() => import('../../pages/Register'));
const LoginPage = lazy(() => import('../../pages/Login'));
const ContactsPage = lazy(() => import('../../pages/Contacts'));
// const ContactsDetailsPage = lazy(() => import('../../pages/ContactsDetails'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />

          <Route
            path="/contacts"
            element={
              <PrivatRoute>
                <ContactsPage />
              </PrivatRoute>
            }
          />

          {/* <Route
            path="/contacts/:id"
            element={
              <PrivatRoute>
                <ContactsDetailsPage />
              </PrivatRoute>
            }
          /> */}
          <Route
            path="/login"
            element={
              <PrivatRouteAuth>
                <LoginPage />
              </PrivatRouteAuth>
            }
          />
          <Route
            path="/register"
            element={
              <PrivatRouteAuth>
                <RegisterPage />
              </PrivatRouteAuth>
            }
          />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  );
};
