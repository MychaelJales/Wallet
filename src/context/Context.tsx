import React, { createContext, FC, useEffect, useState } from 'react';

/* const defaultState = {
  email: ''
}; */

//Tipando os dados que quero para usuário
type UserType = {
  email: string;
  currencies: Array<string>;
  isEditing: boolean;
  totalExpenses: number;
  expenses: Array<objectType>;
  editingExpense: objectType;
};

interface LooseObject {
  [key: string]: {
    [key: string]: string;
  };
}

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
  currency: string;
  data: LooseObject;
};

//Tipando as Props do contexto
type PropsUserContext = {
  state: UserType;
  setState: React.Dispatch<React.SetStateAction<UserType>>;
};

//Valor default do contexto
const DEFAULT_VALUE = {
  state: {
    email: '',
    currencies: [''],
    isEditing: false,
    totalExpenses: 0,
    expenses: [
      {
        id: 0,
        description: '',
        tag: '',
        method: '',
        value: '',
        currencyConverted: '',
        exchangeRates: '',
        convertedValue: '',
        currencyName: '',
        currency: '',
        data: {}
      }
    ],
    editingExpense: {
      id: 0,
      description: '',
      tag: '',
      method: '',
      value: '',
      currencyConverted: '',
      exchangeRates: '',
      convertedValue: '',
      currencyName: '',
      currency: '',
      data: {}
    }
  },
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setState: () => {} //função de inicialização
};

//criando nosso contexto UserContext
export const CambiosContext = createContext<PropsUserContext>(DEFAULT_VALUE);

export const CambiosProvider: FC = ({ children }) => {
  const [state, setState] = useState(DEFAULT_VALUE.state);

  useEffect(() => {
    const { expenses, totalExpenses } = state;
    let totalValue = 0;
    expenses.forEach((e) => {
      totalValue += Number(e.convertedValue);
    });
    setState({
      ...state,
      totalExpenses: Number(totalValue.toFixed(2))
    });
  }, [state.expenses]);

  return (
    <CambiosContext.Provider
      value={{
        state,
        setState
      }}
    >
      {children}
    </CambiosContext.Provider>
  );
};
