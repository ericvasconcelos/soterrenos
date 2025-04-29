import { BrowserRouter, Route, Routes } from 'react-router';

import { ScrollController } from './components/ScrollController';
import { Page } from './layouts/Page';
import Advertisements from './pages/advertisements';
import CreateAdvertisement from './pages/createAd';
import HelpDesk from './pages/helpDesk';
import Home from './pages/home';
import Login from './pages/login';
import MyData from './pages/myAccount/myData';
import MyAdvertisements from './pages/myAdvertisements';
import { Actives } from './pages/myAdvertisements/actives';
import { Inactives } from './pages/myAdvertisements/inactives';
import Agencies from './pages/partners/agencies';
import Salesperson from './pages/partners/salesPerson';
import PartnersLandList from './pages/partnersLandList';
import Search from './pages/search';
import SignUp from './pages/signUp';
import TermsAndConditions from './pages/termsAndConditions';
import { ProtectedRoute } from './RrotectedRoute';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollController>
        <Routes>
          <Route path="/" element={<Page />}>
            <Route index element={<Home />} />
            <Route path="/anuncios/:id/:slug" element={<Advertisements />} />

            <Route element={<ProtectedRoute />}>
              <Route path="/minha-conta/meus-dados" element={<MyData />} />

              <Route path="meus-anuncios" element={<MyAdvertisements />}>
                <Route index path="ativos" element={<Actives />} />
                <Route path="inativos" element={<Inactives />} />
              </Route>

              <Route
                path="/cadastro-anuncio/:id"
                element={<CreateAdvertisement />}
              />
            </Route>

            <Route path="/vendas/:state/:city" element={<Search />} />

            <Route path="/entrar" element={<Login />} />
            <Route path="/cadastrar" element={<SignUp />} />

            <Route
              path="/termos-e-condicoes-politica-de-privacidade"
              element={<TermsAndConditions />}
            />

            <Route path="/central-de-ajuda" element={<HelpDesk />} />
            <Route path="/corretores" element={<Salesperson />} />
            <Route path="/imobiliarias" element={<Agencies />} />
            <Route path="/parceiros/:id" element={<PartnersLandList />} />
          </Route>
        </Routes>
      </ScrollController>
    </BrowserRouter>
  );
}
