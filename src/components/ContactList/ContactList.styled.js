import styled from '@emotion/styled';

export const ListContainer = styled.div`
  height: 60%;
`;
export const List = styled.ul`
  /* width: 75%; */
  /* min-height: 700px; */
  text-align: center;
  /* margin-top: 25px; */
  border: 1px solid rgba(9, 19, 17, 0.1);
  border-radius: 10px;

  -webkit-box-shadow: inset 0px 0px 17px 9px rgba(0, 0, 0, 0.08);
  -moz-box-shadow: inset 0px 0px 17px 9px rgba(0, 0, 0, 0.08);
  box-shadow: inset 0px 0px 17px 9px rgba(0, 0, 0, 0.08);
  padding: 25px 10px;
  margin-bottom: 30px;
`;

export const ListItem = styled.li`
  font-size: 18px;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  gap: 25px;
`;

export const HeadText = styled.h2`
  color: var(--accsent-color);
`;

export const ListHeader = styled.div`
  /* width: 100%; */
  font-size: 22px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  border: 1px solid green;
  border-radius: 8px;
  margin-bottom: 25px;
  padding: 5px 80px 5px 10px;
`;

// export const Table = styled.table`
//   width: 75%;
//   border-collapse: collapse;
//   margin: 20px; /* Пример отступа вокруг таблицы */
// `;

// export const TableHeader = styled.thead`
//   background-color: #f2f2f2; /* Пример цвета фона заголовка */
// `;

// export const TableBody = styled.tbody``;

// export const TableRow = styled.tr`
//   &:nth-of-type(even) {
//     /* Пример чередования цветов строк */
//   }
// `;

// export const TableCell = styled.td`
//   padding: 8px; /* Пример внутренних отступов в ячейках */
//   border: 1px solid #ddd; /* Пример границы ячеек */
// `;

/* Дополнительные стили для ListItem могут быть добавлены в зависимости от вашего дизайна */
