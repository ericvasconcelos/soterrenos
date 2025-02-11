import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { useZipCode } from './hooks/useZipCode';

function App() {
  const [count, setCount] = useState(0);
  const [zipCode, setZipCode] = useState('');

  const { data, isLoading, isError, error } = useZipCode(zipCode);

  return (
    <>
      <div className="flex gap-2 justify-center">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <div className="w-full max-w-sm min-w-[200px] mt-4">
        <input
          className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
          placeholder="CEP"
          type="text"
          name="zipCode"
          onChange={(e) => setZipCode(e.currentTarget.value)}
          maxLength={8}
        />

        {isLoading && <p>Carregando...</p>}
        {isError && <p>Erro: {error?.message}</p>}
        {data && (
          <div>
            <h2>Informações do CEP:</h2>
            <p>CEP: {data.cep}</p>
            <p>Logradouro: {data.logradouro}</p>
            <p>Bairro: {data.bairro}</p>
            <p>Cidade: {data.localidade}</p>
            <p>Estado: {data.uf}</p>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
