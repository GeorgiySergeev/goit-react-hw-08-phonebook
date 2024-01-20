import { useEffect, useRef, useState } from 'react';

import { FaTrashAlt } from 'react-icons/fa';
import { FaUserEdit } from 'react-icons/fa';

import ContactInfo from './AdditionalInfo/AdditionalInfo';
import AvatarComponent from 'components/AvatarComponent/AvatarComponent';
import css from './EditForm.module.css';

import {
  AdditionalInfo,
  ListItemStyled,
  Name,
  Phone,
} from './ContactItem.styled';
// import { getRandomColor } from 'helpers/random-color';
// import { CiUser } from 'react-icons/ci';

export const ListItem = ({
  id,
  name,
  number,
  handlerClick,
  handlerEdit,
  setContactIdsToDelete,
  contactsIdsToDelete,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  // const [isChecked, setIsChecked] = useState(false);
  const [formData, setFormData] = useState({
    name,
    number,
    id,
  });
  const editInfoRef = useRef();

  useEffect(() => {
    const handleClickOutside = event => {
      if (editInfoRef.current && !editInfoRef.current.contains(event.target)) {
        setIsExpanded(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const onChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleToggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleCheckboxStatus = selectedContactId => {
    setContactIdsToDelete(
      contactsIdsToDelete.includes(selectedContactId)
        ? contactsIdsToDelete.filter(id => id !== selectedContactId)
        : [...contactsIdsToDelete, selectedContactId]
    );
  };

  return (
    <>
      <ListItemStyled ref={editInfoRef} isExpanded={isExpanded}>
        <div
          style={{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <input
              id={id}
              type="checkbox"
              name="contactToDelete"
              checked={contactsIdsToDelete.includes(id)}
              onChange={() => handleCheckboxStatus(id)}
            />
            <AvatarComponent name={name}></AvatarComponent>
            {/* <Avatar color={getRandomColor()} /> */}
            {/* <CiUser /> */}
            <Name>{name}</Name>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Phone>{number}</Phone>

            <FaTrashAlt
              style={{
                cursor: 'pointer',
                margin: '0 15px',
              }}
              onClick={() => {
                handlerClick(id);
              }}
            ></FaTrashAlt>
            <FaUserEdit
              style={{
                cursor: 'pointer',
                color: '#E05160',
              }}
              onClick={handleToggleExpand}
            />
          </div>
        </div>
        {isExpanded && (
          <>
            <AdditionalInfo>
              <ContactInfo />

              <div className={css['login-box']}>
                <form
                  // action="submit"
                  onSubmit={e => {
                    e.preventDefault();
                    handlerEdit(formData);
                  }}
                >
                  <div className={css['user-box']}>
                    <input
                      type="text"
                      required=""
                      value={formData.name}
                      onChange={onChange}
                      name="name"
                      placeholder=""
                    />
                    <label>Name</label>
                  </div>
                  <div className={css['user-box']}>
                    <input
                      type="text"
                      required=""
                      placeholder=""
                      value={formData.number}
                      onChange={onChange}
                      name="number"
                    />
                    <label>Number</label>
                  </div>
                  <center>
                    <button
                      type="submit"
                      style={{ color: 'tomato', fontSize: 18 }}
                    >
                      Edit contact
                      <span></span>
                    </button>
                  </center>
                </form>
              </div>
            </AdditionalInfo>
          </>
        )}
      </ListItemStyled>
    </>
  );
};
