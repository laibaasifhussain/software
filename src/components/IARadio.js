import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function IARadio(props) {
    const { title, options, onChange } = props

    return (
        <FormControl sx={{ m: 1 }}>
            <FormLabel>{title}</FormLabel>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group"
            >
                {options.map((x, i) => (
                    <FormControlLabel value={x.key} control={<Radio />} key={i} label={x.displayName} onChange={onChange} />
                ))}
            </RadioGroup>
        </FormControl>
    );
}

{/* <IARadio title="Gender" options={
    [
        {
            displayName: "User Name",
            key: "name",
        },
        {
            displayName: "User Email",
            key: "email",
        },
    ]} /> */}
