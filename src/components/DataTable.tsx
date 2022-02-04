import React, { useContext } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { CambiosContext } from '../context/Context';

/* const rows = [
  {
    id: 1,
    description: '',
    tag: '',
    method: '',
    value: 0,
    currencyConverted: '',
    exchangeRates: '',
    convertedValue: '',
    currencyName: ''
  }
]; */

export default function DataTable() {
  const { state, setState } = useContext(CambiosContext);

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 50 },
    { field: 'description', headerName: 'Descrição', width: 220 },
    { field: 'tag', headerName: 'Tag', width: 120 },
    { field: 'method', headerName: 'Método', width: 105 },
    {
      field: 'value',
      headerName: 'Valor',
      type: 'number',
      width: 80
    },
    {
      field: 'currencyConverted',
      headerName: 'Moeda',
      width: 150
    },
    {
      field: 'exchangeRates',
      headerName: 'Câmbio utilizado',
      width: 150
    },
    {
      field: 'convertedValue',
      headerName: 'Valor convertido',
      width: 130
    },
    {
      field: 'currencyName',
      headerName: 'Moeda de conversão',
      width: 150
    },
    {
      field: 'btns',
      headerName: 'Editar/Excluir',
      width: 130,
      renderCell: (params) => {
        const onClickDeleteBtn = () => {
          console.log(params);
          const { expenses } = state;
          const newExpenses = expenses.filter(
            (item) => Number(item.id) !== Number(params.id)
          );
          setState({
            ...state,
            expenses: newExpenses
          });
        };

        type objectType = {
          id: number;
          description: string;
          tag: string;
          method: string;
          value: string;
          currencyConverted: string;
          exchangeRates: string;
          convertedValue: string;
          currencyName: string;
        };

        const onClick = () => {
          /* const { expenses } = state; */
          /* const editExpenses: objectType | undefined = expenses.find(
            (item) => Number(item.id) === Number(params.id)
          ); */
          setState({
            ...state,
            /* editingExpense: editExpenses, */
            isEditing: true
          });
        };
        return (
          <>
            <IconButton
              color="primary"
              onClick={onClick}
              aria-label="delete"
              size="large"
            >
              <EditIcon fontSize="inherit" />
            </IconButton>
            <IconButton
              color="error"
              onClick={onClickDeleteBtn}
              aria-label="delete"
              size="large"
            >
              <DeleteIcon fontSize="inherit" />
            </IconButton>
          </>
        );
      }
    }
  ];

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={state.expenses}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
}
