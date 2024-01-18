import styled from '@emotion/styled';

export const HeaderContainer = styled.div`
  position: relative;
  /* background-color: #e05160; */
  padding: 20px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #39526a;

  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;

  background: rgb(237, 237, 237);
  background: linear-gradient(
    90deg,
    rgba(237, 237, 237, 1) 0%,
    rgba(237, 237, 237, 1) 49%,
    rgba(178, 203, 208, 1) 98%
  );

  box-shadow: 0px 10px 5px -4px rgba(0, 0, 0, 0.17);
  -webkit-box-shadow: 0px 10px 5px -4px rgba(0, 0, 0, 0.17);
  -moz-box-shadow: 0px 10px 5px -4px rgba(0, 0, 0, 0.17);
  z-index: 10;
`;

export const AuthNav = styled.div`
  /* display: flex;
  gap: 25px; */
  /* font-weight: 500;
  font-size: 18px; */
`;
