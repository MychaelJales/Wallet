import React, { useContext, useEffect, useState } from 'react';
import { Box } from '@mui/system';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { CambiosContext } from '../context/Context';
import { getCurrencies, getExchangeRates } from '../services/currentApi';
import { Button, InputAdornment, TextField } from '@mui/material';

export default function Form() {
  const { state, setState } = useContext(CambiosContext);
  const [dataForm, setDataForm] = useState({
    id: 0,
    value: '0',
    description: '',
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'Alimentação',
    currencyConverted: '',
    exchangeRates: '',
    convertedValue: '0',
    currencyName: 'Real',
    data: {}
  });
  const [idForm, setIdForm] = useState(0);

  const methods = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
  const tags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

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

  const onClickBtnAdd = async () => {
    const data = await getExchangeRates(dataForm.currency);
    const { name, ask, json } = data;
    const newValue = Number(ask * Number(dataForm.value)).toFixed(2);
    AttDataForm({ newValue, name, ask, json });
  };
  type props = {
    newValue: string;
    name: string;
    ask: string;
    json: object;
  };

  const AttDataForm = ({ newValue, name, ask, json }: props) => {
    /* console.log({ newValue, name, ask, json }); */
    setDataForm({
      ...dataForm,
      currencyConverted: name,
      exchangeRates: ask,
      convertedValue: String(newValue),
      data: json,
      id: idForm
    });
    return AttState();
  };

  const AttState = () => {
    setIdForm(idForm + 1);
  };

  useEffect(() => {
    if (state.expenses[0].tag) {
      setState({ ...state, expenses: [...state.expenses, dataForm] });
    } else {
      setState({ ...state, expenses: [dataForm] });
    }
  }, [idForm]);

  useEffect(() => {
    getCurrencies().then((data) => setState({ ...state, currencies: data }));
  }, []);
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: '10px',
        marginBottom: '10px'
      }}
    >
      <TextField
        label="Valor"
        id="filled-start-adornment"
        type="number"
        name="value"
        variant="filled"
        value={dataForm.value}
        onChange={handleChange}
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
        value={dataForm.description}
        onChange={handleChange}
        sx={{
          flexGrow: 1
        }}
      />
      <FormControl variant="filled">
        <InputLabel id="currency">Moeda</InputLabel>
        <Select
          labelId="currency"
          id="currency"
          value={dataForm.currency}
          label="Moeda"
          name="currency"
          onChange={handleChange}
        >
          {currencies.map((c, i) => (
            <MenuItem key={i} value={c}>
              {c}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl variant="filled">
        <InputLabel id="method">Método</InputLabel>
        <Select
          labelId="method"
          id="method"
          value={dataForm.method}
          label="method"
          name="method"
          onChange={handleChange}
        >
          {methods.map((c, i) => (
            <MenuItem key={i} value={c}>
              {c}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl variant="filled">
        <InputLabel id="tag">Tag</InputLabel>
        <Select
          labelId="tag"
          id="tag"
          value={dataForm.tag}
          label="tag"
          name="tag"
          onChange={handleChange}
        >
          {tags.map((c, i) => (
            <MenuItem key={i} value={c}>
              {c}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button
        variant="outlined"
        color="primary"
        size="small"
        onClick={onClickBtnAdd}
      >
        Adicionar Despesa
      </Button>
    </Box>
  );
}
