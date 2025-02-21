import { BrowserRouter, Routes, Route, Outlet } from 'react-router';
import Home from './pages/home';
import Advertisements from './pages/advertisements';
import MyAccountHome from './pages/myAccount/home';
import MyAdvertisements from './pages/myAdvertisements';
import CreateAdvertisement from './pages/myAdvertisements/create';

const Root = () => (
  <>
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
