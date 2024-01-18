import { InnerHeader } from './ContactHeader.styled';

export const Header = ({ text, children }) => {
  return (
    <InnerHeader>
      <h5 style={{ margin: '0', marginRight: 'auto' }}>{text}</h5>

      {children}
    </InnerHeader>
  );
};
