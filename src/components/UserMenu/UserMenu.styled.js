import styled from '@emotion/styled';
import { FaChevronDown } from 'react-icons/fa6';

export const StyledIcon = styled(FaChevronDown)`
  position: absolute;
  top: 9px;
  right: 15px;
`;
export const User = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;

  padding: 0px 85px;
  /* min-width: 200px; */
  height: 35px;
  border: none;
  color: #39526a;
  font-size: 16px;
  /* background-color: #e05160; */
  border-radius: 18px;
  transition: all 0.3s ease;

  /* :hover {
    background-color: #b3525a;
    color: white;
  } */
`;

export const UserProfile = styled.div`
  position: absolute;
  top: 56px;
  right: -30px;
  width: 200px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: end;
  color: #1b1c1d;
  font-weight: 500;
  background-color: rgb(217, 219, 219, 0.9);
  border-radius: 8px;
  padding: 5px 15px;
`;
