import React from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const DropDown = ({ value, handleChange, label, name, option, disabled, defaultValue }) => {
    return (
        <div style={{ width: "100%", padding: "16px" }}>
            <FormControl fullWidth>
                <InputLabel>{label}</InputLabel>
                <Select
                    name={name}
                    value={value}
                    defaultValue={value}
                    label={label}
                    onChange={handleChange}
                    disabled={disabled}
                >
                    {option?.map((item) => {
                        return <MenuItem value={item}>{item}</MenuItem>
                    })}
                </Select>
            </FormControl>
        </div>
    )
}

export default DropDown
