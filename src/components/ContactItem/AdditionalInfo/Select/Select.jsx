import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

export default function NativeSelectDemo({ name, onChange }) {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          Category
        </InputLabel>
        <NativeSelect
          onChange={onChange}
          name={name}
          defaultValue={30}
          inputProps={{
            name: 'category',
            id: 'uncontrolled-native',
          }}
        >
          <option value="family">Family</option>
          <option value="friend">Friends</option>
          <option value="other">Other</option>
          <option value="colleagues">Colleagues</option>
        </NativeSelect>
      </FormControl>
    </Box>
  );
}
