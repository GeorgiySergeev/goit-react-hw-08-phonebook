import styled from '@emotion/styled';

export const ListContainer = styled.div`
  height: 60%;
`;
export const List = styled.ul`
  width: 700px;
  min-height: 700px;
  text-align: center;
  /* margin-top: 25px; */
  border: 1px solid rgba(9, 19, 17, 0.1);
  border-radius: 10px;
  -webkit-box-shadow: inset 0px 0px 17px 9px rgba(0, 0, 0, 0.08);
  -moz-box-shadow: inset 0px 0px 17px 9px rgba(0, 0, 0, 0.08);
  box-shadow: inset 0px 0px 17px 9px rgba(0, 0, 0, 0.08);
  padding: 25px 10px;
`;

export const ListItem = styled.li`
  font-size: 18px;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  gap: 25px;
`;
