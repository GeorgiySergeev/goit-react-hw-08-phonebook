import { useDispatch, useSelector } from 'react-redux';

import { List, ListHeader } from './ContactList.styled';
import { ListItem } from 'components/ContactItem/ContactItem';

import { selectVisibleContacts } from '../../redux/selectors';
import {
  deleteContact,
  editContact,
} from '../../redux/contacts/contacts-operations';
// import { ListItemStyled } from 'components/ContactItem/ContactItem.styled';
import { useState } from 'react';

export const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();
  const [isCheckedAll, setIsheckedAll] = useState(false);

  // console.log(visibleContacts);
  const onEditContact = async data => {
    dispatch(editContact(data));
  };

  const onDeliteContact = id => {
    dispatch(deleteContact(id));
  };

  const handleCheckboxChange = () => {
    setIsheckedAll(!isCheckedAll);
  };

  const handleDeleteSelected = () => {};

  return (
    <>
      {/* <h4>{title}</h4> */}
      <List>
        <ListHeader>
          <input
            style={{ marginRight: 35, position: 'absolute' }}
            type="checkbox"
            checked={isCheckedAll}
            onChange={handleCheckboxChange}
          />
          <p style={{ marginRight: 35, marginLeft: 35 }}>Name</p>
          {isCheckedAll && (
            <span
              style={{
                display: 'flex',
                fontSize: 14,
                gap: 10,
                marginRight: 'auto',
              }}
            >
              <button
                style={{ color: 'tomato' }}
                onClick={handleDeleteSelected}
              >
                Delete Selected
              </button>
            </span>
          )}

          <p style={{ marginRight: 100 }}> Pnone number</p>
        </ListHeader>
        {visibleContacts.map(({ name, id, number }) => (
          <ListItem
            checkedAll={isCheckedAll}
            key={id}
            name={name}
            number={number}
            handlerClick={onDeliteContact}
            handlerEdit={onEditContact}
            id={id}
          ></ListItem>
        ))}
      </List>
    </>
  );
};

//
