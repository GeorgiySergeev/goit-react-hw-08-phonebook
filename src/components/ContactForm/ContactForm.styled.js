import styled from '@emotion/styled';

export const Form = styled.form`
  padding: 5px;
  /* outline: auto; */
  display: flex;
  flex-direction: column;
  width: 375px;
  height: 160px;
  gap: 15px;
  margin-bottom: 25px;
  padding: 25px 10px;
  border: 1px solid rgba(9, 19, 17, 0.1);
  border-radius: 10px;
  -webkit-box-shadow: inset 0px 0px 17px 9px rgba(0, 0, 0, 0.08);
  -moz-box-shadow: inset 0px 0px 17px 9px rgba(0, 0, 0, 0.08);
  box-shadow: inset 0px 0px 17px 9px rgba(0, 0, 0, 0.08);
`;

export const Button = styled.button`
  display: block;
  width: 95px;
  height: 31px;

  padding: 8px 0px;
  margin-left: auto;
  margin-right: auto;
  color: white;
  background-color: rgba(9, 19, 17, 0.5);
  font-size: 12;
  border-radius: 10px;
  border: none;
  :hover {
    scale: 101%;
    background-color: rgba(89, 19, 27, 0.5);
  }
`;

export const Input = styled.input`
  height: 35px;
  border-radius: 10px;
  padding: 0px 10px;
  border: transparent;
  background-color: aliceblue;
`;
