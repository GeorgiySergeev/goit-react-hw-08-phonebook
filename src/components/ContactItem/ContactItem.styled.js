import styled from '@emotion/styled';
import { CiUser } from 'react-icons/ci';

export const ListItemStyled = styled.li`
  /* width: 100%; */
  /* height: 65px; */
  font-size: 20px;
  margin-bottom: 5px;
  padding-top: 15px;
  display: flex;
  flex-direction: column;
  /* align-items: start; */
  gap: 50%;

  flex-wrap: wrap;

  align-items: center;

  justify-content: start;

  border: 1px solid rgb(216, 216, 216, 0.4);
  border-radius: 10px;
  padding: 5px 10px;
  /* background-color: ${props =>
    props.isChecked ? '#555659' : ' #39526A'}; */
  background-color: ${props => (props.isExpanded ? '#555659' : ' #39526A')};
`;

export const Name = styled.p`
  width: 250px;
  text-align: start;
  /* margin-right: auto; */
  /* border-right: 1px solid black; */
`;

export const Phone = styled.p`
  /* width: 90%; */
  /* margin-right: auto; */
  text-align: start;
  /* border-right: 1px solid black; */
`;

export const Avatar = styled(CiUser)`
  width: 35px;
  height: 35px;
  padding: 15px;
  border-radius: 50%;
  margin: 0px 15px;

  /* background-color: ${props => props.color}; */
`;

export const AdditionalInfo = styled.ul`
  width: 100%;
  display: flex;
  /* flex-wrap: wrap; */
  gap: 200px;
  /* flex-direction: column; */
  align-items: start;
  justify-content: flex-end;
  border-top: 1px solid red;
  flex-direction: row-reverse;
  align-items: center;
`;
