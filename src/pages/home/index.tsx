import { useState } from 'react';
import reactLogo from '../../assets/react.svg';
import viteLogo from '/vite.svg';
import { useZipCode } from '../../hooks/useZipCode';
import { Button, Icon, Text, Tooltip, Modal } from '@/components';
import { iconNames } from '@/components/Icon/iconNames';
import { IconNames } from '@/components/Icon/types';
import './styles.css';

function App() {
  const [count, setCount] = useState(0);
  const [zipCode, setZipCode] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data, isLoading, isError, error } = useZipCode(zipCode);

  return (
    <div id="home">
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

      <div>
        <i className="fa-solid fa-user"></i>

        <i className="fa-brands fa-github-square"></i>
      </div>

      <div className="w-full max-w-sm min-w-[200px] mt-4 mb-10">
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

      <div className="p-8">
        <Tooltip content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, ipsum ducimus saepe dignissimos dolore esse reprehenderit ipsa aperiam fugiat recusandae dolorum sed nobis, dolorem aut voluptas tenetur. Adipisci, deserunt saepe?">
          <Text>Testando o tooltip</Text>
        </Tooltip>
      </div>

      <div className="flex gap-6 mb-6">
        <Button size="large" onClick={() => setIsModalOpen(true)}>
          Open a super modal
        </Button>
      </div>

      <div className="flex gap-6 mb-6">
        <Button size="small">Small</Button>
        <Button variant="secondary" size="small" icon="map">
          Default
        </Button>
        <Button variant="tertiary" size="small">
          Large
        </Button>
      </div>

      <div className="flex gap-6 mb-6">
        <Button variant="primary" color="primary">
          Primary
        </Button>
        <Button variant="secondary" color="primary">
          Secondary
        </Button>
        <Button variant="tertiary" color="primary">
          Tertiary
        </Button>
      </div>

      <div className="flex gap-6 mb-6">
        <Button size="large">Small</Button>
        <Button variant="secondary" size="large">
          Default
        </Button>
        <Button variant="tertiary" size="large">
          Large
        </Button>
      </div>

      <div className="flex gap-6 mb-6">
        <Button variant="primary" color="danger">
          Primary
        </Button>
        <Button variant="secondary" color="danger">
          Secondary
        </Button>
        <Button variant="tertiary" color="danger">
          Tertiary
        </Button>
      </div>

      <div className="flex gap-6 mb-6">
        <Button variant="primary" color="warning">
          Primary
        </Button>
        <Button variant="secondary" color="warning">
          Secondary
        </Button>
        <Button variant="tertiary" color="warning">
          Tertiary
        </Button>
      </div>

      <div className="flex gap-6 mb-6">
        <Button color="danger" size="small" isLoading>
          Carregando...
        </Button>
        <Button color="danger" isLoading>
          Carregando...
        </Button>
        <Button color="danger" size="large" isLoading>
          Carregando...
        </Button>
      </div>

      <div className="flex gap-6 mb-6">
        <Button variant="secondary" color="danger" size="small" isLoading>
          Carregando...
        </Button>
        <Button variant="secondary" color="danger" isLoading>
          Carregando...
        </Button>
        <Button variant="secondary" color="danger" size="large" isLoading>
          Carregando...
        </Button>
      </div>

      <div className="flex gap-6 mb-6">
        <Button variant="tertiary" color="danger" size="small" isLoading>
          Carregando...
        </Button>
        <Button variant="tertiary" color="danger" isLoading>
          Carregando...
        </Button>
        <Button variant="tertiary" color="danger" size="large" isLoading>
          Carregando...
        </Button>
      </div>

      <div className="flex gap-6 mb-10">
        <Button disabled>Desabilitado</Button>

        <Button variant="secondary" disabled>
          Desabilitado
        </Button>

        <Button disabled>Desabilitado</Button>
      </div>

      <div className="flex flex-wrap gap-6">
        {iconNames.map((name: IconNames) => (
          <Icon key={name} name={name} color="black" />
        ))}
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h1 className="text-[20px] leading-6 tracking-[0.01em] md:text-center mb-6">
          Modal Title
        </h1>

        <p className="text-[20px] font-semibold leading-6 tracking-[0.01em] md:text-center mb-8">
          Hello, I'm a flexible modal to use whatever you want
        </p>
      </Modal>
    </div>
  );
}

export default App;
