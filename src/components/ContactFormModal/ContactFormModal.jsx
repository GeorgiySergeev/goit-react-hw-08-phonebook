import React, { useState } from 'react';
import css from './ContactFormModal.module.css';
import { IoCloseSharp } from 'react-icons/io5';

import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/contacts-operations';
import { nanoid } from 'nanoid';

const ContactFormModal = ({ closeModal }) => {
  const dispatch = useDispatch();
  // const contacts = useSelector(selectContacts);

  const [errors, setErrors] = useState({
    name: '',
    number: '',
  });

  const [formData, setFormData] = useState({
    name: '',
    number: '',
    id: '',
  });

  const validateName = name => {
    if (name.trim().length < 2) {
      return 'Name should be at least 2 characters long';
    }
    return '';
  };

  const validateNumber = number => {
    const regex = /^\+38 \(\d{6}\)$/;

    if (!regex.test(number)) {
      return 'Phone number should be in the format +38 (123456)';
    }

    return '';
  };

  const onChange = e => {
    const { name, value } = e.target;

    if (name === 'name') {
      setErrors({ ...errors, name: validateName(value) });
    } else if (name === 'number') {
      setErrors({ ...errors, number: validateNumber(value) });
    }
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
      id: nanoid(),
    }));
  };

  const onSubmit = e => {
    e.preventDefault();
    console.log(formData);
    dispatch(addContact(formData));

    reset();
    closeModal();
  };

  const reset = () => {
    setFormData({
      name: '',
      number: '',
      category: '',
    });
  };

  return (
    <section className={`${css.container}`}>
      <button className={css['close-button']} onClick={closeModal}>
        <IoCloseSharp />
      </button>
      <header>New Contact</header>
      <form className={`${css.form}`} onSubmit={onSubmit}>
        <div className={css['input-box']}>
          <label>Full Name</label>
          <input
            required=""
            placeholder="Enter full name"
            type="text"
            name="name"
            value={formData.name}
            onChange={onChange}
          />
          {errors.name && <span>{errors.name}</span>}
        </div>
        <div className={css['column']}>
          <div className={css['input-box']}>
            <label>Phone Number</label>
            <input
              required=""
              placeholder="Enter phone number"
              type="tel"
              name="number"
              value={formData.number}
              onChange={onChange}
            />
            {errors.name && <span>{errors.number}</span>}
          </div>
        </div>

        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default ContactFormModal;
