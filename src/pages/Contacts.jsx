import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Conatiner, MainWrapper, Note } from '../components/App/App.styled';
import { Header } from 'components/ContactHeader/ContactHeader';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Loader } from 'components/Loader/Loader';
import AddContactIcon from 'components/AddContactIcon/AddContactIcon';
import AddContactModal from 'components/AddContactModal/AddContactModal';
import Tooltip from 'components/ToolTip/ToolTip';

import {
  selectContacts,
  selectLoading,
} from '../redux/contacts/contacts-selectors';

import { fetchContacts } from '../redux/contacts/contacts-operations';
import { selectIsLogedIn } from '../redux/auth/auth-selectors';

const Contacts = () => {
  const [modal, setModal] = useState(false);

  const contacts = useSelector(selectContacts);
  const isLoggedin = useSelector(selectIsLogedIn);

  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch, isLoggedin]);

  const modalHandler = () => {
    setModal(prev => !prev);
  };

  return (
    <>
      {isLoading && <Loader />}

      {!isLoggedin ? (
        <h1>Please Log In</h1>
      ) : (
        <Conatiner>
          {contacts.length !== 0 && <Tooltip message="To add contact " />}
          {contacts.length !== 0 && (
            <Header text={'Contacts'}>
              <Filter />
              <AddContactIcon eventHandler={modalHandler} />
            </Header>
          )}
          <MainWrapper className={contacts.length === 0 ? 'empty' : ''}>
            {contacts.length === 0 ? (
              <Note>
                Your phonebook is empty! Add contact
                <AddContactIcon eventHandler={modalHandler} />
              </Note>
            ) : (
              <ContactList />
            )}
          </MainWrapper>
        </Conatiner>
      )}
      {modal && <AddContactModal closeModal={modalHandler} />}
    </>
  );
};

export default Contacts;
