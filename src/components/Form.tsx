import React, { useContext, useEffect, useState } from 'react';
import { InputAdornment, TextField } from '@material-ui/core';
import { Box } from '@mui/system';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { CambiosContext } from '../context/Context';
import { getCurrencies } from '../services/currentApi';

export default function Form() {
  const { state, setState } = useContext(CambiosContext);
  const [dataForm, setDataForm] = useState({
    id: 0,
    value: '0',
    description: '',
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'Alimentação'
  });

  interface MinhaInterface {
    target: {
      name: string;
      value: string;
    };
  }

  const { currencies } = state;

  const handleChange = ({ target: { name, value } }: MinhaInterface) => {
    setDataForm({
      ...dataForm,
      [name]: value
    });
  };

  useEffect(() => {
    getCurrencies().then((data) => setState({ ...state, currencies: data }));
  });
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        m: 1
      }}
    >
      <TextField
        label="Valor"
        id="filled-start-adornment"
        type="number"
        name="value"
        variant="filled"
        /* sx={{ m: 1, width: '25ch' }} */
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              {dataForm.currency}
            </InputAdornment>
          )
        }}
      />
      <TextField
        label="Descrição"
        id="filled-hidden-label-normal"
        type="text"
        name="description"
        variant="filled"
        /* sx={{ m: 1, width: '25ch' }} */
        /* InputProps={{
          startAdornment: <InputAdornment position="start">USD</InputAdornment>
        }} */
      />
      <FormControl variant="filled" sx={{ minWidth: 120 }}>
        <InputLabel id="demo-simple-select-filled-label">Moeda</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={dataForm.currency}
          label="Moeda"
          name="currency"
          onChange={handleChange}
          sx={{ height: 56 }}
        >
          {currencies.map((c, i) => (
            <MenuItem key={i} value={c}>
              {c}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
