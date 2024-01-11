import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filterSlise';

import { Input, FilterWrapper, FilterIcon } from './Filer.styled';

export const Filter = () => {
  const dispatch = useDispatch();

  const onFilterInputChange = e => {
    dispatch(setFilter(e.currentTarget.value));
  };

  return (
    <FilterWrapper>
      <Input
        type="text"
        placeholder="Enter name..."
        onChange={onFilterInputChange}
      />
      <FilterIcon></FilterIcon>
    </FilterWrapper>
  );
};
