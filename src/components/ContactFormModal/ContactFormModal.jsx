import React, { useState } from 'react';
import { IoCloseSharp } from 'react-icons/io5';
import { Report } from 'notiflix/build/notiflix-report-aio';

import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/contacts-operations';
import { nanoid } from 'nanoid';

import css from './ContactFormModal.module.css';
import { selectContacts } from '../../redux/contacts/contacts-selectors';

const ContactFormModal = ({ closeModal }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

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
      return 'Phone number format +380(ХХ) ХХХ-ХХ-ХХ';
    }

    return '';
  };

  const onChange = e => {
    const { name, value } = e.target;

    setFormData(prevData => ({
      ...prevData,
      [name]: value,
      id: nanoid(),
    }));

    if (name === 'name') {
      setErrors({ ...errors, name: validateName(value) });
    } else if (name === 'number') {
      // Manually format the phone number to match the desired pattern
      const formattedNumber = value.replace(/\D/g, '');
      setErrors({ ...errors, number: validateNumber(formattedNumber) });
    }
  };

  const onSubmit = e => {
    e.preventDefault();

    contacts.some(element => element.name === formData.name)
      ? Report.warning('This contact has already exists')
      : dispatch(addContact(formData));

    reset();
    closeModal();
  };

  const reset = () => {
    setFormData({
      name: '',
      number: '',
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
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
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
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            />
            {errors.number && <span>{errors.number}</span>}
          </div>
        </div>

        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default ContactFormModal;
