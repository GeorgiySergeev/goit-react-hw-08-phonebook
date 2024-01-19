import { Route, Routes } from 'react-router-dom';
import { useEffect, lazy, Suspense } from 'react';
import { useDispatch } from 'react-redux';

import Layout from 'components/Layout/Layout';
import { ErrorPage } from 'pages/ErrorPage';
import {
  PrivatRoute,
  PrivatRouteAuth,
} from 'components/Navigation/PrivatRoute';

import { current } from '../../redux/auth/auth-operations';

import { Loader } from 'components/Loader/Loader';

const HomePage = lazy(() => import('../../pages/Home'));
const RegisterPage = lazy(() => import('../../pages/Register'));
const LoginPage = lazy(() => import('../../pages/Login'));
const ContactsPage = lazy(() => import('../../pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

  return (
    <>
      <Suspense fallback={<Loader />}>
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
      </Suspense>
    </>
  );
};
