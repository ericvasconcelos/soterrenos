import { Link } from 'react-router';

import { Container, Icon, Text } from '@/components';

export const Footer = () => (
  <footer className="bg-primary-700">
    <Container>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 py-12">
        <div>
          <Text color="light" size="lg" weight="bold" className="mb-6">
            Mais informações
          </Text>

          <Link
            className="block text-gray-200 text-sm font-medium mb-3 outline-black"
            to="/termos-e-condicoes-politica-de-privacidade"
          >
            Termos e Condições
          </Link>
          <Link
            className="block text-gray-200 text-sm font-medium mb-3 outline-black"
            to="/termos-e-condicoes-politica-de-privacidade"
          >
            Política de Privacidade
          </Link>
          <Link
            className="block text-gray-200 text-sm font-medium mb-3 outline-black"
            to="/central-de-ajuda"
          >
            Central de Ajuda
          </Link>
        </div>
        <div>
          <Text color="light" size="lg" weight="bold" className="mb-6">
            Anunciantes
          </Text>

          <Link
            className="block text-gray-200 text-sm font-medium mb-3 outline-black"
            to="/corretores"
          >
            Corretores Parceiros
          </Link>
          <Link
            className="block text-gray-200 text-sm font-medium mb-3 outline-black"
            to="/imobiliarias"
          >
            Imobiliárias Parceiras
          </Link>
        </div>
        <div>
          <Text color="light" size="lg" weight="bold" className="mb-6">
            Redes Sociais
          </Text>

          <nav className="flex gap-4">
            <a
              href="https://www.facebook.com/soterrenos"
              target="_blank"
              className="outline-black"
              aria-label="Facebook"
            >
              <Icon name="facebook" color="light" size={28} />
            </a>

            <a
              href="https://www.instagram.com/soterrenos"
              target="_blank"
              className="outline-black"
              aria-label="Instagram"
            >
              <Icon name="instagram" color="light" size={28} />
            </a>

            <a
              href="https://www.youtube.com/@SoTerrenosAnuncios"
              target="_blank"
              className="outline-black"
              aria-label="Youtube"
            >
              <Icon name="youtube" color="light" size={28} />
            </a>
          </nav>
        </div>
      </div>
    </Container>

    <div className="bg-gray-100 py-4">
      <Text size="sm" align="center">
        © Copyright {new Date().getFullYear()} soterrenos.net - CNPJ:
        48.808.525/0001-84
      </Text>
    </div>
  </footer>
);
