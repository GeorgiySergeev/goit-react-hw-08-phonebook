import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { login } from '../../redux/auth/auth-operations';

import css from '../LoginForm/Loginform.module.css';

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [pass, setPass] = useState('password');

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const showPassword = () => {
    setPass(prev => (prev === 'password' ? 'text' : 'password'));
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    await dispatch(login(formData));

    navigate('/contacts');
  };

  return (
    <div className={`${css.formContainer}`}>
      <form className={`${css.form}`} onSubmit={handleSubmit}>
        <p className={`${css.formTitle}`}>Log in to your account</p>
        <div className={`${css.inputContainer}`}>
          <input
            placeholder="Enter email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <span>
            <svg
              stroke="currentColor"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                strokeWidth="2"
                strokeLinejoin="round"
                strokeLinecap="round"
              ></path>
            </svg>
          </span>
        </div>
        <div className={`${css.inputContainer}`}>
          <input
            placeholder="Enter password"
            type={pass}
            name="password"
            value={formData.password}
            onChange={handleChange}
          />

          <span>
            <svg
              onClick={showPassword}
              stroke={pass === 'text' ? 'red' : 'currentColor'}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                strokeWidth="2"
                strokeLinejoin="round"
                strokeLinecap="round"
              ></path>
              <path
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                strokeWidth="2"
                strokeLinejoin="round"
                strokeLinecap="round"
              ></path>
            </svg>
          </span>
        </div>
        <button className={`${css.submit}`} type="submit">
          Log in
        </button>

        <p className={`${css.signupLink}`}>
          No account?
          <Link style={{ color: '#E05160' }} to="/register">
            {'  '}
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
