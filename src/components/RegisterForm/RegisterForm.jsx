import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { register } from '../../redux/auth/auth-operations';

import css from '../RegisterForm/RegisterForm.module.css';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(register(formData));
  };
  return (
    <div className={`${css.formContainer}`}>
      <form className={`${css.form}`} onSubmit={handleSubmit}>
        <p className={`${css.formTitle}`}>Create new account</p>
        <div className={`${css.inputContainer}`}>
          <input
            placeholder="Enter name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <span>
            <svg
              fill="none"
              viewBox="0 0 24 24"
              height="20"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinejoin="round"
                fill="#707277"
                strokeLinecap="round"
                strokeWidth="2"
                stroke="#707277"
                d="M6.57757 15.4816C5.1628 16.324 1.45336 18.0441 3.71266 20.1966C4.81631 21.248 6.04549 22 7.59087 22H16.4091C17.9545 22 19.1837 21.248 20.2873 20.1966C22.5466 18.0441 18.8372 16.324 17.4224 15.4816C14.1048 13.5061 9.89519 13.5061 6.57757 15.4816Z"
              ></path>
              <path
                strokeWidth="2"
                fill="#707277"
                stroke="#707277"
                d="M16.5 6.5C16.5 8.98528 14.4853 11 12 11C9.51472 11 7.5 8.98528 7.5 6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5Z"
              ></path>
            </svg>
          </span>
        </div>
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
            type="password"
            name="password"
            value={formData.password}
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
          Submit
        </button>

        <p className={`${css.signupLink}`}>
          Already have an account?
          <Link style={{ color: '#E05160' }} to="/login">
            {' '}
            Log in
          </Link>
        </p>
      </form>
    </div>
  );
};

export default RegisterForm;
