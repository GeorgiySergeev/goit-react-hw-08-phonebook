import { useDispatch, useSelector } from 'react-redux';
import ReactPaginate from 'react-paginate';
import css from '../Pagination/Pagination.module.css';

import { HeadText, List, ListHeader } from './ContactList.styled';
import { ListItem } from 'components/ContactItem/ContactItem';

import { FaTrashAlt } from 'react-icons/fa';

import { Report } from 'notiflix/build/notiflix-report-aio';
import { Confirm } from 'notiflix/build/notiflix-confirm-aio';

import { selectVisibleContacts } from '../../redux/selectors';
import {
  deleteContact,
  editContact,
} from '../../redux/contacts/contacts-operations';

import { useState } from 'react';

export const ContactList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const visibleContacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();
  const [isCheckedAll, setIsheckedAll] = useState(false);
  const [contactsIdsToDelete, setContactIdsToDelete] = useState([]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentContacts = visibleContacts.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const handlePageChange = selectedPage => {
    setCurrentPage(selectedPage + 1);
  };
  const onEditContact = async data => {
    dispatch(editContact(data));
  };

  const onDeliteContact = id => {
    Confirm.show(
      ' ',
      'Delete contact?',
      'Yes',
      'No',
      () => {
        dispatch(deleteContact(id));
      },
      () => {
        return;
      }
    );
  };

  const handleAllCheckboxChange = () => {
    setIsheckedAll(!isCheckedAll);
    !isCheckedAll
      ? setContactIdsToDelete(currentContacts.map(item => item.id))
      : setContactIdsToDelete([]);
  };

  const handleDeleteSelected = () => {
    Confirm.show(
      ' ',
      'Delete contact?',
      'Yes',
      'No',
      () => {
        const deletePromises = contactsIdsToDelete.map(id =>
          dispatch(deleteContact(id))
        );

        Promise.all(deletePromises)
          .then(() => {
            setContactIdsToDelete([]);
          })
          .catch(error => {
            console.error('Error deleting contacts:', error);
            Report.failure('Invalid email or password!');
          })
          .finally(setIsheckedAll(false));
      },
      () => {
        return;
      },
      {}
    );
  };

  return (
    <>
      {/* <h4>{title}</h4> */}
      <List>
        <ListHeader>
          <input
            style={{ marginRight: 35, position: 'absolute' }}
            type="checkbox"
            checked={isCheckedAll}
            onChange={handleAllCheckboxChange}
          />
          <HeadText style={{ marginRight: 35, marginLeft: 60 }}>Name</HeadText>
          {isCheckedAll || contactsIdsToDelete.length > 0 ? (
            <span
              style={{
                display: 'flex',
                fontSize: 14,
                gap: 10,
                marginRight: 'auto',
              }}
            >
              <FaTrashAlt
                style={{ color: 'tomato', cursor: 'pointer' }}
                onClick={handleDeleteSelected}
              >
                Delete Selected
              </FaTrashAlt>
            </span>
          ) : (
            ''
          )}

          <HeadText> Pnone number</HeadText>
        </ListHeader>
        {currentContacts.map(({ name, id, number }) => (
          <ListItem
            checkedAll={isCheckedAll}
            key={id}
            name={name}
            number={number}
            handlerClick={onDeliteContact}
            handlerEdit={onEditContact}
            setContactIdsToDelete={setContactIdsToDelete}
            contactsIdsToDelete={contactsIdsToDelete}
            id={id}
          ></ListItem>
        ))}

        {visibleContacts.length > itemsPerPage && (
          <ReactPaginate
            className={css.pagination}
            pageCount={Math.ceil(visibleContacts.length / itemsPerPage)}
            pageRangeDisplayed={5}
            marginPagesDisplayed={2}
            onPageChange={({ selected }) => handlePageChange(selected)}
            containerClassName={'pagination'}
            activeClassName={'active'}
          />
        )}
      </List>
    </>
  );
};

//
