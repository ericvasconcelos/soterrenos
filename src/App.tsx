import { BrowserRouter, Outlet, Route, Routes } from 'react-router';

import { AuthProvider } from './auth/AuthProvider';
import Advertisements from './pages/advertisements';
import HelpDesk from './pages/helpDesk';
import Home from './pages/home';
import Login from './pages/login';
import MyAccountHome from './pages/myAccount/home';
import MyAdvertisements from './pages/myAdvertisements';
import CreateAdvertisement from './pages/myAdvertisements/create';
import Salesperson from './pages/salesPerson';
import Search from './pages/search';
import SignUp from './pages/signUp';
import TermsAndConditions from './pages/termsAndConditions';
import { ProtectedRoute } from './RrotectedRoute';

const Root = () => (
  <>
    <Outlet />
  </>
);

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Root />}>
            <Route index element={<Home />} />
            <Route path="/anuncios/:title" element={<Advertisements />} />

            <Route element={<ProtectedRoute />}>
              <Route path="/minha-conta" element={<MyAccountHome />} />

              <Route path="meus-anuncios">
                <Route index path="ativos" element={<MyAdvertisements />} />
                <Route path="criando" element={<CreateAdvertisement />} />
              </Route>
            </Route>

            <Route
              path="/vendas/:state/:city/:neighborhood"
              element={<Search />}
            />

            <Route path="/entrar" element={<Login />} />
            <Route path="/cadastrar" element={<SignUp />} />

            <Route
              path="/termos-e-condicoes-politica-de-privacidade"
              element={<TermsAndConditions />}
            />

            <Route path="/central-de-ajuda" element={<HelpDesk />} />
            <Route path="/corretores" element={<Salesperson />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
