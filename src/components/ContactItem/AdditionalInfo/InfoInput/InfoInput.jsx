import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function TextFields({ label, onChange, name, value }) {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        onChange={onChange}
        id="standard-basic"
        label={label}
        variant="standard"
        name={name}
        value={value}
      />
    </Box>
  );
}
