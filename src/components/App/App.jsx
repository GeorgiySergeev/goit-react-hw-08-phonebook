import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Conatiner, MainWrapper, Note } from './App.styled';
import { Header } from 'components/Header/Header';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { LoadingSpinner } from 'components/Loader/Loader';
import { ErrorPage } from 'components/ErrorPage/ErrorPage';

import {
  selectContacts,
  selectLoading,
  selectError,
} from '../../redux/selectors';

import { fetchContacts } from '../../redux/operations';

export function App() {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {isLoading && <LoadingSpinner />}

      {error ? (
        <ErrorPage text={error} />
      ) : (
        <Conatiner>
          <Header>
            <Filter />
          </Header>
          <MainWrapper className={contacts.length === 0 ? 'empty' : ''}>
            <ContactForm></ContactForm>

            {contacts.length === 0 ? (
              <Note>Your phonebook is empty! Add a contact.</Note>
            ) : (
              <ContactList />
            )}
          </MainWrapper>
        </Conatiner>
      )}
    </>
  );
}
