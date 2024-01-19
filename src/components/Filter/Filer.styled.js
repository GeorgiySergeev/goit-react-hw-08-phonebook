import styled from '@emotion/styled';
import { CiFilter } from 'react-icons/ci';

export const FilterWrapper = styled.div`
  position: relative;
`;
export const Input = styled.input`
  /* border-radius: 10px; */
  /* border: 1px solid grey; */
  border-color: transparent;
  height: 30px;
  padding: 0px 15px 0px 25px;
  margin: 10px auto;
  background-color: transparent;
  border-bottom: 1px solid grey;
  :focus {
    outline: none;
  }
`;

export const FilterIcon = styled(CiFilter)`
  position: absolute;
  top: 19px;
  left: -15px;
  width: 20px;
  color: black;
`;
