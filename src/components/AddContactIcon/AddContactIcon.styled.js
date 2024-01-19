import styled from 'styled-components';
import { FaPlus } from 'react-icons/fa';

export const AddIcon = styled(FaPlus)`
  position: absolute;
  top: -10px;
  right: -4px;
  width: 15px;
  cursor: pointer;
  transition: all 0.3s ease;

  :hover {
    scale: 1.15;
  }
`;

export const Text = styled.p`
  font-size: 12px;
  /* margin-bottom: 10px; */
`;

export const Container = styled.div`
  position: relative;
  right: 19px;
  display: flex;
  align-items: center;
  margin-left: 15px;
`;
export const Button = styled.button`
  /* width: 45px; */
  /* height: 45px; */
  border-radius: 50%;
  border: none;
  background-color: transparent;
  transition: all 0.3s ease;
`;
