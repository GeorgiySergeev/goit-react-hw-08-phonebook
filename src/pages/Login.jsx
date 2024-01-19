import LoginForm from 'components/LoginForm/LoginForm';
import { useSelector } from 'react-redux';
import { selectAuthError } from '../redux/auth/auth-selectors';
import { Report } from 'notiflix/build/notiflix-report-aio';

const Login = () => {
  const error = useSelector(selectAuthError);

  console.log('error', error);

  return (
    <>
      {error && Report.failure('Invalid email or password!')}
      <LoginForm />
    </>
  );
};

export default Login;
