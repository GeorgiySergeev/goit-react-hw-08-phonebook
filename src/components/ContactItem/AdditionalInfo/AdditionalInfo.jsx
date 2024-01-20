import { useState } from 'react';
import { InfoItem, Span } from './AdditionalInfo.styled';
import { MdAlternateEmail } from 'react-icons/md';
import { MdMapsHomeWork } from 'react-icons/md';
import { BiCategory } from 'react-icons/bi';
import { MdOutlineWorkHistory } from 'react-icons/md';
import TextField from './InfoInput/InfoInput';
import NativeSelectDemo from './Select/Select';
// import { VscSaveAs } from 'react-icons/vsc';

const ContactInfo = () => {
  const [formData, setFormData] = useState({
    email: '',
    sity: '',
    company: '',
    category: '',
  });

  const onInputChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  //   const saveInfo = () => {};

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 3,
        alignItems: 'start',
        paddingTop: 10,
      }}
    >
      {/* <VscSaveAs onClick={saveInfo} /> */}
      <InfoItem>
        <Span>
          <MdAlternateEmail />
          <TextField
            label="Email"
            onChange={onInputChange}
            name="email"
            value={formData.email}
          ></TextField>
        </Span>
      </InfoItem>
      <InfoItem>
        <Span>
          <MdMapsHomeWork />
          <TextField
            label="Sity"
            onChange={onInputChange}
            name="sity"
            value={formData.sity}
          ></TextField>
        </Span>
      </InfoItem>
      <InfoItem>
        <Span>
          <MdOutlineWorkHistory />
          <TextField
            label="Company"
            onChange={onInputChange}
            name="company"
            value={formData.company}
          ></TextField>
        </Span>
      </InfoItem>

      <InfoItem>
        <Span>
          <BiCategory />
          <NativeSelectDemo
            onChange={onInputChange}
            name="category"
          ></NativeSelectDemo>
        </Span>
      </InfoItem>
    </div>
  );
};

export default ContactInfo;
