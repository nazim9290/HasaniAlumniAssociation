import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
    },
  },
};

const Dakhilyears = Array.from({ length: new Date().getFullYear() - 1999 + 1 }, (_, i) => 1999 + i);

export default function MultipleSelectCheckmarks({selectedValue,setSelectedValue}) {

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    
  };

  return (
    <div>
      <FormControl style={{width:"50%"}}>
        <InputLabel id="demo-multiple-checkbox-label">Filter By Year</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={selectedValue}
          onChange={handleChange}
          input={<OutlinedInput label="year search" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {Dakhilyears.map((year) => (
            <MenuItem key={year} value={year}>
              <Checkbox checked={selectedValue.includes(year)} />
              <ListItemText primary={year} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
