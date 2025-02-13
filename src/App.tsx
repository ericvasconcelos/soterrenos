import { BrowserRouter, Routes, Route, NavLink, Outlet } from 'react-router';
import Home from './pages/home';
import Advertisements from './pages/advertisements';
import MyAccountHome from './pages/myAccount/home';
import MyAdvertisements from './pages/myAdvertisements';
import CreateAdvertisement from './pages/myAdvertisements/create';

const Root = () => (
  <>
    <menu className="flex align-middle justify-between gap-4 max-w-3xl m-auto mt-6 mb-6">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? 'text-primary font-bold' : 'text-black'
        }
      >
        <img
          src="/logos/logo.png"
          width={399}
          height={94}
          className="block w-[120px] h-auto"
          alt="Logo Só Terrenos"
        />
      </NavLink>

      <div className="flex align-middle justify-end gap-4">
        <NavLink
          to="/meus-anuncios/ativos"
          className={({ isActive }) =>
            isActive ? 'text-primary font-bold' : 'text-black'
          }
        >
          Meus anúncios
        </NavLink>
        <NavLink
          to="/minha-conta"
          className={({ isActive }) =>
            isActive ? 'text-primary font-bold' : 'text-black'
          }
        >
          Minha Conta
        </NavLink>
      </div>
    </menu>
    <Outlet />
  </>
);

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<Home />} />
          <Route path="/anuncios/:title" element={<Advertisements />} />
          <Route path="/minha-conta" element={<MyAccountHome />} />

          <Route path="meus-anuncios">
            <Route index path="ativos" element={<MyAdvertisements />} />
            <Route path="criando" element={<CreateAdvertisement />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
