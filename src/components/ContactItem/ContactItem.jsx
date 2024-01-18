import { FaTrashAlt } from 'react-icons/fa';
// import { CiUser } from 'react-icons/ci';
// import { FaChevronDown } from 'react-icons/fa6';
import { FaUserEdit } from 'react-icons/fa';
import css from './EditForm.module.css';

import {
  AdditionalInfo,
  InfoItem,
  ListItemStyled,
  Name,
  Phone,
} from './ContactItem.styled';
import { useEffect, useRef, useState } from 'react';
// import { Button } from 'components/AddContactIcon/AddContactIcon.styled';
// import { Link } from 'react-router-dom';
// import { getRandomColor } from 'helpers/random-color';
import AvatarComponent from 'components/AvatarComponent/AvatarComponent';
// import { useDispatch } from 'react-redux';
// import { selectContacts } from '../../redux/contacts/contacts-selectors';
// import {
//   editContact,
//   fetchContacts,
// } from '../../redux/contacts/contacts-operations';

export const ListItem = ({ id, name, number, handlerClick, handlerEdit }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  // const dispatch = useDispatch();
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
  // const [contact, setContact] = useState({});
  // const [contact, setContact] = useState({});

  const [formData, setFormData] = useState({
    name,
    number,
    id,
  });

  const handleCheckboxChange = e => {
    setIsChecked(prevChecked => !prevChecked);
  };

  const handleToggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  // const onSubmit = e => {
  //   e.preventDefault();
  //   // console.log(formData);

  //   dispatch(editContact(formData));
  //   dispatch(fetchContacts());
  //   // setContact(formData);
  // };

  const onChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <ListItemStyled isChecked={isChecked} ref={editInfoRef}>
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
              checked={isChecked}
              onChange={handleCheckboxChange}
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
                margin: '0 35px',
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
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 20,
                  alignItems: 'start',
                  paddingTop: 10,
                }}
              >
                <InfoItem>
                  <p>Email:</p> {''}
                </InfoItem>
                <InfoItem>
                  <p>City:</p> {''}
                </InfoItem>
                <InfoItem>
                  <p>Job:</p> {''}
                </InfoItem>
                <InfoItem>
                  <p>Position:</p> {''}
                </InfoItem>
                <InfoItem>
                  <p>Category:</p> {''}
                </InfoItem>
              </div>
              {/*  */}

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
                    <button type="submit" style={{ color: 'tomato' }}>
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
