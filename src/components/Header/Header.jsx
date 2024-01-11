import { InnerHeader } from './Header.styled';

export const Header = ({ children }) => {
  return (
    <InnerHeader>
      <h3 style={{ margin: '0', marginRight: 'auto' }}>Phone Book</h3>
      {children}
    </InnerHeader>
  );
};
