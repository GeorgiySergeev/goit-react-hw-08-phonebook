import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectContacts } from '../redux/contacts/contacts-selectors';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { editContact } from '../redux/contacts/contacts-operations';
import { RiArrowGoBackFill } from 'react-icons/ri';

const ContactsDetails = () => {
  const contacts = useSelector(selectContacts);
  const { id } = useParams();
  const dispatch = useDispatch();
  const [contact, setContact] = useState({});

  const [formData, setFormData] = useState({
    name: '',
    number: '',
    id,
  });

  useEffect(() => {
    const contactToEdit = contacts.find(contact => contact.id === id);

    setContact(contactToEdit);
  }, [contacts, id]);

  const onSubmit = e => {
    e.preventDefault();
    dispatch(editContact(formData));
    setContact(formData);
  };
  // const { name, number } = contact;

  const onChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <Link>
        <RiArrowGoBackFill />
      </Link>

      <form action="submit" onSubmit={onSubmit}>
        <input
          type="text"
          value={formData.name}
          onChange={onChange}
          name="name"
          placeholder="Name"
        />
        <input
          type="text"
          value={formData.number}
          onChange={onChange}
          name="number"
          placeholder="Number"
        />
        <button type="submit">Edit contact</button>
      </form>

      <p>{contact.name}</p>
      <h2>{contact.number}</h2>
    </div>
  );
};

export default ContactsDetails;
