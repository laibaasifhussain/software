import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectAutoWidth(props) {
  const { minWidth, label, searchList, fullWidth, selectedval } = props

  const [select, setSelect] = React.useState('');

  const handleChange = (event) => {
    setSelect(event.target.value);
    selectedval(event.target.value)
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: { minWidth } }} fullWidth={fullWidth}>
        <InputLabel id="demo-simple-select-autowidth-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          onChange={handleChange}
          value={select}
                    autoWidth
          label={label}
          
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {searchList.map((x, i) => (
            <MenuItem value={x.key} key={x.key}  >
              {x.displayName}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}


// for pass component

//   < IASelect label = "search" minWidth = '100px'
// searchList = {
//   [
//   {
//     displayName: "User Name",
//     key: "name",
//   },
//   {
//     displayName: "User Email",
//     key: "email",
//   },
//           ]}
//   />