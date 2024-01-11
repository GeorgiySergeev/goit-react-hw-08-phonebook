import { FaTrashAlt } from 'react-icons/fa';

import { ListItemStyled } from './ContactItem.styled';

export const ListItem = ({ id, name, number, handlerClick }) => {
  return (
    <ListItemStyled>
      <p>{name}:</p>
      <span style={{ marginRight: 'auto' }}> {number}</span>
      <FaTrashAlt
        style={{
          cursor: 'pointer',
        }}
        onClick={() => {
          handlerClick(id);
        }}
      >
        Delite
      </FaTrashAlt>
    </ListItemStyled>
  );
};
