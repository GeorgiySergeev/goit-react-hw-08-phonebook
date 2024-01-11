import { useDispatch, useSelector } from 'react-redux';

import { List } from './ContactList.styled';
import { ListItem } from 'components/ContactItem/ContactItem';

import { selectVisibleContacts } from '../../redux/selectors';
import { deleteContact } from '../../redux/operations';

export const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  const onDeliteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      {/* <h4>{title}</h4> */}
      <List>
        {visibleContacts.map(({ name, id, number }) => (
          <ListItem
            key={id}
            name={name}
            number={number}
            handlerClick={onDeliteContact}
            id={id}
          ></ListItem>
        ))}
      </List>
    </>
  );
};
