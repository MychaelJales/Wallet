import { useContext } from 'react';
import { CambiosContext } from '../context/Context';

export default function Home() {
  const { dark } = useContext(CambiosContext);
  return (
    <main>
      <h1>Teste</h1>
      <h1>{dark}</h1>
    </main>
  );
}
