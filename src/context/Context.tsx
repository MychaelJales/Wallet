import React, { createContext, FC, useState } from 'react';

/* const defaultState = {
  email: ''
}; */

//Tipando os dados que quero para usuário
type UserType = {
  email: string;
  currencies: Array<string>;
  isEditing: boolean;
  expenses: Array<objectType>;
  editingExpense: objectType;
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
        currencyName: ''
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
      currencyName: ''
    }
  },
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setState: () => {} //função de inicialização
};

//criando nosso contexto UserContext
export const CambiosContext = createContext<PropsUserContext>(DEFAULT_VALUE);

export const CambiosProvider: FC = ({ children }) => {
  const [state, setState] = useState(DEFAULT_VALUE.state);
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
