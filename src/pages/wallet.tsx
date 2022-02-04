import React, { useContext } from 'react';
import Header from '../components/Header';
import Form from '../components/Form';
import DataTable from '../components/DataTable';
import { CambiosContext } from '../context/Context';
import EditingForm from '../components/EditingForm';

export default function Wallet() {
  const { state } = useContext(CambiosContext);
  return (
    <>
      <Header />
      {state.isEditing ? <EditingForm /> : <Form />}
      <DataTable />
    </>
  );
}
