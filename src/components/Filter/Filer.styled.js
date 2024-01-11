import styled from '@emotion/styled';
import { CiFilter } from 'react-icons/ci';

export const FilterWrapper = styled.div`
  position: relative;
`;
export const Input = styled.input`
  border-radius: 10px;
  border: none;
  height: 35px;
  padding: 0px 15px 0px 25px;
  margin-bottom: 20px;
`;

export const FilterIcon = styled(CiFilter)`
  position: absolute;
  top: 11px;
  left: 4px;
  width: 20px;
`;
